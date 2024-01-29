import { Link } from '@mui/material';
import React from 'react'
import '../App.css';

const TwoSectionsPage1 = () => {
  return (
    <>
    <div className='my-12' style={{ display: 'flex' }}>

      <div className='my-16' style={{ flex: 1, paddingLeft: '40px', marginRight: '10px' }}>
        <img src='https://neevay.com/assets/business/web-homepage-neevay-logo.svg' 
        alt='' 
        height="100px" 
        width="100px"
        style={{marginBottom:"50px"}}
        />
      <h6>Office Address</h6>
      <p>10, Orville Business Port<br/>
      Viman nagar, Pune<br/>
      Maharashtra - 411014</p>
      </div>

      <div className='mt-4' style={{ flex: 4, padding: '20px'}}>
        <div style={{display: 'flex', flexDirection: 'row'}} >
            <div style={{ flex: 1, padding: '20px'}}>
                <h6 style={{fontWeight:'550'}}>General Enquiry</h6>
                <br/>
                <p>enquiry@neevay.com</p>
            </div>
            <div style={{ flex: 1, padding: '20px'}}>
                <h6 style={{fontWeight:'550'}}>Looking for Demo</h6>
                <br/>
                <p>demo@neevay.com</p>
                <p>+919503339814</p>
            </div>
            <div style={{ flex: 1, padding: '20px'}}>
                <h6 style={{fontWeight:'550'}}>Support</h6>
                <br/>
                <p>support@neevay.com</p>
                <p>+918604860478</p>
            </div>
            <div style={{ flex: 1, padding: '20px'}}>
                <div className='mb-2'><h6 style={{fontWeight:'550'}}>Follow Us</h6></div>
                <br/>
                <div style={{ display: 'flex', flexDirection: 'row'}}> 
                    <div style={{ flex: 1}}>
                        <Link id="fb" to="/" >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt=""
                                width="20px" 
                                 />
                        </Link>
                    </div>
                    <div style={{ flex: 1}}>
                        <Link id="ig" to="/" >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt=""
                            width="20px" 
                             />
                        </Link>
                    </div>
                    <div style={{ flex: 1}}>
                        <Link id="x" to="/" >
                            <img src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png" alt=""
                                width="20px" 
                                 />
                        </Link>
                    </div>
                    <div style={{ flex: 1}}>
                        <Link id="yt" to="/" >
                            <img src="https://i.pinimg.com/736x/3a/36/20/3a36206f35352b4230d5fc9f17fcea92.jpg" alt=""
                                width="20px" 
                                 />
                        </Link>
                    </div>
                    <div style={{ flex: 1}}>
                        <Link id="ln" to="/" >
                            <img src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg" alt=""
                                width="20px" 
                                 />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h6 className='ml-3 my-3 ' style={{fontWeight:"550"}}>Quick Links</h6>
            <div className='ml-3' style={{display: 'flex', flexDirection: 'row'}} >
                <div style={{ flex: 1}}>
                    <Link id="ql" to="/">HOME</Link>
                </div>
                <div style={{ flex: 1}}>
                    <Link id="ql" to="/">ABOUT US</Link>
                </div>
                <div style={{ flex: 1}}>
                    <Link id="ql" to="/">TERMS OF USE</Link>
                </div>
                <div style={{ flex: 1}}>
                    <Link id="ql" to="/">PRIVACY POLICY</Link>
                </div>
                <div style={{ flex: 6}}>
                    
                </div>
            </div>
        </div>
      </div>
    </div>

    <div className='mb-4' style={{ textAlign: 'center' }}>
        <h6>Copyright @ 2023. All rights reserved by Tathaatvam Technologies Solutions Pvt. Ltd.</h6>
    </div>

    </>
  );
};

export default TwoSectionsPage1;