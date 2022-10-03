import PageFooter from "common/components/PageFooter";
import PageHeader from "common/components/PageHeader";
import PageLoginHeader from "common/components/PageLoginHeader";
import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

function PageTemplate(props) {
  const { Component, ...rest } = props;
  const userInfo = useSelector((state) => state.authen.userInfo);

  return (
    <Route
      {...rest}
      render={(propsRoute) => {
        return (
          <div>
            {userInfo?.id ? <PageLoginHeader /> : <PageHeader />}
            <Component {...propsRoute} />
            <PageFooter />
          </div>
        );
      }}
    />
  );
}

export default PageTemplate;
