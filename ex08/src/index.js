const _ = require('lodash');
 var users = [
     {firstName: "John", lastName: "Doe", age: 24, gender: "male"},
     {firstName: "Jane", lastName: "Doe", age: 5, gender: "female"},
     {firstName: "Jim", lastName: "Carrey", age: 54, gender: "male"},
     {firstName: "Kate", lastName: "Winslet", age: 40, gender: "female"}

 ];
 function getUsers() {
    var output = "";
    for (var i = 0; i < users.length; i++) {
        output += users[i].firstName + " " + users[i].lastName + " is " + users[i].age + ", " + users[i].gender + '\n';
    }
    console.log(output);
    return output;
 }


 function findUser(lastName, gender) {
     try {
        var user = 
        var iFindUser = _.join(_.values(user))
        return user;
     } catch (error) {
        return error;
        console.error();
     }
 }



 getUsers();
 console.log(findUser("John", "male"));

 module.exports = findUser;