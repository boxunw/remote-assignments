function max (numbers) {
    let maxn = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxn) {
            maxn = numbers[i];
        }
    }
    return maxn;// your code here, for-loop method preferred
}

function findPosition (numbers , target) {
    let pos;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            pos = i;
            break;
        } else {
            pos = -1;
        }
    }
    return pos;// your code here, for-loop method preferred
}
console . log (max ([ 1 , 2 , 4 , 5 ])); // should print 5
console . log (max ([ 5 , 2 , 7 , 1 , 6 ])); // should print 7

console . log (findPosition ([ 5 , 2 , 7 , 1 , 6 ], 5 )); // should print 0
console . log (findPosition ([ 5 , 2 , 7 , 1 , 6 ], 7 )); // should print 2
console . log (findPosition ([ 5 , 2 , 7 , 7 , 7 , 1 , 6 ], 7 )); // should print 2 (the first position) 
console . log (findPosition ([ 5 , 2 , 7 , 1 , 6 ], 8 )); // should print -1