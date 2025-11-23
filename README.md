# Dave's Portfolio - Executive Technology Leadership

A distinctive Gatsby-powered portfolio website showcasing executive technology leadership, DevOps expertise, and mission-driven initiatives.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/[your-username]/dave-portfolio.git
cd dave-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run develop
```

Your site is now running at `http://localhost:8000`

## 📦 Deployment to GitHub Pages

### Method 1: Automated Deployment with GitHub Actions

1. **Create GitHub Repository**
   - Go to GitHub and create a new repository named `dave-portfolio`
   - Keep it public for GitHub Pages

2. **Create GitHub Actions Workflow**
   
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build site
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./public
```

3. **Enable GitHub Pages**
   - Go to Settings → Pages in your repository
   - Set Source to "Deploy from a branch"
   - Choose `gh-pages` branch and `/ (root)` folder
   - Save

### Method 2: Manual Deployment

1. **Build the site**
```bash
npm run build
```

2. **Deploy to GitHub Pages**
```bash
npm install --save-dev gh-pages
```

3. **Update package.json**
Add to the scripts section:
```json
"deploy": "gatsby build && gh-pages -d public"
```

4. **Deploy**
```bash
npm run deploy
```

### Method 3: Deploy to Netlify

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/[your-username]/dave-portfolio.git
git push -u origin main
```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select your repository
   - Build command: `gatsby build`
   - Publish directory: `public`
   - Click "Deploy site"

## 🎨 Customization

### Update Personal Information

Edit `src/pages/index.js` to update:
- Professional summary
- Metrics and achievements
- Expertise areas
- Current work projects
- Contact information

### Styling

The site uses a distinctive industrial aesthetic with:
- Custom CSS in `src/styles/global.css`
- CSS Variables for easy theming
- Responsive design for all devices

### Colors

Update the color scheme in `src/styles/global.css`:
```css
:root {
  --color-dark: #0A0E1A;
  --color-accent: #FF5E5B;
  --color-secondary: #23C0B5;
  /* ... */
}
```

## 🛠 Technical Stack

- **Framework**: Gatsby 5
- **Language**: JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables
- **Typography**: Archivo & Fira Code fonts
- **Animations**: CSS animations and transitions
- **Deployment**: GitHub Pages / Netlify

## 📱 Features

- ✅ Fully responsive design
- ✅ Smooth scrolling navigation
- ✅ Animated sections on scroll
- ✅ Performance optimized
- ✅ SEO ready with React Helmet
- ✅ Print-friendly styles
- ✅ Distinctive industrial aesthetic

## 🔧 Configuration

### Site Metadata

Update `gatsby-config.js`:
```javascript
siteMetadata: {
  title: `Your Name - Title`,
  description: `Your description`,
  author: `Your Name`,
  siteUrl: `https://your-site.com`
}
```

### Custom Domain

For GitHub Pages with custom domain:
1. Add a `static/CNAME` file with your domain
2. Configure DNS settings with your domain provider

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Tips

- Keep content concise and impactful
- Update metrics regularly
- Use real project examples
- Include quantifiable achievements
- Link to live projects when possible

---

Built with Gatsby and deployed with ❤️
