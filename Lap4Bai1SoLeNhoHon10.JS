// Hàm đếm số lượng số lẻ nhỏ hơn 10 trong mãng
var arr1 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
var count = 0;
function countOddSmallerThan10(){
    for (let i=0; i< arr1.length; i++){
        if (arr1[i]<10 && arr1[i]%2 !==0){
            count++;
        }
    }
    return count
}
console.log(countOddSmallerThan10())

//Phương thức rút gọn Hàm đếm số lượng số lẻ nhỏ hơn 10 trong mãng

var arr2 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
var count2 = 0;
var countOddSmallerThan102 = arr2.filter((a)=> a<10 && a%2!==0).length;
console.log(countOddSmallerThan102)