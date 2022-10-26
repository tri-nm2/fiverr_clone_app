import React, { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import DetailReviewsDetailItem from "features/main/components/DetailReviewsDetailItem";
import { useSelector } from "react-redux";

let cx = classNames.bind(styles);

function DetailReviewsList({ id }) {
  const commentData = useSelector((state) => state.detail.commentData);
  function getCommentList(){
    const status = commentData[0].status;
    if(status){
      const data = commentData[0].data;
      return data.map((item,index) => <DetailReviewsDetailItem key={index} content={item}/>)
    }
  return <></>
  }
  return (
    <div className={cx("review-list")}>
      {getCommentList()}
    </div>
  );
}

export default DetailReviewsList;
