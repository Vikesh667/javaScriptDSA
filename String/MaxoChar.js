let s="hello"
let obj={}
let maxKey=''
for(let i=0;i<s.length;i++){
    let key=s[i]
    if(!obj[key]){
        obj[key]=0
    }
    obj[key]++
    if(maxKey=='' || obj[key]>obj[maxKey]){
        maxKey=key
    }
}
console.log(maxKey)

