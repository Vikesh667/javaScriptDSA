let arr=[12,11,13,5,6]
function insertionSort(){
    let current,i,j
    for(let i=1;i<arr.length;i++){
        current=arr[i]
        j=i-1
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=current
    }

}
insertionSort(arr)
console.log(arr)