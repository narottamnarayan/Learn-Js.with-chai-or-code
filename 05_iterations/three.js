// for of

// ["", "", ""]

//[{},{},{}]

const myarr = [1, 2, 3, 4, 5, 6, 7,8]
for (const num of myarr) {
   // console.log(num);
}

const greetings = "hello world!"

for (const greet of greetings) {
   // console.log(`Each chart is ${greet}`)
}

// maps

const map = new Map()
map.set('IN',"india")
map.set('USA',"united state of amercia")
map.set('FR',"france")

// console.log(map)

for (const [key,value] of map) {
    
    console.log(key, ':-', value);
}

const myobj = {
   "game1": "bgmi",
   "game2": "pubg",
   "game3": "battelground"
}

// for (const key of myobj) {
//    console.log(key)
// }