const _ = require('lodash');

 var users = [
     {id: 1, firstName: "John", lastName: "Doe", age: 24, gender: "male"},
     {id: 2, firstName: "Jane", lastName: "Doe", age: 5, gender: "female"},
     {id: 3, firstName: "Jim", lastName: "Carrey", age: 54, gender: "male"},
     {id: 4, firstName: "Kate", lastName: "Winslet", age: 40, gender: "female"}

 ];

 function getUsers() {
    var output = ""; 
    for (var i = 0; i < users.length; i++) {
        output += users[i].id + " - " + users[i].firstName + " " + users[i].lastName + " is " + users[i].age + ", " + users[i].gender + '\n';
     }
     return output;
 }

 function findUserById(id) {
     try {
         var user = _.find(users, {id});
         var iFindUser = _.toString(`${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`)

        return iFindUser;
     } catch (error) {
         return "Cannot read property 'id'";
         
    }
 }
 getUsers();
 console.log(findUserById(3));
 console.log(findUserById(5));
 console.log(findUserById(4));
 module.exports = findUserById