import React from "react";
import { Link } from "react-router-dom";
import Style from "./style.module.css";

function JobTypeGuide() {
  return (
    <div className="mb-20 px-8">
      <div className={`flex justify-between items-start ${Style.guideHeader}`}>
        <p className="text-3xl font-semibold mb-10 ml-2">
          Graphics &amp; Design Related Guides
        </p>
        <Link className="lg:flex hidden items-center text-base mr-3" to="/">
          See More Guides
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

      <div className="flex flex-wrap justify-around items-start">
        <div className="lg:w-1/3 sm:w-1/2 w-full mb-5 px-3">
          <img
            className="w-full h-full rounded mb-3"
            src="https://fiverr-res.cloudinary.com/image/upload/w_600/q_auto,f_auto/v1/attachments/generic_asset/asset/2508960106117021baf4c9699b982213-1593436732817/children%27s%20book%20illustration.jpg"
            alt="error"
          ></img>
          <Link
            className="text-lg font-bold hover:text-black hover:underline"
            to="/"
          >
            How to illustrate a children's book: 9 steps to illustrate your book
          </Link>
        </div>

        <div className="lg:w-1/3 sm:w-1/2 w-full mb-5 px-3">
          <img
            className="w-full h-full rounded mb-3"
            src="https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg"
            alt="error"
          ></img>
          <Link
            className="text-lg font-bold hover:text-black hover:underline"
            to="/"
          >
            Graphic design 101: what is graphic design?
          </Link>
        </div>

        <div className="lg:w-1/3 sm:w-1/2 w-full mb-5 px-3">
          <img
            className="w-full h-full rounded mb-3"
            src="https://fiverr-res.cloudinary.com/image/upload/w_600/q_auto,f_auto/v1/attachments/generic_asset/asset/10f680cb84a2f3ef4473ecfdede3a1ba-1593438129320/business%20logo%20design-fiverr%20guide.jpg"
            alt="error"
          ></img>
          <Link
            className="text-lg font-bold hover:text-black hover:underline"
            to="/"
          >
            How to design a logo: 12 steps to creating a business logo from
            scratch
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobTypeGuide;
