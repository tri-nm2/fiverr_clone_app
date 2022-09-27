import React from "react";
import { Carousel } from "antd";
import Style from "./style.module.css";

function HomeTestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonial py-10">
      <Carousel {...settings}>
        <div>
          <div className="flex px-10 md:flex-row flex-col">
            <div
              className={`md:w-2/5 w-full md:mb-0 mb-5 rounded relative ${Style.imageContent}`}
            >
              <img
                className="w-full"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"
                alt="error"
              ></img>
            </div>

            <div
              className={`md:pl-16 md:pr-12 md:w-3/5 w-full pl-0 pr-0 ${Style.textContent}`}
            >
              <h5 className="flex items-center text-xl">
                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                <span className="h-9 pl-3 ml-3 border-l">
                  <img
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
                    alt="error"
                  ></img>
                </span>
              </h5>

              <div style={{ fontSize: 30, lineHeight: "48px" }}>
                <i>
                  "We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world."
                </i>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex px-10 md:flex-row flex-col">
            <div
              className={`md:w-2/5 w-full md:mb-0 mb-5 rounded relative ${Style.imageContent}`}
            >
              <img
                className="w-full"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg"
                alt="error"
              ></img>
            </div>

            <div
              className={`md:pl-16 md:pr-12 md:w-3/5 w-full pl-0 pr-0 ${Style.textContent}`}
            >
              <h5 className="flex items-center text-xl">
                Tim and Dan Joo, Co-Founders
                <span className="h-9 pl-3 ml-3 border-l">
                  <img
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png"
                    alt="error"
                  ></img>
                </span>
              </h5>

              <div style={{ fontSize: 30, lineHeight: "48px" }}>
                <i>
                  "When you want to create a business bigger than yourself, you
                  need a lot of help. That's what Fiverr does."
                </i>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex px-10 md:flex-row flex-col">
            <div
              className={`md:w-2/5 w-full md:mb-0 mb-5 rounded relative ${Style.imageContent}`}
            >
              <img
                className="w-full"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg"
                alt="error"
              ></img>
            </div>

            <div
              className={`md:pl-16 md:pr-12 md:w-3/5 w-full pl-0 pr-0 ${Style.textContent}`}
            >
              <h5 className="flex items-center text-xl">
                Kay Kim, Co-Founder
                <span className="h-9 pl-3 ml-3 border-l">
                  <img
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                    alt="error"
                  ></img>
                </span>
              </h5>

              <div style={{ fontSize: 30, lineHeight: "48px" }}>
                <i>
                  "It's extremely exciting that Fiverr has freelancers from all
                  over the world — it broadens the talent pool. One of the best
                  things about Fiverr is that while we're sleeping, someone's
                  working."
                </i>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex px-10 md:flex-row flex-col">
            <div
              className={`md:w-2/5 w-full md:mb-0 mb-5 rounded relative ${Style.imageContent}`}
            >
              <img
                className="w-full"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg"
                alt="error"
              ></img>
            </div>

            <div
              className={`md:pl-16 md:pr-12 md:w-3/5 w-full pl-0 pr-0 ${Style.textContent}`}
            >
              <h5 className="flex items-center text-xl">
                Caitlin Tormey, Chief Commercial Officer
                <span className="h-9 pl-3 ml-3 border-l">
                  <img
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                    alt="error"
                  ></img>
                </span>
              </h5>

              <div style={{ fontSize: 30, lineHeight: "48px" }}>
                <i>
                  "We've used Fiverr for Shopify web development, graphic
                  design, and backend web development. Working with Fiverr makes
                  my job a little easier every day."
                </i>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeTestimonialCarousel;
