import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

let cx = classNames.bind(styles);
function CategoriesRelatedGuides(props) {
  return (
    <div className="layout-row">
      <div className={cx('guides-wrapper')}>
      <h2>Web Programming Related Guides</h2>
      <div className={cx('wrapper')}>
        <div className={cx('guide')}>
          <a
            className={cx('img-guide')}
           
            href="/resources/guides/programming-tech/website-development"
          >
            <img
              srcSet="https://fiverr-res.cloudinary.com/image/upload/w_430/f_auto,q_auto/v1/attachments/generic_asset/asset/767bc10a0c44b0a67be1a94aea270205-1609336032121/website%20development-min.jpg 430w, https://fiverr-res.cloudinary.com/image/upload/w_860/f_auto,q_auto/v1/attachments/generic_asset/asset/767bc10a0c44b0a67be1a94aea270205-1609336032121/website%20development-min.jpg 860w, https://fiverr-res.cloudinary.com/image/upload/w_300/f_auto,q_auto/v1/attachments/generic_asset/asset/767bc10a0c44b0a67be1a94aea270205-1609336032121/website%20development-min.jpg 300w, https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/767bc10a0c44b0a67be1a94aea270205-1609336032121/website%20development-min.jpg 600w"
              sizes="(min-width: 900px) 430px, (min-width: 480px) 600px, 430px"
              src="https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/767bc10a0c44b0a67be1a94aea270205-1609336032121/website%20development-min.jpg"
              alt="web development"
              title="web development"
              loading="lazy"
            />
          </a>
          <a
           
            href="/resources/guides/programming-tech/website-development"
          >
            <h6>Web development basics (a beginner's guide)</h6>
          </a>
        </div>
        <div className={cx('guide')}>
          <a
            className={cx('img-guide')}
           
            href="/resources/guides/programming-tech/java-vs-javascript"
          >
            <img
              srcSet="https://fiverr-res.cloudinary.com/image/upload/w_430/f_auto,q_auto/v1/attachments/generic_asset/asset/da6ec76c2e90e9a0b79ba58ba5ee7344-1631173799957/java%20vs%20javascript-min.jpg 430w, https://fiverr-res.cloudinary.com/image/upload/w_860/f_auto,q_auto/v1/attachments/generic_asset/asset/da6ec76c2e90e9a0b79ba58ba5ee7344-1631173799957/java%20vs%20javascript-min.jpg 860w, https://fiverr-res.cloudinary.com/image/upload/w_300/f_auto,q_auto/v1/attachments/generic_asset/asset/da6ec76c2e90e9a0b79ba58ba5ee7344-1631173799957/java%20vs%20javascript-min.jpg 300w, https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/da6ec76c2e90e9a0b79ba58ba5ee7344-1631173799957/java%20vs%20javascript-min.jpg 600w"
              sizes="(min-width: 900px) 430px, (min-width: 480px) 600px, 430px"
              src="https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/da6ec76c2e90e9a0b79ba58ba5ee7344-1631173799957/java%20vs%20javascript-min.jpg"
              alt="difference between java and javascript"
              title="difference between java and javascript"
              loading="lazy"
            />
          </a>
          <a
           
            href="/resources/guides/programming-tech/java-vs-javascript"
          >
            <h6>What is the difference between Java and JavaScript?</h6>
          </a>
        </div>
        <div className={cx('guide')}>
          <a
            className={cx('img-guide')}
           
            href="/resources/guides/programming-tech/what-is-cyber-security"
          >
            <img
              srcSet="https://fiverr-res.cloudinary.com/image/upload/w_430/f_auto,q_auto/v1/attachments/generic_asset/asset/fc421cb9c98a55b4f42ef09e6cdda562-1606381442291/cyber%20security-min.jpg 430w, https://fiverr-res.cloudinary.com/image/upload/w_860/f_auto,q_auto/v1/attachments/generic_asset/asset/fc421cb9c98a55b4f42ef09e6cdda562-1606381442291/cyber%20security-min.jpg 860w, https://fiverr-res.cloudinary.com/image/upload/w_300/f_auto,q_auto/v1/attachments/generic_asset/asset/fc421cb9c98a55b4f42ef09e6cdda562-1606381442291/cyber%20security-min.jpg 300w, https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/fc421cb9c98a55b4f42ef09e6cdda562-1606381442291/cyber%20security-min.jpg 600w"
              sizes="(min-width: 900px) 430px, (min-width: 480px) 600px, 430px"
              src="https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/fc421cb9c98a55b4f42ef09e6cdda562-1606381442291/cyber%20security-min.jpg"
              alt="cyber security"
              title="cyber security"
              loading="lazy"
            />
          </a>
          <a
           
            href="/resources/guides/programming-tech/what-is-cyber-security"
          >
            <h6>What is cyber security?</h6>
          </a>
        </div>
      </div>
      <a className={cx('see-more-link')} href="/resources/guides">
        See more guides
        <svg
          fill="none"
          height={14}
          viewBox="0 0 8 14"
          width={8}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m.728547.109852-.618719.618687c-.1464374.146437-.1464374.383871 0 .530341l5.646842 5.66032-5.646842 5.6603c-.1464374.1464-.1464374.3839 0 .5304l.618719.6187c.146437.1464.383873.1464.530343 0l6.54419-6.54422c.14644-.14644.14644-.38387 0-.53034l-6.54419-6.544188c-.14647-.1464692-.383906-.1464692-.530343 0z" />
        </svg>
      </a>
      </div>
    </div>
  );
}

export default CategoriesRelatedGuides;
