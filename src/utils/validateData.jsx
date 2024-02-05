export const checkValidData = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const isEmailValid = emailRegex.test(email);

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const isPasswordValid = passwordRegex.test(password);

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid)
    return "Password must contain at least 6 characters, at least 1 letter, 1 capital letter and 1 number.";

  return null;
};
