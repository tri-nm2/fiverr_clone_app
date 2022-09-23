import PageFooter from "common/components/PageFooter";
import PageHeader from "common/components/PageHeader";
import React from "react";
import { Route } from "react-router-dom";

function PageTemplate(props) {
  const { Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(propsRoute) => {
        return (
          <div>
            <PageHeader />
            <Component {...propsRoute} />
            <PageFooter />
          </div>
        );
      }}
    />
  );
}

export default PageTemplate;
