import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { DownOutlined } from '@ant-design/icons';


let cx = classNames.bind(styles);

function DetailFAQs(props) {
    const [open, setOpen] = useState(0);

    function handleOpen (index) {
        if(index === open){
            setOpen(0);
        }else{
            setOpen(index);
        }
    }
    return (
        <div id="faq">
            <h2 className={cx("section-tilte")}>FAQ</h2>
            <div className={cx("faq-group")}>
                <article className={open === 1 ? cx("faq-item","show") : cx("faq-item")}>
                    <div className={cx("faq-title")}>
                        <div>
                           <p className="question">What is a vector file?</p>

                        </div>
                        <div className={cx("faq-icon-down")} onClick={() => {handleOpen(1)}}>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className={cx("faq-content")}>
                        <p className={cx("answer")}>This is a fully scalable, editable file. You can edit it in Adobe Illustrator. It´s recommended for future changes, exporting other types of files, etc.</p>
                    </div>
                </article>
                <article className={open === 2 ? cx("faq-item","show") : cx("faq-item")}>
                    <div className={cx("faq-title")}>
                        <div>
                            <p className="question">What does '3 logo design or 5 Logo Design' means?</p>

                        </div>
                        <div className={cx("faq-icon-down")} onClick={() => {handleOpen(2)}}>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className={cx("faq-content")}>
                        <p className={cx("answer")}>According to the package selected, it will include 3/5 unique designs for the same Brand/Company/Business/Name so that the buyer can have a choice. If you have two or three different brands/names, kindly order multiple gigs respectively.</p>
                    </div>
                </article>
                <article className={open === 3 ? cx("faq-item","show") : cx("faq-item")}>
                    <div className={cx("faq-title")}>
                        <div>
                            <p className="question">What does Unlimited revisions mean?</p>

                        </div>
                        <div className={cx("faq-icon-down")} onClick={() => {handleOpen(3)}}>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className={cx("faq-content")}>
                        <p className={cx("answer")}>'Unlimited Revisions' mean fonts, colors, layout changing, not the entire concept. Please know that unlimited revisions is not same to providing unlimited new concepts.</p>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default DetailFAQs;