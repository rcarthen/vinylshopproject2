const db = require('../models');

const userLogins = [

    {
        firstName: 'Sallie',
        lastName: 'Mae',
        email: 'abclol@aol.com',
password: 'yougotthis',
        
    },


    {
        firstName: 'Ruth',
        lastName: 'Anne',
        email: 'lifeisgood@aol.com',
password: 'sogood',
        
    }


];



db.sequelize.sync({force:true}).then(function () {
    db.userlogin.bulkCreate(userLogins).then(function (rows) {
        console.log('\n\nINSERTED\n\n');
    }).catch(function (err) {
        console.log('\n\nError:', err);
    });
});


