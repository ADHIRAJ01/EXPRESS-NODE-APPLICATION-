// PROBLEM 1 - PATTERN a(bc(i)S0)))w(a(bc(i)S)
// MAKE ( and ) equal in number and remove extra 

var s="abc(e((d";
let lt=0,rt=0;
let val=0;
function count(s){
    for (x in s){
        if(s[x]=='('){
            lt+=1;
        }
        else if(s[x]==')'){
            rt+=1;
        }
    }
    console.log("left = ",lt , " right= ",rt);
    val=lt-rt;
    console.log("value = ",val);

}
function remove(s){
    count(s);
    console.log("value = ",val);
    if(val==0){return s;}
    
    else if(val>0){
        while(val>0){
            for(x in s){
                if(s[x]=='('){
                    s.replace(s[x],"");
                    val--;
                    console.log("s[x] = ",s[x])
                }
            }
        }
        console.log(s);
       
    }
}
console.log("original = ",s);
remove(s);