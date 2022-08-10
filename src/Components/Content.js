import React from 'react'
import 'antd/dist/antd.css';
import { Button, Form, Input, Card } from 'antd';
import { RightOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import {useNavigate} from 'react-router-dom'




function Content() {
    const navigate = useNavigate();
    const navigatePage = () => {
        navigate('/page');
      };
  return (
    <div>
        {/* <div style={{
      backgroundImage: `url(./bus-bg-1.png)`,
      maxWidth: '100%',  
height: 'auto',  
     height:'1030px',
      width:'1830px',
    // backgroundImage: `url(./background.png)`,
    // height:'80vh',
      backgroundRepeat: "no-repeat",opacity:0.8
    }}><br/><br/> */}

    <div style={{height:'100px',width:'100px'}}> <img style={{maxWidth:'1440%',maxHeight:'1500%'}} src="./bus-bg-1.png"/></div>
        <h1 style={{marginRight:'700px',color:'white'}}>Pushpak Prepaid Card System</h1><br/>
        <h3 style={{marginRight:'700px',color:'white'}}>The Ultimate Luxury Service Connectivity in</h3>
        <h3 style={{marginRight:'870px',color:'white'}}>Hyderabad City to RGI Airport</h3><br/>

<div style={{marginLeft:'100px',position:'absolute',borderRadius:'25px',padding:'10px',backgroundColor: 'black'}} >
    <h6 style={{color: 'white'}}>Pollution and Noise Free</h6>
  </div><br/><br/><br/>

  <div style={{marginLeft:'100px',position:'absolute',backgroundColor: 'black',borderRadius:'25px',padding:'10px'}} >
    <h6 style={{color: 'white'}} content>Spatious and highly Comfortable Seats</h6>
   </div><br/><br/><br/>

  <div style={{marginLeft:'100px',position:'absolute',backgroundColor: 'black',borderRadius:'25px',padding:'10px'}}>
  <h6 style={{color: 'white'}}>Well Equipped Air Conditioning</h6>
   </div><br/><br/><br/>

  <div style={{marginLeft:'100px',position:'absolute',backgroundColor: 'rgba(44, 44, 44, 0.9)',borderRadius:'25px',padding:'10px',display:'block'}}>
    {/* <img style={{height:'10px'}}src='./tick.jpeg' /> */}
  <h6 style={{color: 'white'}}>Cell Phone Charging facilities to all the seats</h6>
   </div>





{/* 
  
          <div  style={{position:'relative',float:'right',height:'1000px',width:'1000px'}}>


          <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="./logo.png" />}
  >
        <Button icon={<UserOutlined />}>Administor Login</Button>
        <Button icon={<UserOutlined />}>Customer Login</Button>
        
  
  </Card>
  </div> */}
  {/* <div style={{marginLeft:'1000px'}}><Card
    style={{
      width: 300,
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>


    </div> */}
    <div style={{marginTop:'-450px',marginLeft:'700px'}}><img src='./bg-5.png'/>
    <div style={{marginLeft:'20px',marginTop:'-550px'}}><img src='./logo.png' style={{height:'100px',width:'350px'}}/></div><br/>
    <div><Card className="card" style={{width: '350px',height:'100px',marginLeft:'200px',borderRadius:'20px'}} onClick={navigatePage}>
        <div className='row'>
        <div className='col'><img src='./bg-6.png'/><div style={{marginRight:'1px',marginTop:"-40px"}}><PersonIcon/></div></div>
        <div className='col' style={{fontSize:'15px'}}><p style={{fontSize:'15px'}}><b>Administrator Login</b></p></div>
        <div className='col' style={{marginTop:'20px'}}><RightOutlined/></div>
        
        
        </div>
  </Card><br/>
  <Card className="card"style={{width: '350px',height:'100px',marginLeft:'200px',borderRadius:'20px'}} onClick={navigatePage}>
        <div className='row'>
        <div className='col'><img src='./bg-6.png'/><div style={{marginRight:'1px',marginTop:"-40px"}}><GroupsIcon/></div></div>
        <div className='col' style={{fontSize:'15px'}}><b>Customer Login</b></div>
        <div className='col' style={{marginTop:'20px',marginLeft:'10px'}}><RightOutlined/></div>
        
        </div>
  </Card><br/>
  <br/><br/>
  <div>Powered by <img src='./zaggle.png' style={{height:'40px'}}/></div>
  
  
  </div>
    </div>


    </div>
  )
}

export default Content