import React from 'react';
import logo from '../Images/SpaceX.jpg';
import Rocket2 from '../Images/rocket2.jpeg';
import Rocket3 from '../Images/rocket3.jpg';
import Capsule from '../Images/capsule.jpeg';
import { RightCircleOutlined } from '@ant-design/icons';

import { Card, Divider, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

function Categories(){
    const navigate = useNavigate()
    
    return(
        <div className='container mt-5'>
            <h1 className='text-center mb-5'>Explore the Future</h1>
            <div className='row'>
                <div className='col-4 d-flex justify-content-center'>
                    <Card
                        hoverable
                        style={{
                        width: 270,
                        }}
                        cover={<img alt="example" src={Rocket3} height={300} />}
                    >
                        <Meta title="Rocket" description="Rocket Expore the cutting-edge fleet of SpaceX rockets." />
                        <Divider></Divider>
                        <Button type="primary" className='d-flex align-items-center' onClick={()=> navigate('rockets')}>Click Me <RightCircleOutlined /></Button>
                    </Card>
                </div>
                <div className='col-4 d-flex justify-content-center'>
                    <Card
                        hoverable
                        style={{
                        width: 270,
                        }}
                        cover={<img alt="example" src={Rocket2} height={300} />}
                    >
                        <Meta title="Launches" description="Dive intomthe innovative spacec developed by SpaceXraft capsules " />
                        <Divider></Divider>
                        <Button type="primary" className='d-flex align-items-center' onClick={()=> navigate('launches')}>Click Me <RightCircleOutlined /></Button>
                    </Card>
                </div>
                <div className='col-4 d-flex justify-content-center'>
                    <Card
                        hoverable
                        style={{
                        width: 270,
                        }}
                        cover={<img alt="example" src={Capsule} height={300} />}
                    >
                        <Meta title="Capsule" description="Witness the thrilling history of SpaceX's historic laucnhes" />
                        <Divider></Divider>
                        <Button type="primary" className='d-flex align-items-center' onClick={()=> navigate('capsules')}>Click Me <RightCircleOutlined/></Button>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default Categories;