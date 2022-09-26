import React from "react";
import { Carousel, Avatar, Card } from "antd";
import Style from "./style.module.css";
import { Link } from "react-router-dom";

function HomeProjectCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const { Meta } = Card;

  return (
    <div className={`py-10 my-10 px-5 ${Style.project}`}>
      <div
        className={`flex justify-between items-start ${Style.projectHeader}`}
      >
        <p className="text-3xl font-semibold mb-10 ml-2">
          Get inspired with projects made by our freelancers
        </p>
        <Link className="flex items-center text-base mr-3" to="/">
          See More Projects
          <span className="ml-3 w-2.5 h-2.5">
            <svg
              width={8}
              height={16}
              fill="#446ee7"
              viewBox="0 0 8 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
            </svg>
          </span>
        </Link>
      </div>
      <Carousel {...settings}>
        <div>
          <div className="px-3">
            <Card
              className="w-full"
              cover={
                <picture>
                  <source
                    media="(min-width: 1060px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 2x"
                  />
                  <source
                    media="(min-width: 800px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 2x"
                  />
                  <source
                    media="(max-width: 599px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 2x"
                  />
                  <img
                    alt="Product Photography"
                    className={Style.projectImage}
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 2x"
                    loading="lazy"
                  />
                </picture>
              }
            >
              <Meta
                avatar={
                  <Avatar
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ad68f554913d9d326d611e604ef79b0b-1608722734146/74e5ab33-a5fc-40ae-9cee-a91b23e80237.jpg"
                  />
                }
                title="Product Photography"
                description="by passionshake"
              />
            </Card>
          </div>
        </div>

        <div>
          <div className="px-3">
            <Card
              className="w-full"
              cover={
                <picture>
                  <source
                    media="(min-width: 1060px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 2x"
                  />
                  <source
                    media="(min-width: 800px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 2x"
                  />
                  <source
                    media="(max-width: 599px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 2x"
                  />
                  <img
                    alt="Social Media Design"
                    className={Style.projectImage}
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 2x"
                    loading="lazy"
                  />
                </picture>
              }
            >
              <Meta
                avatar={
                  <Avatar
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0738007a913d22569fe2b049f9259526-1589210299120/db111eb4-c119-42b4-9a1d-9116601f3d22.png"
                  />
                }
                title="Social Media Design"
                description="by fernandobengua"
              />
            </Card>
          </div>
        </div>

        <div>
          <div className="px-3">
            <Card
              className="w-full"
              cover={
                <picture>
                  <source
                    media="(min-width: 1060px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 2x"
                  />
                  <source
                    media="(min-width: 800px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 2x"
                  />
                  <source
                    media="(max-width: 599px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 2x"
                  />
                  <img
                    alt="Realistic Portrait"
                    className={Style.projectImage}
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 2x"
                    loading="lazy"
                  />
                </picture>
              }
            >
              <Meta
                avatar={
                  <Avatar
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/23b01eca3b78e2869e149efe15d3066a-1613424545655/0aaffa8e-01e0-4dcb-b56d-674e9b9c4bf5.jpg"
                  />
                }
                title="Portraits &amp; Caricatures"
                description="by noneyn"
              />
            </Card>
          </div>
        </div>

        <div>
          <div className="px-3">
            <Card
              className="w-full"
              cover={
                <picture>
                  <source
                    media="(min-width: 1060px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 2x"
                  />
                  <source
                    media="(min-width: 800px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 2x"
                  />
                  <source
                    media="(max-width: 599px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 2x"
                  />
                  <img
                    alt="Book Cover"
                    className={Style.projectImage}
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 2x"
                    loading="lazy"
                  />
                </picture>
              }
            >
              <Meta
                avatar={
                  <Avatar
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8b60be1bf2915ddc1d551eaa252684d7-1589020928117/1d531e54-7607-4bdb-815f-088dbc0fb971.jpg"
                  />
                }
                title="Book Design"
                description="by annapietrangeli"
              />
            </Card>
          </div>
        </div>

        {/* Group 2 */}
        <div>
          <div className="px-3">
            <Card
              className="w-full"
              cover={
                <picture>
                  <source
                    media="(min-width: 1060px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 2x"
                  />
                  <source
                    media="(min-width: 800px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 2x"
                  />
                  <source
                    media="(max-width: 599px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 2x"
                  />
                  <img
                    alt="Illustration"
                    className={Style.projectImage}
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 2x"
                    loading="lazy"
                  />
                </picture>
              }
            >
              <Meta
                avatar={
                  <Avatar
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b615b780b5c813d932953d05ec10f811-1596879215580/6b4a9867-ad06-415f-b307-11177ae30fdd.jpeg"
                  />
                }
                title="Illustration"
                description="by christophbrandl"
              />
            </Card>
          </div>
        </div>

        <div>
          <div className="px-3">
            <Card
              className="w-full"
              cover={
                <picture>
                  <source
                    media="(min-width: 1060px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 2x"
                  />
                  <source
                    media="(min-width: 800px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 2x"
                  />
                  <source
                    media="(max-width: 599px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 2x"
                  />
                  <img
                    alt="Brand Style Guides"
                    className={Style.projectImage}
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 2x"
                    loading="lazy"
                  />
                </picture>
              }
            >
              <Meta
                avatar={
                  <Avatar
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/27bdb82e27e444fe2b27aa7b3083cee8-1591694084918/f79ede47-da5f-440a-bf23-57ed9ef7d363.png"
                  />
                }
                title="Logo Design"
                description="by eveeelin"
              />
            </Card>
          </div>
        </div>

        <div>
          <div className="px-3">
            <Card
              className="w-full"
              cover={
                <picture>
                  <source
                    media="(min-width: 1060px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 2x"
                  />
                  <source
                    media="(min-width: 800px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 2x"
                  />
                  <source
                    media="(max-width: 599px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 2x"
                  />
                  <img
                    alt="Landing Page Design"
                    className={Style.projectImage}
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 2x"
                    loading="lazy"
                  />
                </picture>
              }
            >
              <Meta
                avatar={
                  <Avatar
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/79cf5c7a560e6668555338b2831480e1-1539770224917/2bb8af3c-4cce-42a8-a699-f11177524084.png"
                  />
                }
                title="Web &amp; Mobile Design"
                description="by skydesigner"
              />
            </Card>
          </div>
        </div>

        <div>
          <div className="px-3">
            <Card
              className="w-full"
              cover={
                <picture>
                  <source
                    media="(min-width: 1060px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x"
                  />
                  <source
                    media="(min-width: 800px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x"
                  />
                  <source
                    media="(max-width: 599px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x"
                  />
                  <img
                    alt="Catalog Design"
                    className="gig-image"
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x"
                    loading="lazy"
                  />
                </picture>
              }
            >
              <Meta
                avatar={
                  <Avatar
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/22711136/original/fiverr_profile.jpg"
                  />
                }
                title="Flyer Design"
                description="by spickex"
              />
            </Card>
          </div>
        </div>

        {/* Group 3 */}
        <div>
          <div className="px-3">
            <Card
              className="w-full"
              cover={
                <picture>
                  <source
                    media="(min-width: 1060px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x"
                  />
                  <source
                    media="(min-width: 800px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x"
                  />
                  <source
                    media="(max-width: 599px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x"
                  />
                  <img
                    alt="Catalog Design"
                    className="gig-image"
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x"
                    loading="lazy"
                  />
                </picture>
              }
            >
              <Meta
                avatar={
                  <Avatar
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/22711136/original/fiverr_profile.jpg"
                  />
                }
                title="Flyer Design"
                description="by spickex"
              />
            </Card>
          </div>
        </div>

        <div>
          <div className="px-3">
            <Card
              className="w-full"
              cover={
                <picture>
                  <source
                    media="(min-width: 1060px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 2x"
                  />
                  <source
                    media="(min-width: 800px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 2x"
                  />
                  <source
                    media="(max-width: 599px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 2x"
                  />
                  <img
                    alt="GIF Animation"
                    className={Style.projectImage}
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 2x"
                    loading="lazy"
                  />
                </picture>
              }
            >
              <Meta
                avatar={
                  <Avatar
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg"
                  />
                }
                title="Animated GIFs"
                description="by lamonastudio"
              />
            </Card>
          </div>
        </div>

        <div>
          <div className="px-3">
            <Card
              className="w-full"
              cover={
                <picture>
                  <source
                    media="(min-width: 1060px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 2x"
                  />
                  <source
                    media="(min-width: 800px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 2x"
                  />
                  <source
                    media="(max-width: 599px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 2x"
                  />
                  <img
                    alt="Logo Design"
                    className={Style.projectImage}
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 2x"
                    loading="lazy"
                  />
                </picture>
              }
            >
              <Meta
                avatar={
                  <Avatar
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c15f6b22da97be41a8878e753a1a16c2-863645391592368980.489561/AF1BF970-07CA-454B-8AF1-2F3E06838C8B"
                  />
                }
                title="Logo Design"
                description="by bruno_malagrino"
              />
            </Card>
          </div>
        </div>

        <div>
          <div className="px-3">
            <Card
              className="w-full"
              cover={
                <picture>
                  <source
                    media="(min-width: 1060px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 2x"
                  />
                  <source
                    media="(min-width: 800px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 2x"
                  />
                  <source
                    media="(max-width: 599px)"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 2x"
                  />
                  <img
                    alt="Product Packaging"
                    className={Style.projectImage}
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 2x"
                    loading="lazy"
                  />
                </picture>
              }
            >
              <Meta
                avatar={
                  <Avatar
                    className="w-full h-full"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg"
                  />
                }
                title="Packaging Design"
                description="by mijalzagier"
              />
            </Card>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeProjectCarousel;
