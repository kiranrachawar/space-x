import React from 'react';
import Space1 from '../Images/space1.svg';

function Landing(){
    return(
        <div className='container'>
             <div className='row d-flex align-items-center'>
                <div className='col-6 '>
                    <h1>Welcome to SpaceX</h1>
                    <h4>Launch into the future with SpaceX rockets</h4>
                    <button className='btn btn-dark'>Experience the Future</button>
                </div>
                <div className='col-6 text-center'>
                        <div>
                            <img  src={Space1} height={400} className='mt-5' />
                        </div>
                </div>
            </div>
        </div>
       
    )
}
export default Landing;