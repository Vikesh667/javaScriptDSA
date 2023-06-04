// let arr=[20,12,53,3,42,2,0,4]
// function selectionSort(arr){
//     let mid;
//     for(let i=0;i<arr.length;i++){
//         mid=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[mid]){
//                 mid=j
//             }
//         }
//         let temp=arr[mid]
//         arr[mid]=arr[i]
//         arr[i]=temp
//     }
// }
// selectionSort(arr)
// console.log(arr)
let arr=[20,12,53,3,42,2,0,4]
function selectionSort_Des(arr){
    let mid;
    for(let i=0;i<arr.length;i++){
        mid=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[mid]){
                mid=j
            }
        }
        let temp=arr[mid]
        arr[mid]=arr[i]
        arr[i]=temp
    }
}
selectionSort_Des(arr)
console.log(arr)
