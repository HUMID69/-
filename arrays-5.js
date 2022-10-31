const arr = ['Мохьмад', 'Муслим', 'Анзор', 'Адам', 'Шарип']
let newArr = []
for (let i = 0; i < arr.length; i++) {
    if(newArr[i][0] === "А") {
        newArr.push(arr[i])
    }
}
console.log(newArr)