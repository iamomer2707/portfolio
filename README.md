# Personal Portfolio - React + Vite

A modern, responsive personal portfolio website built with React and Vite, featuring smooth animations, responsive design, and interactive components.

## Features

- 🚀 **Fast Development**: Built with Vite for lightning-fast development and hot module replacement
- 📱 **Responsive Design**: Fully responsive layout that works on all devices
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- ⚡ **Performance**: Optimized for speed and performance
- 🎯 **Interactive**: Smooth scrolling navigation and interactive elements
- 📧 **Contact Form**: Functional contact form with email integration

## Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Skills, technologies, and competencies
- **Education**: Academic background and achievements
- **Experience**: Work experience and internships
- **Projects**: Featured projects with descriptions and technologies
- **Certifications**: Certifications and achievements
- **Contact**: Contact information and form

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Styled Components**: CSS-in-JS for component styling
- **React Router**: Client-side routing (ready for future expansion)
- **Font Awesome**: Icons
- **Google Fonts**: Poppins font family

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PersonalPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.js    # Navigation bar
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Education.js     # Education timeline
│   ├── Experience.js    # Work experience
│   ├── Projects.js     # Projects showcase
│   ├── Certifications.js # Certifications
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer
├── data/               # Data files
│   └── portfolioData.js # Portfolio content
├── styles/             # Global styles
│   └── GlobalStyles.js # Styled-components global styles
├── App.jsx             # Main App component
└── main.jsx           # Entry point
```

## Customization

### Updating Content

All portfolio content is centralized in `src/data/portfolioData.js`. Update this file to modify:

- Personal information
- Skills and technologies
- Education details
- Work experience
- Projects
- Certifications
- Contact information

### Styling

The project uses Styled Components for styling. Each component has its own styled components defined within the component file. Global styles are defined in `src/styles/GlobalStyles.js`.

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `App.jsx`
3. Update the navigation in `Navigation.js`
4. Add corresponding data to `portfolioData.js`

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy your site

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

Syed Omer Hussain
- Email: iamomer2707@gmail.com
- LinkedIn: [linkedin.com/in/iamomer2707](https://www.linkedin.com/in/iamomer2707/)
- GitHub: [github.com/iamomer2707](https://github.com/iamomer2707)
