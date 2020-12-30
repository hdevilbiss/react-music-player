# HotLink Music App

A stylish music player built with React.js and styled with Sass.

## Boilerplate

This project was scaffolded from the [Create React App](https://github.com/facebook/create-react-app) boilerplate.

## Using the project

1. Clone the remote into a local repo. `git clone https://github.com/hdevilbiss/react-music-player.git`
1. Move into the newly created folder. `cd react-music-player`
1. Install the node dependencies. `npm i`
1. Create a local server. `npm start`

## Behind the scenes

### Data

The data behind the songs and cover art is contained in an array of objects under `src/data.js`. This file gets imported by `App.jsx`: the import value is a function, which gets invoked when used as the initial value for the `songs` state.

```jsx
import { useRef, useState } from "react";
import data from "./data";
function App() {
    // ...
    const [songs, setSongs] = useState(data());
    //...
}
```

### Components

🚧

![Diagram showing App, Song, Library, Player, and LibrarySong components of the Music App](docs/images/MusicApp.png)
