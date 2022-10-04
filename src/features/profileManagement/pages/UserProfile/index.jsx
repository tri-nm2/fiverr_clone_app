import React from "react";
import Style from "./style.module.css";
import UserCard from "features/profileManagement/components/UserCard";
import Learn from "features/profileManagement/components/Learn";
import UserSegmentation from "features/profileManagement/components/UserSegmentation";

function UserProfile() {
  return (
    <div className={`flex flex-row py-20 px-5 ${Style.userProfile}`}>
      <div className={`w-2/5 relative mr-20 ${Style.columnLeft}`}>
        <UserCard />
        <Learn />
        <UserSegmentation />
      </div>
      <div className="w-3/5">
        <div className={Style.rightHeader}>
          <span className="relative text-base font-semibold">ACTIVE GIGS</span>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
