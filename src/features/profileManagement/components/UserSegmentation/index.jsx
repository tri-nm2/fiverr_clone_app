import React, { useState, useRef, useEffect } from "react";
import { EditOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import Style from "./style.module.css";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import instace from "api/instance";
import { fetchUserInfoAction } from "features/authentication/action";

function UserSegmentation() {
  const userInfo = useSelector((state) => state.authen.userInfo);
  const userId = localStorage.getItem("id");
  const [userLanguages, setUserLanguages] = useState(["English", "Vietnamese"]);
  const [openLanguages, setOpenLanguages] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openEducations, setOpenEducations] = useState(false);
  const [openCertifications, setOpenCertifications] = useState(false);
  const txtLanguage = useRef(null);
  const txtSkill = useRef(null);
  const txtEducation = useRef(null);
  const txtCertification = useRef(null);
  const dispatch = useDispatch();

  //Hooks
  useEffect(() => {});
  //Hooks

  //Api functions
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
    } catch (error) {
      console.log(error.response.data.content);
    }
  };
  //Api functions

  const handleAddLanguages = () => {
    const languages = userLanguages;
    const newLanguages = txtLanguage.current.input.value;
    languages.push(newLanguages);
    setUserLanguages([...languages]);
  };

  const handleAddSkills = () => {
    const newSkill = txtSkill.current.input.value;
    const newSkillList = [...userInfo.skill];
    newSkillList.push(newSkill);
    const newUserInfo = { ...userInfo, skill: newSkillList };
    updateUserInfo(newUserInfo);
  };

  const handleDeleteSkill = (skill) => {
    const newSkillList = [...userInfo.skill];
    const deleteIndex = newSkillList.findIndex((item) => item === skill);
    newSkillList.splice(deleteIndex, 1);
    const newUserInfo = { ...userInfo, skill: newSkillList };
    updateUserInfo(newUserInfo);
  };

  const handleAddEducation = () => {};

  const handleAddCertification = () => {
    const newCertification = txtCertification.current.input.value;
    const newCertificationList = [...userInfo.certification];
    newCertificationList.push(newCertification);
    const newUserInfo = { ...userInfo, certification: newCertificationList };
    updateUserInfo(newUserInfo);
  };

  const handleDeleteCertification = (certification) => {
    const newCertificationList = [...userInfo.certification];
    const deleteIndex = newCertificationList.findIndex(
      (item) => item === certification
    );
    newCertificationList.splice(deleteIndex, 1);
    const newUserInfo = { ...userInfo, certification: newCertificationList };
    updateUserInfo(newUserInfo);
  };
  //Evetns

  //Other Functions
  const renderLanguages = () => {
    const tag = userLanguages.map((language, index) => {
      return (
        <div key={index} className={`flex items-center ${Style.row}`}>
          <span className="mr-2">{language} - Basic</span>
          <EditOutlined className={Style.icon} />
        </div>
      );
    });

    return tag;
  };

  const renderSkills = () => {
    const tag = userInfo?.skill.map((skill, index) => {
      return (
        <div key={index} className={`flex items-center ${Style.row}`}>
          <span className="mr-2">{skill}</span>
          <button
            onClick={() => {
              handleDeleteSkill(skill);
            }}
          >
            <DeleteOutlined
              style={{ verticalAlign: "middle" }}
              className={Style.icon}
            />
          </button>
        </div>
      );
    });

    return tag;
  };

  const renderCertifications = () => {
    const tag = userInfo?.certification.map((certifitation, index) => {
      return (
        <div key={index} className={`flex items-center ${Style.row}`}>
          <span className="mr-2">{certifitation}</span>
          <button
            onClick={() => {
              handleDeleteCertification(certifitation);
            }}
          >
            <DeleteOutlined
              style={{ verticalAlign: "middle" }}
              className={Style.icon}
            />
          </button>
        </div>
      );
    });

    return tag;
  };
  //Other Functions

  return (
    <div
      className={`flex flex-col items-center mb-10 ${Style.userSegmentation}`}
    >
      <div className={`w-full ${Style.userDescription}`}>
        <div className="flex justify-between">
          <span className="text-base font-bold text-black">Description</span>
          <button>Edit Description</button>
        </div>
        <div className="h-16"></div>
      </div>

      <div className={`w-full py-8 ${Style.userLanguages}`}>
        <div className="flex justify-between mb-3">
          <span className="text-base font-bold text-black">Languages</span>
          <button
            className={`${openLanguages ? "hidden" : "block"} ${
              Style.btnAddNew
            }`}
            onClick={() => {
              setOpenLanguages(true);
            }}
          >
            Add New
          </button>
        </div>
        <div
          className={`mb-5 ${openLanguages ? "block" : "hidden"} ${Style.form}`}
        >
          <Input
            className="mb-3"
            placeholder="Add Language"
            ref={txtLanguage}
          />
          <div className="flex justify-between items-center">
            <button
              className={Style.btnCancel}
              onClick={() => {
                setOpenLanguages(false);
              }}
            >
              Cancel
            </button>
            <button
              className={Style.btn}
              onClick={() => {
                handleAddLanguages();
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-2">{renderLanguages()}</div>
      </div>

      <div className={`w-full py-8 ${Style.userSocialNetwork}`}>
        <span className="block mb-3 text-base font-bold text-black">
          Linked Accounts
        </span>
        <div
          className={`flex flex-col justify-around space-y-3 text-base 
          ${Style.socialNetworkLink}`}
        >
          <div className="flex items-center">
            <PlusOutlined className="mr-2" style={{ color: "#00698c" }} />
            <Link to="/">Facebook</Link>
          </div>
          <div className="flex items-center">
            <PlusOutlined className="mr-2" style={{ color: "#00698c" }} />
            <Link to="/">Google</Link>
          </div>
          <div className="flex items-center">
            <PlusOutlined className="mr-2" style={{ color: "#00698c" }} />
            <Link to="/">Dribbble</Link>
          </div>
          <div className="flex items-center">
            <PlusOutlined className="mr-2" style={{ color: "#00698c" }} />
            <Link to="/">Stack Overflow</Link>
          </div>
          <div className="flex items-center">
            <PlusOutlined className="mr-2" style={{ color: "#00698c" }} />
            <Link to="/">GitHub</Link>
          </div>
          <div className="flex items-center">
            <PlusOutlined className="mr-2" style={{ color: "#00698c" }} />
            <Link to="/">Vimeo</Link>
          </div>
          <div className="flex items-center">
            <PlusOutlined className="mr-2" style={{ color: "#00698c" }} />
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>

      <div className={`w-full py-8 ${Style.userSkills}`}>
        <div className="flex justify-between mb-3">
          <span className="text-base font-bold text-black">Skills</span>
          <button
            className={`${openSkills ? "hidden" : "block"} ${Style.btnAddNew}`}
            onClick={() => {
              setOpenSkills(true);
            }}
          >
            Add New
          </button>
        </div>
        <div
          className={`mb-5 ${openSkills ? "block" : "hidden"} ${Style.form}`}
        >
          <Input className="mb-3" placeholder="Add Skill" ref={txtSkill} />
          <div className="flex justify-between items-center">
            <button
              className={Style.btnCancel}
              onClick={() => {
                setOpenSkills(false);
              }}
            >
              Cancel
            </button>
            <button
              className={Style.btn}
              onClick={() => {
                handleAddSkills();
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-2">{renderSkills()}</div>
      </div>

      <div className={`w-full py-8 ${Style.userEducation}`}>
        <div className="flex justify-between mb-3">
          <span className="text-base font-bold text-black">Education</span>
          <button
            className={`${openEducations ? "hidden" : "block"} ${
              Style.btnAddNew
            }`}
            onClick={() => {
              setOpenEducations(true);
            }}
          >
            Add New
          </button>
        </div>
        <div
          className={`mb-5 ${openEducations ? "block" : "hidden"} ${
            Style.form
          }`}
        >
          <Input className="mb-3" placeholder="Add Skill" ref={txtEducation} />
          <div className="flex justify-between items-center">
            <button
              className={Style.btnCancel}
              onClick={() => {
                setOpenEducations(false);
              }}
            >
              Cancel
            </button>
            <button
              className={Style.btn}
              onClick={() => {
                handleAddEducation();
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className={`w-full py-8 ${Style.userCertification}`}>
        <div className="flex justify-between mb-3">
          <span className="text-base font-bold text-black">Certification</span>
          <button
            className={`${openCertifications ? "hidden" : "block"} ${
              Style.btnAddNew
            }`}
            onClick={() => {
              setOpenCertifications(true);
            }}
          >
            Add New
          </button>
        </div>
        <div
          className={`mb-5 ${openCertifications ? "block" : "hidden"} ${
            Style.form
          }`}
        >
          <Input
            className="mb-3"
            placeholder="Certificate Or Award"
            ref={txtCertification}
          />
          <div className="flex justify-between items-center">
            <button
              className={Style.btnCancel}
              onClick={() => {
                setOpenCertifications(false);
              }}
            >
              Cancel
            </button>
            <button
              className={Style.btn}
              onClick={() => {
                handleAddCertification();
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-2">{renderCertifications()}</div>
      </div>
    </div>
  );
}

export default UserSegmentation;
