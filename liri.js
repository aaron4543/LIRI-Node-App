var Liri = require('./liri-intellect');
var liriBot = new Liri();

var term = process.argv[2];
var search = process.argv.slice(3).join(' ');

function runLiri(term, search) {
    if(!term) {
        term = 'spotify-this-song';
    }

    if (term === 'concert-this') {
        console.log('Searching Band...\n\n');``
        if (!search) {
            search = 'All time low!';
        }
        liriBot.searchBand(search);

    } else if (term === 'spotify-this-song') {
        console.log('Searching Spotify...\n\n');
        if(!search) {
            search = 'The Sign';
        }
        liriBot.searchSpotify(search);

    } else if (term === 'movie-this') {
        console.log('Searching Movie...\n\n');
        if (!search) {
            search = 'Mr. Nobody';
        }
        liriBot.searchMovie(search);

    } else if (term === 'do-what-it-says') {
        liriBot.searchLiri(runLiri);
    }
}

runLiri(term, search);