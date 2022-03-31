// this page is 1-1 coaching

import { Col, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";
import ChemistrySession from "../../components/coaching/ChemistrySession";
import CoachCard from "../../components/coaching/CoachCard";
import Sidebar from "../../ui/Sidebar";
import Subheader from "../../ui/Subheader2";
import { coachingNavbar } from "../../constants/constants";
import styles from "../../styles/Learn.module.css";
import PastBooking from "../../components/coaching/PastBooking";
const { Text } = Typography;

const PastBookings = () => {
  return (
    <>
      {/* <div className={styles.Header}>
        {" "}
        <Subheader SubheaderData={PastBookingsNavbar} />{" "}
      </div> */}
      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          {" "}
          <Sidebar pageName={"learn"} />{" "}
        </Col>
        <Col span={12} className={styles.middleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <Row>
                <PastBooking />
              </Row>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default PastBookings;
