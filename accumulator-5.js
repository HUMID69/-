const arr = [-1, -2, -3, -4, 5, 6, 7, 8, 9]


let newArr = []

for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        newArr.push(arr[i])
    }
} 

console.log(newArr)
