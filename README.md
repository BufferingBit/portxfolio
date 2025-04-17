# Hero's Chronicle Portfolio

A fantasy-themed portfolio website built with Node.js, Express, and EJS, featuring an immersive RPG-style interface that showcases developer projects and skills through an adventurer's journey narrative.

## 🌟 Features

- Responsive fantasy-themed design using Tailwind CSS
- Interactive timeline-based navigation
- RPG-style project showcase
- Contact form integration with Resend API
- Performance optimization with compression
- Mobile-friendly interface
- Custom animations and transitions

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: EJS, Tailwind CSS
- **Styling**: Custom CSS animations, Font Awesome icons
- **Performance**: Compression middleware
- **Caching**: Node-cache
- **Development**: Nodemon

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BufferingBit/portxfolio.git
cd portxfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
RESEND_API_KEY=your_resend_api_key
YOUR_MAIL_URL=your_email@example.com
```

4. Build the CSS:
```bash
npm run build:css
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
├── public/
│   ├── styles.css
│   ├── global.css
│   ├── robots.txt
│   └── sitemap.xml
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── routes/
│   │   ├── about-me.ejs
│   │   ├── contact.ejs
│   │   ├── inventory.ejs
│   │   ├── quests.ejs
│   │   └── titles.ejs
│   └── index.ejs
├── index.js
├── tailwind.config.js
└── package.json
```

## 🔧 Scripts

- `npm run dev`: Start development server with Nodemon
- `npm run build`: Build the project
- `npm run build:css`: Build Tailwind CSS
- `npm test`: Run tests (to be implemented)

## 🌐 Deployment

This project is configured for deployment on Render. The `render.yaml` file includes the necessary configuration for automatic deployments.

### Deployment Configuration

```yaml
services:
  - type: web
    name: portfolio
    env: node
    buildCommand: npm install && npm run build:css
    startCommand: node index.js
```

## 🔒 Environment Variables

- `PORT`: Server port (default: 3000)
- `RESEND_API_KEY`: API key for Resend email service
- `YOUR_MAIL_URL`: Email address for contact form submissions

## 📝 License

ISC

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

For inquiries, reach out through the contact form on the website or create an issue in the repository.