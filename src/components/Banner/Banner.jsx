import React from "react";
import { Container, Row } from "react-bootstrap";
import s from "./Banner.module.scss";

function Banner() {
  return (
    <>
      <Container fluid>
        <Row>
          <div className={s.banner}>
            <div className={s.bannerImg}>
              <img
                src="https://preview.colorlib.com/theme/coloshop/images/slider_1.jpg.webp"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className={s.bannerText}>
              <p>Spring / Summer Collection 2017</p>
              <h2>Get up to 30% Off New Arrivals</h2>
              <div className={s.bannerBtn}>
                <button>shop now</button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Banner;
