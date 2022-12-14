import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { HeartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

let cx = classNames.bind(styles);

function UserRentJobItem({item}) {
  
  return (
    <div className={cx("card-item-layout")}>
      <div className={cx("item-wrapper")}>
        <header>
          <a className={cx("media")}>
            <div className={cx("slider")}>
              <img src={item.congViec.hinhAnh} />
            </div>
            <div className={cx("collect-package")}>
              {/* <span>
                <button>
                  <span
                    className={cx("heart-icon")}
                    aria-hidden="true"
                    style={{ width: 16, height: 16 }}
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z" />
                    </svg>
                  </span>
                </button>
              </span> */}
            </div>
          </a>
          <div className={cx("seller-info")}>
            <h3>
              <Link
                to="/"
              >
                {item.congViec.tenCongViec}
              </Link>
            </h3>
            
            <div className={cx("content-info")}>
              <p>{item.congViec.moTaNgan}</p>
              <div className={cx("rating-info")}>
                <span className={cx("gig-rating")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"
                    width={15}
                    height={15}
                  >
                    <path
                      fill="currentColor"
                      d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                    />
                  </svg>
                </span>
                <span className={cx("gig-rating")}>
                  {item.congViec.saoCongViec}
                </span>
                <span>({item.congViec.danhGia})</span>
              </div>
            </div>
          </div>
        </header>
        {/* <footer>
          <div className={cx("seller-info")}>
            <div className={cx("inner-wrapper")}>
              <span className={cx("seller-image")}>
                <div>
                  <figure
                    className={cx("seller-avatar")}
                    title="ryancanadadev"
                    style={{
                      fontSize: 24,
                      backgroundColor: "rgb(196, 51, 51)",
                    }}
                  >
                    <figcaption className="-nS+a5p"></figcaption>
                    <img
                      className="_2Um2N63"
                      src={item.avatar}
                      alt="ryancanadadev"
                    />
                  </figure>
                </div>
              </span>
              <div className={cx("seller-identifiers")}>
                <span className={cx("seller-name")}>
                  <a>{item.tenNguoiTao}</a>
                </span>
              </div>
            </div>
          </div>
          <div className={cx("footer-right")}>
            <a className={cx("price")}>
              <small>Starting at</small>
              <span>${item.congViec.giaTien}</span>
            </a>
          </div>
        </footer> */}
      </div>
    </div>
  );
}

export default UserRentJobItem;
