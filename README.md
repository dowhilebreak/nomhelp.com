# nomhelp.com

This is a demo React site containing a US measurements -> Fluid Ounces/Pounds calculator. 

## Features

* Arbitrary text handling and replacement of original with calculated measures
* Converts UTF-8 vulgar fractions into decimals for calculation
* Handles common measurement abbreviations
* Has options to multiply the quantities to increase or decrease the recipe size
* No database - all in browser

## Development Roadmap / Goals

* Assemble test suite
* Spin out conversion/calculation code into its own module/library
* Add conversions for Imperial measurements
* Add conversion to/from metric (SI) measurements
* Parsing options for inexact measurements (e.g. "1 whole chicken")


# Setup

This project requires Node, NPM, React and Sass...

Node can be dowloaded from the project's homepage: 
https://nodejs.org/en/ (the site was built against Node 11.10.1).

Navigate to the folder where you forked the project and run:

```
npm install
```

This should add all needed dependencies, but pay attention for 
any global peer dependencies that may need manually sorted out.

Once finished (it may take a few moments), you can run `npm start` as 
described below to load a development version of the site as you work on it.


# Create React App Default Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.