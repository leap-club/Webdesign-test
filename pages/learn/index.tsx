// this page is 1-1 coaching

import { Card, Col, Collapse, Dropdown, Menu, Row, Typography } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import ChemistrySession from "../../components/coaching/ChemistrySession";
import CoachCard from "../../components/coaching/CoachCard";
import ButtonLight from "../../components/common/Button/ButtonLight";
import Sidebar from "../../components/Layout/Sidebar";
import styles from "../../styles/Learn.module.css";
import { AdjustmentsIcon } from "@heroicons/react/solid";
import FilterAndSort from "../../components/coaching/FilterAndSort";
import { truncate } from "fs";

const { Text } = Typography;
const { Panel } = Collapse;

const Coaching = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (e: any) => {
    e.preventDefault();
    setOpen(false);
  };

  const handleCollapse = (e: any) => {
    setOpen(!open);
  };

  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          {" "}
          <Sidebar pageName={"learn"} />{" "}
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={4}></Col>
            <Col span={16}>
              <Row>
                <ChemistrySession chemSessions={3}></ChemistrySession>
              </Row>
              <Row className={styles.LearnRow}>
                <Col span={8} className={styles.LearnCol}>
                  <Text className={styles.LearnText}>your coach</Text>
                </Col>
                <Col span={8}></Col>
                <Col span={8} className={styles.LearnCol2}>
                  <Link href="/learn/mysessions" passHref>
                    <a>
                      <Text className={styles.LearnBookingLink}>
                        view bookings
                      </Text>
                    </a>
                  </Link>
                </Col>
              </Row>
              <Row>
                <CoachCard />
              </Row>
              <Row className={styles.LearnRow}>
                <Text className={styles.LearnText}>
                  handpicked top executive and wellness coaches for you
                </Text>
              </Row>

              <Row className={styles.LearnRow}>
                {/* <Collapse
                  activeKey={open ? '1' : ''}
                  onChange={handleCollapse}
                  className={styles.Collapse}
                  ghost
                  destroyInactivePanel
                >
                  <Panel
                    header={<ButtonLight name="filter and sort" />}
                    key="1"
                    showArrow={false}
                  >
                    <Card className={styles.Card}>
                      <FilterAndSort />
                      <br />
                      <Row>
                        <div
                          className={styles.PanelButton}
                          onClick={handleOpen}
                        >
                          clear
                        </div>
                        <div className={styles.PanelButton2}>apply</div>
                      </Row>
                    </Card>
                  </Panel>
                </Collapse> */}
                <FilterAndSort />
              </Row>
              <Row className={styles.LearnRow}>
                <CoachCard />
                <CoachCard />
                <CoachCard />
                <CoachCard />
                <CoachCard />
              </Row>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={4}></Col>
      </Row>
    </>
  );
};

export default Coaching;
