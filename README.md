# static-site-webpack-ejs

Experimental repo for using .ejs templates to generate a static site using webpack's `html-webpack-plugin`. Since `html-webpack-plugin` requires you to
declare a variable for each file, wrote a wrapper (`config/transformEjs.js`) around it to avoid having to do that.


Current `build/` structure:
```
.
├── about.html
├── asset-manifest.json
├── favicon.ico
├── index.html
├── nav.html
└── static
    ├── css
    │   ├── main.65027555.css
    │   └── main.65027555.css.map
    └── js
        ├── main.59760856.js
        └── main.59760856.js.map
```

--

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Get started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Todo
- [ ] cleanup wrapper code
- [ ] cleanup repo
- [ ] which templates should be generated as pages, and which one are ignored from the static build
- [ ] finer control over which file formats
- [ ] finer control over paths to inspect
