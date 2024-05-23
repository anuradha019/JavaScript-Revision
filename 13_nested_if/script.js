const username = Anuradha;
const userAge = 26;

console.log(`Name : ${username}`);
console.log(`Age : ${userAge}`);
 
if(userAge >= 0 && userAge <= 4) {
    console.log(`${username}  is  a Kid`)
} else if(userAge >= 5 && userAge <= 17) {
    console.log(`${username}  is  School Student`)
}else if(userAge >= 18 && userAge <= 24) {
    console.log(`${username}  is Student`)
}else if (userAge >= 25 && userAge <= 59) {
    console.log(`${username}  is working proffesional`)
}else if (userAge >= 60 && userAge <= 120) {
    console.log(`${username} is Senior citizen`)
}else if (userAge >= 121) {
    console.log(`${username} is now mortal`)
} else { 
    console.log('Enter valid age')
} 
console.log('Program Ended!!');
   
