import React from "react";
import Style from "./style.module.css";
import { Link } from "react-router-dom";

function HomeMarketPlace() {
  return (
    <div className="py-10">
      <p className="text-3xl font-bold ml-10 mb-10">Explore the marketplace</p>
      <div className="flex flex-wrap">
        <div className="md:w-1/5 sm:w-1/3 w-1/2 mb-12">
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

        <div className="md:w-1/5 sm:w-1/3 w-1/2 mb-12">
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

        <div className="md:w-1/5 sm:w-1/3 w-1/2 mb-12">
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

        <div className="md:w-1/5 sm:w-1/3 w-1/2 mb-12">
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

        <div className="md:w-1/5 sm:w-1/3 w-1/2 mb-12">
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

        <div className="md:w-1/5 sm:w-1/3 w-1/2 mb-12">
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

        <div className="md:w-1/5 sm:w-1/3 w-1/2 mb-12">
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

        <div className="md:w-1/5 sm:w-1/3 w-1/2 mb-12">
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

        <div className="md:w-1/5 sm:w-1/3 w-1/2 mb-12">
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
  );
}

export default HomeMarketPlace;
