export const checkValidData = (email, password)=>{
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailValid = emailRegex.test(email);

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const isPasswordValid = passwordRegex.test(password);

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password must contain at least 8 characters. Password must contain at least 1 small letter, 1 capital letter, 1 number and 1 special symbol.";

    return null;
}