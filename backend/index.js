
const sequelize = require('./db/connection')

const User = require('./models/User')
const Role = require('./models/Role')



// Relations User-Role
Role.hasMany(User);
User.belongsTo(Role);



sequelize
    .sync({force: true})
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });

    //  TESSSSSSSSST