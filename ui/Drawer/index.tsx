import React, { useState } from "react";
import { CaretDownFilled } from "@ant-design/icons";
import { Avatar, Col, Drawer, Row, Typography } from "antd";
import styles from "./Drawer.module.css";
import { LogoutIcon } from "@heroicons/react/outline";
const { Text } = Typography;

const ProfileDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Row>
        <Col span={6}>
          <div className={styles.Button} onClick={showDrawer}>
            <CaretDownFilled /> me
          </div>
        </Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>{" "}
      <Drawer
        title=""
        width={global.window?.innerWidth > 1920 ? 500 : 300}
        closable={true}
        onClose={onClose}
        visible={visible}
        placement="left"
      >
        {" "}
        <div>
          {" "}
          <Row className={styles.Row}>
            {" "}
            <Avatar
              className={styles.Avatar}
              src={"/assets/images/Ragini.png"}
            />
          </Row>
          <Row className={styles.DetailRow}>
            <div>
              <Row>
                <Text className={styles.Name}>ragini das</Text>
              </Row>{" "}
              <Row>
                <Text className={styles.Link}>view my profile</Text>
              </Row>
            </div>
          </Row>
          <Row className={styles.Row}>
            <div>
              <Row>
                <Text className={styles.Text}>how to use leap.club</Text>
              </Row>
              <Row>
                <Text className={styles.Text}>share feedback</Text>
              </Row>
              <Row>
                {" "}
                <Text className={styles.Text}>member stories</Text>
              </Row>
              <Row>
                <Text className={styles.Text}>change password</Text>
              </Row>
            </div>
          </Row>
          <Row className={styles.Row}>
            <Col>
              <LogoutIcon className={styles.IconStyle} />
            </Col>
            <Col>
              <Text className={styles.IconText}>logout</Text>
            </Col>
          </Row>
        </div>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;