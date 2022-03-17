import { Col, Row } from 'antd';
import React from 'react'
import Sidebar from '../../components/Sidebar';
import Subheader from '../../components/Subheader2';
import { experiencesNavbar } from "../../constants/constants";
import styles from "../../styles/Experience.module.css";

const masterclass = () => {
  return (
    <>
      <div className={styles.Header}>
        {" "}
        <Subheader SubheaderData={experiencesNavbar} />{" "}
      </div>
      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          {" "}
          <Sidebar pageName={"experiences"} />{" "}
        </Col>
        <Col span={12} className={styles.middleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}></Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
}

export default masterclass