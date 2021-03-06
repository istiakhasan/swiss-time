import React, { useEffect, useRef, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.config";
import useToken from "../../../../hooks/useToken";
import Loading from "../../../Shared/Loading/Loading";
import Social from "../Social/Social";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import Footer from "../../../Shared/Footer/Footer";
import Menubar from "../../../Shared/Menubar/Menubar";

const Register = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const [token] = useToken(user);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    confirmPasserror: "",
  });
  //handle name
  const handleNameChange = (e) => {
    setNewUser({ ...newUser, name: e.target.value });
  };
  //handle email
  const handleEmailChange = (e) => {
    const isValid = /\S+@\S+\.\S+/.test(e.target.value);
    if (isValid) {
      setNewUser({ ...newUser, email: e.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      const newError = { ...errors };
      newError.emailError = "Invalid Email";
      setErrors(newError);
      setNewUser({ ...newUser, email: "" });
    }
  };

  //handle password
  const handlePasswordChange = (e) => {
    const isValid = /.{6,}/.test(e.target.value);

    if (isValid) {
      setNewUser({ ...newUser, password: e.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setErrors({ ...errors, passwordError: "Password Must be 6 characters" });
      setNewUser({ ...newUser, password: "" });
    }
  };
  const handleConfirmPassword = (e) => {
    if (newUser.password === e.target.value) {
      setNewUser({ ...newUser, confirmPass: e.target.value });
      setErrors({ ...errors, confirmPasserror: "" });
    } else {
      setErrors({ ...errors, confirmPasserror: "Password not match" });
      setNewUser({ ...newUser, confirmPass: "" });
    }
  };

  //handle login
  const handleRegister = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(newUser.email, newUser.confirmPass);
    await updateProfile({ displayName: newUser.name });
  };
  //loading component

  if (loading || sending) {
    return (
      <div className=" h-[40vh] w-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  //error
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
      toast.success("Mail Sent");
    } else {
      toast.error("please enter your email address");
    }
  };

  return (
    <>
      <Menubar />
      <main className=" h-fit py-16 flex justify-center lg:pt-5 login-container mx-auto">
        <Helmet>
          <title>register</title>
        </Helmet>

        <div className="w-[400px] rounded-md h-fit   bg-white border-2  mt-5 py-10 px-8">
          <Social />

          <form onSubmit={handleRegister} className="w-full mt-12">
            <div className="mb-5">
              <input
                required
                onChange={handleNameChange}
                className="w-full outline-none border-2 pl-5 rounded-xl py-3"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-5">
              <input
                ref={emailRef}
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
                onChange={handlePasswordChange}
                className="w-full outline-none border-2 pl-5 rounded-xl py-3"
                type="password"
                placeholder="Password"
              />
              <p className="text-red-600 text-sm font-semibold mt-2">
                {" "}
                {errors.passwordError}
              </p>
            </div>
            <div className="mb-5">
              <input
                onChange={handleConfirmPassword}
                className="w-full outline-none border-2 pl-5 rounded-xl py-3"
                type="password"
                placeholder="Confirm Password"
              />
              <p className="text-red-600 text-sm font-semibold mt-2">
                {errors.confirmPasserror}
              </p>
            </div>
            <div className="mb-4">
              {errorElement}
              <button type="submit" className="button-29 w-full">
                Register
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-900 font-semibold">
                {" "}
                Have a account?
                <button
                  onClick={() => navigate("/login")}
                  className="text-[#5468FF] font-bold"
                >
                  Login
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

export default Register;
