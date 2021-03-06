import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import Social from "../Social/Social";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.config";
import Loading from "../../../Shared/Loading/Loading";
import useToken from "../../../../hooks/useToken";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import Footer from "../../../Shared/Footer/Footer";
import Menubar from "../../../Shared/Menubar/Menubar";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const [signInWithEmailAndPassword, signInUser, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //create jwt token
  const [token] = useToken(signInUser);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  //loading component

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  //handleEmail
  const handleEmailChange = (e) => {
    const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
    if (isEmailValid) {
      setUser({ ...user, email: e.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      const newError = { ...errors };
      newError.emailError = "Invalid Email";
      setErrors(newError);
      setUser({ ...user, email: "" });
    }
  };

  //handle password
  const handlePasswordChange = (e) => {
    const isValid = /.{6,}/.test(e.target.value);

    if (isValid) {
      setUser({ ...user, password: e.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setErrors({ ...errors, passwordError: "Password Must be 6 characters" });
      setUser({ ...user, password: "" });
    }
  };
  const from = location?.state?.from?.pathname || "/";


  //navigate after get token

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);

  //handle login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;
    signInWithEmailAndPassword(email, password);
  };
  if (loading || sending) {
    return (
      <div className=" h-[40vh] w-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  let errorElement;
  if (error) {
    errorElement = (
      <p className="text-red-900 text-sm text-center font-semibold">
        {error.message}
      </p>
    );
  }
  //reset Password

  const resetPassword = async (e) => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email successfully");
    } else {
      toast.error("please enter your email address");
    }
  };

  return (
    <>
      <Menubar />
      <main className="h-fit  py-16 flex justify-center lg:pt-5 login-container mx-auto">
        <Helmet>
          <title>login</title>
        </Helmet>

        <div className="w-[400px] rounded-md h-fit   bg-white border-2  mt-5 py-10 px-8">
          <Social />

          <h1 className=" text-xl text-center font-bold text-[#000002]">
            Login With Email
          </h1>

          <form onSubmit={handleLoginSubmit} className="w-full mt-12">
            <div className="mb-5">
              <input
                ref={emailRef}
                required
                name="email"
                onChange={handleEmailChange}
                className="w-full outline-none border-2 pl-5 rounded-xl py-3"
                type="email"
                placeholder="Email"
              />
              <p className="text-red-600 text-sm font-semibold mt-2">
                {" "}
                {errors.emailError}
              </p>
            </div>
            <div className="mb-5">
              <input
                required
                onChange={handlePasswordChange}
                name="password"
                className="w-full outline-none border-2 pl-5 rounded-xl py-3"
                type="password"
                placeholder="Password"
              />
              <p className="text-red-600 text-sm font-semibold mt-2">
                {" "}
                {errors.passwordError}
              </p>
            </div>
            <div className="mb-4">
              {errorElement}
              <button type="submit" className="button-29 w-full">
                Login
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-900 font-semibold">
                Don't have a account?
                <button
                  onClick={() => navigate("/register")}
                  className="text-[#5468FF] font-bold"
                >
                  Register
                </button>
              </p>
              <p className="text-sm text-gray-900 font-semibold">
                Forget password?
                <button
                  onClick={resetPassword}
                  className="text-[#aa4747] font-bold"
                >
                  Reset
                </button>
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
