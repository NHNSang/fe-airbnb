import { useDevice } from "../../hook/useDevice";
import { Divider, Row, Col} from "antd";
import React from "react";
import LogoFb from "../../assets/icon/icon_fb.png";
import LogoIn from "../../assets/icon/icon_in.png";
import LogoInsta from "../../assets/icon/icon_insta.png";
import LogoX from "../../assets/icon/icon_x.png";
import LogoFooter from "../../assets/img/logo.png";
import LogoGlobal from "../../assets/icon/icon_global.png";
import LogoQr from "../../assets/icon/icon_qr.png";
import LogoPerson from "../../assets/icon/icon_person.png";
import LogoLocal from "../../assets/icon/icon_local.png";
import LogoPhone from "../../assets/icon/icon_phone.png";
import LogoLetter from "../../assets/icon/icon_letter.png";
import { Link } from "react-router-dom";

const Footer = React.memo(() => {
  const { isMobile } = useDevice();
  return (
    <footer className="bg-[#007882] dark:bg-white mt-[50px]">
      <div className="container mx-auto">
        <div className={isMobile ? "container px-8" : "container"}>
          <Row>
            <Col xs={24} xl={6}>
              <div className="mt-5">
                {/* logo */}
                <div className="flex justify-center items-center pt-10">
                  <Link href="/">
                    <div
                      className={
                        isMobile
                          ? "relative h-[40px] w-[40px] mr-2"
                          : "relative h-[50px] w-[50px] mr-2"
                      }
                    >
                      <img
                        src={LogoFooter}
                        alt="Fail"
                        layout="fill"
                        className="object-cover object-left"
                      />
                    </div>
                  </Link>
                  <p className="inline-block align-middle font-montserrat text-2xl font-bold text-[#FF385C]	">
                    AirBnb
                  </p>
                </div>
                {/* <div className="text-center">
                  <Divider
                    type={isMobile ? "horizontal" : undefined}
                    className={isMobile ? "h-[1px] bg-black" : undefined}
                  />
                </div> */}
              </div>
            </Col>
            <Col xs={24} xl={4}>
              <div className={isMobile ? "relative" : "relative mt-8"}>
                <p className="font-cabiner mt-3 text-2xl font-semibold leading-[22px] tracking-wider text-white dark:text-black">
                Quick links
                </p>
                {/* text */}
                <div className="mt-5">
                  <ul>
                    <li className="">
                      <Link
                        href=""
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white dark:text-black">
                        Discovery
                        </p>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href=""
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white dark:text-black">
                        Blog
                        </p>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href=""
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white dark:text-black">
                        Help center
                        </p>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href=""
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white dark:text-black">
                        Listings
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* <div className="text-center">
                  <Divider
                    type={isMobile ? "horizontal" : undefined}
                    className={isMobile ? "h-[1px] bg-black" : "hidden"}
                  />
                </div> */}
              </div>
            </Col>
            <Col xs={24} xl={4}>
              <div className={isMobile ? "relative" : "relative ml-3 mt-8"}>
                <p className="font-cabiner mt-3 text-2xl font-semibold leading-[22px] tracking-wider text-white dark:text-black">
                Quick links
                </p>
                {/* text */}
                <div className="mt-5">
                <ul>
                    <li className="">
                      <Link
                        href=""
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white dark:text-black">
                        Discovery
                        </p>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href=""
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white dark:text-black">
                        Blog
                        </p>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href=""
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white dark:text-black">
                        Help center
                        </p>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href=""
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white dark:text-black">
                        Listings
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* <div className="text-center">
                  <Divider
                    type={isMobile ? "horizontal" : undefined}
                    className={isMobile ? "h-[1px] bg-black" : "hidden"}
                  />
                </div> */}
              </div>
            </Col>
            <Col xs={24} xl={4}>
              <div className={isMobile ? "relative" : "relative ml-3 mt-8"}>
                <p className="font-cabiner mt-3 text-2xl font-semibold leading-[22px] tracking-wider text-white dark:text-black">
                Quick links
                </p>
                {/* text */}
                <div className="mt-5">
                <ul>
                    <li className="">
                      <Link
                        href=""
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white dark:text-black">
                        Discovery
                        </p>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href=""
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white dark:text-black">
                        Blog
                        </p>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href=""
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white dark:text-black">
                        Help center
                        </p>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href=""
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white dark:text-black">
                        Listings
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* <div className="text-center">
                  <Divider
                    type={isMobile ? "horizontal" : undefined}
                    className={isMobile ? "h-[1px] bg-black" : "hidden"}
                  />
                </div> */}
              </div>
            </Col>
            <Col xs={24} xl={6}>
              <div className={isMobile ? "relative mb-8" : "relative my-8"}>
                <p className="font-cabiner mt-3 text-2xl font-semibold leading-[22px] tracking-wider text-white dark:text-black">
                  Follow us
                </p>
                {/* video */}
                <div className="mt-5">
                  <iframe
                    width="250"
                    height="130"
                    src="https://www.youtube.com/embed/04Kf_0kppPM?si=eSbYhze3k0vYn9IC"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* icon */}
                <div>
                  <div className="mt-[25px] flex">
                    <Link>
                    <img
                      className="rounded-[24px]  mr-2"
                      src={
                        LogoFb
                      }
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                    </Link>
                    
                    <Link>
                    <img
                      className="rounded-[24px]  mr-2"
                      src={
                        LogoInsta
                      }
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                    </Link>

                    <Link>
                    <img
                      className="rounded-[24px]  mr-2"
                      src={
                        LogoIn
                      }
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                    </Link>
                    
                    <Link>
                    <img
                      className="rounded-[24px]  mr-2"
                      src={
                        LogoX
                      }
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="h-[1px] bg-[#f5e4e4]"></div>
        <div className={isMobile ? "mb-5" : undefined}>
          <p className=" mb-1 mt-1 text-center font-sansFrancisco text-sm font-normal italic leading-6 tracking-[0.03em] text-white dark:text-black">
          © 2024 Airbnb, Inc
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
