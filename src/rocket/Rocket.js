import React, { useEffect, useState } from 'react';
import Header from '../Home/Header';
import axios from 'axios';



import {  EditOutlined, SettingOutlined,RightCircleOutlined } from '@ant-design/icons';

import { Modal, Card, Divider, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

function Rocket(){
    const navigate = useNavigate()

    const [limit,setLimit] = useState(1)
    const [offset,setOffset] = useState(2)
    const [rockets,setRocket] = useState([])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rocketDetail, setRocketDetail] = useState(false);



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
        axios.get(`https://api.spacexdata.com/v3/rockets`).then(res=> {
            console.log(res.data)
            setRocket(res.data)
        })
    },[])

    const handleChange = (rocket) => {
        console.log(rocket);
        setRocketDetail(rocket)
        setIsModalOpen(true);
    }

    return(
        <div>
        
       <Header />

          <div className='container mt-3'>
            <div className='row'>
            <h1 className='text-center mb-4'>Rokets</h1>
            {
            rockets.map((rocket,index)=>{
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
                                    src={rocket.flickr_images[0]}
                                />
                                }
                                actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <Button type="secondary" size="small" onClick={()=> handleChange(rocket)} className='d-flex align-items-center'>Details</Button>
                                ]}
                            >
                                <Meta
                                title={rocket.rocket_name}
                                description={rocket.description}
                                />
                            </Card>
                        </div>
                    </>
                )
            })
        }
        
        <Modal title="Rocket Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} >
        <div className='row'>
            <div className='col-md-12'>       
            <p>Country : {rocketDetail.country}</p>
            <hr />
            <p>Engine Layout : {rocketDetail.engines?.layout}</p>
            <hr />
            <p>Engine Propellant : {rocketDetail.engines?.propellant_1}</p>
            <hr />
            <p>Engine Type : {rocketDetail.engines?.type}</p>
            <hr />
            <p>Engine Version : {rocketDetail.engines?.version}</p>
            <hr />
            <p>Stages : {rocketDetail.stages}</p>
            <hr />
            <p>Fisrt Flight : {rocketDetail.first_flight}</p>
            <hr />
            <p>Cost Per Launch : {rocketDetail.cost_per_launch}</p>
            </div>
        </div>
        </Modal>
               
            </div>
        </div>
        </div>
    )
}
export default Rocket;