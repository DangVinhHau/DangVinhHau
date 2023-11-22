function sum(...abc){
    let sum = 0;
    for (let a of abc){
        sum+=a;
    }
    return sum;    
}
let x = sum(1,2,3,4,5)
console.log(x)
