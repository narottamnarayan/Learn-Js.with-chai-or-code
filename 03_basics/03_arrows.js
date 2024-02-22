const user = {
    username: "narayan",
    price: 999,

    welcomemessage:function(){
        console.log(`${this.username} welcome to website`)
        // console.log(this);
    }
    
}
// user.welcomemessage();
// user.username = "hitesh"
// user.welcomemessage();

// console.log(this);


// function chai() {
//     username:"narayan"
//     console.log(this.username);

// }
// chai()

// const chai = function(){
//         username:"narayan"
//         console.log(this.username);

// }
// chai()


// const chai = () => {
//         username:"narayan"
//         console.log(this);

// }
// chai()

// const addtwo =(num1, num2)=>{
//     return num1 +num2
// }

// const addtwo = (num1, num2) => num1 + num2     // this will be use in react.js


// const addtwo = (num1, num2) => (num1 + num2)     

const addtwo = (num1, num2) => ({username:"narayan"})     

console.log(addtwo(3, 5));

// const myarr = [2,3,4,5,6,8,1,9]

// myarr.forEach(() => {
//     return myarr[1]
// })

