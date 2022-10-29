import PageFooter from "common/components/PageFooter";
import HomeHeader from "features/main/components/HomeHeader";
import PageLoginHeader from "common/components/PageLoginHeader";
import React, { useEffect } from "react";
import Style from "./style.module.css";
import { useWindowSize } from "common/hooks/windowSize";
import PageMobileFooter from "common/components/PageMobileFooter";
import { useDispatch, useSelector } from "react-redux";
import HomeCarousel from "features/main/components/HomeCarousel";
import HomeServivesCarousel from "features/main/components/HomeServicesCarousel";
import HomeTestimonialCarousel from "features/main/components/HomeTestimonialCarousel";
import HomeProjectCarousel from "features/main/components/HomeProjectCarousel";
import HomeSelling from "features/main/components/HomeSelling";
import HomeMarketPlace from "features/main/components/HomeMarketPlace";
import HomeBusiness from "features/main/components/HomeBusiness";
import HomeLogoMaker from "features/main/components/HomeLogoMaker";
import HomeGuide from "features/main/components/HomeGuide";
import mainReducer from "features/main/mainSlice";
function Home() {
  const windowSize = useWindowSize();
  const userInfo = useSelector((state) => state.authen.userInfo);
  const dispatch = useDispatch();
  //Hooks
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(()=>{
    dispatch(mainReducer.actions.clearFilterText());
  })
  //Hooks

  return (
    <div className="container mx-auto">
      {userInfo?.id ? <PageLoginHeader /> : <HomeHeader />}
      <HomeCarousel />

      <div className="flex justify-around items-center md:w-1/2 w-3/4 mx-auto text-base font-semibold py-6">
        <span className="md:block hidden" style={{ color: "#b5b6ba" }}>
          Trusted by:
        </span>
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

      <HomeSelling />

      <HomeMarketPlace />

      <HomeBusiness />

      <HomeTestimonialCarousel />

      <HomeLogoMaker />

      <HomeProjectCarousel />

      <HomeGuide />

      <div
        className="my-10 mx-10 relative"
        style={{ backgroundColor: "#45091b" }}
      >
        <div className="absolute top-0 left-0 z-0 md:block hidden">
          <img
            className="rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png"
            alt="error"
          ></img>
        </div>
        <div className="relative text-white z-10 md:w-3/5 w-full py-24 md:pl-24 pl-12">
          <span className="md:text-5xl text-4xl font-bold block mb-10">
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
