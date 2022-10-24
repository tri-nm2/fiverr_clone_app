import React from "react";
import JobTypeGroupItem from "../JobTypeGroupItem";

function JobTypeGroupList(props) {
  const groupList = props.groupList;

  //Other functions
  const renderGroupItem = () => {
    let tag = null;

    if (groupList) {
      tag = groupList[0].dsNhomChiTietLoai.map((item) => {
        return <JobTypeGroupItem key={item.id} item={item} groupList={groupList} />;
      });
    }

    return tag;
  };
  //Other functions
  return (
    <div className="mb-20 px-8">
      <h1 className="text-2xl font-bold ml-2.5 mb-6">
        {groupList && `Explore ${groupList[0].tenLoaiCongViec}`}
        
      </h1>
      <div className="flex flex-wrap justify-start items-start">{renderGroupItem()}</div>
    </div>
  );
}

export default JobTypeGroupList;
