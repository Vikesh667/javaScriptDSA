let data=[30,12,45,78,2,9,5,50]
let find=2
let pos=undefined
for(let i=0;i<=data.length;i++){
       if(data[i]==find){
           pos=i
           break
       }
}
console.log(pos)
