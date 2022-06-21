var name='name here';
var pass='password here';


function onSubmit(event){
    event.preventDefault();
    console.log("email is ",this.name , " password is ",this.pass);
}