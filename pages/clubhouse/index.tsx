// Change this page to index.tsx

import { Col, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";
import ClubhouseCard from "../../components/clubhouse/ClubhouseCard";
import ClubhouseModal from "../../components/clubhouse/Modals/ClubhouseModal";
import Sidebar from "../../components/Layout/Sidebar";
import styles from "../../styles/Clubhouse.module.css";
import { UserGroupIcon as ChInactive } from "@heroicons/react/outline";
import CreateChModal from "../../components/clubhouse/Modals/CreateChModal";

const { Text } = Typography;
const Starred = () => {
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          <Sidebar pageName={"clubhouse"} />{" "}
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              {" "}
              <Text className={styles.ChTopText}>
                your pinned clubhouses appear here!
              </Text>
              <ClubhouseCard isJoined isPinned upcomingHuddle />
              <ClubhouseCard isJoined isPinned isFounder/>
              <ClubhouseCard isJoined isPinned upcomingHuddle />
              <ClubhouseCard isJoined isPinned />
              <ClubhouseCard isJoined isPinned />
              <Link href="/clubhouse/myclubhouses">
                <a>
                  {" "}
                  <div className={styles.ChLink}>
                    view all clubhouses that i’m a part of
                  </div>
                </a>
              </Link>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6} className={styles.SidebarButton}>
          {" "}
          <div className={styles.ChButtonDiv}>
            {" "}
            <div className={styles.ChButtonWrapper}>
              <Link href="/clubhouse/otherclubhouses" passHref>
                <button className={styles.ButtonDark}>
                  <ChInactive className={styles.ButtonIcon} />{' '}join a clubhouse
                </button>
              </Link>
            </div>
            <div className={styles.ChButtonWrapper}>
              <CreateChModal />
            </div>
            <div className={styles.ChButtonWrapper}>
              <ClubhouseModal />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Starred;
