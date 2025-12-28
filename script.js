// Product hover blur effect
document.addEventListener('DOMContentLoaded', () => {
    const productHoverTargets = document.querySelectorAll('.product-hover-target');
    const productsGrid = document.getElementById('productsGrid');
    const gridWrapper = document.querySelector('.products-grid-wrapper');
    const allCells = document.querySelectorAll('.grid-cell');
    
    productHoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            gridWrapper.classList.add('blur-active');
            
            // Blur all cells except the hovered one
            allCells.forEach(cell => {
                if (cell !== target) {
                    cell.style.filter = 'blur(3px)';
                }
            });
            
            // Keep the hovered target clear
            target.style.filter = 'blur(0)';
            target.style.position = 'relative';
            target.style.zIndex = '100';
        });
        
        target.addEventListener('mouseleave', () => {
            gridWrapper.classList.remove('blur-active');
            
            // Remove blur from all cells
            allCells.forEach(cell => {
                cell.style.filter = 'none';
            });
            
            target.style.zIndex = '';
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .product-card, .step-card, .news-card, .stat-box, .tech-feature');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Thank you for subscribing!');
            newsletterForm.querySelector('input[type="email"]').value = '';
        }
    });
}

// Add click handlers for buttons
document.querySelectorAll('.btn-primary, .btn-register').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Button clicked:', btn.textContent);
        // Add your custom logic here
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Mobile menu toggle (for future implementation)
const createMobileMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    const navActions = document.querySelector('.nav-actions');
    
    if (window.innerWidth <= 768) {
        // Mobile menu logic can be added here
        console.log('Mobile view detected');
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

// Stats counter animation
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Initialize counter animations when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            // Add counter animation logic here if needed
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-box').forEach(stat => {
    statsObserver.observe(stat);
});

console.log('ApexTradePro website loaded successfully!');
