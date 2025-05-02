const thumbnails = document.querySelectorAll('.thumbnail');
const principal = document.querySelector('#principal');
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        principal.src = thumbnail.src;
    });
});
