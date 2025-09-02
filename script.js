// TechFlow Solutions - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality when DOM is loaded
    initializeNavigation();
    initializeSmoothScrolling();
    initializeFormValidation();
    initializeScrollAnimations();
    initializeParallaxEffects();
    initializeProjectBuilder();
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
 * Project Builder functionality
 */
function initializeProjectBuilder() {
    const projectBuilder = document.getElementById('projectBuilder');
    if (!projectBuilder) return;
    
    // State management
    let currentStep = 'step1';
    let selections = {
        packageType: '',
        domainHosting: '',
        services: [],
        modules: []
    };
    
    // Step navigation
    function showStep(stepId) {
        // Hide all steps
        document.querySelectorAll('.builder-step').forEach(step => {
            step.classList.remove('active');
        });
        
        // Show current step
        document.getElementById(stepId).classList.add('active');
        currentStep = stepId;
        
        // Update navigation buttons
        updateNavigation();
        
        // Scroll to project builder
        document.getElementById('project-builder').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
    
    function updateNavigation() {
        const prevBtn = document.getElementById('prevStep');
        const stepNumber = parseInt(currentStep.replace(/[^0-9]/g, '')) || 0;
        
        if (stepNumber <= 1 || currentStep === 'finalStep') {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }
    }
    
    // Handle option cards
    projectBuilder.addEventListener('click', function(e) {
        const optionCard = e.target.closest('.option-card');
        if (!optionCard) return;
        
        const isMultiSelect = optionCard.classList.contains('multi');
        const value = optionCard.dataset.value;
        const nextStep = optionCard.dataset.next;
        
        if (isMultiSelect) {
            // Handle multi-select options
            handleMultiSelect(optionCard, value);
        } else {
            // Handle single select options
            handleSingleSelect(optionCard, value, nextStep);
        }
    });
    
    function handleSingleSelect(card, value, nextStep) {
        // Remove active class from siblings
        card.parentNode.querySelectorAll('.option-card').forEach(sibling => {
            sibling.classList.remove('active');
        });
        
        // Add active class to selected card
        card.classList.add('active');
        
        // Store selection
        if (currentStep === 'step1') {
            selections.packageType = value;
        } else if (currentStep === 'step2a') {
            selections.domainHosting = value;
        }
        
        // Move to next step after delay
        setTimeout(() => {
            if (nextStep) {
                showStep(nextStep);
            }
        }, 500);
    }
    
    function handleMultiSelect(card, value) {
        card.classList.toggle('active');
        
        if (currentStep === 'step2b') {
            if (card.classList.contains('active')) {
                if (!selections.services.includes(value)) {
                    selections.services.push(value);
                }
            } else {
                selections.services = selections.services.filter(s => s !== value);
            }
            
            // Enable/disable continue button
            const continueBtn = document.getElementById('continueStep2b');
            continueBtn.disabled = selections.services.length === 0;
            
        } else if (currentStep === 'step4') {
            // Handle "none" selection
            if (value === 'none') {
                if (card.classList.contains('active')) {
                    // Deselect all other modules
                    card.parentNode.querySelectorAll('.option-card').forEach(sibling => {
                        if (sibling !== card) {
                            sibling.classList.remove('active');
                        }
                    });
                    selections.modules = ['none'];
                } else {
                    selections.modules = [];
                }
            } else {
                // Deselect "none" if other module is selected
                const noneCard = card.parentNode.querySelector('[data-value="none"]');
                if (noneCard && noneCard.classList.contains('active')) {
                    noneCard.classList.remove('active');
                    selections.modules = selections.modules.filter(m => m !== 'none');
                }
                
                if (card.classList.contains('active')) {
                    if (!selections.modules.includes(value)) {
                        selections.modules.push(value);
                    }
                } else {
                    selections.modules = selections.modules.filter(m => m !== value);
                }
            }
        }
    }
    
    // Continue buttons
    document.getElementById('continueStep2b').addEventListener('click', function() {
        showStep('step4');
    });
    
    document.getElementById('continueStep4').addEventListener('click', function() {
        generateSummary();
        showStep('step5');
    });
    
    // Start project builder button
    const startBuilderBtn = document.getElementById('startProjectBuilder');
    if (startBuilderBtn) {
        startBuilderBtn.addEventListener('click', function() {
            document.getElementById('project-builder').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            // Small delay to ensure scroll completes
            setTimeout(() => {
                showStep('step1');
            }, 500);
        });
    }

    // Final buttons
    document.getElementById('startProject').addEventListener('click', function() {
        showFinalMessage('success');
    });
    
    document.getElementById('saveForLater').addEventListener('click', function() {
        showFinalMessage('saved');
    });
    
    document.getElementById('restartBuilder').addEventListener('click', function() {
        restartBuilder();
    });
    
    // Previous button
    document.getElementById('prevStep').addEventListener('click', function() {
        goToPreviousStep();
    });
    
    function generateSummary() {
        const summaryContent = document.getElementById('summaryContent');
        let html = '<div class="summary-items">';
        
        // Package type
        if (selections.packageType === 'complete-package') {
            html += '<div class="summary-item"><i class="fas fa-box-open text-primary"></i> <strong>Compleet pakket</strong></div>';
            
            if (selections.domainHosting === 'domain-hosting-yes') {
                html += '<div class="summary-item"><i class="fas fa-check-circle text-success"></i> Alleen design (domein + hosting aanwezig)</div>';
            } else {
                html += '<div class="summary-item"><i class="fas fa-tools text-info"></i> Alles regelen (domein + hosting + design)</div>';
            }
        } else {
            html += '<div class="summary-item"><i class="fas fa-puzzle-piece text-primary"></i> <strong>Losse diensten:</strong></div>';
            
            const serviceLabels = {
                'webdesign': 'Webdesign',
                'hosting': 'Hosting',
                'domain': 'Domeinregistratie'
            };
            
            selections.services.forEach(service => {
                html += `<div class="summary-item"><i class="fas fa-check text-success"></i> ${serviceLabels[service]}</div>`;
            });
        }
        
        // Modules
        if (selections.modules.length > 0 && !selections.modules.includes('none')) {
            html += '<div class="summary-item mt-3"><strong>Extra modules:</strong></div>';
            
            const moduleLabels = {
                'seo': 'SEO-optimalisatie',
                'maintenance': 'Onderhoud & updates',
                'webshop': 'Webshop',
                'cms-training': 'CMS-training',
                'branding': 'Branding / logo / huisstijl'
            };
            
            selections.modules.forEach(module => {
                if (moduleLabels[module]) {
                    html += `<div class="summary-item"><i class="fas fa-plus text-info"></i> ${moduleLabels[module]}</div>`;
                }
            });
        } else {
            html += '<div class="summary-item mt-3"><i class="fas fa-times text-muted"></i> Geen extra modules</div>';
        }
        
        html += '</div>';
        summaryContent.innerHTML = html;
    }
    
    function showFinalMessage(type) {
        const finalMessage = document.getElementById('finalMessage');
        
        if (type === 'success') {
            finalMessage.innerHTML = `
                <div class="alert alert-success">
                    <i class="fas fa-rocket fa-2x mb-3"></i>
                    <h4>Fantastisch!</h4>
                    <p>Wij gaan direct aan de slag met uw project. Binnen 24 uur neemt een van onze specialisten contact met u op om de details door te spreken.</p>
                </div>
            `;
        } else {
            finalMessage.innerHTML = `
                <div class="alert alert-info">
                    <i class="fas fa-bookmark fa-2x mb-3"></i>
                    <h4>Opgeslagen!</h4>
                    <p>We hebben uw keuzes bewaard. U kunt altijd terugkomen om uw project verder uit te werken. Geen zorgen, we versturen geen spam!</p>
                </div>
            `;
        }
        
        showStep('finalStep');
    }
    
    function restartBuilder() {
        // Reset selections
        selections = {
            packageType: '',
            domainHosting: '',
            services: [],
            modules: []
        };
        
        // Reset all cards
        document.querySelectorAll('.option-card').forEach(card => {
            card.classList.remove('active');
        });
        
        // Reset continue buttons
        document.getElementById('continueStep2b').disabled = true;
        
        // Go to first step
        showStep('step1');
    }
    
    function goToPreviousStep() {
        if (currentStep === 'step2a' || currentStep === 'step2b') {
            showStep('step1');
        } else if (currentStep === 'step4') {
            if (selections.packageType === 'complete-package') {
                showStep('step2a');
            } else {
                showStep('step2b');
            }
        } else if (currentStep === 'step5') {
            showStep('step4');
        }
    }
}

/**
 * Error handling for missing elements
 */
window.addEventListener('error', function(e) {
    console.warn('Non-critical error:', e.message);
});
