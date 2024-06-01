function Validation(values) {
    console.log("girdi")
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if(values.name === "") {        
        error.name = "Name should not be empty"
    }
    else {
        error.name = ""
    }

    if(values.email === "") {        
        error.email = "Email should not be empty"
    }     
    else if(!email_pattern.test(values.email)) {        
        error.email = "Email Didn't match"
    }
    else {
        error.email = ""
    }

    if(values.password === "") {        
        error.password = "Password should not be empty"
    }     
    else if(!password_pattern.test(values.password)) {    
        console.log(values.password);    
        error.password = "Lütfen düzgün şifre giriniz."
        console.log(123);
    }
    else { 
        error.password = ""
    }    
    return error;
}

export default Validation;
