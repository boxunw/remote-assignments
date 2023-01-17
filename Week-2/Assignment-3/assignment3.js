function count(input) { 
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        if (obj[input[i]]) {
            obj[input[i]] += 1;
        } else {
            obj[input[i]] = 1;
        }  
    }
    return obj;// your code here 
}
let input1 = ["a" , "b" , "c" , "a" , "c" , "a" , "x"]; 
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey (input) {
    let obj2 = {};
    for (let i = 0; i < input.length; i++) {
        if (obj2[input[i].key]) {
            obj2[input[i].key] += input[i].value;
        } else {
            obj2[input[i].key] = input[i].value;
        }   
    } 
    return obj2;
} // your code here

let input2 = [ 
    { key: "a" , value: 3 },
    { key: "b" , value: 1 },
    { key: "c" , value: 2 },
    { key: "a" , value: 3 }, 
    { key: "c" , value: 5 }, 
]; 

console.log (groupByKey( input2 )); 
// should print {a:6, b:1, c:7}