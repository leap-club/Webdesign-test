import { Avatar, Col, Divider, Row, Typography } from "antd";
import React, { useState } from "react";
import styles from "./ClubhouseCardInfo.module.css";
import { UserGroupIcon as ChInactive } from "@heroicons/react/solid";
import ButtonLight from "../../common/ButtonComponent/ButtonLight";
import ButtonDark from "../../common/ButtonComponent/ButtonDark";
import ClubhouseCard from "../ClubhouseCard";
import ClubhouseMember from "../ClubhouseMember";
const { Text } = Typography;

const ClubhouseCardInfo = ({ isJoined = false }) => {
  const [isClicked, SetisClicked] = useState(false);
  const [viewAll, SetviewAll] = useState(false);
  const [isJoin, SetisJoin] = useState(isJoined);
  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function onPress() {
    SetisClicked(!isClicked);
  }

  function handleViewAll() {
    SetviewAll(!viewAll);
  }
  return (
    <>
      {/* <div className={styles.container}>
        <Row className={styles.row}>
          <Col xs={20} md={20} lg={20} xl={20} xxl={20} className={styles.col}>
            <Text className={styles.ChTopContent}>
              simplifying personal finance for women
            </Text>
          </Col>
          <Col xs={4} md={4} lg={4} xl={4} xxl={4} className={styles.col3}>
            {!isJoined ? null : (
              <button className={styles.ChCardBadge}>
                <h6 className={styles.ChCardBadgeText}>public</h6>
              </button>
            )}
          </Col>
        </Row>
        <Row className={styles.row}>
          <Text className={styles.ChCardDescription}>
            women playing sports, bindass, lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard du,dummy text of the printing and
            typesetting industry. ...more
          </Text>
        </Row>
      </div> */}
      <ClubhouseCard infoPage />
      <div className={styles.container3}>
        {isJoin ? (
          <>
            <Row>
              <Col span={7}>
                {" "}
                <ButtonLight name="mute clubhouse" />
              </Col>{" "}
              <Col span={7}>
                <ButtonLight name="exit clubhouse" />
              </Col>
              <Col span={10}></Col>
            </Row>
          </>
        ) : (
          <Row>
            <ButtonDark name="join clubhouse" />
          </Row>
        )}
      </div>
      <Divider className={styles.Divider} />
      <div className={styles.container2}>
        <Row>
          <ChInactive className={styles.SidebarIcon} />
          <Text className={styles.Chmembers}>121 members</Text>
        </Row>
      </div>
      {n.slice(0, 3).map((i) => {
        return (
          <>
           <ClubhouseMember />
          </>
        );
      })}
      {viewAll ? (
        n.slice(3).map((i) => {
          return (
            <>
              <Row className={styles.row2}>
                <Col span={3}>
                  {" "}
                  <Avatar
                    className={styles.Avatar}
                    src={"/assets/images/Ragini.png"}
                  />
                </Col>
                <Col span={11} className={styles.col}>
                  <Text>ragini das</Text>
                  {/* {!isFounder ? (
            <Text className={styles.Chtext2}>is a Founder</Text>
          ) : null} */}
                </Col>
                <Col span={10}></Col>
              </Row>
            </>
          );
        })
      ) : (
        <div className={styles.ChLink} onClick={handleViewAll}>
          <a>view all members </a>
        </div>
      )}
    </>
  );
};

export default ClubhouseCardInfo;
