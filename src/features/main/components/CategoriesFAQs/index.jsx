import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

let cx = classNames.bind(styles);
function CategoriesFAQs(props) {
  return (
    <div className="layout-row">
        <div className={cx('faqs')}>
        <h2>Web Programming FAQs</h2>
      <ul>
        <li>
          <h3>Why would I need to use web development services?</h3>
          <p>
            There are a lot of potential tasks and projects for which you might
            need to enlist web development services. For example, you might use
            web development services to develop an online tool, to create a
            unique widget with a specific functionality for your website, to fix
            a bug, or to automate a task that you spend a lot of time doing
            manually.
          </p>
        </li>
        <li>
          <h3>
            Aren’t there plugins or templates I can use instead of website
            developers?
          </h3>
          <p>
            Certainly there are cases where a template or plugin provides a
            quick and easy way to achieve your goal. However, if you’re looking
            to create something unique, personalized, or very specific, you’ll
            usually need to use web development services. Doing so lets you
            build a customized solution that meets all your needs and gets your
            desired result, possible only with website developers.
          </p>
        </li>
        <li>
          <h3>
            Do I need to prepare anything before I start using web development
            services?
          </h3>
          <p>
            Depending on your goal, you’ll need to prepare different things. If
            you’re planning a new feature, widget, or web application, you’ll
            need the full design of all screens and a list of the
            functionalities of your application. If you’re fixing a bug, you’ll
            need to specify the specific cases in which the bug occurs (ie, on
            what pages? Mobile or desktop? etc).
          </p>
        </li>
        <li>
          <h3>How is web development related to user experience?</h3>
          <p>
            If the website developers are creating something that will be used
            by your customers, you must take user experience into account.
            Before the developers start, you’ll need a UX designer to perform
            some usability tests (usually with a live demo that tests your
            application on real users) and perform additional analysis to make
            sure the feature is easy to understand and use.
          </p>
        </li>
        <li>
          <h3>How long does web development take?</h3>
          <p>
            It really varies depending on the type and scope of work you need.
            For instance, building a web application from scratch takes a lot
            longer than customizing an existing one. How long it takes to fix a
            bug depends entirely on the complexity of the bug. After you’ve
            outlined your project, you can ask the developers for an estimate of
            the timeline.
          </p>
        </li>
        <li>
          <h3>How much do web development services cost?</h3>
          <p>
            Again, it depends on the scope and complexity of the work you need
            done. To allow website developers to give you an accurate quote, you
            should send them a document that includes your full requirements
            (even the smallest details!). By getting quotes from a few
            developers, you can see the price range and determine if it fits
            your budget.
          </p>
        </li>
      </ul>
        </div>

    </div>
  );
}

export default CategoriesFAQs;
