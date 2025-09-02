// TechFlow Solutions - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality when DOM is loaded
    initializeNavigation();
    initializeSmoothScrolling();
    initializeFormValidation();
    initializeScrollAnimations();
    initializeParallaxEffects();
});

/**
 * Navigation functionality
 */
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });
    
    // Mobile menu close on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
}

/**
 * Smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll, .nav-link[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80; // Account for fixed navbar
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Form validation and submission
 */
function initializeFormValidation() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (!contactForm) return;
    
    // Custom validation messages
    const validationMessages = {
        firstName: 'Voornaam is verplicht',
        lastName: 'Achternaam is verplicht',
        email: 'Een geldig e-mailadres is verplicht',
        service: 'Selecteer alstublieft een service',
        message: 'Een bericht is verplicht',
        privacy: 'U moet akkoord gaan met het privacybeleid'
    };
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                validateField(this);
            }
        });
    });
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        let isFormValid = true;
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });
        
        if (isFormValid) {
            submitForm();
        } else {
            // Scroll to first invalid field
            const firstInvalidField = contactForm.querySelector('.is-invalid');
            if (firstInvalidField) {
                firstInvalidField.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
                firstInvalidField.focus();
            }
        }
    });
    
    /**
     * Validate individual form field
     */
    function validateField(field) {
        const fieldValue = field.value.trim();
        const fieldType = field.type;
        const fieldId = field.id;
        let isValid = true;
        
        // Remove existing validation classes
        field.classList.remove('is-valid', 'is-invalid');
        
        // Required field validation
        if (field.hasAttribute('required') && !fieldValue) {
            isValid = false;
        }
        
        // Email validation
        if (fieldType === 'email' && fieldValue) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(fieldValue)) {
                isValid = false;
            }
        }
        
        // Checkbox validation
        if (fieldType === 'checkbox' && field.hasAttribute('required')) {
            if (!field.checked) {
                isValid = false;
            }
        }
        
        // Apply validation styles
        if (isValid) {
            field.classList.add('is-valid');
        } else {
            field.classList.add('is-invalid');
            
            // Update custom validation message
            const feedback = field.parentNode.querySelector('.invalid-feedback');
            if (feedback && validationMessages[fieldId]) {
                feedback.textContent = validationMessages[fieldId];
            }
        }
        
        return isValid;
    }
    
    /**
     * Submit form (simulate submission)
     */
    function submitForm() {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Versturen...';
        
        // Simulate form submission delay
        setTimeout(() => {
            // Hide form and show success message
            contactForm.style.display = 'none';
            successMessage.classList.remove('d-none');
            
            // Scroll to success message
            successMessage.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            
            // Reset form after delay
            setTimeout(() => {
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                
                // Remove validation classes
                formInputs.forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                });
                
                // Reset button
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
                
                // Show form again after 5 seconds
                setTimeout(() => {
                    contactForm.style.display = 'block';
                    successMessage.classList.add('d-none');
                }, 5000);
                
            }, 1000);
            
        }, 2000);
    }
}

/**
 * Scroll animations for elements
 */
function initializeScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .stat-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .stat-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .service-card.animate-in, .stat-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .service-card:nth-child(2).animate-in {
            transition-delay: 0.2s;
        }
        
        .stat-item:nth-child(2).animate-in {
            transition-delay: 0.1s;
        }
        
        .stat-item:nth-child(3).animate-in {
            transition-delay: 0.2s;
        }
        
        .stat-item:nth-child(4).animate-in {
            transition-delay: 0.3s;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Parallax and interactive effects
 */
function initializeParallaxEffects() {
    // Hero section parallax effect
    const heroSection = document.querySelector('.hero-section');
    const heroIcon = document.querySelector('.hero-icon');
    
    if (heroSection && heroIcon) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < heroSection.offsetHeight) {
                heroIcon.style.transform = `translateY(${rate}px)`;
            }
        });
    }
    
    // Mouse movement effect for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after page load
        setTimeout(typeWriter, 1000);
    }
}

/**
 * Utility function to throttle scroll events
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Add keyboard navigation support
 */
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const navbarCollapse = document.querySelector('.navbar-collapse.show');
        if (navbarCollapse) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    }
});

/**
 * Performance optimization: Lazy load heavy elements
 */
window.addEventListener('load', function() {
    // Remove loading states
    document.body.classList.remove('loading');
    
    // Initialize any heavy libraries here
    console.log('TechFlow Solutions website loaded successfully!');
});

/**
 * Error handling for missing elements
 */
window.addEventListener('error', function(e) {
    console.warn('Non-critical error:', e.message);
});
