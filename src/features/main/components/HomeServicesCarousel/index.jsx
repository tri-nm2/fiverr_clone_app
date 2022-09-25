import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import Style from "./style.module.css";

function HomeServivesCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div className="px-5 py-10">
      <p className="text-3xl font-semibold mb-10 ml-2">Popular professional services</p>
      <Carousel {...settings}>
        <div>
          <div className={`relative mx-2 ${Style.items}`}>
            <Link to="/" className="rounded">
              <p className="text-2xl font-semibold text-white">
                <span className="text-sm block">Build your brand</span>
                Logo Design
              </p>
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
                alt="error"
              ></img>
            </Link>
          </div>
        </div>

        <div>
          <div className={`relative mx-2 ${Style.items}`}>
            <Link to="/" className="rounded">
              <p className="text-2xl font-semibold text-white">
                <span className="text-sm block">Customize your site</span>
                WordPress
              </p>
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
                alt="error"
              ></img>
            </Link>
          </div>
        </div>

        <div>
          <div className={`relative mx-2 ${Style.items}`}>
            <Link to="/" className="rounded">
              <p className="text-2xl font-semibold text-white">
                <span className="text-sm block">Share your message</span>
                Voice Over
              </p>
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
                alt="error"
              ></img>
            </Link>
          </div>
        </div>

        <div>
          <div className={`relative mx-2 ${Style.items}`}>
            <Link to="/" className="rounded">
              <p className="text-2xl font-semibold text-white">
                <span className="text-sm block">Engage your audience</span>
                Video Explainer
              </p>
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
                alt="error"
              ></img>
            </Link>
          </div>
        </div>

        <div>
          <div className={`relative mx-2 ${Style.items}`}>
            <Link to="/" className="rounded">
              <p className="text-2xl font-semibold text-white">
                <span className="text-sm block">Reach more customers</span>
                Social Media
              </p>
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
                alt="error"
              ></img>
            </Link>
          </div>
        </div>

        <div>
          <div className={`relative mx-2 ${Style.items}`}>
            <Link to="/" className="rounded">
              <p className="text-2xl font-semibold text-white">
                <span className="text-sm block">Unlock growth online</span>
                SEO
              </p>
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
                alt="error"
              ></img>
            </Link>
          </div>
        </div>

        <div>
          <div className={`relative mx-2 ${Style.items}`}>
            <Link to="/" className="rounded">
              <p className="text-2xl font-semibold text-white">
                <span className="text-sm block">Color your dreams</span>
                Illustration
              </p>
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"
                alt="error"
              ></img>
            </Link>
          </div>
        </div>

        <div>
          <div className={`relative mx-2 ${Style.items}`}>
            <Link to="/" className="rounded">
              <p className="text-2xl font-semibold text-white">
                <span className="text-sm block">Go global</span>
                Translation
              </p>
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
                alt="error"
              ></img>
            </Link>
          </div>
        </div>

        <div>
          <div className={`relative mx-2 ${Style.items}`}>
            <Link to="/" className="rounded">
              <p className="text-2xl font-semibold text-white">
                <span className="text-sm block">Learn your business</span>
                Data Entry
              </p>
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
                alt="error"
              ></img>
            </Link>
          </div>
        </div>

        <div>
          <div className={`relative mx-2 ${Style.items}`}>
            <Link to="/" className="rounded">
              <p className="text-2xl font-semibold text-white">
                <span className="text-sm block">Showcase your story</span>
                Book Covers
              </p>
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"
                alt="error"
              ></img>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeServivesCarousel;
