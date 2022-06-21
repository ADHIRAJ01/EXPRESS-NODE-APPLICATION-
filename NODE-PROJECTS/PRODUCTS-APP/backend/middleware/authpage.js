// LIST OF ALL USERS WHO HAVE THE AUTHENTICTION TO VISIT THIS PAGE
//getting category from link then req.body.category to validate if his category is present in list or NOT

//eg. passing MANAGERS , CEO  inside permission then from category if it is either then next else ( student , etc) then not proviing next function.

const authPage = (permission) => {
    return (req , res , next) => {
        console.log(req.body , " inside the body ");
        const userRole = req.body.position;
        console.log(userRole + "is the role");
        if(permission.includes(userRole)) {
            console.log(" SUCCESSFULLY PERMITTED ");
            next();
        }
        else {
            return res.status(401).json(" USER NOT PERMITTED ");
        }
    }
};


const authCourse = (req, res, next) => {

};

module.exports = {authPage, authCourse};


//example the list of data  for reference purpose
// ({
//     name: "Adhiraj",
//     "age": 21,
//     "role": "student",
//     "courses": [1,4,2,401]
// })