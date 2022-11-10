document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('select');
    console.log(element);
    const choices = new Choices(element, {
        searchEnabled: false,
        position: 'bottom',
        itemSelectText: ''
    });
})