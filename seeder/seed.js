const db = require('../models/');

const items = [

    {
        vinyl_name: 'The Beatles Yellow Submarine',
        artist: 'The Beatles',
        genre: 'Rock',
        price: 8000,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61sBxjdG%2BzL._SS500.jpg',
        info:'Yellow Submarine is the tenth studio album by English rock band the Beatles, released on 13 January 1969 in the United States and on 17 January 1969 in the United Kingdom. '
    },

    {
        vinyl_name: 'Survival',
        artist: 'Bob Marley',
        genre: 'Reggae',
        price: 35,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61TO3Ucwb4L._SS500.jpg'
        
    },

    {
        vinyl_name: 'Purple Rain',
        artist: 'Prince',
        genre: 'Rhythm and Blues',
        price: 500,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/914-C7OKHfL._SY355_.jpg'
    },

    {
        vinyl_name: 'Off the Wall',
        artist: 'Michael Jackson',
        genre: 'Pop',
        price: 75,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81UWfPobkoL._SY355_.jpg'
    },

    {
        vinyl_name: 'Aretha Franklin Amazing Grace',
        artist: 'Aretha Franklin',
        genre: 'Rhythm and Blues',
        price: 120,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51bRjvvZPdL._SS500.jpg'
    },
    {
        vinyl_name: 'Whitney Houston',
        artist: 'Whitney Houston',
        genre: 'Rhythm and Blues',
        price: 150,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51E9w3xBTJL._SS500.jpg',
        info: 'Whitney Houston is the debut studio album by American contemporary R&B and pop singer Whitney Houston.'
    },

    {
        vinyl_name: 'Nina Simone Silk and Soul',
        artist: 'Nina Simone',
        genre: 'Jazz',
        price: 150,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51b8Oq3-lKL._SS500.jpg'
    }, 
    {
        vinyl_name: 'Midnight Marauders',
        artist: 'Tribe Called Quest',
        genre: 'Hip-Hop',
        price: 50,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61ES3oAGQQL._SS500.jpg'
    },
     {
        vinyl_name: '3 Feet High and Rising',
        artist: 'De La Soul',
        genre: 'Hip-Hop',
        price: 95,
        quantity: 3,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51RBMJNW2AL.jpg'
    },

    {
        vinyl_name: 'The Doors',
        artist: 'The Doors',
        genre: 'Rock',
        price: 170,
        quantity: 3,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51Spjdv-5tL._SS500.jpg'
    },

    {
        vinyl_name: 'Blue Train',
        artist: 'John Coltrane',
        genre: 'Jazz',
        price: 400,
        quantity: 3,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41wQNS4R+AL._AC_US327_FMwebp_QL65_.jpg',
    
    }




];


db.sequelize.sync({force:true}).then(function () {
    db.vinyl.bulkCreate(items).then(function (rows) {
        console.log('\n\nINSERTED\n\n');
    }).catch(function (err) {
        console.log('\n\nError:', err);
    });
})