var isValid = function(s) {
    let stack=[]
    for(let i=0;i<s.length;i++){
        let c=s[i]
         switch(c){
            case "(":
            stack.push( ")" )
            break;
            case "{":
            stack.push("}")
            break
            case "[":
            stack.push("]")
            break
            default:
            let remove=stack.pop()
            if(c!==remove){
            return false
            }
            
        }
          
    }
     return stack.length===0
 
};
let s= "()[]{}"
console.log(isValid(s))