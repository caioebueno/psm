module.exports = function(sequelize, DataTypes) {

    var Users = sequelize.define("Users", {
        email: { //TABLE ROW
           type: DataTypes.STRING, //EXPECTING A STRING {COLUMN STRUCTURE}
           AllowNull: false, //THIS COLUMN CANNOT BE EMPTY
           unique: true
         },
         password: { //TABLE ROW
           type: DataTypes.STRING, //EXPECTING A BOOLEAN {COLUMN STRUCTURE}
           AllowNull: false //THIS COLUMN WILL HAVE A DEFAULT VALUE OF FALSE
         },
         name: { //TABLE ROW
          type: DataTypes.STRING, //EXPECTING A BOOLEAN {COLUMN STRUCTURE}
          AllowNull: false //THIS COLUMN WILL HAVE A DEFAULT VALUE OF FALSE
        },
        balance: { //TABLE ROW
          type: DataTypes.INTEGER, //EXPECTING A BOOLEAN {COLUMN STRUCTURE}
          defaultValue: 0 //THIS COLUMN WILL HAVE A DEFAULT VALUE OF FALSE
        }
       });
       return Users; //RETURN THE TABLE
     };