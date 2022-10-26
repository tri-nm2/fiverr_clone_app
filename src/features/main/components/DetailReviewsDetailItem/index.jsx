import React, { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { DislikeOutlined, DownOutlined, LikeOutlined } from "@ant-design/icons";
import { result } from "lodash";
import { useSelector } from "react-redux";

let cx = classNames.bind(styles);

function DetailReviewsDetailItem({ content }) {
  const userData = useSelector(state => state.detail.userData);
  const user = userData[0];
  console.log("content",content);
  function handelStar(star){
    result = [];
    for(let i = 0; i < star; i++){
       result.push(<RatingStar key={i}/>)
    }
    return result;
  }
  return (
    <div className={cx("review-item")}>
      <div className={cx("profile-card")}>
        <div className={cx("user-card")}>
          <div className={cx("profile-info")}>
            <div className={cx("profile-image")}>
              <label className={cx("profile-pict")}>
                <img src={content.avatar === "" ? "https://www.clipartmax.com/png/middle/437-4374952_no-avatar-male-female.png": content.avatar} alt="seller-card" />
              </label>
            </div>
            <div className={cx("profile-label")}>
              <div className={cx("username-line")}>
                <a className={cx("user-info")}>{content.tenNguoiBinhLuan}</a>
              </div>
              <div className={cx("one-linner-rating-wrapper")}>
                <div className={cx("country")}>
                  <img
                    className={cx("country-flag")}
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f2-1f1e9.png"
                    alt="MD"
                    loading="lazy"
                  />
                  <div className={cx("country-name")}>Moldova</div>
                </div>
                <div className={cx("rating")}>
                  <div className={cx("start")}>
                    {handelStar(content.saoBinhLuan)}
                  </div>
                  <b className={cx("rating-score")}>{content.saoBinhLuan}</b>
                  <time className={cx("time")}>{content.ngayBinhLuan}</time>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("review-desc")}>
          <p>
            {/* Very good job by the designer and I thank him for the attention and
            response in a wonderful friendly way and I will have another work
            with the designer. good wishes */}
            {content.noiDung}
          </p>
        </div>
      </div>
      <div className={cx("reviews-detail")}>
        <div className={cx("reviews-footer")}>
          <div className={cx("helpful-footer")}>
            <div className={cx("helpful-thumbs")}>
              <div className={cx("helpful-text")}>Helpful?</div>
              <div className={cx("thumbs-icon-wrapper")}>
                <div className={cx("helpful-thumb")}>
                  <LikeOutlined />
                  <span className={cx("helpful-thumb-title")}>Yes</span>
                </div>
                <div className={cx("helpful-thumb")}>
                  <DislikeOutlined />
                  <span className={cx("helpful-thumb-title")}>No</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={cx("review-seller-comment")}>
            <div className={cx("seller-profile")}>
              <div className={cx("profile-image")}>
                <label className={cx("profile-pict")}>
                  <img
                    src={user.avatar}
                    alt="seller-card"
                  />
                </label>
              </div>
              <div className={cx("username-line")}>
                <a className={cx("user-info")}>{user.name}</a>
              </div>
            </div>
            <div className={cx("seller-info")}>
              <div className={cx("review-desc")}>
                <p>
                  Thank for giving us a shot, and even more for leaving us this
                  review. We will strive to deliver great experiences
                  consistently, please do come again.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
function RatingStar() {
  return <span className={cx("orc-start")}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1792 1792"
    width={15}
    height={15}
  >
    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
  </svg>
</span>
}
export default DetailReviewsDetailItem;
