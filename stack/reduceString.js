let str="aaabccdddeefasdf"

function reduceString(str){
    let stack=[]
    for(let i=0;i<str.length;i++){
        if(stack.length==0){
            stack.push(str[i])
        }else{
            if(stack[stack.length-1]==str[i]){
                stack.pop()
            }else{
                stack.push(str[i])
            }
        }
    }
    if(stack.length==0){
        return "Empty String"
    }else{
      return  stack.join("")
    }
}
console.log(reduceString(str))