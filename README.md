# Create Typescript Webapp
A starter project for creating a minimal web browser app in Typescript, Visual Studio Code, and Webpack.  

Webpack is used because Typescript [doesn't provide ES6 modules with browser bundling out of the box (as far as I know as of Feb 4, 2018)](https://github.com/Microsoft/TypeScript/issues/2743#issuecomment-92943381).

## How to start your project
### Step 1: Generate package.json
```bash
npm init -y
npm install typescript webpack ts-loader uglifyjs-webpack-plugin --save-dev
```

### Step 2: Add webpack watch
Add the following to package.json:
```json
  "scripts": {
    "watch": "webpack --watch"
  }
```