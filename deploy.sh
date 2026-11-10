
#!/usr/bin/env sh

# Stop if any command fails
set -e

# Build the application
npm run build

# Enter the build directory
cd dist

# Create deployment commit
git init
git add -A
git commit -m "Deploy Module 11"

# Push to the gh-pages branch
git push -f https://github.com/sm708/module11.git HEAD:gh-pages

cd -
