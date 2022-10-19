import { CloseOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

let cx = classNames.bind(styles);

function CategoriesFilterTouchMobile({handleModal,show}) {
  const showModal = show ? "show" : "";
  return (
    <div>
      <div className="layout-row">
        <div className={cx("wrapper",`${showModal}`)}>
          <header>
            <button>Clear All</button>
            <h3>Refine</h3>
            <button onClick={()=> {handleModal(1)}}>
              <CloseOutlined />
            </button>
          </header>
          <aside className={cx("advanced-search")}>
            <div className={cx("ft-toggles-wrapper")}>
              <div className={cx("tg-menu")}>
                <div className={cx("tg-menu-item")}>
                  <span className={cx("label")}>Pro services</span>
                  <Switch size="small" className={cx("tg-menu-switch")} />
                </div>
              </div>
              <div className={cx("tg-menu")}>
                <div className={cx("tg-menu-item")}>
                  <span className={cx("label")}>Subscription services</span>
                  <Switch size="small" className={cx("tg-menu-switch")} />
                </div>
              </div>
            </div>
            <div className={cx('filter-group')}>
              <h5 className={cx("label")}>Budget</h5>
              <div className={cx("menu-filter-item-budget")}>
                <div className={cx("input-wrapper")}>
                  <div className={cx("input-item")}>
                    <div className={cx("input-min")}>
                      <span className={cx("price-range")}>$</span>
                      <input
                        type="number"
                        name="min_input"
                        placeholder="MIN"
                      ></input>
                    </div>
                  </div>
                  <div className={cx("space-input")}>
                    <span>-</span>
                  </div>
                  <div className={cx("input-item")}>
                    <div className={cx("input-max")}>
                      <span className={cx("price-range")}>$</span>
                      <input
                        type="number"
                        name="max_input"
                        placeholder="MAX"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('filter-group')}>
            <h5 className={cx("label")}>Programming language</h5>
            <div className={cx("menu-filter-item")}>
            
              <div className={cx("checkbox-list")}>
                <div className={cx("checkbox-item")}>      
                  <div className={cx("inner-checkbox")}>
                  <input
                    type="checkbox"
                    name="html_css"
                    value="html_css"
                  ></input>
                    <span className={cx("label")}>HTML & CSS</span>
                  </div>
                  <span className={cx("count")}>(30,123)</span>
                </div>
                <div className={cx("checkbox-item")}>      
                  <div className={cx("inner-checkbox")}>
                  <input
                    type="checkbox"
                    name="html_css"
                    value="html_css"
                  ></input>
                    <span className={cx("label")}>HTML & CSS</span>
                  </div>
                  <span className={cx("count")}>(30,123)</span>
                </div>
                <div className={cx("checkbox-item")}>      
                  <div className={cx("inner-checkbox")}>
                  <input
                    type="checkbox"
                    name="html_css"
                    value="html_css"
                  ></input>
                    <span className={cx("label")}>HTML & CSS</span>
                  </div>
                  <span className={cx("count")}>(30,123)</span>
                </div>
              </div>
              <span className={cx("show-more-less")}>+11 more</span>
            </div>
            </div>
            <div className={cx('filter-group')}>
            <h5 className={cx("label")}>Expertise</h5>
            <div className={cx("menu-filter-item")}>
            
              <div className={cx("checkbox-list")}>
                <div className={cx("checkbox-item")}>      
                  <div className={cx("inner-checkbox")}>
                  <input
                    type="checkbox"
                    name="html_css"
                    value="html_css"
                  ></input>
                    <span className={cx("label")}>HTML & CSS</span>
                  </div>
                  <span className={cx("count")}>(30,123)</span>
                </div>
                <div className={cx("checkbox-item")}>      
                  <div className={cx("inner-checkbox")}>
                  <input
                    type="checkbox"
                    name="html_css"
                    value="html_css"
                  ></input>
                    <span className={cx("label")}>HTML & CSS</span>
                  </div>
                  <span className={cx("count")}>(30,123)</span>
                </div>
                <div className={cx("checkbox-item")}>      
                  <div className={cx("inner-checkbox")}>
                  <input
                    type="checkbox"
                    name="html_css"
                    value="html_css"
                  ></input>
                    <span className={cx("label")}>HTML & CSS</span>
                  </div>
                  <span className={cx("count")}>(30,123)</span>
                </div>
              </div>
              <span className={cx("show-more-less")}>+11 more</span>
            </div>
            </div>
            <div className={cx('filter-group')}>
            <h5 className={cx("label")}>Expertise</h5>
            <div className={cx("menu-filter-item")}>
            
              <div className={cx("checkbox-list")}>
                <div className={cx("checkbox-item")}>      
                  <div className={cx("inner-checkbox")}>
                  <input
                    type="checkbox"
                    name="html_css"
                    value="html_css"
                  ></input>
                    <span className={cx("label")}>HTML & CSS</span>
                  </div>
                  <span className={cx("count")}>(30,123)</span>
                </div>
                <div className={cx("checkbox-item")}>      
                  <div className={cx("inner-checkbox")}>
                  <input
                    type="checkbox"
                    name="html_css"
                    value="html_css"
                  ></input>
                    <span className={cx("label")}>HTML & CSS</span>
                  </div>
                  <span className={cx("count")}>(30,123)</span>
                </div>
                <div className={cx("checkbox-item")}>      
                  <div className={cx("inner-checkbox")}>
                  <input
                    type="checkbox"
                    name="html_css"
                    value="html_css"
                  ></input>
                    <span className={cx("label")}>HTML & CSS</span>
                  </div>
                  <span className={cx("count")}>(30,123)</span>
                </div>
              </div>
              <span className={cx("show-more-less")}>+11 more</span>
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

export default CategoriesFilterTouchMobile;
