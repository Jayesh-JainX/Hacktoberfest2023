const banners = document.querySelectorAll('.banner');

banners.forEach(banner => {
    banner.addEventListener('click', () => {
        // You can add JavaScript functionality here, e.g., open a new page or show more details about the banner.
        alert(`You clicked on the ${banner.alt} banner.`);
    });
});
