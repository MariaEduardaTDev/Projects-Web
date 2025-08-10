 const porscheImages = document.querySelectorAll('.porsches img');
    const toggleImages = document.querySelectorAll('.porsche-toggle img');
    let currentIndex = 0;

    toggleImages[currentIndex].classList.add('active');

    porscheImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            const activeImg = toggleImages[currentIndex];

            // Fade out
            activeImg.style.opacity = 0;

            // After fade out finish

            setTimeout(() => {
                activeImg.src = porscheImages[index].src;

                // Fade in
                activeImg.style.opacity = 1;
            }, 300);

            toggleImages.forEach(toggleImg => toggleImg.classList.remove('active'));
            toggleImages[currentIndex].classList.add('active');
            toggleImages[currentIndex].src = porscheImages[index].src;
            currentIndex = (currentIndex + 1) % toggleImages.length;
        });
    });

// Generate random stars
function createStars(){
    const starsContainer = document.getElementById('stars');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    for (let i = 0; i < 100; i++){
        const star = document.createElement('div')
        star.className = 'star';
        star.style.left = `${Math.random() * windowWidth}px`;
        star.style.top = `${Math.random() * windowHeight}px`;
        starsContainer.appendChild(star);
    }
}

// Call the createStars function when the page loads
window.addEventListener('load', createStars);
