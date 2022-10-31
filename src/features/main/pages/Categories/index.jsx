import CategoriesCarousel from "features/main/components/CategoriesCarousel";
import CategoriesFAQs from "features/main/components/CategoriesFAQs";
import CategoriesFilterSelected from "features/main/components/CategoriesFilterSelected";
import CategoriesFilterSort from "features/main/components/CategoriesFilterSort";
import CategoriesListPackage from "features/main/components/CategoriesListPackage";
import CategoriesRelatedGuides from "features/main/components/CategoriesRelatedGuides";
import CategoriesRelatedLinks from "features/main/components/CategoriesRelatedLinks";
import mainReducer from "features/main/mainSlice";
import { useWindowSize } from "common/hooks/windowSize";
import categoriesReducer from "features/main/pages/Categories/categoriesSlice";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./style.module.scss";

import { PlayCircleFilled } from "@ant-design/icons";
import CategoriesFilterSelectedMobile from "features/main/components/CategoriesFilterSelectedMobile";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesData, fetchCategoriesDataWithText } from "./action";

let cx = classNames.bind(styles);

function Categories(props) {
  const { jobid, tenLoaiCongViec, tenChitiet } = useParams();
  const menuData = useSelector((state) => state.main.menuData);
  const filterShow = useSelector((state) => state.main.filter);
  let menuTypeId;
  const categoriesData = useSelector(
    (state) => state.categories.categoriesData
  );
  const windowSize = useWindowSize();
  const dispatch = useDispatch();

  // const jobMenu = menuData.findIndex(
  //   (value, index) => value.tenLoaiCongViec === tenLoaiCongViec
  // );
  const getIdMenuType = () => {
    if (menuData === null || menuData.length === 0)
      return alert("Khong lay duoc du lieu tu menu");
    console.log("menuData", menuData);
    const indexMenu = menuData.findIndex(
      (value) => value.tenLoaiCongViec === tenLoaiCongViec
    );
    const currentMenuItem = menuData[indexMenu];

    const currentMenuListItem = currentMenuItem.dsNhomChiTietLoai?.map(
      (item) => {
        let index = item.dsChiTietLoai.findIndex(
          (value) => value.tenChiTiet === tenChitiet
        );
        if (index != -1) {
          return item.dsChiTietLoai[index].id;
        }
        return -1;
      }
    );

    let idMenuDetail = currentMenuListItem.find((value) => value != -1);

    return idMenuDetail;
  };

  useEffect(() => {
    if (tenChitiet != undefined) {
      dispatch(fetchCategoriesData(getIdMenuType()));
      dispatch(mainReducer.actions.clearFilterText());
      console.log("joobid", jobid);
      console.log("jobtypeid fnction", getIdMenuType());
    } else {
      dispatch(categoriesReducer.actions.clearDataCategories());
      dispatch(fetchCategoriesDataWithText(filterShow.filterText));
      dispatch(mainReducer.actions.addFilterText(filterShow.filterText));
    }
    // dispatch(mainReducer.actions.addFilterText(filterShow.filterText));
  }, [tenChitiet, filterShow.filterText]);

  return (
    <div>
      <div className="layout-row">
        {!filterShow.status ? (
          <header>
            <ul className={cx("breadcrumbs")}>
              <li>
                <Link to="/">Fiverr</Link>
                <span>
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
                  </svg>
                </span>
              </li>
              <li>
                <Link to={`/jobtype/${jobid}`}>{tenLoaiCongViec}</Link>
                <span>
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
                  </svg>
                </span>
              </li>
            </ul>
            <header className={cx("subcategory-header")}>
              <div className={cx("title-wrapper")}>
                <h1>{tenChitiet}</h1>
                <div className={cx("explanation-video")}>
                  <p className={cx("sc-subtitle")}>
                    Add features to your website with custom web applications
                    and extensions
                  </p>
                  <button className={cx("btn-play")}>
                    <PlayCircleFilled />
                    <span>How Fiverr Works</span>
                  </button>
                </div>
              </div>
            </header>
          </header>
        ) : (
          <></>
        )}
      </div>
      {!filterShow.status ? <CategoriesCarousel /> : <></>}
      {filterShow.status ? (
        <div className="layout-row">
          <h1 className={cx("result-title")}>
            Result: "<span>{filterShow.filterText}</span>"
          </h1>
        </div>
      ) : (
        <></>
      )}
      {categoriesData.length != 0 ? (
        <>
          {" "}
          {windowSize.width > 1024 ? (
            <CategoriesFilterSelected />
          ) : (
            <CategoriesFilterSelectedMobile />
          )}
        </>
      ) : (
        <></>
      )}
      {categoriesData.length != 0 ? (
        <CategoriesListPackage
          jobid={jobid}
          categoriesData={categoriesData}
          tenLoaiCongViec={tenLoaiCongViec}
          tenChitiet={tenChitiet}
        />
      ) : (
        <></>
      )}
      <CategoriesRelatedLinks />
      <CategoriesFAQs />
      <CategoriesRelatedGuides />
    </div>
  );
}

export default Categories;
