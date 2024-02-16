const marvel_heros = ["Ironman", "spiderman", "thor"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// console.log(marvel_heros);

 const all_heros = marvel_heros.concat(dc_heros)
 const all_new_heros = [...marvel_heros,...dc_heros] // spreadout property//

 // console.log(all_heros);
//   console.log(all_new_heros);

const another_array = [1,2,3,4,[5,6,],7,[8,9,[4,6,5]]]
const new_another_array = another_array.flat(Infinity) // falt property //


// console.log(new_another_array);
// console.log(another_array);

console.log(Array.isArray("narayan","narottam"));
console.log(Array.from("narayan"));
console.log(Array.from({name:"narayan"})); // intresting method of Arrays----//

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

