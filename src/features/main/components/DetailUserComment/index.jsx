import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import TextArea from "antd/lib/input/TextArea";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import instace from "api/instance";
import { data } from "autoprefixer";
import { useParams } from "react-router-dom";
import { fetchDataComment } from "features/main/pages/Detail/action";

let cx = classNames.bind(styles);

function DetailUserComment(props) {
  const { id } = useParams();
  const [contentComment, setContentComment] = useState("");
  const userInfo = useSelector((state) => state.authen.userInfo);
  const dispatch = useDispatch();
  function getFirstCharacter(text) {
    let result = text;
    return result[0];
  }
  function handleSubmit(e) {
    e.preventDefault();
    let model ={
      "id": 0,
      "maCongViec": id,
      "maNguoiBinhLuan": userInfo.id,
      "ngayBinhLuan":  "",
      "noiDung": contentComment,
      "saoBinhLuan": 0
    }
    postComment(id, model);
    
  }
  const postComment = async(id, data) => {
    try {
      const result = await instace.request({
        url: "/api/binh-luan",
        method: "POST",
        data: data,
      });
      console.log(result.data.content);
      dispatch(fetchDataComment(id));
      setContentComment("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setContentComment(e.target.value);
  };
  return (
    <div className={cx("comment-wrapper")}>
     
      <div className={cx("profile-image")}>
        <label className={cx("profile-pict")}>
          {userInfo.avatar === "" ? (
            <div className="relative">
              <button className="w-10 h-10 rounded-full">
                <div
                  className="h-full w-full rounded-full bg-gray-300 flex 
 justify-center items-center"
                >
                  <span className="uppercase">
                    {getFirstCharacter(userInfo.name)}
                  </span>
                </div>
              </button>
            </div>
          ) : (
            <img src={userInfo.avatar} alt="seller-card" />
          )}
        </label>
      </div>
      <div className={cx("form-comment-wrapper")}>
        <form onSubmit={handleSubmit}>
          <div className={cx("form-content")}>
         
            <TextArea
              rows={4}
              placeholder={`Enter ${userInfo.email} comment`}
              value={contentComment}
              onChange={handleChange}
            />
          </div>
          <div className={cx("form-button")}>
            <button type="submit">Add Comment</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DetailUserComment;
