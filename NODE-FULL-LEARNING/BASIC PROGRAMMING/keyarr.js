// LOOPING THROUGH ELEMENTS IN ARRAY USING KEY VALUE PAIR 

const arr = {
    name: "adhiraj",
    role :"fsd",
    type :"fresher"
};

console.log(arr);
console.log(delete arr.type);
console.log(arr);

console.log("keys = ",Object.keys(arr));

for (let key in arr) {
    console.log("key is = "+key + " "+arr[key]+ " "+arr.key);
}