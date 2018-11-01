const db = require('../models');

const userLogins = [

    {
        username: 'Sallie Mae',
        email: 'abclol@aol.com',
password: 'yougotthis',
        
    },


    {
        username: 'Ruth Anne',
        email: 'lifeisgood@aol.com',
password: 'sogood',
        
    }


];



db.sequelize.sync().then(function () {
    db.userlogin.bulkCreate(userLogins).then(function (rows) {
        console.log('\n\nINSERTED\n\n');
    }).catch(function (err) {
        console.log('\n\nError:', err);
    });
});


