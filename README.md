# Vera Modeling Agency

Vera Modeling Agency - Professional landing page with comprehensive features for model registration, booking, and portfolio management.

## Features

- 12 action buttons for various services
- 8 different form types (registration, booking, contact, search, etc.)
- Responsive design with tablet and mobile breakpoints
- Accessible with ARIA labels and keyboard navigation
- Modern gradient-based design system
- Career opportunities, blog, events, gallery, testimonials, and FAQ sections

## Quick Start

### Installation

```bash
npm install
```

### Run the Server

```bash
npm start
```

The website will be available at: `http://localhost:3000`

## Deployment

### For Production

The server runs on port 3000 by default. To connect your domain:

1. Set up your DNS to point to your server IP
2. Configure a reverse proxy (nginx/Apache) or use port forwarding
3. Run the server with: `npm start`

### Environment Variables

You can customize the port by setting the `PORT` environment variable:

```bash
PORT=3000 npm start
```

## Files

- `index.html` - Main landing page
- `styles.css` - Stylesheet with gradient design system
- `server.js` - Express server for serving static files
- `package.json` - Node.js dependencies and scripts

## Technologies

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Node.js
- Express.js

## License

MIT

