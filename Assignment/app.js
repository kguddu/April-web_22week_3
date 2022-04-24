// const x = [11,21,31,41,51] 
// const y = [1,2,3,4,5] 
// const z = [8,7,6,5,3]

// make a function which will devide each element of array by 2

// result = [1,2,3,4,5]

function devide(sum){
    let x = sum/2
    return x
}




function devideElementBy2(arr){
    let y = []
    for (let i = 0; i < arr.length ; i++) {
        const answer = devide(arr[i])
        y.push(answer)
    }
    return y
}



 const x = [11,21,31,41,51]
 const y = [1,2,3,4,5]
 const z = [8,7,6,5,3]
 

 const result1 =devideElementBy2(x)
 const result2 =devideElementBy2(y)
 const result3 =devideElementBy2(z)
 

 console.log(result1)
 console.log(result2)
 console.log(result3)
 

 
 