import JobTypeFAQ from "features/main/components/JobTypeFAQ";
import JobTypeGroupList from "features/main/components/JobTypeGroupList";
import JobTypeGuide from "features/main/components/JobTypeGuide";
import JobTypePopularCarousel from "features/main/components/JobTypePopularCarousel";
import JobTypeServices from "features/main/components/JobTypeServices";
import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import instace from "api/instance";
import { useParams } from "react-router-dom";
import mainReducer from "features/main/mainSlice"
import { useDispatch } from "react-redux";

function JobType() {
  const [groupList, setGroupList] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();

  //Hooks
  useEffect(() => {
    fetchJobTypeGroupList();
    dispatch(mainReducer.actions.clearFilterText());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  //Hooks

  //Api functions
  const fetchJobTypeGroupList = async () => {
    try {
      const response = await instace.request({
        url: `/api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`,
        method: "GET",
      });

      setGroupList(response.data.content);
    } catch (error) {
      console.log(error.response.data.content);
    }
  };
  //Api functions

  return (
    <div className={`container mx-auto`}>
      <div>
        <div className={`my-8 mx-8 ${Style.header}`}>
          <div className="p-12 text-center">
            <h1 className="text-white text-3xl mb-1 font-semibold">
              Graphics &amp; Design
            </h1>
            <h3 className="text-white text-xl mb-5">
              Designs to make you stand out.
            </h3>
            <button
              className={`text-white mx-auto text-base flex items-center ${Style.btnPlay}`}
            >
              <svg
                className="mr-2"
                width={16}
                height={16}
                fill="#fff"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.00017 0.333374C6.48384 0.333374 5.00157 0.783016 3.74079 1.62544C2.48002 2.46786 1.49736 3.66523 0.91709 5.06613C0.336818 6.46703 0.184992 8.00855 0.480812 9.49573C0.776632 10.9829 1.50681 12.349 2.57901 13.4212C3.65122 14.4934 5.01729 15.2236 6.50447 15.5194C7.99166 15.8152 9.53317 15.6634 10.9341 15.0831C12.335 14.5028 13.5323 13.5202 14.3748 12.2594C15.2172 10.9986 15.6668 9.51636 15.6668 8.00004C15.6646 5.96739 14.8562 4.01863 13.4189 2.58132C11.9816 1.14402 10.0328 0.33558 8.00017 0.333374V0.333374ZM11.5025 8.28737L5.83583 11.6207C5.7852 11.6505 5.7276 11.6664 5.66885 11.6667C5.61011 11.6671 5.55232 11.6519 5.50133 11.6227C5.45034 11.5936 5.40796 11.5514 5.37849 11.5006C5.34902 11.4498 5.3335 11.3921 5.3335 11.3334V4.66671C5.3335 4.60796 5.34902 4.55026 5.37849 4.49945C5.40796 4.44864 5.45034 4.40651 5.50133 4.37735C5.55232 4.34818 5.61011 4.33301 5.66885 4.33336C5.7276 4.33372 5.7852 4.34959 5.83583 4.37937L11.5025 7.71271C11.5525 7.74214 11.594 7.78413 11.6229 7.83453C11.6517 7.88493 11.6669 7.94198 11.6669 8.00004C11.6669 8.0581 11.6517 8.11515 11.6229 8.16555C11.594 8.21595 11.5525 8.25794 11.5025 8.28737V8.28737Z" />
              </svg>
              How Fiverr Works
            </button>
          </div>
        </div>

        <JobTypePopularCarousel />
        <JobTypeGroupList groupList={groupList} />
        <JobTypeGuide />
        <JobTypeFAQ />
        <JobTypeServices />
      </div>
    </div>
  );
}

export default JobType;
