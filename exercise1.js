//GOAL:
// {
//    name: "jared",
//    age: "old",
//    food: ["bacon", "pizza", "wings"],
//    pet: ["dog", "fish"]
// }


let data = [
{
   key: "name", value: "jared"
},
{
   key: "age", value: "old"
},
{
   key: "food", value: "bacon"
},
{
   key: "food", value: "pizza"
},
{
   key: "pet", value: "dog"
},
{
   key: "food", value: "wings"
},
{
   key: "pet", value: "fish"
}]

let doReduce = data.reduce(function(accumulator, currentValue) {
   //console.log("accumulator: ", accumulator)
   //console.log("currentValue: ", currentValue)
   if (accumulator[currentValue.key] != undefined){
      if ( Array.isArray(accumulator[currentValue.key])) {
         accumulator[currentValue.key].push(currentValue.value)
      }
      else {
         accumulator[currentValue.key] = [accumulator[currentValue.key], currentValue.value]
      }
   }
   else
   accumulator[currentValue.key] = currentValue.value

   return accumulator
   
}, {})

// shorter way of doing reduce (but everything is in an array of its own)

// let doReduce = doFilter.reduce(function(accumulator, currentValue) {
//    let currKey = currentValue.key;
//    if (!Array.isArray(accumulator[currKey])){
//       accumulator[currKey] = [];
//    }
//    accumulator[currKey].push(currentValue.value);
//    return accumulator;
// }, {})

console.log(doReduce)