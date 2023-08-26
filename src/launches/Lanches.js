import React, { useEffect, useState } from 'react';
import Header from '../Home/Header';
import axios from 'axios';



import {  EditOutlined, SettingOutlined,RightCircleOutlined } from '@ant-design/icons';

import { Modal, Card, Divider, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

function Launches(){
    const navigate = useNavigate()

    const [limit,setLimit] = useState(1)
    const [offset,setOffset] = useState(2)
    const [launches,setLaunches] = useState([])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [launchesDetail, setLaunchesDetail] = useState(false);



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
        axios.get(`https://api.spacexdata.com/v3/launches`).then(res=> {
            console.log(res.data)
            setLaunches(res.data)
        })
    },[])

    const handleChange = (launch) => {
        console.log(launch);
        setLaunchesDetail(launch)
        setIsModalOpen(true);
    }

    return(
        <div>
        
       <Header />

          <div className='container mt-3'>
            <div className='row'>
            <h1 className='text-center mb-4'>Launches</h1>
            {
                launches.map((launch,index)=>{
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
                                    src={launch.links.mission_patch}
                                />
                                }
                                actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <Button type="secondary" size="small" onClick={()=> handleChange(launch)} className='d-flex align-items-center'>Details</Button>
                                ]}
                            >
                                <Meta
                                title={launch.mission_name}
                                description={launch.details}
                                />
                            </Card>
                        </div>
                    </>
                )
            })
        }
        
        <Modal title="Launches Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} >
        <div className='row'>
            <div className='col-md-12'>       
            <p>Flight Number : {launchesDetail.flight_number}</p>
            <hr />

            <p>Site Name : {launchesDetail.launch_site?.site_name}</p>
            <hr />

            <p>Launch Year : {launchesDetail.launch_year}</p>
            <hr />
            <p>Site Name Long : {launchesDetail.launch_site?.site_name_long}</p>
            <hr />

            <p>Launch Window : {launchesDetail.launch_window}</p>
            <hr />
            </div>
        </div>
        </Modal>
               
            </div>
        </div>
        </div>
    )
}
export default Launches;