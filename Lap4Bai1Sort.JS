// Hàm sắp xếp mảng số nguyên tăng dần
var arr1 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];

function sortAscending(){
    for (let i=0; i< arr1.length-1; i++){
        for (let j=i+1; j <arr1.length; j++){
            if (arr1[i] > arr1[j]){
                
                arr1[i] = arr1[j]

                arr1[j] =arr1[i]
            }
            return arr1
        }
        return arr1
    }
    return arr1
}
console.log(sortAscending())

//Phương thức rút gọn Hàm sắp xếp mảng số nguyên tăng dần

var arr2 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
var arr3 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
var sortAscending2 = arr2.sort((a,b)=>a-b);
var sortDescending2 = arr3.sort((a,b)=>b-a);
//console.log(sortAscending2);
//console.log(sortDescending2);