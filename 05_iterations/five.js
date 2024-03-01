const coding = ["js", "java", "python", "cpp", "ruby"]


// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((item)=>{
//   console.log(item);
// })

// function printMe(item) {
// console.log(item)
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) =>{
//    console.log(item,index,arr);
// })


const mycoding = [
    {
        languageName:"javascript",
        language:"js",
    },
    {
        languageName:"java",
        language:"java",
    },
    {
        languageName:"python",
        language:"py",
    }
]

mycoding.forEach( (item)=>{
    console.log(item.languageName);
})