## Simple application for job hunting
Using the remotive API and remote OK API we source job remote job postings and display them in a fun way!
Idea is to create an experience for users. Job searching can be boring and monotonous, let's make it fun!

## Using Functions
- need to first install netlify-cli: npm install netlify-cli -g (https://www.netlify.com/products/dev/)
- you will need to run `yarn dev`

## TODO:
- add logic for search field to convert tags to "buttons" so a user can remove the tag if they want
- work on search query so it can be more dynamic
- add in filter options (ie. filter by country, by salary, by posting type)
- implement a world view map that allows users to see where the jobs are located at a glance
- clean up UI, create a dashboard that shows a list of jobs, the map view, and potentially salary rankings if applicable
- add in loader animation
- show options for categories (ie. designer, developer, product manager, etc.)
- add unit/component testing

## WorkFlow
- branch off master always
- create your own branch (feature, bug, hotfix, etc.) => feature/add-testing-jl (add your initial at the end to avoid branch conflicts)
- request PR

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
