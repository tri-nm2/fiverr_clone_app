import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";


let cx = classNames.bind(styles);
function CategoriesRelatedLinks(props) {
  return (
    <div className="layout-row">
        <div className={cx('related-links')}>
      <h2>Explore More Web Programming Services</h2>
      <ul>
        <li>
          <a
            href="https://www.fiverr.com/hire/squarespace"
            className={cx('related-link')}
          >
            squarespace developers
          </a>
        </li>
        <li>
          <a
            href="https://www.fiverr.com/hire/web-analytics"
            className={cx('related-link')}
          >
            web analytics experts
          </a>
        </li>
        <li>
          <a
            href="https://www.fiverr.com/hire/google-analytics"
            className={cx('related-link')}
          >
            google analytics expert
          </a>
        </li>
        <li>
          <a
            href="https://www.fiverr.com/hire/css"
            className={cx('related-link')}
          >
            CSS developers
          </a>
        </li>
        <li>
          <a
            href="https://www.fiverr.com/gigs/dropshipping"
            className={cx('related-link')}
          >
            dropshipping services
          </a>
        </li>
        <li>
          <a
            href="https://www.fiverr.com/gigs/scraping"
            className={cx('related-link')}
          >
            data scraping services
          </a>
        </li>
        <li>
          <a
            href="https://www.fiverr.com/hire/web-development"
            className={cx('related-link')}
          >
            Hire Web Developers
          </a>
        </li>
        <li>
          <a
            href="/categories/programming-tech/buy/web-programming-services/php"
            className={cx('related-link')}
          >
            PHP Development
          </a>
        </li>
        <li>
          <a
            href="/categories/programming-tech/buy/web-programming-services/python"
            className={cx('related-link')}
          >
            Python Development{" "}
          </a>
        </li>
        <li>
          <a
            href="/categories/programming-tech/buy/web-programming-services/java"
            className={cx('related-link')}
          >
            Java Development Services{" "}
          </a>
        </li>
        <li>
          <a
            href="/categories/programming-tech/buy/web-programming-services/asp-net"
            className={cx('related-link')}
          >
            ASP.NET web programming
          </a>
        </li>
        <li>
          <a
            href="/categories/programming-tech/buy/web-programming-services/go"
            className={cx('related-link')}
          >
            Go programming
          </a>
        </li>
        <li>
          <a
            href="/categories/programming-tech/buy/web-programming-services/ruby-ror"
            className={cx('related-link')}
          >
            Ruby programming
          </a>
        </li>
        <li>
          <a
            href="/categories/programming-tech/buy/web-programming-services/perl"
            className={cx('related-link')}
          >
            Perl programming
          </a>
        </li>
        <li>
          <a
            href="/categories/programming-tech/buy/web-programming-services/html-css"
            className={cx('related-link')}
          >
            HTML &amp; CSS developers
          </a>
        </li>
        <li>
          <a
            href="/categories/programming-tech/buy/web-programming-services/javascript"
            className={cx('related-link')}
          >
            JavaScript developers
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default CategoriesRelatedLinks;
