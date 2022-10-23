import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  REQUIRED_MESSAGE,
  EMAIL_FORMAT_MESSAGE,
  PHONE_FORMAT_MESSAGE,
  CREATE_USER_SUCCESS_MESSAGE,
} from "common/constants/messages";
import { Input, Modal } from "antd";
import Style from "./style.module.css";
import instace from "api/instance";
import { Link } from "react-router-dom";

function SignUp() {
  const schema = yup.object().shape({
    name: yup.string().required(REQUIRED_MESSAGE),
    email: yup.string().required(REQUIRED_MESSAGE).email(EMAIL_FORMAT_MESSAGE),
    passWord: yup.string().required(REQUIRED_MESSAGE),
    phoneNumber: yup
      .string()
      .required(REQUIRED_MESSAGE)
      .matches(/^[0-9 ]+$/g, PHONE_FORMAT_MESSAGE),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      passWord: "",
      phoneNumber: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const userInfo = {
        id: 0,
        name: values.name,
        email: values.email,
        password: values.passWord,
        phone: values.phoneNumber,
        birthday: "",
        gender: true,
        role: "USER",
        skill: [],
        certification: [],
      };

      signUp(userInfo);
    },
  });

  //Api Functions
  const signUp = async (userInfo) => {
    try {
      const response = await instace.request({
        url: "/api/auth/signup",
        method: "POST",
        data: userInfo,
      });

      if (response.status === 200) {
        showSuccess(CREATE_USER_SUCCESS_MESSAGE);
      }
    } catch (error) {
      console.log(error.response?.data.content);
    }
  };
  //Api Functions

  //Message Boxes
  const showSuccess = (message) => {
    Modal.success({
      content: <span>{message}</span>,
      onOk() {},
    });
  };
  //Message Boxes

  return (
    <div>
      <div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className={Style.signUpForm}>
              <div>
                <h1 className="text-3xl font-semibold mb-10">Join Fiverr</h1>
              </div>
              <div className="flex flex-column flex-wrap">
                <button
                  className={`${Style.btnSocial} ${Style.btnFacebook}`}
                  type="button"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 10.0022C20.0004 8.09104 19.4532 6.2198 18.4231 4.61003C17.393 3.00026 15.9232 1.71938 14.1877 0.919062C12.4522 0.118741 10.5237 -0.167503 8.63053 0.0942223C6.73739 0.355948 4.9589 1.15468 3.50564 2.39585C2.05237 3.63701 0.985206 5.26863 0.430495 7.0975C-0.124217 8.92636 -0.143239 10.8759 0.37568 12.7152C0.894599 14.5546 1.92973 16.2067 3.35849 17.476C4.78726 18.7453 6.54983 19.5786 8.4375 19.8772V12.8922H5.89875V10.0022H8.4375V7.79843C8.38284 7.28399 8.44199 6.76382 8.61078 6.2748C8.77957 5.78577 9.05386 5.33986 9.4142 4.96866C9.77455 4.59746 10.2121 4.31007 10.6959 4.12684C11.1797 3.94362 11.6979 3.86905 12.2137 3.90843C12.9638 3.91828 13.7121 3.98346 14.4525 4.10343V6.56718H13.1925C12.9779 6.53911 12.7597 6.55967 12.554 6.62733C12.3484 6.69498 12.1607 6.80801 12.0046 6.95804C11.8486 7.10807 11.7283 7.29127 11.6526 7.49408C11.577 7.69689 11.5479 7.91411 11.5675 8.12968V10.0047H14.3412L13.8975 12.8947H11.5625V19.8834C13.9153 19.5112 16.058 18.3114 17.6048 16.4999C19.1516 14.6884 20.001 12.3842 20 10.0022Z" />
                  </svg>
                  <span>Continue with Facebook</span>
                </button>

                <button
                  className={`${Style.btnSocial} ${Style.btnGoogle}`}
                  type="button"
                >
                  <svg
                    width={18}
                    height={19}
                    viewBox="0 0 18 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 7.84363V11.307H13.8438C13.6365 12.428 12.9994 13.373 12.0489 14.0064V16.2534H14.9562C16.6601 14.6951 17.641 12.4029 17.641 9.67839C17.641 9.04502 17.5854 8.43176 17.4792 7.84865H9V7.84363Z"
                      fill="#3E82F1"
                    />
                    <path
                      d="M9.00001 14.861C6.65394 14.861 4.67192 13.2876 3.96406 11.1714H0.955627V13.4937C2.43709 16.4142 5.48091 18.4198 9.00001 18.4198C11.432 18.4198 13.4697 17.6206 14.9562 16.2533L12.0489 14.0064C11.245 14.5443 10.2135 14.861 9.00001 14.861Z"
                      fill="#32A753"
                    />
                    <path
                      d="M3.96404 5.45605H0.955617C0.348876 6.66246 0 8.02972 0 9.47238C0 10.915 0.348876 12.2823 0.955617 13.4887L3.96404 11.1714C3.78202 10.6335 3.6809 10.0605 3.6809 9.47238C3.6809 8.88426 3.78202 8.31122 3.96404 7.77336V5.45605Z"
                      fill="#F9BB00"
                    />
                    <path
                      d="M0.955627 5.45597L3.96406 7.77327C4.67192 5.65703 6.65394 4.08368 9.00001 4.08368C10.3197 4.08368 11.5079 4.53608 12.4382 5.42078L15.0219 2.85214C13.4646 1.40948 11.427 0.52478 9.00001 0.52478C5.48091 0.52478 2.43709 2.53043 0.955627 5.45597Z"
                      fill="#E74133"
                    />
                  </svg>

                  <span>Continue with Google</span>
                </button>

                <button
                  className={`${Style.btnSocial} ${Style.btnApple}`}
                  type="button"
                >
                  <svg
                    width={16}
                    height={18}
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6442 9.51027C12.6362 8.03572 13.3031 6.92277 14.6531 6.10313C13.8978 5.02232 12.7567 4.42768 11.25 4.31116C9.82366 4.19866 8.26473 5.14286 7.6942 5.14286C7.09152 5.14286 5.70938 4.35134 4.62455 4.35134C2.38259 4.3875 0 6.13929 0 9.70313C0 10.7558 0.192857 11.8433 0.578571 12.9656C1.09286 14.4402 2.94911 18.0563 4.88571 17.996C5.89821 17.9719 6.61339 17.2768 7.93125 17.2768C9.20893 17.2768 9.87187 17.996 11.0009 17.996C12.9536 17.9679 14.633 14.6813 15.1232 13.2027C12.5036 11.9692 12.6442 9.58661 12.6442 9.51027ZM10.3701 2.91295C11.467 1.61116 11.3665 0.425893 11.3344 0C10.3661 0.05625 9.24509 0.658929 8.60625 1.40223C7.90313 2.19777 7.48929 3.18214 7.57768 4.29107C8.62634 4.37143 9.58259 3.83304 10.3701 2.91295Z"
                      fill="black"
                    />
                  </svg>

                  <span>Continue with Apple</span>
                </button>
              </div>
              <div className={Style.seperator}>
                <span>OR</span>
              </div>
              <div className={Style.inputGroup}>
                <Input
                  name="name"
                  className={Style.txtEmail}
                  placeholder="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
                {formik.errors.name && formik.touched.name && (
                  <span className={Style.errorMessage}>
                    {formik.errors.name}
                  </span>
                )}
              </div>

              <div className={Style.inputGroup}>
                <Input
                  name="email"
                  className={Style.txtEmail}
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
                {formik.errors.email && formik.touched.email && (
                  <span className={Style.errorMessage}>
                    {formik.errors.email}
                  </span>
                )}
              </div>

              <div className={Style.inputGroup}>
                <Input.Password
                  name="passWord"
                  className={Style.txtPassWord}
                  placeholder="Password"
                  value={formik.values.passWord}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input.Password>
                {formik.errors.passWord && formik.touched.passWord && (
                  <span className={Style.errorMessage}>
                    {formik.errors.passWord}
                  </span>
                )}
              </div>

              <div className={Style.inputGroup}>
                <Input
                  name="phoneNumber"
                  className={Style.txtEmail}
                  placeholder="Phone Number"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <span className={Style.errorMessage}>
                    {formik.errors.phoneNumber}
                  </span>
                )}
              </div>

              <div style={{ width: "100%", marginBottom: 20 }}>
                <button className={Style.btnSignUp} type="submit">
                  Sign Up
                </button>
              </div>
              <div style={{ color: "#62646a", fontWeight: 500 }}>
                By joining I agree to receive emails from Fiverr.
              </div>
              <div className={Style.member}>
                Already a member? <Link to="/signin">Sign In</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
