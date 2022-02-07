# TV Box

A front-end app to show TV shows info, schedule and more. The app fetches show information from TV Maze API ( https://www.tvmaze.com/api ) and shows top shows of each genre on the home page. You can click on any show to get more infomration about the show. The app also has a search page where  you can type and search for a show.

You can see output of this app hosted on : https://suhassanmukh.com/submodules/tv-box/

## Features
- Home page page shows top shows from each Genre ( maximum 20 ). User can click on any show and go to its details page. Each genre list is scrollable and has navigation buttons.
- Click on show to get more information
- Search for your favourite shows
- Show details page with big poster
- Show cast info with character names ( as tooltip )
- Mobile friendly UI

## Technical stack
- Vue 3
- Pure Responsive CSS ( no framework )
- Font Awesome for icons
- Manual [Webpack 5](https://webpack.js.org/) configuration ( no vue-cli )
- Unit tests via [Jest](https://jestjs.io/)

## Installation

### Pre-requisites
- Node JS ( Latest Stable Release ) Download and install from https://nodejs.org/en/

## Setup
- Checkout the code using git:  `git clone <repository url>`
- Open `terminal` ( on Mac ) or `cmd` ( on WIndows )
- Navigate to the checked out directory
- Run `npm install`
- Done!

## Compile and run the Local Server ( support hot reload )
```
`npm run dev`
```
Local server will run on `http://localhost:8080/`

## Build for Production
```
`npm run build`
```
The contents in `dist` folder are production ready and can be deployed to any http server

## Run unit tests
```
`npm run test`
```

## Upcoming features
- Episode info on show Details page
- Cast pictures on Show details page
- latest updates page
- Shows media gallery page ( Posters, background, Typography )
