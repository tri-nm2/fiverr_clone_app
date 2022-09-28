import React, { useState } from "react";
import Style from "./style.module.css";
import { Dropdown, Menu, Drawer } from "antd";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function PageLoginHeader() {
  const [open, setOpen] = useState(false);
  const menuData = useSelector((state) => state.main.menuData);
  const [openMenu, setOpenMenu] = useState(false);
  const userInfo = useSelector((state) => state.authen.userInfo);
  const categoriesItems = menuData.map((categories) => {
    let childList = [];
    categories.dsNhomChiTietLoai.forEach((group) => {
      group.dsChiTietLoai.forEach((detail) => {
        childList.push({
          key: "child" + detail.id,
          label: <Link to="/">{detail.tenChiTiet}</Link>,
        });
      });
    });

    return {
      key: "cate" + categories.id,
      label: <span>{categories.tenLoaiCongViec}</span>,
      children: childList,
    };
  });
  const mobileMenuItems = [
    {
      key: "item1",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "item2",
      label: <Link to="/">Inbox</Link>,
    },
    {
      key: "item3",
      label: <Link to="/">Manage Orders</Link>,
    },
    {
      key: "item4",
      label: <Link to="/">Lists</Link>,
    },
    {
      key: "item5",
      label: <span to="/">Browse Categories</span>,
      children: categoriesItems,
    },
    {
      key: "item6",
      label: <span to="/">Explore</span>,
      children: [
        {
          key: "sub1",
          label: <Link to="/">Discover</Link>,
        },
        {
          key: "sub2",
          label: <Link to="/">Guides</Link>,
        },
        {
          key: "sub3",
          label: <Link to="/">Learn</Link>,
        },
        {
          key: "sub4",
          label: <Link to="/">Logo Maker</Link>,
        },
        {
          key: "sub5",
          label: <Link to="/">Community</Link>,
        },
        {
          key: "sub6",
          label: <Link to="/">Podcast</Link>,
        },
        {
          key: "sub7",
          label: <Link to="/">Blog</Link>,
        },
        {
          key: "sub8",
          label: <Link to="/">Fiverr Workspace</Link>,
        },
      ],
    },
    {
      key: "item7",
      label: (
        <Link style={{ color: "#1cbf73" }} to="/">
          Fiverr Pro
        </Link>
      ),
    },
    {
      key: "item8",
      label: (
        <div className="border-b-2 text-black">
          <span>My ProFile</span>
        </div>
      ),
    },
    {
      key: "item9",
      label: <Link to="/">Manage Request</Link>,
    },
    {
      key: "item10",
      label: <Link to="/">Post Request</Link>,
    },
    {
      key: "item11",
      label: (
        <Link style={{ color: "#1cbf73" }} to="/">
          Refer &amp; Get up to $100
        </Link>
      ),
    },
    {
      key: "item12",
      label: (
        <div className="border-b-2 text-black">
          <span>General</span>
        </div>
      ),
    },
    {
      key: "item13",
      label: <Link to="/">Settings</Link>,
    },
    {
      key: "item14",
      label: <Link to="/">Billing</Link>,
    },
    {
      key: "item15",
      label: <button>Logout</button>,
    },
    {
      key: "item17",
      label: <Link to="/">English</Link>,
    },
    {
      key: "item18",
      label: <Link to="/">$ USD</Link>,
    },
  ];

  const renderMenu = () => {
    const tag = menuData.map((categories, index) => {
      const itemsList = categories.dsNhomChiTietLoai.map((group, index) => {
        const childList = group.dsChiTietLoai.map((detail) => {
          return {
            key: detail.id,
            label: <Link to="/">{detail.tenChiTiet}</Link>,
          };
        });

        return {
          key: index,
          type: "group",
          label: <span>{group.tenNhom}</span>,
          children: childList,
        };
      });

      const menu = <Menu items={itemsList} />;

      return (
        <Dropdown key={index} overlay={menu}>
          <Link to="/">{categories.tenLoaiCongViec}</Link>
        </Dropdown>
      );
    });

    return tag;
  };

  return (
    <div className="container mx-auto">
      <header className={`w-full bg-white ${Style.header}`}>
        <div
          className={`grid grid-cols-12 py-6 px-4 font-lg font-semibold ${Style.headerBorder}`}
        >
          <div className="col-start-1 md:hidden block">
            <button
              className="h-full"
              onClick={() => {
                setOpen(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={19}
                viewBox="0 0 23 19"
              >
                <rect y={16} width={23} height={3} rx="1.5" fill="#555" />
                <rect width={23} height={3} rx="1.5" fill="#555" />
                <rect y={8} width={23} height={3} rx="1.5" fill="#555" />
              </svg>
            </button>
          </div>

          <div className="md:col-start-1 col-start-6">
            <Link className={Style.logo} to="/">
              <svg
                width={89}
                height={27}
                viewBox="0 0 89 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#404145">
                  <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z" />
                </g>
                <g fill="#1dbf73">
                  <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z" />
                </g>
              </svg>
            </Link>
          </div>

          <div className="col-start-2 col-span-8 transition-all duration-200 md:block hidden">
            <div className="flex pl-8">
              <input
                className={Style.txtSearch}
                type="text"
                placeholder="What service are you looking for today?"
              ></input>
              <button className={Style.btnSearch}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            className="col-start-10 col-span-3 md:flex flex-row justify-around items-center ml-10
            hidden"
          >
            <button className="w-5 h-5">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/layout-server/bell.78d6546.svg"
                alt="error"
              ></img>
            </button>
            <button className="w-5 h-5">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/layout-server/letter.07c989b.svg"
                alt="error"
              ></img>
            </button>
            <button className="w-5 h-5">
              <svg
                width={20}
                height={20}
                fill="#74767e"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.325 2.00937C12.5188 0.490623 9.72813 0.718748 8 2.47812C6.27188 0.718748 3.48125 0.487498 1.675 2.00937C-0.674996 3.9875 -0.331246 7.2125 1.34375 8.92187L6.825 14.5062C7.1375 14.825 7.55625 15.0031 8 15.0031C8.44688 15.0031 8.8625 14.8281 9.175 14.5094L14.6563 8.925C16.3281 7.21562 16.6781 3.99062 14.325 2.00937ZM13.5875 7.86875L8.10625 13.4531C8.03125 13.5281 7.96875 13.5281 7.89375 13.4531L2.4125 7.86875C1.27188 6.70625 1.04063 4.50625 2.64063 3.15937C3.85625 2.1375 5.73125 2.29062 6.90625 3.4875L8 4.60312L9.09375 3.4875C10.275 2.28437 12.15 2.1375 13.3594 3.15625C14.9563 4.50312 14.7188 6.71562 13.5875 7.86875Z" />
              </svg>
            </button>
            <NavLink className="text-base fonr-semibold" to="/">
              Orders
            </NavLink>
            <div className="relative">
              <button
                className="w-10 h-10 rounded-full bg-black"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              ></button>
              <div className={`${openMenu ? "block" : "hidden"}`}>
                <div className={Style.triangle}></div>
                <div className={`text-base font-normal  ${Style.userMenu}`}>
                  <div className="flex flex-col justify-around items-start space-y-2 pb-3 border-b">
                    <Link to="/">Profile</Link>
                    <Link to="/">Manage Requests</Link>
                    <Link to="/">Post a Request</Link>
                    <Link to="/" style={{ color: "#1dbf73" }}>
                      Refer &amp; Get up to $100
                    </Link>
                  </div>
                  <div className="flex flex-col justify-around items-start space-y-2 py-3 border-b">
                    <Link to="/">Become a Seller</Link>
                    <Link to="/">Settings</Link>
                    <Link to="/">
                      Billing <span>New</span>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-around items-start space-y-2 py-3 mb-3 border-b">
                    <div
                      className={`flex flex-row items-center ${Style.language}`}
                    >
                      <Link className="mr-2" to="/">
                        English
                      </Link>
                      <svg
                        width={20}
                        height={20}
                        fill="#74767e"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 1C4.58875 1 1 4.58875 1 9C1 13.4113 4.58875 17 9 17C13.4113 17 17 13.4113 17 9C17 4.58875 13.4113 1 9 1ZM8.53125 4.92676C7.81812 4.89612 7.11218 4.7959 6.43811 4.63293C6.54578 4.37781 6.6626 4.13281 6.78857 3.90063C7.30542 2.94824 7.93994 2.27991 8.53125 2.03784V4.92676ZM8.53125 5.86499V8.53125H5.60339C5.64465 7.4906 5.82202 6.45752 6.11536 5.51782C6.8927 5.71362 7.70874 5.83215 8.53125 5.86499ZM8.53125 9.46875V12.135C7.70874 12.1678 6.8927 12.2864 6.11536 12.4822C5.82202 11.5425 5.64465 10.5094 5.60339 9.46875H8.53125ZM8.53125 13.0732V15.9622C7.93994 15.7201 7.30542 15.0518 6.78857 14.0994C6.6626 13.8672 6.54578 13.6222 6.43811 13.3671C7.11218 13.2041 7.81799 13.1039 8.53125 13.0732ZM9.46875 13.0732C10.1819 13.1039 10.8878 13.2041 11.5619 13.3671C11.4542 13.6222 11.3374 13.8672 11.2114 14.0994C10.6946 15.0518 10.0601 15.7201 9.46875 15.9622V13.0732ZM9.46875 12.135V9.46875H12.3966C12.3553 10.5094 12.178 11.5425 11.8846 12.4822C11.1073 12.2864 10.2913 12.1678 9.46875 12.135ZM9.46875 8.53125V5.86499C10.2913 5.83215 11.1073 5.71362 11.8846 5.51782C12.178 6.45752 12.3553 7.4906 12.3966 8.53125H9.46875ZM9.46875 4.92676V2.03784C10.0601 2.27991 10.6946 2.94824 11.2114 3.90063C11.3374 4.13281 11.4542 4.37781 11.5619 4.63293C10.8878 4.7959 10.1819 4.89612 9.46875 4.92676ZM12.0354 3.45349C11.8007 3.02087 11.5457 2.63953 11.2769 2.31421C12.2141 2.63428 13.0631 3.14636 13.7771 3.8031C13.3699 4.02124 12.931 4.21069 12.4694 4.36902C12.3384 4.0509 12.1936 3.74487 12.0354 3.45349ZM5.9646 3.45349C5.8064 3.74487 5.66162 4.0509 5.53064 4.36902C5.06897 4.21069 4.63013 4.02112 4.2229 3.8031C4.93689 3.14636 5.78589 2.63428 6.72314 2.31421C6.45435 2.63953 6.19946 3.02075 5.9646 3.45349ZM5.2135 5.25012C4.89355 6.27368 4.70544 7.38953 4.66492 8.53125H1.95349C2.05383 7.00769 2.63892 5.61438 3.5564 4.50525C4.06555 4.79724 4.62317 5.047 5.2135 5.25012ZM4.66492 9.46875C4.70544 10.6106 4.89355 11.7263 5.2135 12.7499C4.62317 12.953 4.06555 13.2028 3.5564 13.4948C2.63892 12.3856 2.05383 10.9923 1.95349 9.46875H4.66492ZM5.53064 13.631C5.66162 13.9491 5.8064 14.2551 5.9646 14.5465C6.19946 14.9791 6.45435 15.3605 6.72314 15.6858C5.78589 15.3657 4.93689 14.8536 4.22302 14.1969C4.63 13.9789 5.06897 13.7893 5.53064 13.631ZM12.0354 14.5465C12.1936 14.2551 12.3384 13.9491 12.4694 13.631C12.931 13.7893 13.3699 13.9789 13.7771 14.1969C13.0631 14.8536 12.2141 15.3657 11.2769 15.6858C11.5457 15.3605 11.8005 14.9792 12.0354 14.5465ZM12.7865 12.7499C13.1064 11.7263 13.2946 10.6105 13.3351 9.46875H16.0465C15.9462 10.9923 15.3611 12.3856 14.4436 13.4948C13.9344 13.2028 13.3768 12.953 12.7865 12.7499ZM13.3351 8.53125C13.2946 7.3894 13.1064 6.27368 12.7865 5.25012C13.3768 5.047 13.9344 4.79724 14.4436 4.50525C15.3611 5.61438 15.9462 7.00769 16.0465 8.53125H13.3351Z"
                          strokeWidth="0.2"
                        />
                      </svg>
                    </div>
                    <Link to="/">$ USD</Link>
                    <Link to="/">Help &amp; support</Link>
                  </div>
                  <button to="/">Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex justify-around py-2 hidden">{renderMenu()}</div>

        <div className="md:hidden block pb-6">
          <input
            className={`${Style.txtSearch} ${Style.txtSearchMobile}`}
            type="text"
            placeholder="Find services"
          ></input>
        </div>
      </header>

      <Drawer
        title={
          <div className="flex items-center">
            <button className="w-14 h-14 bg-black rounded-full mr-5"></button>
            <span>{userInfo.name}</span>
          </div>
        }
        placement="left"
        width={300}
        closable={false}
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        <Menu
          className={`text-base font-semibold ${Style.sidebarMenu}`}
          mode="inline"
          items={mobileMenuItems}
        />
      </Drawer>
    </div>
  );
}

export default PageLoginHeader;
