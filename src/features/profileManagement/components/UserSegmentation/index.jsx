import React, { useState, useRef, useEffect } from "react";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import Style from "./style.module.css";
import { Input, Select } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import instace from "api/instance";
import { fetchUserInfoAction } from "features/authentication/action";

function UserSegmentation() {
  const userInfo = useSelector((state) => state.authen.userInfo);
  const userId = localStorage.getItem("id");
  const [userLanguages, setUserLanguages] = useState([
    {
      name: "English",
      level: "Basic",
    },
    {
      name: "Vietnamese",
      level: "Native",
    },
  ]);
  const [userEducation, setUserEducation] = useState([
    {
      universityName: "HCMUS",
      yearGraduation: "2016",
    },
  ]);
  const [openLanguages, setOpenLanguages] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openEducations, setOpenEducations] = useState(false);
  const [openCertifications, setOpenCertifications] = useState(false);
  const txtLanguage = useRef(null);
  const txtSkill = useRef(null);
  const txtEducation = useRef(null);
  const txtCertification = useRef(null);
  const languageLevel = useRef(null);
  const yearGraduation = useRef(null);
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

  //Events
  const handleAddLanguages = () => {
    const languages = userLanguages;
    const newLanguages = {
      name: txtLanguage.current.input.value,
      level: languageLevel.current,
    };
    languages.push(newLanguages);
    setUserLanguages([...languages]);
  };

  const handleDeleteLanguages = (name) => {
    const deleteIndex = userLanguages.findIndex(
      (language) => language.name === name
    );
    const newUserLanguages = [...userLanguages];
    newUserLanguages.splice(deleteIndex, 1);
    setUserLanguages(newUserLanguages);
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

  const handleAddEducation = () => {
    const education = [...userEducation];
    const newEducation = {
      universityName: txtEducation.current.input.value,
      yearGraduation: yearGraduation.current.toString(),
    };
    education.push(newEducation);
    setUserEducation(education);
  };

  const handleDeleteEducation = (name) => {
    const deleteIndex = userEducation.findIndex(
      (education) => education.universityName === name
    );
    const newEducation = [...userEducation];
    newEducation.splice(deleteIndex, 1);
    setUserEducation(newEducation);
  };

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

  const handleChangeLanguageLevel = (value) => {
    languageLevel.current = value;
  };

  const handleChangeYearGraduation = (value) => {
    yearGraduation.current = value;
  };
  //Evetns

  //Other Functions
  const renderLanguages = () => {
    const tag = userLanguages.map((language, index) => {
      return (
        <div key={index} className={`flex items-center ${Style.row}`}>
          <span className="mr-2">
            {language.name} - {language.level}
          </span>
          <button
            onClick={() => {
              handleDeleteLanguages(language.name);
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

  const renderEducation = () => {
    const tag = userEducation.map((education, index) => {
      return (
        <div key={index} className={`flex items-center ${Style.row}`}>
          <span className="mr-2">
            {education.universityName} - {education.yearGraduation}
          </span>
          <button
            onClick={() => {
              handleDeleteEducation(education.universityName);
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

  const renderYearGraduation = () => {
    const tag = [];
    for (let i = 2016; i <= 2022; i++) {
      tag.push(
        <Select.Option key={i} value={i}>
          {i}
        </Select.Option>
      );
    }
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
          <Select
            className="w-full mb-3"
            placeholder="Language Level"
            onChange={handleChangeLanguageLevel}
          >
            <Select.Option value="Basic">Basic</Select.Option>
            <Select.Option value="Conversational">Conversational</Select.Option>
            <Select.Option value="Fluent">Fluent</Select.Option>
            <Select.Option value="Native">Native/Bilingual</Select.Option>
          </Select>
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
          <Input
            className="mb-3"
            placeholder="University Name"
            ref={txtEducation}
          />
          <Select
            className="w-full mb-3"
            placeholder="Year Graduation"
            onChange={handleChangeYearGraduation}
          >
            {renderYearGraduation()}
          </Select>
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
        <div className="flex flex-col space-y-2">{renderEducation()}</div>
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
