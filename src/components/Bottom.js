
import { Link } from '@mui/material';
import React from 'react';
import '../App.css';

const ContactInfo = ({ title, content }) => (
  <div style={{ flex: 1, padding: '20px' }}>
    <h6 style={{ fontWeight: '550' }}>{title}</h6>
    <p>{content}</p>
  </div>
);

const SocialLink = ({ id, src }) => (
  <div style={{ flex: 1 }}>
    <Link id={id} to="/">
      <img src={src} alt="" width="20px"  />
    </Link>
  </div>
);

const QuickLink = ({ id, label }) => (
  <div style={{ flex: 1 }}>
    <Link id={id} to="/">
      {label}
    </Link>
  </div>
);

const TwoSectionsPage = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, paddingLeft: '40px', marginRight: '10px' }}>
          <img
            src="https://neevay.com/assets/business/web-homepage-neevay-logo.svg"
            alt=""
            height="100px"
            width="100px"
            style={{ marginBottom: '50px' }}
          />
          <h6>Office Address</h6>
          <p>
            10, Orville Business Port
            <br />
            Viman Nagar, Pune
            <br />
            Maharashtra - 411014
          </p>
        </div>

        <div style={{ flex: 4, padding: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ContactInfo title="General Enquiry" content="enquiry@neevay.com" />
            <ContactInfo title="Looking for Demo" content="demo@neevay.com +919503339814" />
            <ContactInfo title="Support" content="support@neevay.com +918604860478" />
            <ContactInfo title="Follow Us">
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <SocialLink id="fb" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" />
                <SocialLink id="ig" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" />
                <SocialLink id="x" src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png" />
                <SocialLink id="yt" src="https://i.pinimg.com/736x/3a/36/20/3a36206f35352b4230d5fc9f17fcea92.jpg" />
                <SocialLink id="ln" src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg" />
              </div>
            </ContactInfo>
          </div>
          <div>
            <h6 style={{ fontWeight: '550' }}>Quick Links</h6>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <QuickLink id="ql" label="HOME" />
              <QuickLink id="ql" label="ABOUT US" />
              <QuickLink id="ql" label="TERMS OF USE" />
              <QuickLink id="ql" label="PRIVACY POLICY" />
              <div style={{ flex: 6 }}></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h6>Copyright @ 2023. All rights reserved by Tathaatvam Technologies Solutions Pvt. Ltd.</h6>
      </div>
    </>
  );
};

export default TwoSectionsPage;

