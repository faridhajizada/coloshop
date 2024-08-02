import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "./PeopleCategory.module.scss";

function PeopleCategory() {
  return (
    <section className={s.peopleCategory}>
      <Container>
        <Row>
          <Col md={4}>
            <div className={s.card}>
              <div className={s.cardImg}>
                <img
                  src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className={s.cardBtn}>
                <button>WOMEN'S</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className={s.card}>
              <div className={s.cardImg}>
                <img
                  src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className={s.cardBtn}>
                <button> ACCESSORIES'S</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className={s.card}>
              <div className={s.cardImg}>
                <img
                  src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className={s.cardBtn}>
                <button>MEN'S</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PeopleCategory;
