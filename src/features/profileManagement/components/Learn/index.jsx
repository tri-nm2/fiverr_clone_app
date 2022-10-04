import React from "react";
import Style from "./style.module.css";

function Learn() {
  return (
    <div className={`flex flex-col items-center mb-10 ${Style.learnCard}`}>
      <div className="w-full align-left mb-5">
        <img
          src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_png/v1/attachments/generic_asset/asset/6bef0aaa4d62dcf41383658e5e3211ee-1571214998624/fiverrlearn_logo.svg"
          alt="error"
        ></img>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="w-full h-24 mb-3"
          src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/fiverr_learn/enroll-icon.69b770f.svg"
          alt="error"
        ></img>
        <span className="text-xl font-bold text-black mb-3">Earn badges and stand out</span>
        <p className="text-lg text-center mb-3">Boost your sales, by boosting your expertise.</p>
      </div>
      <button className={Style.btnEnroll}>Enroll Now</button>
    </div>
  );
}

export default Learn;
