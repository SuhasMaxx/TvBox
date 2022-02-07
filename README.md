# TV Box

A front-end app to show TV shows info, schedule and more. The app fetches show information from TV Maze API ( https://www.tvmaze.com/api ) and shows top shows of each genre on the home page. You can click on any show to get more infomration about the show. The app also has a search page where  you can type and search for a show.

## Features
- Home page page shows top shows from each Genre ( maximum 20 ). User can click on any show and go to its details page. Each genre list is scrollable and has navigation buttons.
- Click on show to get more information
- Search for your favourite shows
- Show details page with big poster
- Show cast info with character names ( as tooltip )

## Technical stack
- Vue 3
- Pure Responsive CSS ( no framework )
- Font Awesome for icons
- Manual webpack configuration ( no vue-cli )
- Unit test via Jest

## Installation

### Pre-requisites
- Node JS ( Latest Stable Release ) Download and install from https://nodejs.org/en/

### Setup
- Checkout the code using git:  `git clone <repository url>`
- Open `terminal` ( on Mac ) or `cmd` ( on WIndows )
- Navigate to the checked out directory
- Run `npm install`
- Done!

### Compile and run the Local Server
Run `npm run dev`

### Build for Production
Run `npm run build`
The contents in `dist` folder are production ready and can be deployed to any http server