# 19-Progressive-Web-Applications-PWA-Text-Editor

## Description

This application is a text editor that uses a serviceworker and IndexedDb to store text input in a database and function while the user is not online. This app is also a Progressive Web Application, so it can be installed as a standalone application on desktops, laptops, tablets, and smartphones.

## Table of Contents

- [Introduction](#introduction)
- [Problem](#problem)
- [Solution](#solution)
- [Contributors](#contributors)
- [Contact](#contact)
- [License](#license)

## Introduction

The client, a developer, would to create notes or code snippets with or without an internet connection, so that they can reliably retrieve them for later use.

## Problem

Given a text editor web application, when the developer opens the application in their editor, then they should see a client server folder structure. When they run `npm run start` from teh root directory, the application should start up the backend and serve the client. When they run the text editor application from their terminal
they find that their JavaScript files have been bundled using webpack and when the webpack plugins are run, they find that an HTML file, service worker, and a manifest file have been generated. When a next-gen JavaScript in the application, the text editor still functions in the browser without errors.

When the text editor is opened, IndexedDB has immediately created a database storage and when they enter content and subsequently click off of the DOM window, the content in the text editor is saved with IndexedDB. When the text editor is reopened after it has been closed, the content in the text editor has been retrieved from IndexedDB.

Lastly, when the developer clicks on the Install button, application is downloaded as an icon on the desktop. When the application is loaded, their is a registered service worker using workbox, with static assets pre cached upon loading along with subsequent pages and static assets.

## Solution

Here is link to the deployed application on Render:
[Link to deployed app](https://one9-progressive-web-applications-pwa-fkpw.onrender.com)

## Contributors

I worked with George Schultz to complete this application. I also used chatgpt and Github copilot to troubleshoot bugs.

## Contact

You can contact me here is you have questions:

Github: [ktetsuyama](https://github.com/ktetsuyama)

Email: [kroyal.eisenberg@gmail.com](mailto:kroyal.eisenberg@gmail.com)

## License

This project is covered under the [![License: CC BY-SA  4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)

Learn more about this license [here](https://creativecommons.org/licenses/by-sa/4.0/).

Thank you for reading.
