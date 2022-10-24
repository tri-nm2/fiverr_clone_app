import React from "react";
import { Link } from "react-router-dom";
import Style from "./style.module.css";

function JobTypeGroupItem(props) {
  const detail = props.item;
  const  groupList = props.groupList;
 console.log(groupList)
  //Other functions
  const renderDetailList = () => {
    const tag = detail?.dsChiTietLoai.map((item) => {
      return (
        <div key={item.id} className={Style.innerLink}>
          <Link to={`/categories/${groupList[0].tenLoaiCongViec}/${item.tenChiTiet}`}>{item.tenChiTiet}</Link>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
          </svg>
        </div>
      );
    });

    return tag;
  };
  //Other functions

  return (
    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full sm:mb-0 mb-4">
      <img
        className="w-full h-full mb-8 px-3"
        src={detail.hinhAnh}
        alt="error"
      />
      <h3 className="text-xl font-bold mb-6 px-3">{detail?.tenNhom}</h3>
      <div className="flex flex-col text-lg">{renderDetailList()}</div>
    </div>
  );
}

export default JobTypeGroupItem;
