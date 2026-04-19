document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.accordion__header');

    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const accordionItem = button.closest('.accordion__item');
            accordionItem.classList.toggle('active');
        })
    })
});
