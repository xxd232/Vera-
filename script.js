// Sample data for models
const modelsData = [
    {
        id: 1,
        name: "Sophia Anderson",
        age: "24",
        height: "5'9\"",
        measurements: "34-24-36",
        specialty: "Runway & Editorial",
        bio: "Sophia has been modeling for over 6 years and has walked for major fashion houses including Chanel, Dior, and Versace. Her striking features and professional attitude make her a favorite among photographers and designers alike.",
        gallery: ["📸", "📸", "📸", "📸", "📸", "📸"]
    },
    {
        id: 2,
        name: "Marcus Chen",
        age: "27",
        height: "6'1\"",
        measurements: "40-32-34",
        specialty: "Commercial & Fitness",
        bio: "Marcus specializes in commercial and fitness modeling. His athletic build and charismatic presence have made him a sought-after model for athletic wear brands and lifestyle campaigns.",
        gallery: ["📸", "📸", "📸", "📸", "📸", "📸"]
    },
    {
        id: 3,
        name: "Isabella Rodriguez",
        age: "22",
        height: "5'8\"",
        measurements: "32-25-35",
        specialty: "Fashion & Beauty",
        bio: "Isabella brings elegance and grace to every shoot. She has been featured in numerous fashion magazines and beauty campaigns, showcasing her versatility and photogenic qualities.",
        gallery: ["📸", "📸", "📸", "📸", "📸", "📸"]
    },
    {
        id: 4,
        name: "James Wilson",
        age: "29",
        height: "6'0\"",
        measurements: "42-33-35",
        specialty: "Editorial & Luxury",
        bio: "James has carved out a niche in luxury brand campaigns and high-end editorial work. His sophisticated look and professional demeanor make him perfect for upscale fashion shoots.",
        gallery: ["📸", "📸", "📸", "📸", "📸", "📸"]
    },
    {
        id: 5,
        name: "Emma Taylor",
        age: "21",
        height: "5'10\"",
        measurements: "33-24-35",
        specialty: "Runway & Print",
        bio: "Emma is one of our newest rising stars. Despite her young age, she has already graced international runways and appeared in major fashion publications.",
        gallery: ["📸", "📸", "📸", "📸", "📸", "📸"]
    },
    {
        id: 6,
        name: "David Kim",
        age: "26",
        height: "6'2\"",
        measurements: "41-32-34",
        specialty: "Commercial & Catalog",
        bio: "David's friendly appearance and professionalism make him ideal for commercial and catalog work. He has worked with numerous national brands and retailers.",
        gallery: ["📸", "📸", "📸", "📸", "📸", "📸"]
    }
];

// Sample data for announcements
const announcementsData = [
    {
        id: 1,
        title: "New Model Search - Spring 2026",
        type: "Casting Call",
        date: "February 10, 2026",
        content: "Vera Modeling Agency is actively seeking fresh faces for our Spring 2026 roster. We're looking for models aged 18-30 with unique looks and professional attitudes. Open call auditions will be held at our New York office on February 20th. Bring your portfolio and be prepared for test shots."
    },
    {
        id: 2,
        title: "International Fashion Week Success",
        type: "News",
        date: "February 5, 2026",
        content: "We're thrilled to announce that five of our models walked in Paris Fashion Week this season! Sophia Anderson, Emma Taylor, and Isabella Rodriguez represented Vera with grace and professionalism on the international stage. Congratulations to our talented models!"
    },
    {
        id: 3,
        title: "Commercial Campaign Opportunity",
        type: "Casting Call",
        date: "January 28, 2026",
        content: "Major athletic wear brand seeking models for upcoming summer campaign. Requirements: Athletic build, age 20-35, experience with fitness/sports modeling preferred. Shoot dates: March 15-20. Competitive compensation. Contact us immediately if interested."
    },
    {
        id: 4,
        title: "Model Development Workshop",
        type: "Event",
        date: "January 15, 2026",
        content: "Join us for our quarterly Model Development Workshop on February 25th. Topics include runway techniques, posing for camera, industry networking, and building your brand. Open to all Vera models and serious aspiring models. Limited spots available - register now!"
    },
    {
        id: 5,
        title: "Congratulations to Our Award Winners",
        type: "News",
        date: "January 10, 2026",
        content: "Vera Modeling Agency has been named 'Agency of the Year' by the Fashion Industry Association! Additionally, our model Marcus Chen received the 'Rising Star Award' for his outstanding work in 2025. Thank you to everyone who continues to make Vera a leader in the modeling industry."
    },
    {
        id: 6,
        title: "Winter Fashion Show - CANCELLED",
        type: "Event",
        date: "January 5, 2026",
        content: "Due to unforeseen circumstances, the Winter Fashion Show originally scheduled for January 30th has been cancelled. We apologize for any inconvenience. All participants will be contacted directly. Stay tuned for updates on our next event."
    }
];

// Load models on models.html page
function loadModels() {
    const modelsGrid = document.getElementById('models-grid');
    if (!modelsGrid) return;

    modelsGrid.innerHTML = modelsData.map(model => `
        <div class="model-card" onclick="viewModel(${model.id})">
            <div class="model-card-image">${model.name.charAt(0)}</div>
            <div class="model-card-content">
                <h3>${model.name}</h3>
                <div class="model-card-meta">
                    <span>Age: ${model.age}</span>
                    <span>Height: ${model.height}</span>
                </div>
                <p>${model.specialty}</p>
            </div>
        </div>
    `).join('');
}

// View model detail
function viewModel(modelId) {
    window.location.href = `model-detail.html?id=${modelId}`;
}

// Load model details on model-detail.html page
function loadModelDetail() {
    const modelContent = document.getElementById('model-content');
    const galleryGrid = document.getElementById('gallery-grid');
    
    if (!modelContent || !galleryGrid) return;

    const urlParams = new URLSearchParams(window.location.search);
    const modelId = parseInt(urlParams.get('id'));
    const model = modelsData.find(m => m.id === modelId);

    if (!model) {
        modelContent.innerHTML = '<p>Model not found.</p>';
        return;
    }

    modelContent.innerHTML = `
        <div class="model-header">
            <div class="model-photo">${model.name.charAt(0)}</div>
            <div class="model-info">
                <h1>${model.name}</h1>
                <p style="color: #d4af37; font-size: 1.2rem; margin-bottom: 1rem;">${model.specialty}</p>
                <div class="model-stats">
                    <div class="stat-item">
                        <strong>Age</strong>
                        <span>${model.age} years</span>
                    </div>
                    <div class="stat-item">
                        <strong>Height</strong>
                        <span>${model.height}</span>
                    </div>
                    <div class="stat-item">
                        <strong>Measurements</strong>
                        <span>${model.measurements}</span>
                    </div>
                    <div class="stat-item">
                        <strong>Specialty</strong>
                        <span>${model.specialty}</span>
                    </div>
                </div>
                <div class="model-bio">
                    <p>${model.bio}</p>
                </div>
            </div>
        </div>
    `;

    galleryGrid.innerHTML = model.gallery.map((photo, index) => `
        <div class="gallery-item">${photo}</div>
    `).join('');
}

// Load announcements on announcements.html page
function loadAnnouncements() {
    const announcementsList = document.getElementById('announcements-list');
    if (!announcementsList) return;

    announcementsList.innerHTML = announcementsData.map(announcement => `
        <div class="announcement-card">
            <div class="announcement-header">
                <div>
                    <h3>${announcement.title}</h3>
                    <div class="announcement-date">📅 ${announcement.date}</div>
                </div>
                <span class="announcement-badge">${announcement.type}</span>
            </div>
            <p>${announcement.content}</p>
        </div>
    `).join('');
}

// Handle contact form submission
function handleContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Initialize page-specific content
document.addEventListener('DOMContentLoaded', () => {
    loadModels();
    loadModelDetail();
    loadAnnouncements();
    handleContactForm();
});
