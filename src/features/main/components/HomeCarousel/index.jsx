import React from "react";
import { Carousel } from "antd";
import Style from "./style.module.css";
import { Link } from "react-router-dom";

function HomeCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  
  return (
    <div>
      <Carousel {...settings}>
        <div className={`${Style.slide} ${Style.bg1}`}>
          <div className="flex items-center h-full">
            <div className="flex flex-col text-white text-base w-1/2 pl-10">
              <h1 className={`text-white font-semibold mb-10 ${Style.title}`}>
                Find the perfect <i>freelance</i> services for your business
              </h1>
              <div className="flex relative mb-10">
                <span
                  className={`${Style.txtSearchIcon}`}
                  aria-hidden="true"
                  style={{ width: 16, height: 16 }}
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z" />
                  </svg>
                </span>
                <input
                  className={`w-3/4 rounded-l text-base ${Style.txtSearch}`}
                  placeholder='Try "building mobile app"'
                ></input>
                <button
                  className={`w-1/4 rounded-r font-semibold ${Style.btnSearch}`}
                >
                  Search
                </button>
              </div>
              <div className="flex">
                <span className="mr-3">Popular:</span>
                <div
                  className={`flex justify-around space-x-3 font-semibold ${Style.link}`}
                >
                  <Link to="/">Website Design</Link>
                  <Link to="/">WordPress</Link>
                  <Link to="/">Logo Design</Link>
                  <Link to="/">Video Editing</Link>
                </div>
              </div>
            </div>
            <div
              className="flex justify-end items-end w-1/2 h-full text-white text-base 
              pb-10 pr-10 font-semibold"
            >
              <span>Andrea Fashion Designer</span>
            </div>
          </div>
        </div>

        <div className={`${Style.slide} ${Style.bg2}`}>
          <div className="flex items-center h-full">
            <div className="flex flex-col text-white text-base w-1/2 pl-10">
              <h1 className={`text-white font-semibold mb-10 ${Style.title}`}>
                Find the perfect <i>freelance</i> services for your business
              </h1>
              <div className="flex relative mb-10">
                <span
                  className={`${Style.txtSearchIcon}`}
                  aria-hidden="true"
                  style={{ width: 16, height: 16 }}
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z" />
                  </svg>
                </span>
                <input
                  className={`w-3/4 rounded-l text-base ${Style.txtSearch}`}
                  placeholder='Try "building mobile app"'
                ></input>
                <button
                  className={`w-1/4 rounded-r font-semibold ${Style.btnSearch}`}
                >
                  Search
                </button>
              </div>
              <div className="flex">
                <span className="mr-3">Popular:</span>
                <div
                  className={`flex justify-around space-x-3 font-semibold ${Style.link}`}
                >
                  <Link to="/">Website Design</Link>
                  <Link to="/">WordPress</Link>
                  <Link to="/">Logo Design</Link>
                  <Link to="/">Video Editing</Link>
                </div>
              </div>
            </div>
            <div
              className="flex justify-end items-end w-1/2 h-full text-white text-base 
              pb-10 pr-10 font-semibold"
            >
              <span>Moon Marketing Expert</span>
            </div>
          </div>
        </div>

        <div className={`${Style.slide} ${Style.bg3}`}>
          <div className="flex items-center h-full">
            <div className="flex flex-col text-white text-base w-1/2 pl-10">
              <h1 className={`text-white font-semibold mb-10 ${Style.title}`}>
                Find the perfect <i>freelance</i> services for your business
              </h1>
              <div className="flex relative mb-10">
                <span
                  className={`${Style.txtSearchIcon}`}
                  aria-hidden="true"
                  style={{ width: 16, height: 16 }}
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z" />
                  </svg>
                </span>
                <input
                  className={`w-3/4 rounded-l text-base ${Style.txtSearch}`}
                  placeholder='Try "building mobile app"'
                ></input>
                <button
                  className={`w-1/4 rounded-r font-semibold ${Style.btnSearch}`}
                >
                  Search
                </button>
              </div>
              <div className="flex">
                <span className="mr-3">Popular:</span>
                <div
                  className={`flex justify-around space-x-3 font-semibold ${Style.link}`}
                >
                  <Link to="/">Website Design</Link>
                  <Link to="/">WordPress</Link>
                  <Link to="/">Logo Design</Link>
                  <Link to="/">Video Editing</Link>
                </div>
              </div>
            </div>
            <div
              className="flex justify-end items-end w-1/2 h-full text-white text-base 
              pb-10 pr-10 font-semibold"
            >
              <span>Ritika Shoemaker and Designer</span>
            </div>
          </div>
        </div>

        <div className={`${Style.slide} ${Style.bg4}`}>
          <div className="flex items-center h-full">
            <div className="flex flex-col text-white text-base w-1/2 pl-10">
              <h1 className={`text-white font-semibold mb-10 ${Style.title}`}>
                Find the perfect <i>freelance</i> services for your business
              </h1>
              <div className="flex relative mb-10">
                <span
                  className={`${Style.txtSearchIcon}`}
                  aria-hidden="true"
                  style={{ width: 16, height: 16 }}
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z" />
                  </svg>
                </span>
                <input
                  className={`w-3/4 rounded-l text-base ${Style.txtSearch}`}
                  placeholder='Try "building mobile app"'
                ></input>
                <button
                  className={`w-1/4 rounded-r font-semibold ${Style.btnSearch}`}
                >
                  Search
                </button>
              </div>
              <div className="flex">
                <span className="mr-3">Popular:</span>
                <div
                  className={`flex justify-around space-x-3 font-semibold ${Style.link}`}
                >
                  <Link to="/">Website Design</Link>
                  <Link to="/">WordPress</Link>
                  <Link to="/">Logo Design</Link>
                  <Link to="/">Video Editing</Link>
                </div>
              </div>
            </div>
            <div
              className="flex justify-end items-end w-1/2 h-full text-white text-base 
              pb-10 pr-10 font-semibold"
            >
              <span>Zach Bar Owner</span>
            </div>
          </div>
        </div>

        <div className={`${Style.slide} ${Style.bg5}`}>
          <div className="flex items-center h-full">
            <div className="flex flex-col text-white text-base w-1/2 pl-10">
              <h1 className={`text-white font-semibold mb-10 ${Style.title}`}>
                Find the perfect <i>freelance</i> services for your business
              </h1>
              <div className="flex relative mb-10">
                <span
                  className={`${Style.txtSearchIcon}`}
                  aria-hidden="true"
                  style={{ width: 16, height: 16 }}
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z" />
                  </svg>
                </span>
                <input
                  className={`w-3/4 rounded-l text-base ${Style.txtSearch}`}
                  placeholder='Try "building mobile app"'
                ></input>
                <button
                  className={`w-1/4 rounded-r font-semibold ${Style.btnSearch}`}
                >
                  Search
                </button>
              </div>
              <div className="flex">
                <span className="mr-3">Popular:</span>
                <div
                  className={`flex justify-around space-x-3 font-semibold ${Style.link}`}
                >
                  <Link to="/">Website Design</Link>
                  <Link to="/">WordPress</Link>
                  <Link to="/">Logo Design</Link>
                  <Link to="/">Video Editing</Link>
                </div>
              </div>
            </div>
            <div
              className="flex justify-end items-end w-1/2 h-full text-white text-base 
              pb-10 pr-10 font-semibold"
            >
              <span>Gabrielle Video Editor</span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
