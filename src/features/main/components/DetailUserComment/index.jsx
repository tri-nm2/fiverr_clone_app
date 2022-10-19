import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import TextArea from "antd/lib/input/TextArea";
import { Button } from "antd";


let cx = classNames.bind(styles);

function DetailUserComment(props) {
    return (
        <div className={cx("comment-wrapper")}>
            <div className={cx("profile-image")}>
              <label className={cx("profile-pict")}>
                <img
                  src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/044fb5914a845a4eb59fc2b69f7f7b32-1634120039750/4dbc2acb-7322-4cd0-9afb-e5190e8e8a0d.jpg"
                  alt="seller-card"
                />
              </label>
            </div>
            <div className={cx("form-comment-wrapper")}>
                <form>
                    <div className={cx("form-content")}>
                    <TextArea rows={4} placeholder="Enter your comment"/>
                    </div>
                    <div className={cx("form-button")}>
                    <Button type="primary">Add Comment</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DetailUserComment;