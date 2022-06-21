.post((req, res)=>{
    try {
        const pwd = req.body.password;
        const cpwd = req.body.confirmpassword;
        console.log("hashing = ",hash(pwd));
        console.log(req.body);
        if( pwd === cpwd){
            console.log("true");

            // ading value to database
            const adddata = new registerSch({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                gender: req.body.gender,
                age: req.body.dob,
                password: pwd,
                confirmPassword: cpwd,
               

            })

    //         //save data in database
            try{
                registerSch = adddata.save();
                res.status(200).render("login page.html");

            //CHECK IF DATA IS PRESENT 
                // if(req.body.email == unique){
                // }
                // else{
                //     res.send("email alrdy present");
                // }
            }catch(err){
                res.status(401).send(" error values alrdy present" );
            }

        }else{
            console.log("error");
            // console.log(pwd , " ", pswd);
            res.status(401).send("password doesn't match");
        }

    } catch (err) {
        res.status(401);
        res.send("error occured "); 
    }
})