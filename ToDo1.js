//1. Push Front
//Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
// var array = [8,6,7,5];
// function pushFront(arr, val){
//     for (var x = arr.length - 1; x >= 0; x--){
//         arr[x+1] = arr[x];
//     }
//     arr[0] = val;
//     console.log(arr);
// }
// pushFront(array, 2)


//2. Pop Front
//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
// var array = [9, 7, 4, 2];
// function popFront(arr){
//     var temp = arr[0]     
//     console.log(temp) 
// }
// popFront(array);


//3. Insert At
//Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. 
//You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
// given an array, index and val
// place the value into array at given index 
// var array = [9, 1, 3, 0];
// function insertAt(arr, index, val){
//     for (var x = 0; x <= index; x++){
//     arr[index] = val;
//     }
//     console.log(arr);
// }
// insertAt(array, 2, 5);

//4. Remove At
//Given an array and an index into array, remove and return the array value at that index. 
//Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

// var array = [4, 0, 1, 3, 5];
// function removeAt(arr, idx){
//     var val = arr[idx];
//     for (var x = idx; x < arr.length - 1; x++){
//         var tempArr = arr[x];
//         arr[x] = arr[x + 1];
//         arr[x+1] = arr;        
//     }
//     arr.pop();
//     return val;
// }
// console.log(removeAt(array, 2));
// console.log(array);


//5. Swap Pairs
//Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. 
//For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
//As with all array challenges, do this without using any built-in array methods.

// given an array swap pairs
// declare function and add placeholder
// loop through array
    //swap values
// return swapped array

// function pairSwap(arr){
//     for (var x = 0; x < arr.length -1; x+=2){
//         var temp = arr[x];
//         arr[x] = arr[x + 1]
//         arr[x + 1] = temp
//     }
//     return arr
// }
// console.log(pairSwap([1,2,3,4]))




//6. Remove Duplicates
//Sara is looking to hire an awesome web developer and has received applications from various sources. 
//Her assistant alphabetized them but noticed some duplicates. 
//Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. 
//As with all these array challenges, do this without using any built-in array methods.

// var array = [8, 5, 9, 2, 1, 6];
// function removeDuplicates(arr){
//     var idx = 0;
//     var count = 1;
//     while (count < arr.length){
//         if (arr[idx] == arr[count]){
//             count++;
//         } else {
//             arr[idx + 1] = arr[count];
//             idx++;
//             count++;
//         }
//     }
//     for (var x = 0; x < idx - 1; x++){
//         arr.pop();
//     }
//     return arr;
// }
// console.log(removeDuplicates(array));