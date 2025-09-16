#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "Your portfolio is ready to deploy!"
    echo ""
    echo "To deploy to GitHub Pages:"
    echo "1. Push this code to a GitHub repository"
    echo "2. Go to repository Settings > Pages"
    echo "3. Select 'GitHub Actions' as source"
    echo "4. The site will be available at: https://yourusername.github.io/repository-name"
    echo ""
    echo "To deploy to Vercel:"
    echo "1. Install Vercel CLI: npm i -g vercel"
    echo "2. Run: vercel"
    echo "3. Follow the prompts"
    echo ""
    echo "To deploy to Netlify:"
    echo "1. Drag the 'dist' folder to netlify.com/drop"
    echo "2. Or connect your GitHub repository to Netlify"
else
    echo "Build failed! Please check the errors above."
    exit 1
fi
