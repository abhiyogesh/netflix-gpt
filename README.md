# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.sss

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# for creating form in react use formik library
-https://formik.org/



# Netflix-GPT
-Create React App
-Configured Tailwind CSS
-Header
-Routing of App
-Login Form
-Sign Up form
-Form Validation
-useRef Hook
-firebase setup
  -install firebase - npm i firebase
  -install firbase CLI - 'npm install -g firebase-tools'
  -Firebase login - 'firebase login'
  -Initilize Firebase - 'firebase init' then select hosting
  -Deploy command - 'firebase deploy'
  -Deploying our app to production
  -Create SignUp User account
-create redux store with userSlice
   -npm i -D @reduxjs/toolkit
   -npm i react-redux
-Implemented Sign Out
-Update Profile
-BugFix : Sign up user displayName and profile picture update
-BugFix : if the user is not logged in Redirect/ browse to Login Pswage and vice versa
-Unsubscribed to the onAuthStateChanged callback
-Add hardcoded values to the constants file
-Register TMDB API & create an app & get access token
-Get Data from TMDB now playing movies list API
-Custom Hook for Now Playing Movies
-Create movieSlice
-Update store with movies Data
-Planning for MainContainer & secondary container
-Fetch Data for Trailer Video
-Update Store with Trailer Video Data
-Embedded the Youtube video and make it autoplay and mute
-Tailwind Classes to make Main Container look awesome
-Build SecondaryContainer Component
-Build Movie List
-BUild Movie Card
-TMDB Image CDN URL
-Make the Browse page amazing with Tailwind CSS
-Use Popular Custom hooks

# Features :
 -Login/Sign Up
    -Sign In/Sign Up Form
    -redirect to Browse Page

-Browse(after authentication)
  -Header
  -Main Movie
     -Trailer in Background
     -TItle & Description
     -Movie Suggestion
       - MovieLists * N

-NetflixGPT
   -Search Bar
   -Moive Suggestions

# 1.command for creating react app
- npx create-react-app 'projectName'
- npx create-react-app netflix-gpt

# 2.Configure Tailwind CSS

# 3. Create a git repository in git  and run commands in terminal for pushing code into git repo
-git remote add origin https://github.com/abhiyogesh/netflix-gpt.git
-git branch -M main
-git push -u origin main

# rafce - it automatically generates boiler plate for component

# build header

# Routing

# Create login form

# Create Sign Up form

# useRef Hook
# Firebase setup
# Create redux store

# Impelmented Sign Out

# Update Profile