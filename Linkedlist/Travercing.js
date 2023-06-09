class List{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail=this.head
        this.size=1
    }
    appendNode(nodeData){
        let newNode={
            value:nodeData,
            next:null
        };
        this.tail.next=newNode;
        this.tail=newNode
        this.size+=1
    }
    traversing(){
     let count=0;
     let currentNode=this.head
     while(count<this.size){
        console.log(currentNode)
          currentNode=currentNode.next
          count++
     }
    }
}
let list=new List(200)
list.appendNode(400)
list.appendNode(500)
list.appendNode(600)
list.appendNode(700)
list.traversing()
console.log(list)
