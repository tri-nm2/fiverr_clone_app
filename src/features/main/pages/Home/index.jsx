import PageFooter from "common/components/PageFooter";
import HomeHeader from "features/main/components/HomeHeader";
import React, { useEffect } from "react";
import Style from "./style.module.css";
import { useWindowSize } from "common/hooks/windowSize";
import PageMobileFooter from "common/components/PageMobileFooter";
import { useDispatch } from "react-redux";
import { fetchMenuDataAction } from "../../action";
import HomeCarousel from "features/main/components/HomeCarousel";
import HomeServivesCarousel from "features/main/components/HomeServicesCarousel";
import HomeTestimonialCarousel from "features/main/components/HomeTestimonialCarousel";
import HomeProjectCarousel from "features/main/components/HomeProjectCarousel";
import { Link } from "react-router-dom";

function Home() {
  const windowSize = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuDataAction());
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto">
      <HomeHeader />
      <HomeCarousel />

      <div className="flex justify-around items-center w-1/2 mx-auto text-base font-semibold py-6">
        <span style={{ color: "#b5b6ba" }}>Trusted by:</span>
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
          alt="error"
        ></img>
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
          alt="error"
        ></img>
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
          alt="error"
        ></img>
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
          alt="error"
        ></img>
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
          alt="error"
        ></img>
      </div>

      <HomeServivesCarousel />

      <div
        className="flex items-center py-20 px-10 my-14"
        style={{ backgroundColor: "#f1fdf7" }}
      >
        <div className={`text-lg font-semibold w-1/2 ${Style.sellingLeft}`}>
          <span className="text-3xl font-semibold block mb-5">
            A whole world of freelance talent at your fingertips
          </span>
          <div>
            <div>
              <p className="flex items-center mb-2 font-bold">
                <span className="mr-2">
                  <svg
                    width={24}
                    height={24}
                    fill="rgb(122, 125, 133)"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z" />
                    <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z" />
                  </svg>
                </span>
                The best for every budget
              </p>
              <p className={`mb-2 ${Style.content}`}>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </div>

            <div>
              <p className="flex items-center mb-2 font-bold">
                <span className="mr-2">
                  <svg
                    width={24}
                    height={24}
                    fill="rgb(122, 125, 133)"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z" />
                    <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z" />
                  </svg>
                </span>
                Quality work done quickly
              </p>
              <p className={`mb-2 ${Style.content}`}>
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </div>

            <div>
              <p className="flex items-center mb-2 font-bold">
                <span className="mr-2">
                  <svg
                    width={24}
                    height={24}
                    fill="rgb(122, 125, 133)"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z" />
                    <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z" />
                  </svg>
                </span>
                Protected payments, every time
              </p>
              <p className={`mb-2 ${Style.content}`}>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </div>

            <div>
              <p className="flex items-center mb-2 font-bold">
                <span className="mr-2">
                  <svg
                    width={24}
                    height={24}
                    fill="rgb(122, 125, 133)"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z" />
                    <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z" />
                  </svg>
                </span>
                24/7 support
              </p>
              <p className={`${Style.content}`}>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </div>
          </div>
        </div>

        <div className={`w-1/2 relative ${Style.sellingRight}`}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
            alt="error"
          ></img>
        </div>
      </div>

      <div className="py-10">
        <p className="text-3xl font-bold ml-10 mb-10">
          Explore the marketplace
        </p>
        <div className="flex flex-wrap">
          <div className="w-1/5 mb-5">
            <Link
              to="/"
              className={`flex flex-col items-center text-base font-semibold ${Style.marketPlaceLink}`}
            >
              <img
                className="w-12 h-12 mb-5"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="error"
              ></img>
              Graphics &amp; Design
            </Link>
          </div>

          <div className="w-1/5">
            <Link
              to="/"
              className={`flex flex-col items-center text-base font-semibold ${Style.marketPlaceLink}`}
            >
              <img
                className="w-12 h-12 mb-5"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt="error"
              ></img>
              Digital Marketing
            </Link>
          </div>

          <div className="w-1/5">
            <Link
              to="/"
              className={`flex flex-col items-center text-base font-semibold ${Style.marketPlaceLink}`}
            >
              <img
                className="w-12 h-12 mb-5"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt="error"
              ></img>
              Writing &amp; Translation
            </Link>
          </div>

          <div className="w-1/5">
            <Link
              to="/"
              className={`flex flex-col items-center text-base font-semibold ${Style.marketPlaceLink}`}
            >
              <img
                className="w-12 h-12 mb-5"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt="error"
              ></img>
              Video &amp; Animation
            </Link>
          </div>

          <div className="w-1/5">
            <Link
              to="/"
              className={`flex flex-col items-center text-base font-semibold ${Style.marketPlaceLink}`}
            >
              <img
                className="w-12 h-12 mb-5"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt="error"
              ></img>
              Music &amp; Audio
            </Link>
          </div>

          <div className="w-1/5">
            <Link
              to="/"
              className={`flex flex-col items-center text-base font-semibold ${Style.marketPlaceLink}`}
            >
              <img
                className="w-12 h-12 mb-5"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt="error"
              ></img>
              Programming &amp; Tech
            </Link>
          </div>

          <div className="w-1/5">
            <Link
              to="/"
              className={`flex flex-col items-center text-base font-semibold ${Style.marketPlaceLink}`}
            >
              <img
                className="w-12 h-12 mb-5"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt="error"
              ></img>
              Business
            </Link>
          </div>

          <div className="w-1/5">
            <Link
              to="/"
              className={`flex flex-col items-center text-base font-semibold ${Style.marketPlaceLink}`}
            >
              <img
                className="w-12 h-12 mb-5"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt="error"
              ></img>
              Lifestyle
            </Link>
          </div>

          <div className="w-1/5">
            <Link
              to="/"
              className={`flex flex-col items-center text-base font-semibold ${Style.marketPlaceLink}`}
            >
              <img
                className="w-12 h-12 mb-5"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt="error"
              ></img>
              Data
            </Link>
          </div>
        </div>
      </div>

      <div
        className="text-white text-lg font-semibold py-20 px-10 my-10 flex"
        style={{ backgroundColor: "#0d084d" }}
      >
        <div className={`${Style.businessLeft}`}>
          <div className="flex items-center mb-10">
            <p className="mr-2">
              <svg
                width={219}
                height={27}
                viewBox="0 0 219 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#fff">
                  <path d="M81.6,13.1h-3.1c-2,0-3.1,1.5-3.1,4.1v9.3h-6V13.1h-2.5c-2,0-3.1,1.5-3.1,4.1v9.3h-6V8.1h6v2.8 c1-2.2,2.3-2.8,4.3-2.8h7.3v2.8c1-2.2,2.3-2.8,4.3-2.8h2L81.6,13.1z M56.4,18.7H44c0.3,2.1,1.6,3.2,3.7,3.2 c1.6,0,2.7-0.7,3.1-1.8l5.3,1.5c-1.3,3.2-4.5,5.1-8.4,5.1c-6.5,0-9.5-5.1-9.5-9.5c0-4.3,2.6-9.4,9.1-9.4c6.9,0,9.2,5.2,9.2,9.1 C56.5,17.8,56.5,18.3,56.4,18.7z M50.7,15.2c-0.1-1.6-1.3-3-3.3-3c-1.9,0-3,0.8-3.4,3H50.7z M27.8,26.5H33l6.6-18.3h-6l-3.2,10.7 L27.2,8.1h-6L27.8,26.5z M3.4,26.5h5.9V13.1H15v13.4h5.9V8.1H9.3V7c0-1.2,0.9-2,2.2-2H15V0h-4.4C6.3,0,3.4,2.7,3.4,6.6v1.5H0v5 h3.4L3.4,26.5z" />
                  <path d="M91.7,23.7v2.7h-3.5V0h3.5v10.8c1.1-1.8,3.3-3,5.8-3c5.6,0,8.7,4,8.7,9.4s-3.2,9.4-8.8,9.4 C95,26.7,92.8,25.5,91.7,23.7z M102.6,17.3c0-3.8-2.2-6.4-5.6-6.4c-3.4,0-5.6,2.5-5.6,6.4s2.2,6.4,5.6,6.4 C100.4,23.6,102.6,21.1,102.6,17.3z" />
                  <path d="M123.5,26.4H120v-3.2c-1,2.3-3.2,3.5-5.9,3.5c-4.1,0-6.8-3-6.8-7.3V8.1h3.5v10.6c0,2.9,1.7,4.9,4.3,4.9 c2.9,0,4.9-2.3,4.9-5.5V8.1h3.5L123.5,26.4z" />
                  <path d="M125,20.5h3.2c0.3,2.2,1.7,3.4,4.2,3.4c2.1,0,3.5-1.1,3.5-2.5c0-5-10.5-0.4-10.5-8.3c0-3.1,2.7-5.2,6.5-5.2 c4.1,0,6.9,2.3,7.1,5.7h-3.2c-0.3-2.1-2.3-2.9-3.9-2.9c-2,0-3.3,0.9-3.3,2.4c0,4.6,10.5-0.1,10.5,8.2c0,3.3-2.7,5.5-6.8,5.5 C128.1,26.7,125.2,24.3,125,20.5z" />
                  <path d="M144.5,8.1H141v18.3h3.5V8.1z" />
                  <path d="M147.1,8.1h3.5v3.2c1-2.3,3.2-3.5,5.9-3.5c4.1,0,6.8,3,6.8,7.3v11.3h-3.5V15.8c0-2.9-1.7-4.9-4.3-4.9 c-2.9,0-4.9,2.3-4.9,5.5v9.9H147L147.1,8.1z" />
                  <path d="M182.9,20.5h3.2c0.3,2.2,1.7,3.4,4.2,3.4c2.1,0,3.5-1.1,3.5-2.5c0-5-10.5-0.4-10.5-8.3 c0-3.1,2.7-5.2,6.5-5.2c4.1,0,6.9,2.3,7.1,5.7h-3.2c-0.3-2.1-2.3-2.9-3.9-2.9c-2,0-3.3,0.9-3.3,2.4c0,4.6,10.5-0.1,10.5,8.2 c0,3.3-2.7,5.5-6.8,5.5C186,26.7,183.2,24.3,182.9,20.5z" />
                  <path d="M178.7,20.5c-0.5,2.1-2.3,3.2-4.9,3.2c-3.2,0-5.4-2.4-5.7-5.8h14c0-0.3,0.1-0.9,0.1-1.4c0-4.6-3-8.7-8.7-8.7 c-5.6,0-8.8,4.2-8.8,9.3c0,5.1,3.5,9.6,9.2,9.6c4.1,0,7.2-2.1,8.2-5.3L178.7,20.5z M173.4,10.7c3,0,4.9,1.9,5.1,4.6h-10.4 C168.7,12.2,170.5,10.7,173.4,10.7z" />
                  <path d="M198.1,20.5h3.2c0.3,2.2,1.7,3.4,4.2,3.4c2.1,0,3.5-1.1,3.5-2.5c0-5-10.5-0.4-10.5-8.3 c0-3.1,2.7-5.2,6.5-5.2c4.1,0,6.9,2.3,7.1,5.7h-3.2c-0.3-2.1-2.3-2.9-3.9-2.9c-2,0-3.3,0.9-3.3,2.4c0,4.6,10.5-0.1,10.5,8.2 c0,3.3-2.7,5.5-6.8,5.5C201.2,26.7,198.3,24.3,198.1,20.5z" />
                  <path d="M142.7,0c-0.6,0-1.1,0.2-1.6,0.7c-0.4,0.4-0.7,1-0.7,1.6c0,0.6,0.2,1.1,0.7,1.6c0.5,0.4,1,0.7,1.6,0.7 c0.6,0,1.1-0.2,1.6-0.7c0.4-0.5,0.7-1,0.7-1.6c0-0.3-0.1-0.6-0.2-0.9s-0.3-0.5-0.5-0.8c-0.2-0.2-0.5-0.4-0.7-0.5 C143.4,0.1,143.1,0,142.7,0z" />
                  <path d="M218.3,24.4L218.3,24.4c0,0.6-0.2,1.2-0.7,1.6c-0.4,0.4-1,0.7-1.6,0.7c-0.6,0-1.2-0.2-1.6-0.7 c-0.4-0.4-0.7-1-0.7-1.6v0c0-0.6,0.2-1.2,0.7-1.6c0.4-0.4,1-0.7,1.6-0.7c0.6,0,1.2,0.2,1.6,0.7C218.1,23.2,218.3,23.8,218.3,24.4z" />
                </g>
              </svg>
            </p>
            <span className={`text-xs ${Style.businessNew}`}>New</span>
          </div>

          <h1 className="text-white text-3xl font-bold mb-8">
            A business solution designed for <i>teams</i>
          </h1>

          <p className="mb-8">
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>

          <div className="mb-20">
            <div className="flex items-start mb-5">
              <span className="mr-2">
                <svg
                  width={24}
                  height={24}
                  fill="rgb(122, 125, 133)"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z" />
                  <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z" />
                </svg>
              </span>
              <p className="text-base">
                Connect to freelancers with proven business experience
              </p>
            </div>

            <div className="flex items-start mb-5">
              <span className="mr-2">
                <svg
                  width={24}
                  height={24}
                  fill="rgb(122, 125, 133)"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z" />
                  <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z" />
                </svg>
              </span>
              <p className="text-base">
                Get matched with the perfect talent by a customer success
                manager
              </p>
            </div>

            <div className="flex items-start">
              <span className="mr-2">
                <svg
                  width={24}
                  height={24}
                  fill="rgb(122, 125, 133)"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z" />
                  <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z" />
                </svg>
              </span>
              <p className="text-base">
                Manage teamwork and boost productivity with one powerful
                workspace
              </p>
            </div>
          </div>

          <button className={`rounded ${Style.btnBusinessExplore}`}>
            Explore Fiverr Business
          </button>
        </div>

        <div className={` ${Style.businessRight}`}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
            alt="error"
          ></img>
        </div>
      </div>

      <HomeTestimonialCarousel />

      <div className={`my-10 mx-10 relative ${Style.logoMaker}`}>
        <div className="pl-16 py-10 z-10 relative text-white text-base font-semibold w-1/2">
          <p className="mb-5">
            <svg
              width={249}
              height={34}
              viewBox="0 0 249 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#FFFFFF">
                <path d="M81.6,13.1h-3.1c-2,0-3.1,1.5-3.1,4.1v9.3h-6V13.1h-2.5c-2,0-3.1,1.5-3.1,4.1v9.3h-6V8.1h6v2.8 c1-2.2,2.3-2.8,4.3-2.8h7.3v2.8c1-2.2,2.3-2.8,4.3-2.8h2L81.6,13.1z M56.4,18.7H44c0.3,2.1,1.6,3.2,3.7,3.2 c1.6,0,2.7-0.7,3.1-1.8l5.3,1.5c-1.3,3.2-4.5,5.1-8.4,5.1c-6.5,0-9.5-5.1-9.5-9.5c0-4.3,2.6-9.4,9.1-9.4c6.9,0,9.2,5.2,9.2,9.1 C56.5,17.8,56.5,18.3,56.4,18.7z M50.7,15.2c-0.1-1.6-1.3-3-3.3-3c-1.9,0-3,0.8-3.4,3H50.7z M27.8,26.5H33l6.6-18.3h-6l-3.2,10.7 L27.2,8.1h-6L27.8,26.5z M3.4,26.5h5.9V13.1H15v13.4h5.9V8.1H9.3V7c0-1.2,0.9-2,2.2-2H15V0h-4.4C6.3,0,3.4,2.7,3.4,6.6v1.5H0v5 h3.4L3.4,26.5z" />
                <path d="M88.4,0h3.5v26.6h-3.5V0z" />
                <path d="M93.6,17.5c0-5.5,3.9-9.4,9.4-9.4c5.5,0,9.4,3.9,9.4,9.4s-3.9,9.4-9.4,9.4C97.5,26.9,93.6,23,93.6,17.5z M108.8,17.5c0-3.7-2.4-6.3-5.8-6.3c-3.5,0-5.8,2.6-5.8,6.3s2.4,6.3,5.8,6.3C106.4,23.8,108.8,21.2,108.8,17.5z" />
                <path d="M130.1,28.3c0,3.3-2.1,5.7-5.6,5.7h-5.6c-3.8,0-5.8-2.2-5.8-5.4c0-1.5,0.8-2.9,1.9-3.7 c-0.9-0.7-1.4-1.6-1.4-2.8c0-1.5,0.9-2.5,2.2-3.8c-0.8-1-1.2-2.4-1.2-3.8c0-3.8,3-6.3,7-6.3c1,0,2,0.2,2.9,0.5l2.5-2.9l2.2,2 l-2.2,2.5c1,1.1,1.6,2.6,1.6,4.1c0,3.8-3,6.3-7,6.3c-1.3,0-2.5-0.3-3.5-0.7c-0.7,0.8-1,1.2-1,1.8c0,1,0.9,1.5,2,1.5h5.1 C127.6,23.3,130.1,24.9,130.1,28.3z M126.7,28.5c0-1.7-1.1-2.5-2.9-2.5h-4.2c-0.6,0-1.2,0-1.8-0.1c-0.9,0.7-1.2,1.6-1.2,2.6 c0,1.5,1,2.6,2.5,2.6h5.4C126.1,31.1,126.7,30,126.7,28.5z M117.9,14.4c0,2.2,1.7,3.5,3.7,3.5c2,0,3.7-1.3,3.7-3.5 c0-2.2-1.7-3.5-3.7-3.5C119.6,10.9,117.9,12.2,117.9,14.4z" />
                <path d="M130.2,17.5c0-5.5,3.9-9.4,9.4-9.4c5.5,0,9.4,3.9,9.4,9.4s-3.9,9.4-9.4,9.4C134.2,26.9,130.2,23,130.2,17.5z M145.4,17.5c0-3.7-2.4-6.3-5.8-6.3c-3.5,0-5.8,2.6-5.8,6.3s2.4,6.3,5.8,6.3C143.1,23.8,145.4,21.2,145.4,17.5z" />
                <path d="M155,8.4h3.5v3.3c0.8-2.1,2.7-3.5,5.4-3.5c3,0,5.2,1.3,5.9,3.7c0.7-2.1,3.1-3.7,5.9-3.7 c3.9,0,6.4,2.7,6.4,6.9v11.6h-3.5V16c0-2.9-1.5-4.8-3.9-4.8c-2.8,0-4.5,2-4.5,4.8v10.6h-3.5V16c0-2.9-1.5-4.8-3.8-4.8 c-2.8,0-4.5,2-4.5,4.8v10.6H155V8.4z" />
                <path d="M199.3,14.7v11.9h-3.4v-3c-0.9,2-3.2,3.3-5.9,3.3c-3.7,0-6.2-2.3-6.2-5.5c0-3.7,2.4-5.9,7.1-5.9h3.9 c0.7,0,1.1-0.4,1.1-1v-0.1c0-2.2-2-3.6-4.5-3.6s-4.3,1.6-4.5,3.5h-3.2c0.3-3.6,3.5-6.3,7.6-6.3C195.9,8.1,199.3,10.7,199.3,14.7z M195.9,18.6v-0.5h-4.7c-2.8,0-3.9,1.2-3.9,3.3c0,1.6,1.5,2.8,3.4,2.8C193.9,24.1,195.9,22,195.9,18.6z" />
                <path d="M207,17.9l-2.3,2.1v6.6h-3.5V0h3.5v15.6l8-7.2h4.5l-7.7,7.1l8.4,11.1h-4.3L207,17.9z" />
                <path d="M243.2,11.4c-3.3,0-4.4,3-4.4,6.9v8.3h-3.5V8.4h3.5v3.5c0.8-2.4,2.3-3.5,4.8-3.5h2.2v3H243.2z" />
                <path d="M230.4,20.7c-0.5,2.1-2.2,3.2-4.9,3.2c-3.2,0-5.4-2.4-5.7-5.8h13.9c0-0.3,0.1-0.9,0.1-1.4 c0-4.6-3-8.6-8.6-8.6c-5.6,0-8.8,4.2-8.8,9.3c0,5.1,3.5,9.5,9.2,9.5c4.1,0,7.2-2.1,8.2-5.3L230.4,20.7L230.4,20.7z M225.2,10.9 c3,0,4.9,1.8,5.1,4.6h-10.4C220.5,12.5,222.3,10.9,225.2,10.9z" />
                <path d="M248.8,24.6L248.8,24.6c0,0.6-0.2,1.2-0.7,1.7c-0.4,0.4-1,0.7-1.6,0.7c-0.3,0-0.6-0.1-0.9-0.2 c-0.3-0.1-0.5-0.3-0.7-0.5c-0.2-0.2-0.4-0.5-0.5-0.7c-0.1-0.3-0.2-0.6-0.2-0.9v0c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.5,0.5-0.7 c0.2-0.2,0.5-0.4,0.7-0.5c0.3-0.1,0.6-0.2,0.9-0.2c0.6,0,1.2,0.2,1.6,0.7C248.6,23.4,248.8,24,248.8,24.6z" />
              </g>
            </svg>
          </p>
          <p className="text-4xl font-bold mb-5">
            Make an incredible logo <br />
            <i className="font-medium">in minutes</i>
          </p>
          <p className="mb-8">
            Pre-designed by top talent. Just add your touch.
          </p>
          <button className={`rounded ${Style.btnTry}`}>
            Try Fiverr Logo Maker
          </button>
        </div>

        <picture className="absolute top-0 left-0 w-full h-full z-0">
          <source
            media="(min-width: 1160px)"
            srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_2.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png 2x"
          />
          <source
            media="(min-width: 900px)"
            srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1112,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1112,dpr_2.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png 2x"
          />
          <img alt="fiverr logo maker" loading="lazy" />
        </picture>
      </div>

      <HomeProjectCarousel />

      <div className="py-10">
        <div
          className={`flex justify-between items-start px-3 ${Style.guideHeader}`}
        >
          <p className="text-3xl font-semibold mb-10 ml-2">Fiverr guides</p>
          <Link className="flex items-center text-base mr-3" to="/">
            See More Projects
            <span className="ml-3 w-2.5 h-2.5">
              <svg
                width={8}
                height={16}
                fill="#446ee7"
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
          </Link>
        </div>

        <div className={`grid grid-cols-3 ${Style.guideBody}`}>
          <div className="px-5">
            <Link to="/">
              <img
                className="mb-5"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png"
                alt="error"
              ></img>
              <span className="text-xl font-bold block mb-2">
                Start an online business and work from home
              </span>
              <p className="text-base" style={{ color: "#74767e" }}>
                A complete guide to starting a small business online
              </p>
            </Link>
          </div>

          <div className="px-5">
            <Link to="/">
              <img
                className="mb-5"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png"
                alt="error"
              ></img>
              <span className="text-xl font-bold block mb-2">
                Digital marketing made easy
              </span>
              <p className="text-base" style={{ color: "#74767e" }}>
                A practical guide to understand what is digital marketing
              </p>
            </Link>
          </div>

          <div className="px-5">
            <Link to="/">
              <img
                className="mb-5"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png"
                alt="error"
              ></img>
              <span className="text-xl font-bold block mb-2">
                Create a logo for your business
              </span>
              <p className="text-base" style={{ color: "#74767e" }}>
                A step-by-step guide to create a memorable business logo
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="my-10 mx-10 relative">
        <div className="absolute top-0 left-0 z-0">
          <img
            className="rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png"
            alt="error"
          ></img>
        </div>
        <div className="relative text-white z-10 w-3/5 py-24 pl-24">
          <span className="text-5xl font-bold block mb-10">
            Find the <i className="font-semibold">talent</i> needed to get your
            business <i className="font-semibold">growing</i>.
          </span>
          <button
            className={`rounded text-base font-semibold ${Style.btnStarted}`}
          >
            Get Started
          </button>
        </div>
      </div>

      {windowSize.width > 576 ? <PageFooter /> : <PageMobileFooter />}
    </div>
  );
}

export default Home;
