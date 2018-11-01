const db = require('../models');

const items = [

        {
            product_name: 'The Beatles Yellow Submarine',
            department_name: "Vinyls",
            price: 6000,
            quantity: 3,
            image: 'https://target.scene7.com/is/image/Target/GUEST_85c13716-9d6c-4a16-a87b-75623e46afad?wid=488&hei=488&fmt=webp'
        },

        {
            product_name: 'Record Player',
            department_name: 'Vinyl Technology',
            price: 150,
            quantity: 5,
            image:'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/46726774_012_b?$xlarge$&hei=900&qlt=80&fit=constrain'
        },

        {
            product_name: 'Solid Teak Record Cabinet',
            department_name: 'Vinyl Organization',
            price: 300,
            quantity: 11
        },

        {
            product_name: 'Three Little Birds T-Shirt',
            department_name: 'Apparel',
            price: 25,
            quantity: 100,
            image: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjStsqIobHeAhXSmuAKHQmjAL4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.rastaempire.com%2Fp-4727-bob-marley-groovy-one-love-black-t-shirt-youth.aspx&psig=AOvVaw1uMUTqGY0kOOVTTfkqB7H2&ust=1541095165960763'
        },

        {
            product_name: 'Purple Rain',
            department_name: "Vinyls",
            price: 250,
            quantity: 3
        },
        {
            product_name: 'Mama Miriam Makeba T-Shirt',
            department_name: "Apparel",
            price: 25,
            quantity: 100
        },

        {
                product_name: 'Rose Gold Vinyl Frame',
                department_name: 'Vinyl Organization',
                price: 25,
                quantity: 100
            }, {
                product_name: 'Elvis Presley Jailhouse Rock',
                department_name: 'Vinyls',
                price: 25,
                quantity: 100
            }, {
                product_name: 'LP Vinyl Record UltraSonic Cleaner',
                department_name: 'Vinyl Technlogy',
                price: 25,
                quantity: 100
            },

            {
                product_name: 'KISS Hoodie',
                department_name: 'Apparel',
                price: 25,
                quantity: 100
            },

            {
                product_name: 'Led Zepplin',
                department_name: 'Vinyls',
                price: 25,
                quantity: 100
            }




        ];


        db.sequelize.sync({
            force: true
        }).then(function () {
            db.products.bulkCreate(items).then(function (rows) {
                console.log('\n\nINSERTED\n\n');
            }).catch(function (err) {
                console.log('\n\nError:', err);
            });
        });



        // db.userlogin.create({
        //     username: 'Sallie Mae',
        //     email: 'abclol@aol.com',
        //   password: 'yougotthis',
        // }).then(function(response) {
        //     console.log('Data added!')
        // }).catch(function(error) {
        //     console.log('Error', error);
        // });
      
      