# Vera Modeling Agency Website

A modern, responsive website for Vera Modeling Agency featuring model portfolios, galleries, and announcements.

## Features

- **Model Profiles**: Browse through our talented models with detailed profiles
- **Photo Galleries**: Each model has a dedicated gallery showcasing their work
- **Announcements**: Stay updated with casting calls, news, and events
- **Contact Form**: Easy way to get in touch with the agency
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## Pages

1. **Home** (`index.html`) - Welcome page with agency overview
2. **Our Models** (`models.html`) - Grid view of all models
3. **Model Detail** (`model-detail.html`) - Individual model profiles with galleries
4. **Announcements** (`announcements.html`) - Latest news and casting calls
5. **Contact** (`contact.html`) - Contact information and message form

## Technology

- Pure HTML5, CSS3, and JavaScript
- No external dependencies or frameworks
- Fully responsive design
- Modern gradient color scheme

## Getting Started

Simply open `index.html` in a web browser to view the website locally. For deployment, upload all files to your web server.

### Local Development

You can start a simple HTTP server to test the site:

```bash
python3 -m http.server 8000
```

Then navigate to `http://localhost:8000` in your browser.

## Structure

```
Vera-/
├── index.html              # Homepage
├── models.html             # Models listing
├── model-detail.html       # Model profile template
├── announcements.html      # Announcements page
├── contact.html            # Contact page
├── styles.css              # All styling
├── script.js               # JavaScript functionality
└── README.md               # This file
```

## Customization

### Adding Models

Edit the `modelsData` array in `script.js` to add or modify model profiles.

### Adding Announcements

Edit the `announcementsData` array in `script.js` to add or modify announcements.

### Styling

All styles are contained in `styles.css`. Modify colors, fonts, and layouts as needed.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

© 2026 Vera Modeling Agency. All rights reserved.
