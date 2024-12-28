document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const modal = document.getElementById("modal");
    const closeModalButton = document.getElementById("close-modal");

    // Функция для показа модального окна
    function showModal() {
        modal.style.display = "block";
    }

    // Функция для скрытия модального окна
    function closeModal() {
        modal.style.display = "none";
    }

    // Закрытие модального окна при клике на кнопку закрытия
    closeModalButton.addEventListener("click", closeModal);

    // Закрытие модального окна при клике вне его содержимого
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Обработка отправки формы
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

        // Показать модальное окно
        showModal();

        // Очистить форму
        form.reset();
    });
});
