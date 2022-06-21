function recursion(n){
    if(n==1){
        return 1;
    }
    else{
        return n*recursion(n-1);
    }
}
console.log(recursion(5));

var stack=[];
stack.push(2,10,3,22,14);
console.log(" after pushing "+stack);
console.log(" popping "+ stack.pop())
// console.log(stack.size());
// console.log(stack.isFull());

let que = new Queue();
que.enqueue("hello");
que.enqueue("world");
console.log("queue is "+que);