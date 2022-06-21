function bSearch(array , key){
    let start=0;
    let end = array.length;
    let pos=0;
    let found = false;
    // let mid=Math.floor((end+start)/2);
    console.log("round = "+pos +"start "+ start +"end "+ end);

    while(start<=end){
        let mid = Math.floor((end+start)/2);
        console.log("round loop = "+pos +" start "+ start +"end "+ end+ " mid= "+mid);


        if(array[mid]===key){
            console.log("found key " + key +" at pos: "+pos);
            found=true;
            // break
        }

        else if(key<array[mid]){
            console.log("les " + key +" at pos: "+pos);
            end=mid-1;
            pos+=1;
            
        }

        else {
            console.log("large " + key +" at pos: "+pos);
            start=mid+1;
            pos+=1;
        }

    }
    if(found==false){
    console.log("not found");
    }
}


let nums = [];
for (i=0;i<3000;i++){ 
    nums[i]=i;
}
console.log(nums);

bSearch(nums , 122);