import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "./Header.module.scss";

function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col md={3}>
            <div className={s.siteName}>
              <h3>
                colo<span>shop</span>
              </h3>
            </div>
          </Col>
          <Col md={6}>
            <nav>
              <ul className={s.navList}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Shop</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Pages</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                

              </ul>
            </nav>
          </Col>
          <Col md={3}>
            <div className={s.navIcon}>
              <ul>
                <li>
                  <img
                    src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/?size=100&id=23265&format=png&color=000000"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/?size=100&id=36500&format=png&color=000000"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
