//Hàm liệt kê các số nguyên âm trong mảng
var arr = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
var arrlistOutNegativeNumbers =[];
function listOutNegativeNumbers(){
    for (let i=0; i< arr.length; i++){
        if (arr[i] < 0){
            arrlistOutNegativeNumbers.push(arr[i]);
        }
    }
    return arrlistOutNegativeNumbers;
}
console.log(listOutNegativeNumbers())
        

//Phương thức rút gọn Hàm liệt kê các số nguyên âm trong mảng
var arr1 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
var arrlistOutNegativeNumbers1 =[];
function listOutNegativeNumbers1(){
    return arr1.filter((a) => a <0); //a trong phương thức này được hiểu là phần tử phải không Thầy?//
}
console.log(listOutNegativeNumbers1())


