import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { CheckOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";

let cx = classNames.bind(styles);

function DetailReviewsPackage(props) {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(1);
  let titleCheck = check === 2 ? "Most relevant" : "Most rencent";
  function handleOpen() {
    setOpen(!open);
  }
  function handleCheck(index) {
    setCheck(index);
  }
  return (
    <section id="review">
      <header className={cx("reviews-header")}>
        <div className={cx("detail")}>
          <h2>
            <span className={cx("reviews-score")}>20,387</span>
            Reviews
            <div className={cx("seller-rating")}>
              <div className={cx("start")}>
                <span className={cx("orc-start")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"
                    width={15}
                    height={15}
                  >
                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                  </svg>
                </span>
                <span className={cx("orc-start")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"
                    width={15}
                    height={15}
                  >
                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                  </svg>
                </span>
                <span className={cx("orc-start")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"
                    width={15}
                    height={15}
                  >
                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                  </svg>
                </span>
                <span className={cx("orc-start")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"
                    width={15}
                    height={15}
                  >
                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                  </svg>
                </span>
                <span className={cx("orc-start")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"
                    width={15}
                    height={15}
                  >
                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                  </svg>
                </span>
              </div>
              <b className={cx("rating-score")}>4.3</b>
            </div>
          </h2>
          <div className={cx("filter-reviews-wrapper")}>
            <h6 className={cx("filter-reviews-tilte")}>Sort By</h6>
            <div
              className={
                open
                  ? cx("filter-reviews-selected", "show")
                  : cx("filter-reviews-selected")
              }
            >
              <div className={cx("selected-title")}>
                {titleCheck}
                <span className={cx("selected-down-icon")} onClick={handleOpen}>
                  <DownOutlined />
                </span>
              </div>
              <div className={cx("filter-selected-content")}>
                <button
                  onClick={() => {
                    handleCheck(1);
                  }}
                >
                  <CheckOutlined className={check === 1 ? cx("checked") : ""} />
                  Most rencent
                </button>
                <button
                  onClick={() => {
                    handleCheck(2);
                  }}
                >
                  <CheckOutlined className={check === 2 ? cx("checked") : ""} />
                  Most relevant
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={cx("filters-section")}>
        <div className={cx("breakdown-wrapper")}>
          <div className={cx("breakdown-left")}>
            <table className={cx("start-counters")}>
              <tbody>
                <tr>
                  <td>
                    <span className={cx("start-filter-wrapper")}>
                      <button>5 start</button>
                    </span>
                  </td>
                  <td className={cx("progress-bar-container")}>
                    <div className={cx("start-progress-bar")}>
                      <div className={cx("progress-wrapper")}>
                        <span className={cx("star-progress-shape")}></span>
                      </div>
                    </div>
                  </td>
                  <td className={cx("start-num")}>(18,538)</td>
                </tr>
                <tr>
                  <td>
                    <span className={cx("start-filter-wrapper")}>
                      <button>4 start</button>
                    </span>
                  </td>
                  <td className={cx("progress-bar-container")}>
                    <div className={cx("start-progress-bar")}>
                      <div className={cx("progress-wrapper")}>
                        <span className={cx("star-progress-shape")}></span>
                      </div>
                    </div>
                  </td>
                  <td className={cx("start-num")}>(18,538)</td>
                </tr>
                <tr>
                  <td>
                    <span className={cx("start-filter-wrapper")}>
                      <button>3 start</button>
                    </span>
                  </td>
                  <td className={cx("progress-bar-container")}>
                    <div className={cx("start-progress-bar")}>
                      <div className={cx("progress-wrapper")}>
                        <span className={cx("star-progress-shape")}></span>
                      </div>
                    </div>
                  </td>
                  <td className={cx("start-num")}>(18,538)</td>
                </tr>
                <tr>
                  <td>
                    <span className={cx("start-filter-wrapper")}>
                      <button>2 start</button>
                    </span>
                  </td>
                  <td className={cx("progress-bar-container")}>
                    <div className={cx("start-progress-bar")}>
                      <div className={cx("progress-wrapper")}>
                        <span className={cx("star-progress-shape")}></span>
                      </div>
                    </div>
                  </td>
                  <td className={cx("start-num")}>(18,538)</td>
                </tr>
                <tr>
                  <td>
                    <span className={cx("start-filter-wrapper")}>
                      <button>1 start</button>
                    </span>
                  </td>
                  <td className={cx("progress-bar-container")}>
                    <div className={cx("start-progress-bar")}>
                      <div className={cx("progress-wrapper")}>
                        <span className={cx("star-progress-shape")}></span>
                      </div>
                    </div>
                  </td>
                  <td className={cx("start-num")}>(18,538)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={cx("breakdown-right")}>
            <div className={cx("ranking")}>
             <h6 className={cx("ranking-title")}>Rating Breakdown</h6>

              <ul>
                <li>
                  Seller communication level{" "}
                  <span className={cx("seller-rating")}>
                    <div className={cx("start")}>
                      {" "}
                      <span className={cx("orc-start")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1792 1792"
                        width={15}
                        height={15}
                      >
                        <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                      </svg>
                      </span>
                      <b className={cx("rating-score")}>5</b>
                    </div>
                   
                  </span>
                </li>
                <li>
                  Seller communication level{" "}
                  <span className={cx("seller-rating")}>
                    <div className={cx("start")}>
                      {" "}
                      <span className={cx("orc-start")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1792 1792"
                        width={15}
                        height={15}
                      >
                        <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                      </svg>
                      </span>
                      <b className={cx("rating-score")}>5</b>
                    </div>
                   
                  </span>
                </li>
                <li>
                  Seller communication level{" "}
                  <span className={cx("seller-rating")}>
                    <div className={cx("start")}>
                      {" "}
                      <span className={cx("orc-start")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1792 1792"
                        width={15}
                        height={15}
                      >
                        <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                      </svg>
                      </span>
                      <b className={cx("rating-score")}>5</b>
                    </div>
                   
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx("filters-wrapper")}>
            <h6>Filters</h6>
            <div className={cx("filters-list")}>
            <form>
                <div className={cx("input-wrapper")}>
                    <input type="search" placeholder="Search reviews"/>
                    <button className={cx("search-button")}>
                    <SearchOutlined />
                    </button>
                </div>
            </form>
            
            </div>
            <div className={cx("toggle-fillter")}>
                <div className={cx("toggle-fillter-wrapper")}>
                    <input type="checkbox"/>
                    <span className={cx("toggle-fillte-text")}>Delivery Images  <span>(7,111)</span></span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default DetailReviewsPackage;
