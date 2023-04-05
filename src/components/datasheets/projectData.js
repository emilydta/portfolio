import images from "../../images/images";

const projectData = [
    {
        title: 'ACNH: CRITTER GUIDE',
        tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Cloudflare'],
        description: 'A companion web app designed for the popular Nintendo title \'Animal Crossing New Horizons\'. It sources data from an API and is intended to assist players with completing \'critter\' collections within the game.',
        image: images.acnhCritterGuide,
        sourceCode: 'https://github.com/emilydta/animal-crossing-critter-guide',
        demo: 'https://acnhcritterguide.com'
    },
    {
        title: 'MEMORY CARD GAME',
        tech: ['HTML', 'CSS', 'JavaScript', 'React'],
        description: 'A browser game that requires the player to avoid clicking on the same colour twice. This project was completed as part of \'The Odin Project\' curriculum.',
        image: images.memoryGame,
        sourceCode: 'https://github.com/emilydta/memory-card-game',
        demo: 'https://emilydta.github.io/memory-card-game'
    },
    {
        title: 'WEATHER APP',
        tech: ['HTML', 'CSS', 'TypeScript', 'Webpack'],
        description: 'A web app that utilises third-party API\'s to gather real-time weather data and display it alongside custom background images. This project was completed as part of \'The Odin Project\' curriculum.',
        image: images.weatherApp,
        sourceCode: 'https://github.com/emilydta/weather-app',
        demo: 'https://emilydta.github.io/weather-app'
    }
]

export default projectData;