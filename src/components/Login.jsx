/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validateData";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch;

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLogin = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isLoginForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName })
            );
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode + "-" + errorMessage}`);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode + "-" + errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        ></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/4 p-12 bg-black bg-opacity-80 absolute my-52 mx-auto left-0 right-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginForm && (
          <input
            className="p-2 my-2 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
            ref={name}
          />
        )}
        <input
          className="p-2 my-2 w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
          ref={email}
        />
        <input
          className="p-2 my-2 w-full bg-gray-700"
          type="password"
          placeholder="Password"
          ref={password}
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-4 w-full bg-red-700 rounded-sm"
          onClick={handleLogin}
        >
          {isLoginForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="cursor-pointer underline italic text-blue-400"
          onClick={toggleForm}
        >
          {isLoginForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>

        <div className="text-gray-400">
          <h1 className="text-lg mt-5">
            Casually browsing? Use the credentials below
          </h1>
          <p className="text-sm mt-2">Email - guest@example.com</p>
          <p className="text-sm mt-2">Password - pass1234</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
