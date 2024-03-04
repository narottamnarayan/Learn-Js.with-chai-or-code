const mynums = [1, 2, 3]

//  const newnum = mynums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//   return acc + currval
// },0 )

const newnum = mynums.reduce( (acc,item) => acc +item, 0 )

// console.log(newnum);


const shoppingcart = [
  {item:"js in course",
   price: 2999
  },
  {item:"py in course",
   price: 999
  },
  {item:"java in course",
   price: 1999
  },
  {item:"datascience in course",
   price: 12999
  },
]
const totalcount = shoppingcart.reduce(
  (acc,item) => (acc + item.price), 0
)

console.log(totalcount);