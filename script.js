// Typewriter Effect for Header
document.addEventListener('DOMContentLoaded', () => {
    const typewriter = document.querySelector('.typewriter');
    if (!typewriter) {
        console.error('Typewriter element not found');
        return; // Exit if no typewriter element exists
    }

    const words = JSON.parse(typewriter.getAttribute('data-words'));
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    let isDeleting = false;

    

    function type() {
        if (wordIndex >= words.length) wordIndex = 0; // Loop back to start

        currentWord = words[wordIndex];

        if (isDeleting) {
            typewriter.textContent = currentWord.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                wordIndex++;
                setTimeout(type, 500); // Pause before typing next word
                return;
            }
        } else {
            typewriter.textContent = currentWord.substring(0, charIndex++);
            if (charIndex > currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1000); // Pause before deleting
                return;
            }
        }

        setTimeout(type, isDeleting ? 100 : 200); // Faster delete, slower type
    }

    type(); // Start the typewriter effect
});