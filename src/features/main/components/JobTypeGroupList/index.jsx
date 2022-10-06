import React from "react";
import JobTypeGroupItem from "../JobTypeGroupItem";

function JobTypeGroupList() {
  return (
    <div className="mb-20 px-8">
      <h1 className="text-2xl font-bold ml-2.5 mb-6">
        Explore Graphics &amp; Design
      </h1>
      <div className="flex justify-start items-center">
        <JobTypeGroupItem />
        <JobTypeGroupItem />
      </div>
    </div>
  );
}

export default JobTypeGroupList;
