// Change this page to index.tsx

import { Col, Layout, Row } from "antd";
import React from "react";
import ExperienceCard from "../../components/experience/UpcomingExperienceCard";
import ExpTags from "../../components/common/Tags/ExpTags";
import Sidebar from "../../ui/Sidebar";
import styles from "../../styles/Experience.module.css";

const Upcoming = () => {
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          {" "}
          <Sidebar pageName={"experiences"} />{" "}
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row className={styles.TagRow}>
            <Col span={2}></Col>{" "}
            <Col span={20}>
              {" "}
              <ExpTags />
            </Col>
            <Col span={2}></Col>
          </Row>
          <Row>
            <Col span={4}></Col>
            <Col span={15}>
              <div>
                <ExperienceCard viewMore Name="online"/>
                <ExperienceCard viewMore isBooked/>
                <ExperienceCard viewMore isPay/>
              </div>
            </Col>
            <Col span={4}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default Upcoming;
