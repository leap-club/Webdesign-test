/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Typography , Col, Row  } from 'antd'
import 'antd/dist/antd.css';
import ChangePass from '../components/changepassword';
import styles from '../styles/ChangePass.module.css'

const { Title } = Typography;

const ChangePassPage = () => {

    console.log("logg");
   return (
    

    <Row  className={styles.mainSectionWrapper}>
        <Col xs={0} sm={0} md={5} lg={6} xl={7} xxl={7} ></Col>
        <Col  xs={24} sm ={24} md={14} lg={12} xl={10} xxl={10} className={styles.collog}>
            <img className={styles.imageWrapper}
							src='../assets/images/image3.png'
							alt='leap club logo'
						></img>
                         {/* <Image src='/image3.png' alt='' layout='fill' /> */}
                         <ChangePass />
        </Col>
        <Col xs={0} sm={0} md={5} lg={6} xl={7} xxl={7} > </Col>
    </Row>
   
   )
}

export default ChangePassPage