// Simple Fade-in Entrance Effect on Page Load
document.addEventListener("DOMContentLoaded", () => {
    // Find all structural tags containing the '.hidden' initialization class
    const animatedElements = document.querySelectorAll('.hidden');
    
    // Add a slight structural timeout delay for aesthetic fluid movement
    setTimeout(() => {
        animatedElements.forEach(element => {
            element.classList.add('show');
        });
    }, 150);
});