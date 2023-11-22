// Hàm tìm giá trị nguyên dương nhỏ nhất trong mảng
var arr1 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
var min = arr1[0];
function findMinPositiveNumbers(){
    for (let i=0; i< arr1.length; i++){
        if (arr1[i] >0 && arr1[i]<min){
            min=arr1[i];
        }
    }
    return min
}
console.log(findMinPositiveNumbers())

//Phương thức rút gọn Hàm tìm giá trị nguyên dương nhỏ nhất trong mảng

var arr2 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
var min2 = arr2[0];
var findMinPositiveNumbers2 = arr2.filter(a=>a<min2 && a>0).sort((a,b)=>a-b);
console.log(findMinPositiveNumbers2[0])