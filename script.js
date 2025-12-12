document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Заповніть всі поля');
            return;
        }

        const token = '6852234273:AAGtNELD5wP9Kw-SOx_9l8uPKyS9fPj8aCk';
        const chatId = '720338217';

        const text =
            `Ім'я: ${name}\n` +
            `Email: ${email}\n` +
            `Повідомлення:\n${message}`;

        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.ok) {
                alert('Повідомлення надіслано');
                form.reset();
            } else {
                alert('Помилка Telegram API');
            }
        })
        .catch(() => {
            alert('Помилка з’єднання');
        });
    });

});
