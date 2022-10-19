import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import DetailReviewsDetailItem from "features/main/components/DetailReviewsDetailItem";

let cx = classNames.bind(styles);

function DetailReviewsList(props) {
    return (
        <div className={cx("review-list")}>
              <DetailReviewsDetailItem />
              <DetailReviewsDetailItem />
              <DetailReviewsDetailItem />
              <DetailReviewsDetailItem />
        </div>
    );
}

export default DetailReviewsList;