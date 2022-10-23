import { Input, DatePicker, Switch } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from "./style.module.css";
import moment from "moment";
import instace from "api/instance";
import { fetchUserInfoAction } from "features/authentication/action";
import { getToday } from "common/ultils/date";

function UserInfoForm(props) {
  const userInfo = useSelector((state) => state.authen.userInfo);
  const birthDay =
    userInfo.birthday === "string" || userInfo.birthday === ""
      ? moment(getToday(), "DD/MM/YYYY")
      : userInfo.birthday;
  console.log(birthDay);
  const formik = useFormik({
    initialValues: {
      name: userInfo.name,
      phone: userInfo.phone,
      birthday: birthDay,
      gender: userInfo.gender,
    },
    onSubmit: (values) => {
      const newUserInfo = { ...userInfo };
      newUserInfo.name = values.name;
      newUserInfo.phone = values.phone;
      newUserInfo.birthday = values.birthday;
      newUserInfo.gender = values.gender;
      updateUserInfo(newUserInfo);
    },
  });
  const userId = localStorage.getItem("id");
  const dispatch = useDispatch();

  //Api Functions
  const updateUserInfo = async (newUserInfo) => {
    try {
      const response = await instace.request({
        url: `/api/users/${userId}`,
        method: "PUT",
        data: newUserInfo,
      });

      if (response.status === 200) {
        dispatch(fetchUserInfoAction(userId));
      }

      props.handleCloseModel();
    } catch (error) {
      console.log(error.response.data.content);
    }
  };
  //Api Functions

  //Events
  const handleChangeBirthDay = (date, dateString) => {
    formik.setFieldValue("birthday", dateString);
  };
  const handleChangeGender = (checked) => {
    formik.setFieldValue("gender", checked);
  };
  //Events

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col justify-around space-y-5">
          <div>
            <span className="block mb-3">Name</span>
            <Input
              id="name"
              value={formik.values.name}
              placeholder="Your name"
            ></Input>
          </div>

          <div>
            <span className="block mb-3">Phone</span>
            <Input
              id="phone"
              value={formik.values.phone}
              placeholder="Your phone"
            ></Input>
          </div>

          <div>
            <span className="block mb-3">Birthday</span>
            <DatePicker
              value={moment(formik.values.birthday, "DD/MM/YYYY")}
              className="w-full"
              format="DD/MM/YYYY"
              onChange={handleChangeBirthDay}
            />
          </div>

          <div>
            <span className="mr-3">Male</span>
            <Switch
              className={Style.genderSwitch}
              checked={formik.values.gender}
              onChange={handleChangeGender}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              className={`${Style.btn} ${Style.btnCancel}`}
              type="button"
              onClick={() => {
                props.handleCloseModel();
              }}
            >
              Cancel
            </button>
            <button className={`${Style.btn} ${Style.btnUpdate}`} type="submit">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserInfoForm;
