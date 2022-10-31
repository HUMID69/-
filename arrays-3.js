const arr = [-1, -2, 5, 2, 4, 6, 7, 3, -8, 9]
let newArr = []
for (let i = 0; i <arr.length; i++) {
    if (arr[i] < 0) {
        newArr.push(arr[i])
    }    
}
console.log(newArr)
