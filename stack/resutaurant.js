function restaurant(n,input){
    let line=1;
    let stack=[]
    for(let i=0;i<n;i++){
        let temp=input[line++].trim().split("").map(Number)
     if(temp[0]==1){
        if(stack.length==0){
            console.log("No food")
        }else{
            let x=stack.pop()
            console.log(x)
        }
     }else{
        let price=temp[1]
        stack.push(price)
     }    
    }
}