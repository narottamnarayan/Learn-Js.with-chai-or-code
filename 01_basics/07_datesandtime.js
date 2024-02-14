//  dates---------- //

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.getFullYear());
// console.log(myDate.valueOf());
// console.log (myDate.getMilliseconds());

// let anOtherdate = new Date(2023, 7 ,26 , 4 ,5);
// console.log(anOtherdate.getDate());
// console.log(anOtherdate.getMilliseconds());
// console.log(anOtherdate.toLocaleString());

let myCreateDate = new Date("2023-01-22")
// console.log(myCreateDate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);

// console.log(myCreateDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());

// `${newDate.getDate()}` and_the TimeRanges;

newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: "getDate"
})