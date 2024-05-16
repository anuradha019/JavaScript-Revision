const username = prompt('Please enter your Name');
const userAge = parseInt(prompt('Enter your Age'));

console.log(`Name : ${username}`);
console.log(`Age : ${userAge}`);
 
if(userAge >= 5 && userAge <= 17) {
    console.log(`${username}  is  School Student`)
}if(userAge >= 18 && userAge <= 24) {
    console.log(`${username}  is Student`)
} if (userAge >= 25 && userAge <= 59) {
    console.log(`${username}  is working proffesional`)
} if (userAge >= 60 && userAge <= 100) {
    console.log(`${username} is Senior citizen`)
} if (userAge > 101 || userAge < 5) {
    console.log(`${username} is depend on their family`)
} 


   
