import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { HeartOutlined } from "@ant-design/icons";
import { useWindowSize } from "common/hooks/windowSize";
import CategoriesPackageItem from "../CategoriesPackageItem";
import CategoriesPackageItemMobile from "../CategoriesPackageItemMobile";


let cx = classNames.bind(styles);

function CategoriesPackageItemTemplate({tenLoaiCongViec,tenChitiet, item, jobid}) {
  const windowSize = useWindowSize();

  return (
    <div>
      {windowSize.width > 1024 ? <CategoriesPackageItem item={item} jobid={jobid} tenLoaiCongViec={tenLoaiCongViec} tenChitiet={tenChitiet}/>:  <CategoriesPackageItemMobile jobid={jobid} item={item} tenLoaiCongViec={tenLoaiCongViec} tenChitiet={tenChitiet}/>}
    </div>
  );
}

export default CategoriesPackageItemTemplate;
