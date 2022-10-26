import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { DownOutlined } from "@ant-design/icons";
import DetailSideBarFormItem from "../DetailSideBarFormItem";
import { useScrollPosition } from "common/hooks/scrollPostion";

let cx = classNames.bind(styles);

function DetailSideBarContent({congViec, heightSideBar}) {
    const [check, setCheck] = useState(1);
    const scrollPosition = useScrollPosition();
    const handlescroll = scrollPosition > 120 ? "scroll-fixed" : "scroll-relative";
    function handleCheck(index){
        setCheck(index);
    }
    useEffect(() => {
    },[])
  return (
    <div>
      <div className={cx("package-tab-wrapper",`${handlescroll}`)}>
        <div className={cx("nav-tabs")}>
            <button className={check === 1 ? cx("btn-tab-wrapper","checked") : cx("btn-tab-wrapper")} onClick={() =>{handleCheck(1)}}>
                <span>Basic</span>
            </button>
            <button className={check === 2 ? cx("btn-tab-wrapper","checked") : cx("btn-tab-wrapper")} onClick={() =>{handleCheck(2)}}>
                <span>Standard</span>
            </button>
            <button className={check === 3 ? cx("btn-tab-wrapper","checked") : cx("btn-tab-wrapper")} onClick={() =>{handleCheck(3)}}>
                <span>Premium</span>
            </button>
        </div>
        {check === 1 ? <DetailSideBarFormItem data={"TAB 1"} check={true} congViec={congViec}/> : <></>}
        {check === 2 ? <DetailSideBarFormItem data={"TAB 2"} check={true}  congViec={congViec}/> : <></>}
        {check === 3 ? <DetailSideBarFormItem data={"TAB 3"} check={true}  congViec={congViec}/> : <></>}
      </div>
    </div>
  );
}

export default DetailSideBarContent;
