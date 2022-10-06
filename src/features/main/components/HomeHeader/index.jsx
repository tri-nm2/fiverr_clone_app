import { useScrollPosition } from "common/hooks/scrollPostion";
import React, { useState } from "react";
import Style from "./style.module.css";
import { Dropdown, Menu, Drawer } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HomeHeader() {
  const scrollPosition = useScrollPosition();
  const headerStyle = scrollPosition > 80 ? Style.scroll : Style.normal;
  const menuData = useSelector((state) => state.main.menuData);
  const [open, setOpen] = useState(false);

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
      label: <Link to="/">Sign in</Link>,
    },
    {
      key: "item2",
      label: <span>Browse Categories</span>,
      children: categoriesItems,
    },
    {
      key: "item3",
      label: <span>Explore</span>,
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
      key: "item4",
      label: (
        <Link style={{ color: "#1cbf73" }} to="/">
          Fiverr Business
        </Link>
      ),
    },
    {
      key: "item5",
      label: (
        <div className="border-b-2 text-black">
          <span>General</span>
        </div>
      ),
    },
    {
      key: "item6",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "item7",
      label: <Link to="/">English</Link>,
    },
    {
      key: "item8",
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
          <Link to={`/jobtype/${categories.id}`}>
            {categories.tenLoaiCongViec}
          </Link>
        </Dropdown>
      );
    });

    return tag;
  };

  return (
    <div className="container mx-auto ">
      <header
        className={`fixed w-full transition-all duration-500 z-50 ${headerStyle}
        ${Style.mobileHeader}`}
      >
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

          <div
            className={`col-start-2 col-span-4 transition-all duration-200 md:block hidden ${
              scrollPosition > 160 ? "opacity-100" : "opacity-0"
            }`}
          >
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

          <div className="col-start-6 col-span-6 md:block hidden">
            <nav
              className={`flex justify-around items-center h-full ${Style.navbar}`}
            >
              <div className={Style.activeLink}>
                <Link to="/">Fiverr Business</Link>
              </div>
              <div>
                <Link to="/">Explore</Link>
              </div>
              <div>
                <Link className="flex items-center" to="/">
                  <svg
                    className={`mr-2 ${Style.navIcon}`}
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1C4.58875 1 1 4.58875 1 9C1 13.4113 4.58875 17 9 17C13.4113 17 17 13.4113 17 9C17 4.58875 13.4113 1 9 1ZM8.53125 4.92676C7.81812 4.89612 7.11218 4.7959 6.43811 4.63293C6.54578 4.37781 6.6626 4.13281 6.78857 3.90063C7.30542 2.94824 7.93994 2.27991 8.53125 2.03784V4.92676ZM8.53125 5.86499V8.53125H5.60339C5.64465 7.4906 5.82202 6.45752 6.11536 5.51782C6.8927 5.71362 7.70874 5.83215 8.53125 5.86499ZM8.53125 9.46875V12.135C7.70874 12.1678 6.8927 12.2864 6.11536 12.4822C5.82202 11.5425 5.64465 10.5094 5.60339 9.46875H8.53125ZM8.53125 13.0732V15.9622C7.93994 15.7201 7.30542 15.0518 6.78857 14.0994C6.6626 13.8672 6.54578 13.6222 6.43811 13.3671C7.11218 13.2041 7.81799 13.1039 8.53125 13.0732ZM9.46875 13.0732C10.1819 13.1039 10.8878 13.2041 11.5619 13.3671C11.4542 13.6222 11.3374 13.8672 11.2114 14.0994C10.6946 15.0518 10.0601 15.7201 9.46875 15.9622V13.0732ZM9.46875 12.135V9.46875H12.3966C12.3553 10.5094 12.178 11.5425 11.8846 12.4822C11.1073 12.2864 10.2913 12.1678 9.46875 12.135ZM9.46875 8.53125V5.86499C10.2913 5.83215 11.1073 5.71362 11.8846 5.51782C12.178 6.45752 12.3553 7.4906 12.3966 8.53125H9.46875ZM9.46875 4.92676V2.03784C10.0601 2.27991 10.6946 2.94824 11.2114 3.90063C11.3374 4.13281 11.4542 4.37781 11.5619 4.63293C10.8878 4.7959 10.1819 4.89612 9.46875 4.92676ZM12.0354 3.45349C11.8007 3.02087 11.5457 2.63953 11.2769 2.31421C12.2141 2.63428 13.0631 3.14636 13.7771 3.8031C13.3699 4.02124 12.931 4.21069 12.4694 4.36902C12.3384 4.0509 12.1936 3.74487 12.0354 3.45349ZM5.9646 3.45349C5.8064 3.74487 5.66162 4.0509 5.53064 4.36902C5.06897 4.21069 4.63013 4.02112 4.2229 3.8031C4.93689 3.14636 5.78589 2.63428 6.72314 2.31421C6.45435 2.63953 6.19946 3.02075 5.9646 3.45349ZM5.2135 5.25012C4.89355 6.27368 4.70544 7.38953 4.66492 8.53125H1.95349C2.05383 7.00769 2.63892 5.61438 3.5564 4.50525C4.06555 4.79724 4.62317 5.047 5.2135 5.25012ZM4.66492 9.46875C4.70544 10.6106 4.89355 11.7263 5.2135 12.7499C4.62317 12.953 4.06555 13.2028 3.5564 13.4948C2.63892 12.3856 2.05383 10.9923 1.95349 9.46875H4.66492ZM5.53064 13.631C5.66162 13.9491 5.8064 14.2551 5.9646 14.5465C6.19946 14.9791 6.45435 15.3605 6.72314 15.6858C5.78589 15.3657 4.93689 14.8536 4.22302 14.1969C4.63 13.9789 5.06897 13.7893 5.53064 13.631ZM12.0354 14.5465C12.1936 14.2551 12.3384 13.9491 12.4694 13.631C12.931 13.7893 13.3699 13.9789 13.7771 14.1969C13.0631 14.8536 12.2141 15.3657 11.2769 15.6858C11.5457 15.3605 11.8005 14.9792 12.0354 14.5465ZM12.7865 12.7499C13.1064 11.7263 13.2946 10.6105 13.3351 9.46875H16.0465C15.9462 10.9923 15.3611 12.3856 14.4436 13.4948C13.9344 13.2028 13.3768 12.953 12.7865 12.7499ZM13.3351 8.53125C13.2946 7.3894 13.1064 6.27368 12.7865 5.25012C13.3768 5.047 13.9344 4.79724 14.4436 4.50525C15.3611 5.61438 15.9462 7.00769 16.0465 8.53125H13.3351Z"
                      strokeWidth="0.2"
                    />
                  </svg>
                  English
                </Link>
              </div>
              <div>
                <Link to="/">$ USD</Link>
              </div>
              <div>
                <Link to="/">Become a Seller</Link>
              </div>
              <div>
                <Link to="/detail">Sign In</Link>
              </div>
            </nav>
          </div>

          <div className="md:col-start-12 col-start-11 col-span-2 h-full flex items-center">
            <button
              className={`col-start-12 border-black rounded px-5 py-0.5 ${Style.btnJoin}`}
            >
              Join
            </button>
          </div>
        </div>

        <div
          className={`justify-around py-2 ${
            scrollPosition > 160 ? "flex" : "hidden"
          } ${Style.mobileCateNavbar}`}
        >
          {renderMenu()}
        </div>
      </header>

      <Drawer
        title={
          <div>
            <button
              className={`text-base text-white font-semibold px-6 py-2 ${Style.drawerJoinButton}`}
            >
              Join Fiverr
            </button>
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

export default HomeHeader;
