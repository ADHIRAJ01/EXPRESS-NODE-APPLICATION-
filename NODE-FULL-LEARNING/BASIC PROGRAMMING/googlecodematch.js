//take string 
// input string from user , if string = given then print correct string
// if removing extra var then string is possible , print possible after n attempts
// if removing extra string then also same string not possible , need to input extra then print IMPOSSIBLE

function test(n){
    let loop = n;
    for(let i=1;i<=loop;i++){
        let final = prompt("enter");
        console.log("final = ",final);
    }
}

test(2);