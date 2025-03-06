// Intersection Observer to detect when elements are in viewport
document.addEventListener('DOMContentLoaded', function() {
    // Select all foreground beer images
    const beerImages = document.querySelectorAll('.foreground-img');
    
    // Create options for the Intersection Observer
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.75 // Trigger when 75% of the element is visible
    };
    
    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add the floating animation class
                entry.target.classList.add('float-animation');
                
                // Stop observing the element after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Start observing each beer image
    beerImages.forEach(image => {
        // Set initial position (will be animated from this position)
        image.style.transform = 'translateY(0)';
        image.style.transition = 'transform 0s';
        
        // Start observing
        observer.observe(image);
    });
}); 