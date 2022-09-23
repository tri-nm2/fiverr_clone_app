import React from "react";
import Style from "./style.module.css";
import { Link, NavLink } from "react-router-dom";

function PageFooter() {
  return (
    <div className="container mx-auto">
      <div
        className={`grid lg:grid-cols-5 grid-cols-3 text-left pt-10 text-base font-semibold
        pl-10 border-b-2 ${Style.footerTop}`}
      >
        <div className="flex flex-col lg:mb-0 mb-8">
          <span className="mb-3 text-black">Categories</span>
          <NavLink rel="noopener noreferrer" className="my-2" to="/">
            Graphics & Design
          </NavLink>
          <Link className="my-2" to="/">
            Digital Marketing
          </Link>
          <Link className="my-2" to="/">
            Writing & Translation
          </Link>
          <Link className="my-2" to="/">
            Video & Animation
          </Link>
          <Link className="my-2" to="/">
            Music & Audio
          </Link>
          <Link className="my-2" to="/">
            Programming & Tech
          </Link>
          <Link className="my-2" to="/">
            Data
          </Link>
          <Link className="my-2" to="/">
            Business
          </Link>
          <Link className="my-2" to="/">
            Lifestyle
          </Link>
          <Link className="my-2" to="/">
            Sitemap
          </Link>
        </div>

        <div className="flex flex-col">
          <span className="mb-3 text-black">About</span>
          <Link className="my-2" to="/">
            Careers
          </Link>
          <Link className="my-2" to="/">
            Press & News
          </Link>
          <Link className="my-2" to="/">
            Partnerships
          </Link>
          <Link className="my-2" to="/">
            Privacy Policy
          </Link>
          <Link className="my-2" to="/">
            Terms of Service
          </Link>
          <Link className="my-2" to="/">
            Intellectual Property Claims
          </Link>
          <Link className="my-2" to="/">
            Investor Relations
          </Link>
        </div>

        <div className="flex flex-col">
          <span className="mb-3 text-black">Support</span>
          <Link className="my-2" to="/">
            Help & Support
          </Link>
          <Link className="my-2" to="/">
            Trust & Safety
          </Link>
          <Link className="my-2" to="/">
            Selling on Fiverr
          </Link>
          <Link className="my-2" to="/">
            Buying on Fiverr
          </Link>
        </div>

        <div className="flex flex-col">
          <span className="mb-3 text-black">Community</span>
          <Link className="my-2" to="/">
            Events
          </Link>
          <Link className="my-2" to="/">
            Blog
          </Link>
          <Link className="my-2" to="/">
            Forum
          </Link>
          <Link className="my-2" to="/">
            Community Standards
          </Link>
          <Link className="my-2" to="/">
            Podcast
          </Link>
          <Link className="my-2" to="/">
            Affiliates
          </Link>
          <Link className="my-2" to="/">
            Invite a Friend
          </Link>
          <Link className="my-2" to="/">
            Become a Seller
          </Link>
        </div>

        <div className="flex flex-col mb-8">
          <span className="mb-3 text-black">More From Fiverr</span>
          <Link className="my-2" to="/">
            Fiverr Business
          </Link>
          <Link className="my-2" to="/">
            Fiverr Pro
          </Link>
          <Link className="my-2" to="/">
            Fiverr Studios
          </Link>
          <Link className="my-2" to="/">
            Fiverr Logo Maker
          </Link>
          <Link className="my-2" to="/">
            Fiverr Guides
          </Link>
          <Link className="my-2" to="/">
            Get Inspired
          </Link>
          <Link className="my-2" to="/">
            Fiverr Select
          </Link>
          <Link className="my-2" to="/">
            ClearVoice
            <p className="text-xs">Content Marketing</p>
          </Link>
          <Link className="my-2" to="/">
            Fiverr Workspace
            <p className="text-xs">Invoice Software</p>
          </Link>
          <Link className="my-2" to="/">
            Learn
            <p className="text-xs">Online Courses</p>
          </Link>
          <Link className="my-2" to="/">
            Working Not Working
          </Link>
        </div>
      </div>

      <div
        className={`flex lg:flex-row flex-col lg:justify-between 
        px-5 py-10 text-sm font-semibold ${Style.footerBottom}`}
      >
        <div className="flex lg:justify-around items-end space-x-3 lg:mb-0 mb-4">
          <span>
            <svg
              width={91}
              height={27}
              viewBox="0 0 91 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#7A7D85">
                <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z" />
              </g>
              <g fill="#7A7D85">
                <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z" />
              </g>
            </svg>
          </span>
          <span className={`text-sm ${Style.copyRight}`}>
            © Fiverr International Ltd. 2022
          </span>
        </div>

        <div className="flex">
          <div
            className={`flex justify-around items-center lg:space-x-8 space-x-3 
            lg:mr-14 mr-8 ${Style.socialIcon}`}
          >
            <Link to="/">
              <span>
                <svg
                  width={20}
                  height={17}
                  viewBox="0 0 20 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 1.875C19.25 2.25 18.5 2.375 17.625 2.5C18.5 2 19.125 1.25 19.375 0.25C18.625 0.75 17.75 1 16.75 1.25C16 0.5 14.875 0 13.75 0C11.625 0 9.75 1.875 9.75 4.125C9.75 4.5 9.75 4.75 9.875 5C6.5 4.875 3.375 3.25 1.375 0.75C1 1.375 0.875 2 0.875 2.875C0.875 4.25 1.625 5.5 2.75 6.25C2.125 6.25 1.5 6 0.875 5.75C0.875 7.75 2.25 9.375 4.125 9.75C3.75 9.875 3.375 9.875 3 9.875C2.75 9.875 2.5 9.875 2.25 9.75C2.75 11.375 4.25 12.625 6.125 12.625C4.75 13.75 3 14.375 1 14.375C0.625 14.375 0.375 14.375 0 14.375C1.875 15.5 4 16.25 6.25 16.25C13.75 16.25 17.875 10 17.875 4.625C17.875 4.5 17.875 4.25 17.875 4.125C18.75 3.5 19.5 2.75 20 1.875Z" />
                </svg>
              </span>
            </Link>

            <Link to="/">
              <span>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 10.0022C20.0004 8.09104 19.4532 6.2198 18.4231 4.61003C17.393 3.00026 15.9232 1.71938 14.1877 0.919062C12.4522 0.118741 10.5237 -0.167503 8.63053 0.0942223C6.73739 0.355948 4.9589 1.15468 3.50564 2.39585C2.05237 3.63701 0.985206 5.26863 0.430495 7.0975C-0.124217 8.92636 -0.143239 10.8759 0.37568 12.7152C0.894599 14.5546 1.92973 16.2067 3.35849 17.476C4.78726 18.7453 6.54983 19.5786 8.4375 19.8772V12.8922H5.89875V10.0022H8.4375V7.79843C8.38284 7.28399 8.44199 6.76382 8.61078 6.2748C8.77957 5.78577 9.05386 5.33986 9.4142 4.96866C9.77455 4.59746 10.2121 4.31007 10.6959 4.12684C11.1797 3.94362 11.6979 3.86905 12.2137 3.90843C12.9638 3.91828 13.7121 3.98346 14.4525 4.10343V6.56718H13.1925C12.9779 6.53911 12.7597 6.55967 12.554 6.62733C12.3484 6.69498 12.1607 6.80801 12.0046 6.95804C11.8486 7.10807 11.7283 7.29127 11.6526 7.49408C11.577 7.69689 11.5479 7.91411 11.5675 8.12968V10.0047H14.3412L13.8975 12.8947H11.5625V19.8834C13.9153 19.5112 16.058 18.3114 17.6048 16.4999C19.1516 14.6884 20.001 12.3842 20 10.0022Z" />
                </svg>
              </span>
            </Link>

            <Link to="/">
              <span>
                <svg
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.125 0H0.875C0.375 0 0 0.375 0 0.875V19.25C0 19.625 0.375 20 0.875 20H19.25C19.75 20 20.125 19.625 20.125 19.125V0.875C20 0.375 19.625 0 19.125 0ZM5.875 17H3V7.5H6V17H5.875ZM4.5 6.25C3.5 6.25 2.75 5.375 2.75 4.5C2.75 3.5 3.5 2.75 4.5 2.75C5.5 2.75 6.25 3.5 6.25 4.5C6.125 5.375 5.375 6.25 4.5 6.25ZM17 17H14V12.375C14 11.25 14 9.875 12.5 9.875C11 9.875 10.75 11.125 10.75 12.375V17.125H7.75V7.5H10.625V8.75C11 8 12 7.25 13.375 7.25C16.375 7.25 16.875 9.25 16.875 11.75V17H17Z" />
                </svg>
              </span>
            </Link>

            <Link to="/">
              <span>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 0C4.5 0 0 4.5 0 10C0 14.25 2.625 17.875 6.375 19.25C6.25 18.5 6.25 17.25 6.375 16.375C6.5 15.625 7.5 11.375 7.5 11.375C7.5 11.375 7.25 10.875 7.25 10C7.25 8.625 8.125 7.5 9.125 7.5C10 7.5 10.375 8.125 10.375 8.875C10.375 9.75 9.875 11 9.5 12.25C9.25 13.25 10 14 11 14C12.75 14 14.125 12.125 14.125 9.375C14.125 7 12.375 5.25 10 5.25C7.125 5.25 5.5 7.375 5.5 9.625C5.5 10.5 5.875 11.375 6.25 11.875C6.25 12.125 6.25 12.25 6.25 12.375C6.125 12.75 6 13.375 6 13.5C6 13.625 5.875 13.75 5.625 13.625C4.375 13 3.625 11.25 3.625 9.75C3.625 6.625 5.875 3.75 10.25 3.75C13.75 3.75 16.375 6.25 16.375 9.5C16.375 13 14.25 15.75 11.125 15.75C10.125 15.75 9.125 15.25 8.875 14.625C8.875 14.625 8.375 16.5 8.25 17C8 17.875 7.375 19 7 19.625C8 19.875 9 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0Z" />
                </svg>
              </span>
            </Link>

            <Link to="/">
              <span>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.1814 6.06504C15.8442 6.06504 16.3814 5.52778 16.3814 4.86504C16.3814 4.2023 15.8442 3.66504 15.1814 3.66504C14.5187 3.66504 13.9814 4.2023 13.9814 4.86504C13.9814 5.52778 14.5187 6.06504 15.1814 6.06504Z" />
                  <path d="M10 15C7.2425 15 5 12.7575 5 10C5 7.2425 7.2425 5 10 5C12.7575 5 15 7.2425 15 10C15 12.7575 12.7575 15 10 15ZM10 7.5C8.62125 7.5 7.5 8.62125 7.5 10C7.5 11.3787 8.62125 12.5 10 12.5C11.3787 12.5 12.5 11.3787 12.5 10C12.5 8.62125 11.3787 7.5 10 7.5Z" />
                  <path d="M15 20H5C2.43 20 0 17.57 0 15V5C0 2.43 2.43 0 5 0H15C17.57 0 20 2.43 20 5V15C20 17.57 17.57 20 15 20ZM5 2.5C3.83125 2.5 2.5 3.83125 2.5 5V15C2.5 16.1912 3.80875 17.5 5 17.5H15C16.1688 17.5 17.5 16.1688 17.5 15V5C17.5 3.83125 16.1688 2.5 15 2.5H5Z" />
                </svg>
              </span>
            </Link>
          </div>
          <div className="flex justify-around items-center space-x-8">
            <span>English</span>
            <span>$ USD</span>
            <span>
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={16}
                  cy={16}
                  r="15.5"
                  fill="white"
                  stroke="currentColor"
                  className="circle-wrapper"
                />
                <path d="M16 11.5833C17.1506 11.5833 18.0834 10.6506 18.0834 9.49999C18.0834 8.3494 17.1506 7.41666 16 7.41666C14.8494 7.41666 13.9167 8.3494 13.9167 9.49999C13.9167 10.6506 14.8494 11.5833 16 11.5833Z" />
                <path d="M23.9167 12.4167H8.08333C7.86232 12.4167 7.65036 12.5045 7.49408 12.6607C7.3378 12.817 7.25 13.029 7.25 13.25C7.25 13.471 7.3378 13.683 7.49408 13.8392C7.65036 13.9955 7.86232 14.0833 8.08333 14.0833H13.5V25.5417C13.5 25.8179 13.6097 26.0829 13.8051 26.2782C14.0004 26.4736 14.2654 26.5833 14.5417 26.5833C14.8179 26.5833 15.0829 26.4736 15.2782 26.2782C15.4736 26.0829 15.5833 25.8179 15.5833 25.5417V19.5H16.4167V25.5417C16.4167 25.8179 16.5264 26.0829 16.7218 26.2782C16.9171 26.4736 17.1821 26.5833 17.4583 26.5833C17.7346 26.5833 17.9996 26.4736 18.1949 26.2782C18.3903 26.0829 18.5 25.8179 18.5 25.5417V14.0833H23.9167C24.1377 14.0833 24.3496 13.9955 24.5059 13.8392C24.6622 13.683 24.75 13.471 24.75 13.25C24.75 13.029 24.6622 12.817 24.5059 12.6607C24.3496 12.5045 24.1377 12.4167 23.9167 12.4167Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFooter;
