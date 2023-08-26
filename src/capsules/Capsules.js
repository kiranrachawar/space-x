import React, { useEffect, useState } from 'react';
import Header from '../Home/Header';
import axios from 'axios';



import {  EditOutlined, SettingOutlined,RightCircleOutlined } from '@ant-design/icons';

import { Modal, Card, Divider, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

function Capsules(){
    const navigate = useNavigate()

    const [limit,setLimit] = useState(1)
    const [offset,setOffset] = useState(2)
    const [capsules,setCapsules] = useState([])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [capsulesDetail, setCapsulesDetail] = useState(false);



  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

    useEffect(()=> {
        axios.get(`https://api.spacexdata.com/v3/ships`).then(res=> {
            console.log(res.data)
            setCapsules(res.data)
        })
    },[])

    const handleChange = (capsules) => {
        console.log(capsules);
        setCapsulesDetail(capsules)
        setIsModalOpen(true);
    }

    return(
        <div>
        
       <Header />

          <div className='container mt-3'>
            <div className='row'>
            <h1 className='text-center mb-4'>Ships</h1>
            {
                capsules.map((capsule,index)=>{
                return(
                    <>
                       <div className='col-3 d-flex justify-content-center mb-5'>
                            <Card
                                style={{
                                width: 300,
                                }}
                                cover={
                                <img
                                    alt="example"
                                    src={capsule.image}
                                />
                                }
                                actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <Button type="secondary" size="small" onClick={()=> handleChange(capsule)} className='d-flex align-items-center'>Details</Button>
                                ]}
                            >
                                <Meta
                                title={capsule.ship_id}
                                description={capsule.home_port}
                                />
                            </Card>
                        </div>
                    </>
                )
            })
        }
        
        <Modal title="Ships Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} >
        <div className='row'>
            <div className='col-md-12'>       
            {/* <p>Ship ABS : {capsulesDetail.abs}</p>
            <hr />

            <p>Site Name : {capsulesDetail.launch_site?.site_name}</p>
            <hr />

            <p>Launch Year : {capsulesDetail.launch_year}</p>
            <hr />
            <p>Site Name Long : {capsulesDetail.launch_site?.site_name_long}</p>
            <hr />

            <p>Launch Window : {capsulesDetail.launch_window}</p>
            <hr /> */}
            </div>
        </div>
        </Modal>
               
            </div>
        </div>
        </div>
    )
}
export default Capsules;