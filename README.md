# Create Typescript Webapp
A starter project for creating a minimal web browser app in Typescript, Visual Studio Code, and Webpack.  

Webpack is used because Typescript [doesn't provide ES6 modules with browser bundling out of the box (as far as I know as of Feb 4, 2018)](https://github.com/Microsoft/TypeScript/issues/2743#issuecomment-92943381).

## How to start your project

### Step 0: Clone and push to your new repo
```bash
# Replace my-project, my-user, my.git.host.example.com with your actual project, git user, git host:
git clone https://github.com/nickscript0/create-typescript-webapp.git my-project
cd my-project
rm -rf .git
git init
git add *
git commit -am "initial commit"
git remote add origin https://my.git.host.example.com/my-user/my-project
git push -u origin master
```

### Step 1: Generate package.json
```bash
npm init -y
npm install --save-dev typescript webpack webpack-cli ts-loader 

# Optionally install mocha and ts-node for unit tests
npm install --save-dev ts-node mocha @types/mocha
```

### Step 2: Add webpack watch
Replace the stub scripts section of package.json as follows:
```json
  "scripts": {
    "watch": "webpack --watch",
     "test": "mocha -r ts-node/register src/test/**.ts" // For unit tests
  }
```

### Step 3: Run your app locally
```bash
# Begin webpack compiling on change
npm run watch

# Serve your index.html, go to http://localhost:2222 in a web browser
docker run --name create-typescript-webapp -v $(pwd):/usr/share/nginx/html:ro -p 2222:80 -d nginx
```