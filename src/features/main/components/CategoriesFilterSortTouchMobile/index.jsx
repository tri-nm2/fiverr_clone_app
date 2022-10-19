

import { CloseOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from './style.module.scss';



let cx = classNames.bind(styles);

function CategoriesFilterSortTouchMobile({handleModal,show}) {
  let showModal =  show ? "show" : "";
    return (
        <div>
        <div className="layout-row">
        <div className={cx("wrapper")}>
            <header>
              
              <h3>Sort Gigs by</h3>
              <button onClick={() =>{handleModal(2);}}>
                <CloseOutlined />
              </button>
            </header>
            <aside className={cx("advanced-search",`${showModal}`)}>
              <div className={cx('filter-group')}>
              <div className={cx("menu-filter-item")}>
              
                <div className={cx("checkbox-list")}>
                  <div className={cx("checkbox-item")}>      
                    <div className={cx("inner-checkbox")}>
                    <input
                      type="radio"
                      name="checkradio"
                      value="recommended"
                    ></input>
                      <span className={cx("label")}>Recommended</span>
                    </div>
                  </div>
                  <div className={cx("checkbox-item")}>      
                    <div className={cx("inner-checkbox")}>
                    <input
                      type="radio"
                      name="checkradio"
                      value="bestselling"
                    ></input>
                      <span className={cx("label")}>Best Selling</span>
                    </div>
                  
                  </div>
                  <div className={cx("checkbox-item")}>      
                    <div className={cx("inner-checkbox")}>
                    <input
                     type="radio"
                      name="checkradio"
                      value="newarrivals"
                    ></input>
                      <span className={cx("label")}>Newest Arrivals</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </aside>
            <div className={cx("result-wrapper")}>
              <button>Show Results</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CategoriesFilterSortTouchMobile;