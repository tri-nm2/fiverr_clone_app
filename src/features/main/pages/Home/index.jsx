import PageFooter from "common/components/PageFooter";
import HomeHeader from "features/main/components/HomeHeader";
import React, { useEffect } from "react";
import Style from "./style.module.css";
import { useWindowSize } from "common/hooks/windowSize";
import PageMobileFooter from "common/components/PageMobileFooter";
import { useDispatch } from "react-redux";
import { fetchMenuDataAction } from "../../action";

function Home() {
  const windowSize = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuDataAction());
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HomeHeader />
      <div className={Style.home}></div>
      {windowSize.width > 576 ? <PageFooter /> : <PageMobileFooter />}
    </div>
  );
}

export default Home;
