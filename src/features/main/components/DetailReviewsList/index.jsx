import React, { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import DetailReviewsDetailItem from "features/main/components/DetailReviewsDetailItem";
import { useSelector } from "react-redux";

let cx = classNames.bind(styles);

function DetailReviewsList({ id }) {
  const commentData = useSelector((state) => state.detail.commentData);
  return (
    <div className={cx("review-list")}>
      {commentData.map((item, index) => <DetailReviewsDetailItem key={index} content={item} />)}
    </div>
  );
}

export default DetailReviewsList;
