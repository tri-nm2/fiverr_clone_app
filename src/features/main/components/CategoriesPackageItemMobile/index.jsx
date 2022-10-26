import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { HeartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

let cx = classNames.bind(styles);

function CategoriesPackageItemMobile({tenLoaiCongViec,tenChitiet,item}) {
  return (
    <div className={cx("card-item-layout")}>
      <div className={cx("item-wrapper")}>
        <header>
        <a className={cx("media")}>
          <div className={cx("slider")}>
            <img src={item.congViec.hinhAnh} />
          </div>
          <div className={cx("collect-package")}>
            <span>
              <button>
                <HeartOutlined className={cx('heart-icon')}/>
              </button>
            </span>
          </div>
        </a>
        <div className={cx("seller-info")}>
        <h3><Link to={`/detail/${tenLoaiCongViec}/${tenChitiet}/${item.id}`}>{item.congViec.tenCongViec}</Link></h3>
          <div className={cx("content-info")}>
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
              <span className={cx("gig-rating")}>{item.congViec.saoCongViec}</span>
              <span>({item.congViec.danhGia})</span>
            </div>
          </div>
        </div>
        </header>
        <footer>
          <div className={cx("seller-info")}>
            <div className={cx("inner-wrapper")}>
              <span className={cx("seller-image")}>
                <div>
                  <figure
                    className={cx("seller-avatar")}
                    title="ryancanadadev"
                    style={{ fontSize: 24, backgroundColor: "rgb(196, 51, 51)" }}
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
        </footer>
      </div>
    </div>
  );
}

export default CategoriesPackageItemMobile;
