import React, { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { Carousel } from "react-responsive-carousel";
import { Link, useParams } from "react-router-dom";

import classNames from "classnames/bind";

import styles from "./style.module.scss";

import {
  FlagFilled,
  HeartFilled,
  MenuOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

import { useScrollPosition } from "common/hooks/scrollPostion";
import DetailFAQs from "features/main/components/DetailFAQs";
import DetailReviewsPackage from "features/main/components/DetailReviewsPackage";
import DetailReviewsList from "features/main/components/DetailReviewsList";
import DetailUserComment from "features/main/components/DetailUserComment";
import DetailSideBarContent from "features/main/components/DetailSideBarContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataComment, fetchDataDetail, fetchDataUser } from "./action";
import _ from "lodash";

let cx = classNames.bind(styles);

function Detail(props) {
  const scrollPosition = useScrollPosition();
  const { tenLoaiCongViec, tenChitiet, id } = useParams();
  const handlescroll = scrollPosition > 120 ? "scroll-wrapper" : "";
  const menuData = useSelector((state) => state.main.menuData);
  const detailData = useSelector((state) => state.detail.detailData);
  const detail = detailData[0];
  const userData = useSelector((state) => state.detail.userData);

  const user = userData[0];
  const dispatch = useDispatch();
  function getJobType(){
    const jobtype =  menuData.findIndex( item => item.tenLoaiCongViec === tenLoaiCongViec);
    return menuData[jobtype].id;
  }
  useEffect(() => {
    dispatch(fetchDataDetail(id));
    dispatch(fetchDataUser(detail.tenNguoiTao));
    // dispatch(fetchDataComment(id));
    getJobType();
  }, []);
  const images = [
    {
      original: detail.congViec.hinhAnh,
      thumbnail: detail.congViec.hinhAnh,
    },
  ];

  return (
    <div className="layout-row">
      <div className={cx("top-nav", `${handlescroll}`)}>
        <nav>
          <ul>
            <li className={cx("nav-overview", "selected")}>
              <a href="#overview">Overview</a>
            </li>
            <li className={cx("nav-description")}>
              <a href="#description">Description</a>
            </li>
            <li className={cx("nav-about-seller")}>
              <a href="#about-seller">About the seller</a>
            </li>
            <li className={cx("nav-recommendations")}>
              <a href="#recommendations">Recommendations</a>
            </li>
            <li className={cx("nav-faq")}>
              <a href="#faq">FAQ</a>
            </li>
            <li className={cx("nav-review")}>
              <a href="#review">Reviews</a>
            </li>
          </ul>
          <aside className={cx("actions")}>
            <div className={cx("collect-wrapper")}>
              <div className={cx("collect-package")}>
                <div className={cx("collections-wrapper")}>
                  <span>
                    <button className={cx("button-wrapper")}>
                      <MenuOutlined />
                    </button>
                  </span>
                  <div className={cx("collect-container")}>
                    <ul>
                      <li>
                        <button>
                          <div>
                            <span>
                              <HeartFilled />
                            </span>
                            <span>My first list</span>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <button>
                      <span>
                        <PlusOutlined />
                      </span>
                      <span>Create list</span>
                    </button>
                  </div>
                </div>
                <div className={cx("collect-like")}>
                  <span>
                    <button className={cx("button-wrapper")}>
                      <HeartFilled />
                    </button>
                  </span>
                </div>
              </div>
              <span className={cx("collect-count")}>12300</span>
            </div>
            <div className={cx("report-gig")}>
              <span>
                <button className={cx("button-wrapper")}>
                  <FlagFilled />
                </button>
              </span>
            </div>
            <div className={cx("sharing-gig")}>
              <span>
                <button className={cx("button-wrapper")}>
                  <ShareAltOutlined />
                </button>
              </span>
            </div>
          </aside>
        </nav>
      </div>
      <div className={cx("gig-page")}>
        <div className={cx("main")}>
          <nav>
            <ul className={cx("breadcrumbs")}>
              <li>
                <Link to={`/jobtype/${getJobType()}`}>
                  {tenLoaiCongViec}
                </Link>
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
                <Link to={`/categories/${tenLoaiCongViec}/${tenChitiet}`}>
                  {tenChitiet}
                </Link>
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
          </nav>
          <h1>{detail.congViec.tenCongViec}</h1>
          <div id="overview" className={cx("seller-overview")}>
            <div className={cx("seller-image")}>
              <figure>
                <figcaption>e</figcaption>
                <img src={detail.avatar} alt="encodersltd" />
              </figure>
            </div>
            <div className={cx("seller-content")}>
              <div className={cx("seller-name")}>{detail.tenNguoiTao}</div>
              <div className={cx("seller-level")}>
                <span>Level 1 Seller</span>
              </div>
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
                <b className={cx("rating-score")}>
                  {detail.congViec.saoCongViec}
                </b>
                <span className={cx("rating-count")}>
                  ({detail.congViec.danhGia})
                </span>
              </div>
              <div className={cx("seller-order")}>1 Order in Queue</div>
            </div>
          </div>
          <section className={cx("gig-gallery-component")}>
            <ImageGallery items={images} showPlayButton={false} />
          </section>
          <section className={cx("gig-reviews")}>
            <header>
              <h2 className={cx("section-title")}>
                What people loved about this seller
              </h2>
              <button className={cx("reviews-button")}>See all reviews</button>
            </header>
            <div className={cx("carousel-reviews")}>
              <Carousel
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
              >
                <div>
                  <div className={cx("carousel-item")}>
                    <div className={cx("user-profile")}>
                      <span className={cx("profile-image")}>B</span>
                    </div>
                    <div className={cx("user-detail")}>
                      <div className={cx("reviewer")}>
                        <h6>butnarinicolae</h6>
                        <div className={cx("country")}>
                          <img
                            className={cx("country-flag")}
                            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f2-1f1e9.png"
                            alt="MD"
                            loading="lazy"
                          />
                          <div className={cx("country-name")}>Moldova</div>
                        </div>
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
                      </div>
                      <p className={cx("review-item-comment")}>
                        It was a fine experience with the seller. After we did
                        buy he's service and filling in all required details he
                        did response very quick and created a set of mock-ups.
                        We did a couple of review sessions until we agreed on a
                        logo. The good part is that he offers unlimited review
                        and tweaks (except the entire logo design). We played
                        with colors until got to the right point. The thing we
                        didn't agree on is understand-ability. Like, we
                        requested a set of colors for the a couple of reviews
                        and delivery but we received something different. It's
                        not a great problem, but we lost time on this until we
                        got close as possible to desired result. It was great.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={cx("carousel-item")}>
                    <div className={cx("user-profile")}>
                      <span className={cx("profile-image")}>B</span>
                    </div>
                    <div className={cx("user-detail")}>
                      <div className={cx("reviewer")}>
                        <h6>butnarinicolae</h6>
                        <div className={cx("country")}>
                          <img
                            className={cx("country-flag")}
                            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f2-1f1e9.png"
                            alt="MD"
                            loading="lazy"
                          />
                          <div className={cx("country-name")}>Moldova</div>
                        </div>
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
                      </div>
                      <p className={cx("review-item-comment")}>
                        It was a fine experience with the seller. After we did
                        buy he's service and filling in all required details he
                        did response very quick and created a set of mock-ups.
                        We did a couple of review sessions until we agreed on a
                        logo. The good part is that he offers unlimited review
                        and tweaks (except the entire logo design). We played
                        with colors until got to the right point. The thing we
                        didn't agree on is understand-ability. Like, we
                        requested a set of colors for the a couple of reviews
                        and delivery but we received something different. It's
                        not a great problem, but we lost time on this until we
                        got close as possible to desired result. It was great.
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </section>
          <div id="description" className={cx("gig-description")}>
            <header>
              <h2 className={cx("section-title")}>About This Gig</h2>
            </header>
            <div className={cx("description-content")}>
              <p>Hi there ! Thanks for stopping by !!</p>
              <p>{detail.congViec.moTa}</p>
              <p>
                <br />
              </p>
              <p>
                A <strong>Team of Talented Graphic Designer</strong>&nbsp;with
                8+ years of experience in Graphic Industry, expertise as Logo
                Maker, You'll get creative &amp; AWESOME logo design for your
                business.
              </p>
              <p>
                <br />
              </p>
              <p>
                My portfolio :{" "}
                <u>
                  https://www.fiverr.com/users/design_desk/portfolio/NjFiYjE4NmMwZTgwMDUwMDAxZTMzMjJh
                </u>
              </p>
              <p>
                <br />
              </p>
              <p>Why Us?</p>
              <ul>
                <li>Talented Logo Maker Team</li>
                <li>
                  Fully custom made, creative, original, UNIQUE and AWESOME
                  designs
                </li>
                <li>Professional customer support 24/7</li>
                <li>High Quality work</li>
                <li>
                  <strong>100% money back policy if not satisfied</strong>
                </li>
              </ul>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
              <p>WHAT DO YOU GET?</p>
              <p>
                <br />
              </p>
              <p>
                &nbsp;Highly Professional, UNIQUE &amp; High Quality designs
              </p>
              <p>&nbsp;UNLIMITED revisions until u r 100% satisfied</p>
              <p>Fast turn around time 24 to 48 hours only.</p>
              <p>
                &nbsp;100% original &amp; unique vector design from Adobe
                Illustrator
              </p>
              <p>
                &nbsp;Vector Source Files (scalable without any quality loss)
                (AI, EPS, PDF) for the final design&nbsp;PROFESSIONAL
                Communication &amp; Outstanding Customer Support&nbsp;Guaranteed
                High Quality work
              </p>
              <p>
                <br />
              </p>
              <p>If you have any question,&nbsp;</p>
              <p>Feel free to Contact Me! I'll be happy to help !</p>
              <p>
                <br />
              </p>
              <p>Let's get started!</p>
              <p>-Your Logo Maker</p>
            </div>
            <ul className={cx("meta-data")}>
              <li className={cx("metadata-attribute")}>
                <p>Logo style</p>
                <ul>
                  <li>Minimalist</li>
                </ul>
              </li>
              <li className={cx("metadata-attribute")}>
                <p>File format</p>
                <ul>
                  <li>AI</li>
                  <li>JPG</li>
                  <li>PDF</li>
                  <li>PNG</li>
                  <li>PSD</li>
                  <li>EPS</li>
                  <li>SVG</li>
                </ul>
              </li>
            </ul>
          </div>
          <h2 className={cx("section-title")}>About The Seller</h2>
          <div id="about-seller" className={cx("profile-card")}>
            <div className={cx("seller-card")}>
              <div className={cx("profile-info")}>
                <div className={cx("profile-image")}>
                  <label className={cx("profile-pict")}>
                    <img src={user.avatar} alt="seller-card" />
                    <a className={cx("level-two-seller")}></a>
                  </label>
                </div>
                <div className={cx("profile-label")}>
                  <div className={cx("username-line")}>
                    <a className={cx("seller-link")}>{user.name}</a>
                    <div className={cx("status")}>
                      <span>
                        <svg
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" />
                        </svg>
                      </span>
                      Online
                    </div>
                  </div>
                  <div className={cx("one-linner-rating-wrapper")}>
                    <p className={cx("one-liner")}></p>
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
                      <b className={cx("rating-score")}></b>
                      <span className={cx("rating-count")}></span>
                    </div>
                  </div>
                  <button className={cx("btn-contact-me")}>Contact me</button>
                </div>
              </div>
            </div>
            <div className={cx("profile-desc")}>
              <ul className={cx("user-stats")}>
                <li>
                  Birthday<strong>{user.birthday}</strong>
                </li>
                <li>
                  Gender<strong>{user.gender ? "Male" : "Female"}</strong>
                </li>
                <li>
                  Email<strong>{user.email}</strong>
                </li>
                <li>
                  Certification<strong>{user.certification}</strong>
                </li>
              </ul>
              {/* <article className={cx("seller-desc")}>
                <div className={cx("inner")}>
                  Hello! My name is VD. I am a connoisseur of art and music. I
                  love being around nature and my pets. I have a team of
                  professional graphic designers with an experience of 8+ years.
                  We specialize in logo designing. We're available exclusively
                  on fiverr to rock your world with our designing skills. Come
                  and experience it for yourself!{" "}
                </div>
                <button className={cx("read-more")}>+ See More</button>
              </article> */}
            </div>
          </div>
          <DetailFAQs />
          <DetailReviewsPackage />
          <DetailReviewsList id={id} />
          <DetailUserComment />
        </div>
        <div className={cx("side-bar")}>
          <DetailSideBarContent congViec={detail.congViec} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
