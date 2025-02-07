document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const time = document.getElementById('time').value;

    const formData = {
        name: name,
        phone: phone,
        time: time
    };

    // Отправка данных на сервер (используем Fetch API)
    fetch('sendAppointment.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Заявка отправлена успешно!');
        } else {
            alert('Произошла ошибка при отправке заявки.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке заявки.');
    });
});
