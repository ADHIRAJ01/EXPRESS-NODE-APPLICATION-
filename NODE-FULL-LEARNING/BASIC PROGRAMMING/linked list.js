class Linked_List {
    constructor(){
        this.head=null;
    }
    addnode(val){
        if(this.head==null){
            this.head={
                value: val,
                next: null
            }
        }
        else {
            let node={
                value: val,
                next: null
            }

            let p1=this.head;
            while(p1.next!=null){
                p1=p1.next;
            }
            p1.next=node;

            console.log(p1);
        }
        
        while(this.head.next!==null){
        console.log("head output loop  = " + this.head.value + " next value = " + this.head.next.value);
        this.head=this.head.next;
    }
}
}


var l1=new Linked_List();
l1.addnode(10);
l1.addnode(20);
l1.addnode(50);
l1.addnode(5);