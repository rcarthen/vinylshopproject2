const db = require('../models/');

const items = [

    {
        vinyl_name: 'The Beatles Yellow Submarine',
        artist: 'The Beatles',
        genre: 'Rock',
        price: 8000,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61sBxjdG%2BzL._SS500.jpg',
        info:'Yellow Submarine is the tenth studio album by English rock band the Beatles, released on 13 January 1969.'
    },

    {
        vinyl_name: 'Survival',
        artist: 'Bob Marley',
        genre: 'Reggae',
        price: 50,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61TO3Ucwb4L._SS500.jpg',
        info: 'Survival is a reggae album by Bob Marley & The Wailers released in 1979.'
        
    },

    {
        vinyl_name: 'Purple Rain',
        artist: 'Prince',
        genre: 'Rhythm and Blues',
        price: 500,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/914-C7OKHfL._SX522_.jpg',
        info: 'Purple Rain is the sixth studio album by American recording artist Prince, the second to feature his band the Revolution.'
    },

    {
        vinyl_name: 'Off the Wall',
        artist: 'Michael Jackson',
        genre: 'Pop',
        price: 75,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81UWfPobkoL._SY355_.jpg',
        info: 'Off the Wall is the fifth studio album by American singer Michael Jackson, released on August 10, 1979'
    },

    {
        vinyl_name: 'Aretha Franklin Amazing Grace',
        artist: 'Aretha Franklin',
        genre: 'Rhythm and Blues',
        price: 120,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51bRjvvZPdL._SS500.jpg',
        info: 'Amazing Grace is the fourth live album by American singer Aretha Franklin. Released on June 1, 1972 by Atlantic Records, it ultimately sold over two million copies in the United States alone.'
    },


    {
        vinyl_name: 'Dark Side of The Moon',
        artist: 'Pink Floyd',
        genre: 'Rock',
        price: 100,
        quantity: 3,
        image: 'https://images-na.ssl-images-amazon.com/images/I/312o%2BhKUwnL.jpg',
        info: 'The Dark Side of the Moon is the eighth studio album by English rock band Pink Floyd, released on 1 March 1973 by Harvest Records.'
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
        image: 'https://images-na.ssl-images-amazon.com/images/I/51b8Oq3-lKL._SS500.jpg',
        info: 'Silk & Soul is the thirteenth studio album by American musician Nina Simone released in October 1967 by RCA Victor.'
    }, 
    {
        vinyl_name: 'Midnight Marauders',
        artist: 'Tribe Called Quest',
        genre: 'Hip-Hop',
        price: 50,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61ES3oAGQQL._SS500.jpg',
        info: 'Midnight Marauders is the third studio album by American hip hop group A Tribe Called Quest, released on November 9, 1993, by Jive Records.'
    },
     {
        vinyl_name: '3 Feet High and Rising',
        artist: 'De La Soul',
        genre: 'Hip-Hop',
        price: 95,
        quantity: 3,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51RBMJNW2AL.jpg',
        info: '3 Feet High and Rising is the debut studio album by American hip hop trio De La Soul. It was released on March 3, 1989, by Tommy Boy Records'
    },

    {
        vinyl_name: 'The Doors',
        artist: 'The Doors',
        genre: 'Rock',
        price: 170,
        quantity: 3,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51Spjdv-5tL._SS500.jpg',
        info: 'The Doors is the debut album by the American rock band the Doors, released on January 4, 1967.'
    },

    {
        vinyl_name: 'Blue Train',
        artist: 'John Coltrane',
        genre: 'Jazz',
        price: 350,
        quantity: 3,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41wQNS4R+AL._AC_US327_FMwebp_QL65_.jpg',
        info: 'Blue Train is a studio album by John Coltrane, released in 1958 on Blue Note Records, catalogue BLP 1577.'
    
    }




];


db.sequelize.sync({force:true}).then(function () {
    db.vinyl.bulkCreate(items).then(function (rows) {
        console.log('\n\nINSERTED\n\n');
    }).catch(function (err) {
        console.log('\n\nError:', err);
    });
})