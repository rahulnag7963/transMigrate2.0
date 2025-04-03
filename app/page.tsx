"use client";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/react";
import "@/styles/globals.css";
import { createContext } from "react";
import goog from "@/media/pexels-googledeepmind-18068746.jpg";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import ONC from "../media/onc.png";
import { Fade } from "react-awesome-reveal";
import _debounce from "lodash/debounce";
import diamonds from "../media/l1.jpg";
import * as THREE from "three";
import WAVES from "vanta/src/vanta.waves.js";
import NET from "vanta/src/vanta.net.js";
import Header from "@/components/header";
import Relay from "../media/global.png";
import { Pagination } from "@nextui-org/react";
import { Accordion, AccordionItem, Spacer } from "@nextui-org/react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { set } from "lodash";

export default function Home() {
  const Context = createContext;

  const [arr1, setArr1] = useState(false);
  const [arr2, setArr2] = useState(false);

  const [small, setSmall] = useState(0);

  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const [card1, showCard1] = useState(false);
  const [card2, showCard2] = useState(false);
  const [card3, showCard3] = useState(false);

  const [img, setImg] = useState(true);
  const [step, setStep] = useState(1);
  useEffect(() => {
    if (window.innerWidth < 550) {
      setSmall(2);
    }
    if (window.innerWidth < 860) {
      setArr1(true);
      setArr2(true);
    }
    if (550 < window.innerWidth && window.innerWidth < 860) {
      setSmall(1);
    }
    if (window.innerWidth > 860) {
      setSmall(0);
    }

    if (window.innerWidth < 965) {
      setImg(false);
    }
  });

  useEffect(() => {
    NET({
      el: "#three",
      color: 0x697ce2,
      backgroundColor: 0x0000,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
    });

    WAVES({
      el: "#four",
      color: 0x5d13dd,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 800.0,
      minWidth: 800.0,
      scale: 1.0,
      scaleMobile: 1.0,
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 4.5,
      }
    );

    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3.5,
        delay: 0.5,
      }
    );

    gsap.fromTo(
      ".logo",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3.5,
        delay: 0.5,
      }
    );
  }, []);

  const [section, setSection] = useState<number>();

  useEffect(() => {
    const savedSection = window.localStorage.getItem("sect");
    if (savedSection) {
      setSection(parseInt(savedSection));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && section) {
      window.localStorage.setItem("sect", section.toString());
    }
  }, [section]);

  const handlePageClick = (page: number) => {
    setSection(page);
    if (page) {
      window.localStorage.setItem("sect", page.toString());
    }
    const sectionId =
      page === 1
        ? "#one"
        : page === 2
          ? "#two"
          : page === 3
            ? "#three"
            : "#four";
    document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-auto z-10">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" />
      <script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.halo.min.js" />
      <section className=" relative panel grid items-center z-10" id="one">
        <Fade>
          <video
            className="vid absolute object-cover top-0 left-0 z-10"
            loop
            autoPlay
            muted
            width="100%"
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="grid grid-rows-2 grid-cols-1 z-10 max-w-6xl place-self-center text-center">
            <div>
              <div className="header">
                <p id="sec" className="text-center z-20 text-7xl size">
                  Taking Web Development
                </p>
                <p className="text-center text-7xl pb-6 size">
                  to the next level
                </p>
              </div>
              <a href="#two" id="wrap">
                <button className="header button" onClick={() => setSection(2)}>
                  Click for more!
                </button>
              </a>
            </div>
            <a
              href="#four"
              className="z-20 grid"
              onClick={() => {
                setSection(4);
              }}
            >
              <svg
                fill="white"
                height="150px"
                width="150px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
                className="z-50 absolute right high front2"
                transform="scale(-1,1)"
                onMouseEnter={() => setArr2(true)}
                onMouseLeave={() => setArr2(false)}
              >
                <defs>
                  <linearGradient
                    id="arrow-gradient2"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ca3419">
                      <animate
                        attributeName="stopColor"
                        values="#ca3419; #3f51b1; #ca3419"
                        dur="4s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>

                    <stop offset="100%" stopColor="#3f51b1">
                      <animate
                        attributeName="stopColor"
                        values="#3f51b1; #ca3419; #3f51b1"
                        dur="4s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>
                  </linearGradient>
                </defs>
                <path
                  id="arr"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                    C255,161.018,253.42,157.202,250.606,154.389z"
                  fill="url(#arrow-gradient2)"
                  fillOpacity={arr2 ? 1 : 0}
                />
              </svg>
            </a>
            <a
              href="#two"
              className="z-20 grid"
              onClick={() => {
                setSection(2);
              }}
            >
              <svg
                fill="white"
                height="150px"
                width="150px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
                className="z-50 absolute left high front1"
                onMouseEnter={() => setArr1(true)}
                onMouseLeave={() => setArr1(false)}
              >
                <defs>
                  <linearGradient
                    id="arrow-gradient1"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ca3419">
                      <animate
                        attributeName="stopColor"
                        values="#ca3419; #3f51b1; #ca3419"
                        dur="4s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>

                    <stop offset="100%" stopColor="#3f51b1">
                      <animate
                        attributeName="stopColor"
                        values="#3f51b1; #ca3419; #3f51b1"
                        dur="4s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>
                  </linearGradient>
                </defs>
                <path
                  id="arr"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                    C255,161.018,253.42,157.202,250.606,154.389z"
                  fill="url(#arrow-gradient1)"
                  fillOpacity={arr1 ? 1 : 0}
                />
              </svg>
            </a>
          </div>
        </Fade>
      </section>
      <section className="relative panel grid items-center z-0" id="two">
        <Fade>
          <div className="one z-0"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
          <div className="text-center z-10 justify-self-center ">
            <p className="text-7xl z-10 text-center ostrich size">
              Simplifying and optimizing websites
            </p>
            <div className="grid grid rows-1 grid-cols-2 p-2 z-10 m-2 max-w-6xl justify-items-center items-center">
              <a
                href="#three"
                className="tag"
                onClick={() => {
                  setSection(3);
                }}
              >
                <svg
                  fill="white"
                  height="150px"
                  width="150px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                  className="z-20 absolute left high"
                  onMouseEnter={() => setArr1(true)}
                  onMouseLeave={() => setArr1(false)}
                >
                  <defs>
                    <linearGradient
                      id="arrow-gradient1"
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ca3419">
                        <animate
                          attributeName="stopColor"
                          values="#ca3419; #3f51b1; #ca3419"
                          dur="4s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#3f51b1">
                        <animate
                          attributeName="stopColor"
                          values="#3f51b1; #ca3419; #3f51b1"
                          dur="4s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                  </defs>
                  <path
                    id="arr"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                    C255,161.018,253.42,157.202,250.606,154.389z"
                    fill="url(#arrow-gradient1)"
                    fillOpacity={arr1 ? 1 : 0}
                  />
                </svg>
              </a>
              <a
                href="#one"
                onClick={() => {
                  setSection(1);
                }}
              >
                <svg
                  fill="white"
                  height="150px"
                  width="150px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                  className="z-20 absolute right high"
                  transform="scale(-1,1)"
                  onMouseEnter={() => setArr2(true)}
                  onMouseLeave={() => setArr2(false)}
                >
                  <defs>
                    <linearGradient
                      id="arrow-gradient2"
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ca3419">
                        <animate
                          attributeName="stopColor"
                          values="#ca3419; #3f51b1; #ca3419"
                          dur="4s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#3f51b1">
                        <animate
                          attributeName="stopColor"
                          values="#3f51b1; #ca3419; #3f51b1"
                          dur="4s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                  </defs>
                  <path
                    id="arr"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                    C255,161.018,253.42,157.202,250.606,154.389z"
                    fill="url(#arrow-gradient2)"
                    fillOpacity={arr2 ? 1 : 0}
                  />
                </svg>
              </a>
              <div className="glass m-2 p-2 text-3xl ostrich z-10 text-left">
                <Accordion
                  className=""
                  motionProps={{
                    variants: {
                      enter: {
                        y: 0,
                        opacity: 1,
                        height: "auto",
                        transition: {
                          height: {
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                            duration: 1,
                          },
                          opacity: {
                            easings: "ease",
                            duration: 1,
                          },
                        },
                      },
                      exit: {
                        y: -10,
                        opacity: 0,
                        height: 0,
                        transition: {
                          height: {
                            easings: "ease",
                            duration: 0.25,
                          },
                          opacity: {
                            easings: "ease",
                            duration: 0.3,
                          },
                        },
                      },
                    },
                  }}
                >
                  <AccordionItem
                    className="unset p-0"
                    key="1"
                    aria-label="Accordion 1"
                    title="Our goals"
                  >
                    <div className="linesm sizesm divide-y-2 divide-white/25 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
                      <span className="linesm header text-3xl sizesm">
                        {" "}
                        1.{" "}
                      </span>{" "}
                      Transmigrate&apos;s goal is to create unique websites
                      optimized for seo and performance.
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    className="unset"
                    key="2"
                    aria-label="Accordion 2"
                    title="Our desire"
                  >
                    <div className="sizesm linesm line-divide-y-2 divide-white/25 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
                      <span className="header linesm text-3xl sizesm">
                        {" "}
                        2.{" "}
                      </span>{" "}
                      We know how important it is to have a website that both
                      reflects your brand and reaches the audience you desire.
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    className="unset"
                    key="3"
                    aria-label="Accordion 3"
                    title="Our Mission"
                  >
                    <div className="sizesm linesm divide-y-2 divide-white/25 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 linesm">
                      <span className="header text-3xl sizesm linesm">
                        {" "}
                        3.{" "}
                      </span>{" "}
                      Thats why our company is dedicated to creating websites
                      that deals with both problems, freeing your time to focus
                      on what you do best.
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="pr-8">
                <Image
                  id={small <= 1 ? "abstract" : ""}
                  isBlurred={small <= 1 ? true : false}
                  width={small == 1 ? 220 : small == 2 ? 140 : 440}
                  height={small == 1 ? 220 : small == 2 ? 140 : 440}
                  src={goog.src}
                  alt="Google Deepmind"
                  aria-label="Google Deepmind"
                  className="alt m-8 header z-10"
                />
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <section className="grid panel items-center z-20" id="three">
        <Fade cascade className="grid panel items-center z-20">
          <div className="text-center z-20">
            <p className="text-7xl ostrich z-20 size">
              Previous Work Experience:
            </p>
            <div className="cards z-20">
              <Modal
                isOpen={card1}
                onOpenChange={showCard1}
                size="full"
                backdrop="blur"
                placement="center"
                className="justify-items-center items-center"
                classNames={{ closeButton: "mt-24 mr-6" }}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalBody className="grid grid-cols-2 gap-4 p-0 justify-items-center items-center">
                        <Image
                          alt="Burgundy Diamond mines"
                          className="brand max-w-md m-4"
                          height="h-100"
                          src={diamonds.src}
                          width="w-100"
                          isZoomed={img}
                        />
                        <div className="m-4">
                          <p className="text-5xl ostrich titlecard pb-8">
                            Burgundy Diamond Mines
                          </p>
                          <p className="text-3xl ostrich pb-4">
                            {" "}
                            Contract Web Developer
                          </p>
                          <div className="text-xl ostrich cardsize padb">
                            <p className="text-xl ostrich cardsize pb-4">
                              - Burgundy Diamond Mines is a diamond mining
                              company that mines, creates and sells diamond
                              jewelery across the globe.
                            </p>
                            <p className="text-xl ostrich cardsize pb-4">
                              - This company wanted a website showcasing the
                              process of what it takes to create thier unique
                              diamonds (website linked below)
                            </p>
                            Created using the following technologies:
                            <li>wordpress</li>
                            Along side custom coded parts which were made using:
                            <li>tailwind</li>
                            <li>vanila javascript</li>
                            <li>html and css</li>
                          </div>
                          <Link
                            isExternal
                            className="w-100 ostrich text-xl cardsize links text-white/80"
                            href="https://canadamark1dev.wpenginepowered.com/"
                            showAnchorIcon
                          >
                            Burgundy Website
                          </Link>
                        </div>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
              <Modal
                isOpen={card2}
                onOpenChange={showCard2}
                size="full"
                backdrop="blur"
                placement="center"
                className="justify-items-center items-center"
                classNames={{ closeButton: "mt-24 mr-6" }}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalBody className="grid grid-cols-2 gap-4 p-0 justify-items-center items-center">
                        <Image
                          alt="Burgundy Diamond mines"
                          className="brand max-w-md m-4"
                          height="h-100"
                          src={Relay.src}
                          width="w-100"
                          isZoomed={img}
                        />
                        <div className="m-4">
                          <p className="text-5xl ostrich titlecard pb-8">
                            Global Relay
                          </p>
                          <p className="text-3xl ostrich pb-4">
                            {" "}
                            Software Developer Intern
                          </p>
                          <div className="text-xl ostrich cardsize padb">
                            <p className="text-xl ostrich cardsize pb-4">
                              - Global Relay is SaaS company that focuses on
                              managing, storing and displaying large amounts of
                              data.
                            </p>
                            <p className="text-xl ostrich cardsize pb-4">
                              - My job was to help modernize their website from
                              old JSP pages to React.
                            </p>
                            <p className="text-xl ostrich pb-4 cardsize">
                              - Also helped in cleaning up, testing and updating
                              endpoints and documenting that work in Swagger ui
                            </p>
                            Created using the following technologies:
                            <li>java spring boot</li>
                            <li>react (typescript, html, css)</li>
                            <li>swagger ui</li>
                          </div>
                          <Link
                            isExternal
                            className="w-100 ostrich text-xl cardsize links text-white/80"
                            href="https://www.globalrelay.com/services/business-data-migration/?utm_source=google&utm_medium=paidsearch&utm_campaign=em-uk-en-gr-brand&utm_content=em-uk-en-gr-brand-core-ba-exact"
                            showAnchorIcon
                          >
                            Global Relay Website
                          </Link>
                        </div>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
              <Modal
                isOpen={card3}
                onOpenChange={showCard3}
                size="full"
                backdrop="blur"
                placement="center"
                className="justify-items-center items-center"
                classNames={{ closeButton: "mt-24 mr-6" }}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalBody className="grid grid-cols-2 gap-4 p-0 justify-items-center items-center">
                        <Image
                          alt="Burgundy Diamond mines"
                          className="brand max-w-md m-4"
                          height="h-100"
                          src={ONC.src}
                          width="w-100"
                          isZoomed={img}
                        />
                        <div className="m-4">
                          <p className="text-5xl ostrich titlecard pb-8">
                            Ocean Networks Canada
                          </p>
                          <p className="text-3xl ostrich pb-4">
                            {" "}
                            Software Developer Intern
                          </p>
                          <div className="text-xl ostrich cardsize padb">
                            <p className="text-xl ostrich cardsize pb-4">
                              - Ocean Networks a non-profit organization whose
                              goal is to map out the ocean and inform government
                              decisions based on those results.
                            </p>
                            <p className="text-xl ostrich cardsize pb-4">
                              - During my time there, I created numerous tests
                              to help imporve development speeds.
                            </p>
                            <p className="text-xl ostrich pb-4 cardsize">
                              - Also helped updating website components based on
                              client needs.
                            </p>
                            Technoloiges used:
                            <li>Cypress.io</li>
                            <li>react (typescript, html, css)</li>
                            <li>Selenium (java) </li>
                          </div>
                          <Link
                            isExternal
                            className="w-100 ostrich text-xl cardsize text-left text-white/80 links"
                            href="https://www.oceannetworks.ca/"
                            showAnchorIcon
                          >
                            Ocean Networks Website
                          </Link>
                        </div>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
            <a
              href="#four"
              className="tag"
              onClick={() => {
                setSection(4);
              }}
            >
              <svg
                fill="white"
                height="150px"
                width="150px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
                className="z-20 absolute left high"
                onMouseEnter={() => setArr1(true)}
                onMouseLeave={() => setArr1(false)}
              >
                <defs>
                  <linearGradient
                    id="arrow-gradient1"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ca3419">
                      <animate
                        attributeName="stopColor"
                        values="#ca3419; #3f51b1; #ca3419"
                        dur="4s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>

                    <stop offset="100%" stopColor="#3f51b1">
                      <animate
                        attributeName="stopColor"
                        values="#3f51b1; #ca3419; #3f51b1"
                        dur="4s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>
                  </linearGradient>
                </defs>
                <path
                  id="arr"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                    C255,161.018,253.42,157.202,250.606,154.389z"
                  fill="url(#arrow-gradient1)"
                  fillOpacity={arr1 ? 1 : 0}
                />
              </svg>
            </a>
            <a
              href="#two"
              onClick={() => {
                setSection(2);
              }}
            >
              <svg
                fill="white"
                height="150px"
                width="150px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
                className="z-20 absolute right high"
                transform="scale(-1,1)"
                onMouseEnter={() => setArr2(true)}
                onMouseLeave={() => setArr2(false)}
              >
                <defs>
                  <linearGradient
                    id="arrow-gradient2"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ca3419">
                      <animate
                        attributeName="stopColor"
                        values="#ca3419; #3f51b1; #ca3419"
                        dur="4s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>

                    <stop offset="100%" stopColor="#3f51b1">
                      <animate
                        attributeName="stopColor"
                        values="#3f51b1; #ca3419; #3f51b1"
                        dur="4s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>
                  </linearGradient>
                </defs>
                <path
                  id="arr"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                    C255,161.018,253.42,157.202,250.606,154.389z"
                  fill="url(#arrow-gradient2)"
                  fillOpacity={arr2 ? 1 : 0}
                />
              </svg>
            </a>
            {step <= 1.5 && (
              <Fade duration={1500}>
                <div className="grid grid-cols-1 grid-rows-2 max-w-6xl justify-self-center z-20">
                  <button
                    className="justify-self-center main"
                    onClick={() => showCard1(true)}
                  >
                    <svg
                      viewBox="0 0 64.00 64.00"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="32vh"
                      height="32vh"
                      className="triangle"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>Triangle-up</title>{" "}
                        <desc>Created with Sketch.</desc>{" "}
                        <defs>
                          <linearGradient
                            id="logo-gradient1"
                            x1="50%"
                            y1="0%"
                            x2="50%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#ca3419">
                              <animate
                                attributeName="stopColor"
                                values="#ca3419; #3f51b1; #ca3419"
                                dur="4s"
                                repeatCount="indefinite"
                              ></animate>
                            </stop>

                            <stop offset="100%" stopColor="#3f51b1">
                              <animate
                                attributeName="stopColor"
                                values="#3f51b1; #ca3419; #3f51b1"
                                dur="4s"
                                repeatCount="indefinite"
                              ></animate>
                            </stop>
                          </linearGradient>
                        </defs>{" "}
                        <g id="Page-1" strokeWidth="0.212" fillRule="evenodd">
                          {" "}
                          <path
                            d="M3,45 C1.9,45 1,44.2 1,43.1 L29,2.9 C30.1,1.3 31.3,1 32.1,1 L32.1,1 C32.1,1 33.8,1.1 35.1,2.9 L63,43.1 C63,44.1 62.1,45 61,45 L3,45 L3,45 Z"
                            id="Triangle-up"
                            strokeWidth="0.212"
                            fill="url('#logo-gradient1')"
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            style={{ fillOpacity: hover ? 1 : 0 }}
                          >
                            {" "}
                          </path>{" "}
                          <text
                            x="50%"
                            y="55%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontSize="4px"
                            className="ostrich font-light tracking-widest styledText"
                            stroke="white"
                            fill="#044B94"
                            fillOpacity="0.4"
                          >
                            Burgundy Diamond Mines
                          </text>
                        </g>{" "}
                      </g>
                    </svg>
                  </button>
                  <div>
                    <button className="pr-2" onClick={() => showCard2(true)}>
                      <svg
                        viewBox="0 0 64.00 64.00"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="32vh"
                        height="32vh"
                        className="triangle"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <title>Triangle-up</title>{" "}
                          <desc>Created with Sketch.</desc>
                          <defs>
                            <linearGradient
                              id="logo-gradient2"
                              x1="50%"
                              y1="0%"
                              x2="50%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#576ffa">
                                <animate
                                  attributeName="stopColor"
                                  values="#576ffa; #fc2003; #576ffa"
                                  dur="4s"
                                  repeatCount="indefinite"
                                ></animate>
                              </stop>

                              <stop offset="100%" stopColor="#fc2003">
                                <animate
                                  attributeName="stopColor"
                                  values="#fc2003; #576ffa; #fc2003"
                                  dur="4s"
                                  repeatCount="indefinite"
                                  keyTimes="0; 0.5; 1"
                                  keySplines="0.42 0 1 1; 0 0 0.58 1"
                                  calcMode="spline"
                                ></animate>
                              </stop>
                            </linearGradient>
                          </defs>{" "}
                          <g id="Page-1" strokeWidth="0.212" fillRule="evenodd">
                            {" "}
                            <path
                              d="M3,45 C1.9,45 1,44.2 1,43.1 L29,2.9 C30.1,1.3 31.3,1 32.1,1 L32.1,1 C32.1,1 33.8,1.1 35.1,2.9 L63,43.1 C63,44.1 62.1,45 61,45 L3,45 L3,45 Z"
                              id="Triangle-up"
                              strokeWidth="0.212"
                              fill="url('#logo-gradient2')"
                              onMouseEnter={() => setHover2(true)}
                              onMouseLeave={() => setHover2(false)}
                              style={{ fillOpacity: hover2 ? 1 : 0 }}
                            >
                              {" "}
                            </path>{" "}
                            <text
                              x="50%"
                              y="55%"
                              dominantBaseline="middle"
                              textAnchor="middle"
                              fontSize="4px"
                              className="ostrich font-light tracking-widest"
                              stroke="white"
                              fill="#044B94"
                              fillOpacity="0.4"
                            >
                              Global Relay
                            </text>
                          </g>{" "}
                        </g>
                      </svg>
                    </button>
                    <button className="pl-2" onClick={() => showCard3(true)}>
                      <svg
                        viewBox="0 0 64.00 64.00"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="32vh"
                        height="32vh"
                        className="triangle"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <title>Triangle-up</title>{" "}
                          <desc>Created with Sketch.</desc>
                          <defs>
                            <linearGradient
                              id="logo-gradient3"
                              x1="50%"
                              y1="0%"
                              x2="50%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#8c4ff5">
                                <animate
                                  attributeName="stopColor"
                                  values="#8c4ff5; #ee6452; #8c4ff5"
                                  dur="4s"
                                  repeatCount="indefinite"
                                ></animate>
                              </stop>

                              <stop offset="100%" stopColor="#ee6452">
                                <animate
                                  attributeName="stopColor"
                                  values="#ee6452; #8c4ff5; #ee6452"
                                  dur="4s"
                                  repeatCount="indefinite"
                                ></animate>
                              </stop>
                            </linearGradient>
                          </defs>{" "}
                          <g id="Page-1" strokeWidth="0.212" fillRule="evenodd">
                            {" "}
                            <path
                              d="M3,45 C1.9,45 1,44.2 1,43.1 L29,2.9 C30.1,1.3 31.3,1 32.1,1 L32.1,1 C32.1,1 33.8,1.1 35.1,2.9 L63,43.1 C63,44.1 62.1,45 61,45 L3,45 L3,45 Z"
                              id="Triangle-up"
                              strokeWidth="0.212"
                              fill="url('#logo-gradient3')"
                              onMouseEnter={() => setHover3(true)}
                              onMouseLeave={() => setHover3(false)}
                              style={{ fillOpacity: hover3 ? 1 : 0 }}
                            >
                              {" "}
                            </path>
                            <text
                              x="50%"
                              y="55%"
                              dominantBaseline="middle"
                              textAnchor="middle"
                              fontSize="4px"
                              className="ostrich font-light tracking-widest"
                              stroke="white"
                              fill="#044B94"
                              fillOpacity="0.4"
                            >
                              Ocean Networks
                            </text>
                          </g>{" "}
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </Fade>
            )}
            {step > 1.5 && (
              <Fade duration={1500}>
                <div className="grid grid-cols-1 grid-rows-2 max-w-6xl justify-self-center z-20">
                  <button className="justify-self-center main" disabled>
                    <svg
                      viewBox="0 0 64.00 64.00"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="32vh"
                      height="32vh"
                      className="triangle"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>Triangle-up</title>{" "}
                        <desc>Created with Sketch.</desc>{" "}
                        <defs>
                          <linearGradient
                            id="logo-gradient1"
                            x1="50%"
                            y1="0%"
                            x2="50%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#ca3419">
                              <animate
                                attributeName="stopColor"
                                values="#ca3419; #3f51b1; #ca3419"
                                dur="4s"
                                repeatCount="indefinite"
                              ></animate>
                            </stop>

                            <stop offset="100%" stopColor="#3f51b1">
                              <animate
                                attributeName="stopColor"
                                values="#3f51b1; #ca3419; #3f51b1"
                                dur="4s"
                                repeatCount="indefinite"
                              ></animate>
                            </stop>
                          </linearGradient>
                        </defs>{" "}
                        <g id="Page-1" strokeWidth="0.212" fillRule="evenodd">
                          {" "}
                          <path
                            d="M3,45 C1.9,45 1,44.2 1,43.1 L29,2.9 C30.1,1.3 31.3,1 32.1,1 L32.1,1 C32.1,1 33.8,1.1 35.1,2.9 L63,43.1 C63,44.1 62.1,45 61,45 L3,45 L3,45 Z"
                            id="Triangle-up_d"
                            strokeWidth="0.212"
                            fill="url('#logo-gradient1')"
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            style={{ fillOpacity: hover ? 1 : 0 }}
                          >
                            {" "}
                          </path>{" "}
                          <text
                            x="50%"
                            y="55%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontSize="4px"
                            className="ostrich font-light tracking-widest styledText"
                            stroke="white"
                            fill="#044B94"
                            fillOpacity="0.4"
                          >
                            Paleo-Classifier
                          </text>
                          <text
                            x="50%"
                            y="65%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontSize="4px"
                            className="ostrich font-light tracking-widest"
                            stroke="white"
                            fill="#044B94"
                            fillOpacity="0.4"
                          >
                            (Under Development)
                          </text>
                        </g>{" "}
                      </g>
                    </svg>
                  </button>
                  <div>
                    <button className="pr-2" disabled>
                      <svg
                        viewBox="0 0 64.00 64.00"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="32vh"
                        height="32vh"
                        className="triangle"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <title>Triangle-up</title>{" "}
                          <desc>Created with Sketch.</desc>
                          <defs>
                            <linearGradient
                              id="logo-gradient2"
                              x1="50%"
                              y1="0%"
                              x2="50%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#576ffa">
                                <animate
                                  attributeName="stopColor"
                                  values="#576ffa; #fc2003; #576ffa"
                                  dur="4s"
                                  repeatCount="indefinite"
                                ></animate>
                              </stop>

                              <stop offset="100%" stopColor="#fc2003">
                                <animate
                                  attributeName="stopColor"
                                  values="#fc2003; #576ffa; #fc2003"
                                  dur="4s"
                                  repeatCount="indefinite"
                                  keyTimes="0; 0.5; 1"
                                  keySplines="0.42 0 1 1; 0 0 0.58 1"
                                  calcMode="spline"
                                ></animate>
                              </stop>
                            </linearGradient>
                          </defs>{" "}
                          <g id="Page-1" strokeWidth="0.212" fillRule="evenodd">
                            {" "}
                            <path
                              d="M3,45 C1.9,45 1,44.2 1,43.1 L29,2.9 C30.1,1.3 31.3,1 32.1,1 L32.1,1 C32.1,1 33.8,1.1 35.1,2.9 L63,43.1 C63,44.1 62.1,45 61,45 L3,45 L3,45 Z"
                              id="Triangle-up_d"
                              strokeWidth="0.212"
                              fill="url('#logo-gradient2')"
                              onMouseEnter={() => setHover2(true)}
                              onMouseLeave={() => setHover2(false)}
                              style={{ fillOpacity: hover2 ? 1 : 0 }}
                            >
                              {" "}
                            </path>{" "}
                            <text
                              x="50%"
                              y="55%"
                              dominantBaseline="middle"
                              textAnchor="middle"
                              fontSize="4px"
                              className="ostrich font-light tracking-widest"
                              stroke="white"
                              fill="#044B94"
                              fillOpacity="0.4"
                            >
                              GenieBox
                            </text>
                            <text
                              x="50%"
                              y="65%"
                              dominantBaseline="middle"
                              textAnchor="middle"
                              fontSize="4px"
                              className="ostrich font-light tracking-widest"
                              stroke="white"
                              fill="#044B94"
                              fillOpacity="0.4"
                            >
                              (Under Development)
                            </text>
                          </g>{" "}
                        </g>
                      </svg>
                    </button>
                    <button className="pl-2" disabled>
                      <svg
                        viewBox="0 0 64.00 64.00"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="32vh"
                        height="32vh"
                        className="triangle"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <title>Triangle-up</title>{" "}
                          <desc>Created with Sketch.</desc>
                          <defs>
                            <linearGradient
                              id="logo-gradient3"
                              x1="50%"
                              y1="0%"
                              x2="50%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#8c4ff5">
                                <animate
                                  attributeName="stopColor"
                                  values="#8c4ff5; #ee6452; #8c4ff5"
                                  dur="4s"
                                  repeatCount="indefinite"
                                ></animate>
                              </stop>

                              <stop offset="100%" stopColor="#ee6452">
                                <animate
                                  attributeName="stopColor"
                                  values="#ee6452; #8c4ff5; #ee6452"
                                  dur="4s"
                                  repeatCount="indefinite"
                                ></animate>
                              </stop>
                            </linearGradient>
                          </defs>{" "}
                          <g id="Page-1" strokeWidth="0.212" fillRule="evenodd">
                            {" "}
                            <path
                              d="M3,45 C1.9,45 1,44.2 1,43.1 L29,2.9 C30.1,1.3 31.3,1 32.1,1 L32.1,1 C32.1,1 33.8,1.1 35.1,2.9 L63,43.1 C63,44.1 62.1,45 61,45 L3,45 L3,45 Z"
                              id="Triangle-up_d"
                              strokeWidth="0.212"
                              fill="url('#logo-gradient3')"
                              onMouseEnter={() => setHover3(true)}
                              onMouseLeave={() => setHover3(false)}
                              style={{ fillOpacity: hover3 ? 1 : 0 }}
                            >
                              {" "}
                            </path>
                            <text
                              x="50%"
                              y="55%"
                              dominantBaseline="middle"
                              textAnchor="middle"
                              fontSize="4px"
                              className="ostrich font-light tracking-widest"
                              stroke="white"
                              fill="#044B94"
                              fillOpacity="0.4"
                            >
                              Job Aggregator
                            </text>
                            <text
                              x="50%"
                              y="65%"
                              dominantBaseline="middle"
                              textAnchor="middle"
                              fontSize="4px"
                              className="ostrich font-light tracking-widest"
                              stroke="white"
                              fill="#044B94"
                              fillOpacity="0.4"
                            >
                              (Under Development)
                            </text>
                          </g>{" "}
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </Fade>
            )}
            <Slider
              className="max-w-md m-auto gap-3 pl-16 pr-16"
              marks={[
                {
                  value: 1,
                  label: "1",
                },
                {
                  value: 2,
                  label: "2",
                },
              ]}
              color="foreground"
              defaultValue={1}
              maxValue={2}
              minValue={1}
              size="md"
              disableThumbScale={true}
              onChange={(value) => setStep(value as number)}
              step={0.01}
            />
          </div>
        </Fade>
      </section>
      <section className="grid panel purple bg-3 items-center z-0" id="four">
        <Fade cascade>
          <div className="text-center">
            <p className="text-8xl ostrich size"> Like my work? </p>
            <a
              href="#one"
              className="tag"
              onClick={() => {
                setSection(1);
              }}
            >
              <svg
                fill="white"
                height="150px"
                width="150px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
                className="z-20 absolute left high"
                onMouseEnter={() => setArr1(true)}
                onMouseLeave={() => setArr1(false)}
              >
                <defs>
                  <linearGradient
                    id="arrow-gradient1"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ca3419">
                      <animate
                        attributeName="stopColor"
                        values="#ca3419; #3f51b1; #ca3419"
                        dur="4s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>

                    <stop offset="100%" stopColor="#3f51b1">
                      <animate
                        attributeName="stopColor"
                        values="#3f51b1; #ca3419; #3f51b1"
                        dur="4s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>
                  </linearGradient>
                </defs>
                <path
                  id="arr"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                    C255,161.018,253.42,157.202,250.606,154.389z"
                  fill="url(#arrow-gradient1)"
                  fillOpacity={arr1 ? 1 : 0}
                />
              </svg>
            </a>
            <a
              href="#three"
              onClick={() => {
                setSection(3);
              }}
            >
              <svg
                fill="white"
                height="150px"
                width="150px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
                className="z-20 absolute right high"
                transform="scale(-1,1)"
                onMouseEnter={() => setArr2(true)}
                onMouseLeave={() => setArr2(false)}
              >
                <defs>
                  <linearGradient
                    id="arrow-gradient2"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ca3419">
                      <animate
                        attributeName="stopColor"
                        values="#ca3419; #3f51b1; #ca3419"
                        dur="4s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>

                    <stop offset="100%" stopColor="#3f51b1">
                      <animate
                        attributeName="stopColor"
                        values="#3f51b1; #ca3419; #3f51b1"
                        dur="4s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>
                  </linearGradient>
                </defs>
                <path
                  id="arr"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                    C255,161.018,253.42,157.202,250.606,154.389z"
                  fill="url(#arrow-gradient2)"
                  fillOpacity={arr2 ? 1 : 0}
                />
              </svg>
            </a>
            <div className="glass mx-auto space max-w-96">
              <svg
                version="1.1"
                width="320"
                height="320"
                viewBox="0 0 320 320"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="justify-self-center"
              >
                <defs>
                  <path id="r1" stroke="#f31260">
                    <animate
                      id="p1"
                      attributeName="d"
                      values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-width"
                      values="0;4;4;4;0"
                      dur="6s"
                      repeatCount="indefinite"
                      begin="p1.begin"
                    />
                  </path>
                  <path id="r2" stroke="#5d13dd">
                    <animate
                      attributeName="d"
                      values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                      dur="6s"
                      repeatCount="indefinite"
                      begin="p1.begin+1s"
                    />
                    <animate
                      attributeName="stroke-width"
                      values="0;4;4;4;0"
                      dur="6s"
                      repeatCount="indefinite"
                      begin="p1.begin+1s"
                    />
                  </path>
                  <path id="r3" stroke="#f31260">
                    <animate
                      attributeName="d"
                      values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                      dur="6s"
                      repeatCount="indefinite"
                      begin="p1.begin+2s"
                    />
                    <animate
                      attributeName="stroke-width"
                      values="0;4;4;4;0"
                      dur="6s"
                      repeatCount="indefinite"
                      begin="p1.begin+2s"
                    />
                  </path>
                  <path id="r4" stroke="#5d13dd">
                    <animate
                      id="p1"
                      attributeName="d"
                      values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                      dur="6s"
                      repeatCount="indefinite"
                      begin="p1.begin+3s"
                    />
                    <animate
                      attributeName="stroke-width"
                      values="0;4;4;4;0"
                      dur="6s"
                      repeatCount="indefinite"
                      begin="p1.begin+3s"
                    />
                  </path>
                  <path id="r5" stroke="#f31260">
                    <animate
                      attributeName="d"
                      values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                      dur="6s"
                      repeatCount="indefinite"
                      begin="p1.begin+4s"
                    />
                    <animate
                      attributeName="stroke-width"
                      values="0;4;4;4;0"
                      dur="6s"
                      repeatCount="indefinite"
                      begin="p1.begin+4s"
                    />
                  </path>
                  <path id="r6" stroke="#5d13dd">
                    <animate
                      attributeName="d"
                      values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                      dur="6s"
                      repeatCount="indefinite"
                      begin="p1.begin+5s"
                    />
                    <animate
                      attributeName="stroke-width"
                      values="0;4;4;4;0"
                      dur="6s"
                      repeatCount="indefinite"
                      begin="p1.begin+5s"
                    />
                  </path>
                </defs>
                <use xlinkHref="#r1" />
                <use xlinkHref="#r1" transform="rotate(60 160 160)" />
                <use xlinkHref="#r1" transform="rotate(120 160 160)" />
                <use xlinkHref="#r1" transform="rotate(180 160 160)" />
                <use xlinkHref="#r1" transform="rotate(240 160 160)" />
                <use xlinkHref="#r1" transform="rotate(300 160 160)" />
                <use xlinkHref="#r2" transform="rotate(30 160 160)" />
                <use xlinkHref="#r2" transform="rotate(90 160 160)" />
                <use xlinkHref="#r2" transform="rotate(150 160 160)" />
                <use xlinkHref="#r2" transform="rotate(210 160 160)" />
                <use xlinkHref="#r2" transform="rotate(270 160 160)" />
                <use xlinkHref="#r2" transform="rotate(330 160 160)" />
                <use xlinkHref="#r3" />
                <use xlinkHref="#r3" transform="rotate(60 160 160)" />
                <use xlinkHref="#r3" transform="rotate(120 160 160)" />
                <use xlinkHref="#r3" transform="rotate(180 160 160)" />
                <use xlinkHref="#r3" transform="rotate(240 160 160)" />
                <use xlinkHref="#r3" transform="rotate(300 160 160)" />
                <use xlinkHref="#r4" transform="rotate(30 160 160)" />
                <use xlinkHref="#r4" transform="rotate(90 160 160)" />
                <use xlinkHref="#r4" transform="rotate(150 160 160)" />
                <use xlinkHref="#r4" transform="rotate(210 160 160)" />
                <use xlinkHref="#r4" transform="rotate(270 160 160)" />
                <use xlinkHref="#r4" transform="rotate(330 160 160)" />
                <use xlinkHref="#r5" />
                <use xlinkHref="#r5" transform="rotate(60 160 160)" />
                <use xlinkHref="#r5" transform="rotate(120 160 160)" />
                <use xlinkHref="#r5" transform="rotate(180 160 160)" />
                <use xlinkHref="#r5" transform="rotate(240 160 160)" />
                <use xlinkHref="#r5" transform="rotate(300 160 160)" />
                <use xlinkHref="#r6" transform="rotate(30 160 160)" />
                <use xlinkHref="#r6" transform="rotate(90 160 160)" />
                <use xlinkHref="#r6" transform="rotate(150 160 160)" />
                <use xlinkHref="#r6" transform="rotate(210 160 160)" />
                <use xlinkHref="#r6" transform="rotate(270 160 160)" />
                <use xlinkHref="#r6" transform="rotate(330 160 160)" />
              </svg>
            </div>
            <p className="mt-2 text-5xl ostrich mb-12 sizesm marg">
              Lets create something amazing together!
            </p>
            <a href="mailto:rahulnag7963@gmail.com" className="pb-12">
              <button className="cont"> Email me! </button>
            </a>
          </div>
        </Fade>
      </section>
      <Header setSection={setSection} />
      <div className="fixed overide z-20 ostrich box-border">
        <Pagination
          className=""
          showShadow
          loop
          showControls
          color="danger"
          total={4}
          initialPage={1}
          page={section}
          onChange={(page) => {
            handlePageClick(page);
          }}
        />
      </div>
      <div className="loading-page z-30">
        <svg
          className="logo"
          width="200"
          height="200"
          viewBox="-1 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          opacity={0}
        >
          <defs>
            <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#8015c7" />
              <stop offset="100%" stopColor="#c4143e" />
            </linearGradient>
            <filter id="inset-shadow">
              <feOffset dx="0" dy="0" />
              <feGaussianBlur stdDeviation="1" result="offset-blur" />
              <feComposite
                operator="out"
                in="SourceGraphic"
                in2="offset-blur"
                result="inverse"
              />
              <feFlood floodColor="black" floodOpacity=".95" result="color" />
              <feComposite
                operator="in"
                in="color"
                in2="inverse"
                result="shadow"
              />
              <feComposite operator="over" in="shadow" in2="SourceGraphic" />
            </filter>
          </defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-421.000000, -8039.000000)"
              fill="url(#grad1)"
              style={{ filter: "url(#inset-shadow)" }}
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <polygon
                  id="-spiral-[#29]"
                  points="383 7879 383 7893.105 383 7895 369 7895 369 7883 379 7883 379 7891 373 7891 373 7887 375 7887 375 7889 377 7889 377 7885 371 7885 371 7893 381 7893 381 7881 367 7881 367 7897 383 7897 383 7899 365 7899 365 7879"
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
        <div className="name-container">
          <div className="logo-name ostrich text-5xl opacity-0">
            TransMigrate
          </div>
        </div>
      </div>
    </div>
  );
}
