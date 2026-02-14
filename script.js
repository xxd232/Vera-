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

// Form validation and submission
const applicationForm = document.getElementById('application-form');
const successMessage = document.getElementById('success-message');

if (applicationForm) {
    applicationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Get form data
        const formData = new FormData(applicationForm);
        const applicationData = {};
        
        formData.forEach((value, key) => {
            if (key === 'terms' || key === 'newsletter') {
                applicationData[key] = formData.get(key) === 'on';
            } else {
                applicationData[key] = value;
            }
        });
        
        // Log application data (in production, this would be sent to a server)
        console.log('Application submitted:', applicationData);
        
        // Save to localStorage for demo purposes
        saveApplication(applicationData);
        
        // Hide form and show success message
        applicationForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth' });
        
        // Send confirmation email simulation
        sendConfirmationEmail(applicationData.email);
    });
}

function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const motivation = document.getElementById('motivation').value.trim();
    const terms = document.getElementById('terms').checked;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !motivation) {
        alert('Please fill in all required fields.');
        return false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // Validate age range
    if (age < 18 || age > 35) {
        alert('Applicants must be between 18 and 35 years old.');
        return false;
    }
    
    // Validate height (reasonable range)
    if (height < 150 || height > 220) {
        alert('Please enter a valid height in centimeters.');
        return false;
    }
    
    // Validate terms acceptance
    if (!terms) {
        alert('You must agree to the terms and conditions to submit your application.');
        return false;
    }
    
    return true;
}

function saveApplication(data) {
    // Get existing applications from localStorage
    let applications = JSON.parse(localStorage.getItem('modelApplications') || '[]');
    
    // Add timestamp
    data.submittedAt = new Date().toISOString();
    
    // Add new application
    applications.push(data);
    
    // Save back to localStorage
    localStorage.setItem('modelApplications', JSON.stringify(applications));
    
    console.log('Application saved to localStorage');
}

function sendConfirmationEmail(email) {
    // Simulate sending confirmation email
    console.log(`Confirmation email sent to: ${email}`);
    console.log('Email content: Thank you for applying to Vera Modeling Agency contest!');
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add fade-in animation class
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    section.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Height validation based on gender (if gender field is added)
document.getElementById('height')?.addEventListener('blur', function() {
    const height = parseInt(this.value);
    if (height < 170) {
        console.warn('Note: Preferred height for female models is 170cm (5\'7") or taller');
    }
});

// Age validation
document.getElementById('age')?.addEventListener('blur', function() {
    const age = parseInt(this.value);
    if (age < 18) {
        this.setCustomValidity('You must be at least 18 years old');
    } else if (age > 35) {
        this.setCustomValidity('Age must be 35 or under');
    } else {
        this.setCustomValidity('');
    }
});

// Form field character counters for motivation
const motivationField = document.getElementById('motivation');
if (motivationField) {
    const counter = document.createElement('div');
    counter.style.cssText = 'text-align: right; color: #7f8c8d; font-size: 0.9rem; margin-top: 0.5rem;';
    motivationField.parentNode.appendChild(counter);
    
    motivationField.addEventListener('input', function() {
        const length = this.value.length;
        counter.textContent = `${length} characters`;
        
        if (length < 50) {
            counter.style.color = '#e74c3c';
        } else if (length < 100) {
            counter.style.color = '#f39c12';
        } else {
            counter.style.color = '#27ae60';
        }
    });
}

// Add active navigation highlighting
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

highlightActiveSection();

// Add active link style
const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-links a.active {
        color: #e74c3c;
        border-bottom: 2px solid #e74c3c;
        padding-bottom: 2px;
    }
`;
document.head.appendChild(navStyle);

// Console welcome message
console.log('%c🌟 Welcome to Vera Modeling Agency! 🌟', 'font-size: 20px; color: #3498db; font-weight: bold;');
console.log('%cScotland\'s Premier Modeling Contest', 'font-size: 14px; color: #2c3e50;');
console.log('For support, contact: info@veramodeling.co.uk');
