// Hàm tính tổng các giá trị dương trong mãng
var arr1 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
var sum = 0;
function sumEvenPositiveNumbers(){
    for (let i=0; i< arr1.length; i++){
        if (arr1[i]>0 && arr1[i]%2 ===0){
            sum = sum + arr1[i];
        }
    }
    return sum
}
console.log(sumEvenPositiveNumbers())

//Phương thức rút gọn Hàm tính tổng các giá trị dương trong mãng

var arr2 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
var sum2 = 0;
var sumEvenPositiveNumbers2 = arr2.filter((a)=> a>0 && a%2===0).reduce((sum2, num) => sum2 + num);
console.log(sumEvenPositiveNumbers2)