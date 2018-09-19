//Given a sequence of integers as an array, 
//determine whether it is possible to obtain 
//a strictly increasing sequence by removing 
//no more than one element from the array.

let almostIncreasingSequence = sequence => {
    let count = 0
    let max = Math.pow(-10, 5)
    let secondMax = Math.pow(-10, 5)
    
    sequence.map(elem => {
        if(elem > max) {
            secondMax = max
            max = elem 
        } else if(elem > secondMax) {
            max = elem
            count++
            
        }else{
            count++
        }
    })
    
    return count <= 1
}