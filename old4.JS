function uocsochan(n){
    
    let count = 0
    for (let i=0; i<n; i++){
        
        if (i % 2 === 0 && n % i ===0 ){
        count++
        }
    }   

    return count
}

console.log(uocsochan(20));



