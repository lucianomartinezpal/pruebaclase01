function toggleImage() {
    const image = document.getElementById('main-image');
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
}