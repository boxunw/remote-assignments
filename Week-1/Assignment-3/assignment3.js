function countAandB(input) {
    let x = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'a' || input[i]== 'b') {
            x = x + 1;
        }
    }
    return x //your code here
}

function toNumber(input) {
    let y = []//your code here
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'a') {
            y.push(1)
        } else if (input[i] == 'b'){
            y.push(2)
        } else if (input[i] == 'c'){
            y.push(3)
        } else if (input[i] == 'd'){
            y.push(4)
        } else {
            y.push(5)
        }
    }
    return y
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); //should print 4 (3 'a' letters and 1 'b' letter)
console.log(toNumber(input1)); //should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); //should print 0
console.log(toNumber(input2)); //should print [5, 4, 3, 4, 5]