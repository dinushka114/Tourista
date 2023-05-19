export default function validation(values) {
    const errors = {}
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

    if (values.name === "") {
        errors.name = "Name is required";
    }

    if (values.email === "") {
        errors.email = "Email is required";
    } else if (!mailformat.test(values.email)) {
        errors.email = "Email is not valid";
    }



    if (values.password === "") {
        errors.password = "Password is required";
    } else if (!passwordPattern.test(values.password)) {
        errors.password = "Password is too week";
    }else if(values.password!=values.cpassword){
        errors.password = "Pasword cofirm failed"
    }


    if(values.mobileNo===""){
        errors.mobileNo = "Mobile no is required";
    }

    return errors;
    // alert(values.name)

}