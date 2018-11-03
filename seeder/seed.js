const db = require('../models/');

const items = [

    {
        vinyl_name: 'The Beatles Yellow Submarine',
        artist: 'The Beatles',
        genre: 'Rock',
        price: 8000,
        quantity: 5,
        image: 'https://target.scene7.com/is/image/Target/GUEST_85c13716-9d6c-4a16-a87b-75623e46afad?wid=488&hei=488&fmt=webp',
        info: 'Yellow Submarine is the tenth studio album by English rock band the Beatles, released on 13 January 1969 in the United States and on 17 January 1969 in the United Kingdom.'
    },

    {
        vinyl_name: 'Survival',
        artist: 'Bob Marley',
        genre: 'Reggae',
        price: 35,
        quantity: 5,
        image: 'https://marketplace.bartercard.co.nz/content/images/thumbs/0077973_bob-marley-the-wailers-survival-vinyl-lp_580.jpeg',
        info: 'Survival is a reggae album by Bob Marley & The Wailers released in 1979.'
    },

    {
        vinyl_name: 'Purple Rain',
        artist: 'Prince',
        genre: 'Rhythm and Blues',
        price: 500,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/914-C7OKHfL._SY355_.jpg',
        info: 'Purple Rain is the sixth studio album by American recording artist Prince, the second to feature his band the Revolution, and is the soundtrack to the 1984 film of the same name. It was released on June 25, 1984 by Warner Bros. Records.'

    },


    {
        vinyl_name: 'Dark Side Of The Moon',
        artist: 'Pink Floyd',
        genre: 'Rock',
        price: 75,
        quantity: 3,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQmCCWB1WUsgBgiM-NFizQLYqEbH8pn5XFKGpMcjly-7hDYDp6pXoxxV9b1j-NpacyOB8IYhmWA1CSpgAm7JepZALE9lPGLQrGTcMkwuzuetZag5CRcvCpl&usqp=CAY',
        info: 'The Dark Side of the Moon is the eighth studio album by English rock band Pink Floyd, released on 1 March 1973 by Harvest Records.'

    },

    {
        vinyl_name: 'Off the Wall',
        artist: 'Michael Jackson',
        genre: 'Pop',
        price: 75,
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81UWfPobkoL._SY355_.jpg',
        info: 'Off the Wall is the fifth studio album by American singer Michael Jackson, released on August 10, 1979 in the United States by Epic Records and internationally by CBS Records.'
    },

    {
        vinyl_name: 'Aretha Franklin Amazing Grace',
        artist: 'Aretha Franklin',
        genre: 'Rhythm and Blues',
        price: 120,
        quantity: 5,
        image: 'https://www.rollingstone.com/wp-content/uploads/2018/06/aretha-franklin-amazing-grace-b83771ad-5542-4a53-9d10-510413cb6a24.jpg',

        info: 'Amazing Grace is the fourth live album by American singer Aretha Franklin. Released on June 1, 1972 by Atlantic Records, it ultimately sold over two million copies in the United States alone, earning a double platinum certification. '

    },
    {
        vinyl_name: 'Whitney Houston',
        artist: 'Whitney Houston',
        genre: 'Rhythm and Blues',
        price: 150,
        quantity: 5,
        image: 'https://img.discogs.com/ZLi0vxQNF3zNEPGS2og4ozPG-lw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-458608-1335752584.jpeg.jpg',
        info: 'Whitney Houston is the debut studio album by American contemporary R&B and pop singer Whitney Houston. It was released on February 14, 1985, by Arista Records.'
    },

    {
        vinyl_name: 'Nina Simone Silk and Soul',
        artist: 'Nina Simone',
        genre: 'Jazz',
        price: 150,
        quantity: 5,
        image: 'https://www.musicdirect.com/Portals/0/Hotcakes/Data/products/23d2564e-86fe-406b-bde5-bc5f8d5e2762/medium/LDS81037_.jpg',
     info: 'Silk & Soul is the thirteenth studio album by American musician Nina Simone released in October 1967 by RCA Victor.'
    },
    {
        vinyl_name: 'Midnight Marauders',
        artist: 'Tribe Called Quest',
        genre: 'Hip-Hop',
        price: 50,
        quantity: 5,
        image: 'https://cdn.shopify.com/s/files/1/1792/0755/products/R-2926537-1494086622-5291_jpeg_800x.jpg?v=1496785336',
        info: 'Midnight Marauders is the third studio album by American hip hop group A Tribe Called Quest, released on November 9, 1993, by Jive Records.'
    },
    {
        vinyl_name: '3 Feet High and Rising',
        artist: 'De La Soul',
        genre: 'Hip-Hop',
        price: 40,
        quantity: 3,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51RBMJNW2AL.jpg',
        info: '3 Feet High and Rising is the debut studio album by American hip hop trio De La Soul. It was released on March 3, 1989, by Tommy Boy Records. '
    },

    {
        vinyl_name: 'The Doors',
        artist: 'The Doors',
        genre: 'Rock',
        price: 170,
        quantity: 3,
        image: 'https://cdn.shopify.com/s/files/1/1103/7726/products/cvr_the-doors-original-album_front_1200_f7840a1b-e734-40d8-a5d2-6f52fee4fe20_1024x1024.jpg?v=1536270057',
        info: 'The Doors is the debut album by the American rock band the Doors, released on January 4, 1967.'
    },

    {
        vinyl_name: 'Blue Train',
        artist: 'John Coltrane',
        genre: 'Jazz',
        price: 350,
        quantity: 3,
        image: 'https://www.dustygroove.com/images/products/c/coltra_john_bluetrain_102b.jpg',
        info: 'Blue Train is a studio album by John Coltrane, released in 1958 on Blue Note Records, catalogue BLP 1577. '

    },


    {
        vinyl_name: 'Permanent Vacation',
        artist: 'Aerosmith',
        genre: 'Rock',
        price: 125,
        quantity: 3,
        image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Aerosmith_-_Permanent_Vacation.JPG',
        info: 'Permanent Vacation is the ninth studio album by American rock band Aerosmith, released on August 21, 1987.'

    }


];

db.sequelize.sync({force: true}).then(function () {
    db.vinyl.bulkCreate(items).then(function (rows) {
        console.log('\n\nINSERTED\n\n');
    }).catch(function (err) {
        console.log('\n\nError:', err);
    });
});