/* Modern Animations - Giovanni Franco */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Entrance Animations for Hero Section
    const heroElements = document.querySelectorAll('.content-wrapper > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `fadeInUp 1s ease-out ${index * 0.2}s forwards`;
    });

    // 2. Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.page-text, .animate-on-scroll');
    scrollElements.forEach(el => {
        el.classList.add('animate-on-scroll'); // Ensure class handles initial state
        observer.observe(el);
    });

    // 3. Dynamic Typing Effect for "Giovanni"
    const nameElement = document.querySelector('h1 span.highlight'); 
    // This assumes we'll wrap "Giovanni" in a span.highlight in HTML
    
    // 4. Hover effect tilt for cards (Optional polish)
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
});
