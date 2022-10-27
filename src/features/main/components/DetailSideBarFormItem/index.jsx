import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { DownOutlined } from "@ant-design/icons";
import instace from "api/instance";
import { useDispatch } from "react-redux";
import { fetchUserInfoAction, fetchUserRentJob } from "features/authentication/action";
import { fetchDataDetail } from "features/main/pages/Detail/action";
import { Modal } from "antd";


let cx = classNames.bind(styles);

function DetailSideBarFormItem({data,check,congViec}) {
  const userId = localStorage.getItem("id");
  const dispatch = useDispatch();
  const show = check ? "show": "";
  console.log(congViec);
  function handleSubmit(e){
    e.preventDefault();
    if(userId){
        let userBook = {
          "id": 0,
          "maCongViec": congViec.id,
          "maNguoiThue": userId,
          "ngayThue": "12/12/12",
          "hoanThanh": true
        }
        bookJob(userBook);
    }else{
      alert("Chưa đăng nhập");
     
    }
    
  }
  //Call Api booking job
  const bookJob = async (userBook) => {
    try {
      const reponse = await instace.request({
        url: "/api/thue-cong-viec",
        method: "POST",
        data: userBook,
      });
      if(reponse.status === 201){
        showSuccess("Thuê thành công");
        dispatch(fetchUserRentJob());
      }
      
    } catch (error) {
        console.log(error);
    }
  }
  //Call modal
  //Message Boxes
  const showSuccess = (message) => {
    Modal.success({
      content: <span>{message}</span>,
      onOk() {},
    });
  };
  useEffect(()=>{
    // dispatch(fetchUserInfoAction(1293));
  },[]);
 
  return (
    <div>
      <div className={cx("form-wrapper",`${show}`)}>
        <form onSubmit={handleSubmit}>
          <div className={cx("form-content")}>
            <header>
              <h3>
                <b className={cx("title")}>BASIC Package - Popular {data}</b>
                <div className={cx("price-wrapper")}>
                  <span className={cx("price")}>${congViec.giaTien}</span>
                </div>
              </h3>
              <p>
                {congViec.moTaNgan}
              </p>
            </header>

            <article>
              <div className={cx("additional-info")}>
                <div className={cx("delivery-wrapper")}>
                  <span
                    className="nFghBOe delivery-icon"
                    aria-hidden="true"
                    style={{ width: 16, height: 16 }}
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                      <path d="M9 4H7v5h5V7H9V4z" />
                    </svg>
                  </span>
                  <b className={cx("delivery")}>1 Day Delivery</b>
                </div>
                <div className={cx("revisions-wrapper")}>
                  <span
                    className="nFghBOe revisions-icon"
                    aria-hidden="true"
                    style={{ width: 16, height: 16 }}
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z" />
                      <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z" />
                    </svg>
                  </span>
                  <b className={cx("revisions")}>Unlimited Revisions</b>
                </div>
              </div>
              <div className={cx("collapsable-package-item")}>
                <div className={cx("collapsable-header")}>
                  What's Included
                  <span className={cx("collapsable-down-icon")}>
                    <DownOutlined />
                  </span>
                </div>
                <div className={cx("collapsable-content")}>
                  <ul className={cx("features")}>
                    <li>
                      <span
                        aria-hidden="true"
                        style={{ width: 16, height: 16 }}
                      >
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentFill"
                        >
                          <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z" />
                        </svg>
                      </span>
                      3 concepts included
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <footer className={cx("form-footer")}>
            <button className={cx("btn-continue")} type="submit">
              <span>Continue</span>
              <span> ${congViec.giaTien}</span>
            </button>
            <button className={cx("btn-compare-packages")}>Compare Packages</button>
          </footer>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DetailSideBarFormItem;
