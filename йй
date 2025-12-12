document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    let token = '6852234273:AAGtNELD5wP9Kw-SOx_9l8uPKyS9fPj8aCk';  // Укажите сюда токен вашего Telegram бота
    let chatId = '720338217';  // Укажите сюда ваш Chat ID
    let text = `Ім'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`;
    
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
    
    fetch(url)
        .then(response => {
            if (response.ok) {
                alert('Ваше повідомлення успішно надіслано!');
                document.getElementById('contact-form').reset();
            } else {
                alert('Сталася помилка при надсиланні повідомлення.');
            }
        })
        .catch(error => {
            console.error('Помилка:', error);
            alert('Сталася помилка при надсиланні повідомлення.');
        });
});
