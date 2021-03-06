import React, { useState } from "react";
import { CaretDownFilled } from "@ant-design/icons";
import { Avatar, Drawer, Row, Typography } from "antd";
import styles from "./Drawer.module.css";
import { LogoutIcon } from "@heroicons/react/outline";
import Link from "next/link";
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
      <div className={styles.Button} onClick={showDrawer}>
        <CaretDownFilled /> me
      </div>

      <Drawer
        title=""
        width={global.window?.innerWidth > 2500 ? 600 : 350}
        closable={true}
        onClose={onClose}
        visible={visible}
        placement="left"
      >
        <div>

          <Row className={styles.Row}>
  
            <Avatar
              className={styles.Avatar}
              src={"/assets/images/Ragini.png"}
            />
          </Row>
          <Row className={styles.DetailRow}>
            <div>
              <Row>
                <Text className={styles.Name}>ragini das</Text>
              </Row>
              <Row>
                <Link href="/profile/id" passHref>
                  <a onClick={onClose} className={styles.Link}>
                    view my profile
                  </a>
                </Link>
              </Row>
            </div>
          </Row>
          <Row className={styles.Row}>
            <div>
              <Row className={styles.SubRow}>
                <Text className={styles.Text}>how to use leap.club</Text>
              </Row>
              <Row className={styles.SubRow}>
                <Text className={styles.Text}>share feedback</Text>
              </Row>
              <Row className={styles.SubRow}>
                <Text className={styles.Text}>member stories</Text>
              </Row>
              <Row className={styles.SubRow}>
                <Text className={styles.Text}>change password</Text>
              </Row>
            </div>
          </Row>
          <Row className={styles.Row}>
            <button className={styles.Logout}>
              {" "}
              <LogoutIcon className={styles.LogoutIcon} />
              <div className={styles.LogoutText}>logout</div>
            </button>
          </Row>
        </div>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;
