import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Lorem Ipsum dolor{" "}
              <span className="text-color-primary">sit amet</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Proin tempus interdum odio, sit amet ornare est pretium sit
                amet. Donec sed massa ac nulla condimentum hendrerit id id enim.
                Duis sed faucibus est.{" "}
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://cruip.com/"
                  >
                    Get started
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://github.com/cruip/open-react-template/"
                  >
                    View on Github
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <iframe
              src="//www.slideshare.net/slideshow/embed_code/key/trsj86VfrJoCVD"
              width="720"
              height="585"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              allowfullscreen
            >
              {" "}
            </iframe>{" "}
            <div >
              {" "}
              <strong>
                {" "}
                <a
                  href="//www.slideshare.net/FidanHasanguliyeva/recommender-system-240385883"
                  title="Recommender system "
                  target="_blank"
                >
                  Recommender system{" "}
                </a>{" "}
              </strong>{" "}
              from{" "}
              <strong>
                <a
                  href="//www.slideshare.net/FidanHasanguliyeva"
                  target="_blank"
                >
                  FidanHasanguliyeva
                </a>
              </strong>{" "}
            </div>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
