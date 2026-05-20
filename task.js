const btns = document.querySelectorAll('.pokazat-perevod');
    btns.forEach(btn => {
        const translation = btn.parentElement.nextElementSibling;
        translation.style.display = 'none';
        btn.addEventListener('click', () => {
            if (translation.style.display === 'none') {
                translation.style.display = 'block';
                btn.textContent = 'Скрыть перевод';
            } else {
                translation.style.display = 'none';
                btn.textContent = 'Показать перевод';
            }
        });
    });