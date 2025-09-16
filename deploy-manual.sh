#!/bin/bash

echo "🚀 Manual Deployment Script for Personal Portfolio"
echo "=================================================="

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎯 Choose your deployment method:"
    echo ""
    echo "1️⃣  GitHub Pages (FREE)"
    echo "   - Push this code to GitHub"
    echo "   - Go to Settings > Pages"
    echo "   - Select 'GitHub Actions' as source"
    echo "   - Your site: https://yourusername.github.io/repository-name"
    echo ""
    echo "2️⃣  Vercel (RECOMMENDED - FREE & FAST)"
    echo "   - Install: npm install -g vercel"
    echo "   - Run: vercel"
    echo "   - Follow prompts"
    echo "   - Your site: https://your-project.vercel.app"
    echo ""
    echo "3️⃣  Netlify (FREE)"
    echo "   - Go to: https://netlify.com/drop"
    echo "   - Drag the 'dist' folder"
    echo "   - Your site: https://random-name.netlify.app"
    echo ""
    echo "4️⃣  Manual Upload"
    echo "   - Upload the 'dist' folder to any web hosting service"
    echo ""
    echo "📁 Your built files are in the 'dist' folder"
    echo "🌐 Ready to deploy!"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
