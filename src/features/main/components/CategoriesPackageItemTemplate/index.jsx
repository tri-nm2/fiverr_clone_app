import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { HeartOutlined } from "@ant-design/icons";
import { useWindowSize } from "common/hooks/windowSize";
import CategoriesPackageItem from "../CategoriesPackageItem";
import CategoriesPackageItemMobile from "../CategoriesPackageItemMobile";


let cx = classNames.bind(styles);

function CategoriesPackageItemTemplate({tenLoaiCongViec,tenChitiet}) {
  const windowSize = useWindowSize();
  return (
    <div>
      {windowSize.width > 1024 ? <CategoriesPackageItem tenLoaiCongViec={tenLoaiCongViec} tenChitiet={tenChitiet}/>:  <CategoriesPackageItemMobile tenLoaiCongViec={tenLoaiCongViec} tenChitiet={tenChitiet}/>}
    </div>
  );
}

export default CategoriesPackageItemTemplate;
