// script.js

document.addEventListener('DOMContentLoaded', function () {
    const accordionLabels = document.querySelectorAll('.accordion li label');

    accordionLabels.forEach(label => {
        label.addEventListener('click', function () {
            this.classList.toggle('active');

            const radioInput = this.previousElementSibling;
            const content = this.nextElementSibling;

            content.style.maxHeight = radioInput.checked ? `${content.scrollHeight}px` : '0';
        });
    });
});
