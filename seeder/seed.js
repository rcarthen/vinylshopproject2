const db = require('../models/');

const items = [

    {
        vinyl_name: 'The Beatles Yellow Submarine',
        artist: 'The Beatles',
        genre: 'Rock',
        price: 8000,
        quantity: 5,
        image: 'https://target.scene7.com/is/image/Target/GUEST_85c13716-9d6c-4a16-a87b-75623e46afad?wid=488&hei=488&fmt=webp'
    },

    {
        vinyl_name: 'Survival',
        artist: 'Bob Marley',
        genre: 'Reggae',
        price: 35,
        quantity: 5,
        image: 'https://marketplace.bartercard.co.nz/content/images/thumbs/0077973_bob-marley-the-wailers-survival-vinyl-lp_580.jpeg'
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
        image: 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/46726774_012_b?$xlarge$&hei=900&qlt=80&fit=constrain'
    },
    {
        vinyl_name: 'Whitney Houston',
        artist: 'Whitney Houston',
        genre: 'Rhythm and Blues',
        price: 150,
        quantity: 5,
        image: 'https://img.discogs.com/ZLi0vxQNF3zNEPGS2og4ozPG-lw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-458608-1335752584.jpeg.jpg'
    },

    {
        vinyl_name: 'Nina Simone Silk and Soul',
        artist: 'Nina Simone',
        genre: 'Jazz',
        price: 150,
        quantity: 5,
        image: 'https://www.musicdirect.com/Portals/0/Hotcakes/Data/products/23d2564e-86fe-406b-bde5-bc5f8d5e2762/medium/LDS81037_.jpg'
    }, 
    {
        vinyl_name: 'Midnight Marauders',
        artist: 'Tribe Called Quest',
        genre: 'Hip-Hop',
        price: 50,
        quantity: 5,
        image: 'https://cdn.shopify.com/s/files/1/1792/0755/products/R-2926537-1494086622-5291_jpeg_800x.jpg?v=1496785336'
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
        image: 'https://cdn.shopify.com/s/files/1/1103/7726/products/cvr_the-doors-original-album_front_1200_f7840a1b-e734-40d8-a5d2-6f52fee4fe20_1024x1024.jpg?v=1536270057'
    },

    {
        vinyl_name: 'Blue Train',
        artist: 'John Coltrane',
        genre: 'Jazz',
        price: 400,
        quantity: 3,
        image: 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/46726774_012_b?$xlarge$&hei=900&qlt=80&fit=constrain'
    }




];


db.sequelize.sync({}).then(function () {
    db.vinyl.bulkCreate(items).then(function (rows) {
        console.log('\n\nINSERTED\n\n');
    }).catch(function (err) {
        console.log('\n\nError:', err);
    });
});