//GOAL: get the data in the array (below) to look like: year: "2016",
   // make: "Porsche",
   // model: "911 R",
   // color: "white"



let data = [
    { key: "year", value: "2016" },
    { key: "make", value: "Porsche" },
    { key: "model", value: "911 R" },
    { key: "color", value: "white" },
    { key: "msrp", value: "$184,900" }
]

const doFilter = data.filter(keys => keys.key != "msrp")

console.log(doFilter)

//const doReduce = (accumulator, currentValue) => 

let doReduce = doFilter.reduce(function(currentIndex, currentValue) {
   return currentValue.key, ":", currentValue.value
})

console.log(doReduce)