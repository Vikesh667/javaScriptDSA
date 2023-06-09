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
    deleteNode(index){
        let counter=1
        let lead=this.head
        console.log(lead)
        if(index==1){
            this.head.next
        }else{
            while(counter<index-1){
                lead=lead.next
                counter++
            }
            let currentNode=lead.next.next;
            lead.next=currentNode
        }
    }
}
let list=new List(200)
list.appendNode(400)
list.appendNode(500)
list.appendNode(600)
list.appendNode(700)
list.deleteNode(2)
console.log(list)
