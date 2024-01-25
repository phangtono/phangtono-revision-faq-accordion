document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.card-faq__ques-list-item');

    faqItems.forEach(function (item) {
        item.addEventListener('click', function () {
            this.classList.toggle('show');

        });
    });
});
