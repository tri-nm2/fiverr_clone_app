import React from "react";
import Style from "./style.module.css";
import { Link } from "react-router-dom";

function HomeGuide() {
  return (
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
  );
}

export default HomeGuide;
