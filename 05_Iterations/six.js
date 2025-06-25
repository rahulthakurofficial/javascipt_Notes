// const coding = ["js", "rubby", "java", "python", "cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values)

const mynums = [1,2,3,4,5,6,7]

// const newNums = mynums.filter((num) => num > 4)
// const newNums = mynums.filter( (num)=> {
//     return num > 4
// })
// console.log(newNums)


const newnums = []

mynums.forEach( (num)=>{
    if (num > 4 ){
        newnums.push(num)
    }
})

console.log(newnums)