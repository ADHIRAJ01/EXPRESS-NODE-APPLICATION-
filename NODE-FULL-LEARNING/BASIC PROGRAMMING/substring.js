var lenOfString = (s1)=>{
    let str1 = s1 , str2 = '' ,str3='', count = 0 , sum = 0;  
    let s = str1.replace(" ",'_');
    // console.log(" s is = ",s);
    
    for (let i in s){
        let letter = s[i];
        // console.log(" letter = ",letter);
        let found = 0 , sum= 0;
        for(let j in str2){
            if(letter == str2[j]){
                found=1;
            }
        }

        if(found === 0){
            str2+=s[i];
            // console.log(" found = ",str2);
        }
        else {
            // console.log(" str2 = ",str2);
            sum = str2.length;
            if(sum> count){
                count = sum;
            }
            // console.log("str2 = ",str2);
            str2=s[i];
        }
        if(str2.length>str3.length){
            str3=str2;
        }
    }
    // count = str3.length;
    console.log("largest substring = ", count);
    

}

lenOfString(" ");


// var aa = 'abc def _ ghi';
// console.log("length = ",aa.length);