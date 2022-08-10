import React from 'react'

import 'antd/dist/antd.css';
import { Button, Form, Input, Card } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {
    Select,
  } from 'antd';
  const { Option } = Select;
function AdminCard() {
    const navigate = useNavigate();
    const onFinish = (values) => {
        navigate('/Page', { state: { values } });
    
      };
      const handleSubmit = event => {

        event.preventDefault();
    
    
    
      };
      const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="91">+91</Option>
            <Option value="92">+92</Option>
            <Option value="99">+99</Option>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
      );
  return (
    <>

    <div style={{
      backgroundImage: "./logo.png",
      height: "450px",
      backgroundRepeat: "no-repeat"
    }}>
      <br></br>
      <div className="site-card-border-less-wrapper">
        <Card
          // title="Search for bus tickets!"
          bordered={true}
          style={{
            height: "23rem",
            width: "30rem",
            marginLeft: "30%",
            top: "1rem",
            paddingBottom: "20rem",

          }}
        >
          <h3 className="title">Search for bus tickets!</h3>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <Form.Item
                name="amount"
                rules={[
                  {
                    required: true,
                    message: 'Enter the amount',
                  },
                ]}
              >

                <Input style={{ width: '60%' }}
                  // prefix={<EnvironmentOutlined />}
                  type="number"
                  placeholder="Enter the amount" />
              </Form.Item>
            </div>

            <div className="form-group">
              <Form.Item
                name="order id"
                rules={[
                  {
                    required: true,
                    message: 'Please input your order id!',
                  },
                ]}
              >
                <Input
                  style={{ width: '60%', bottom: '10px' }}
                  // prefix={<EnvironmentOutlined />}
                  type="text"
                  placeholder="Enter Order Id"
                />

              </Form.Item>
              {/* {bal} */}
            </div>


            <div className="form-group">
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input
                  style={{ width: '60%', marginTop: '-30px' }}
                  addonBefore={prefixSelector}
                  prefix={<PhoneOutlined />}


                />
              </Form.Item>


            </div>

            <div className="form-group">
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email',
                  },
                ]}
              >
                <Input
                  style={{ width: '60%', bottom: '35px' }}
                  // prefix={<EnvironmentOutlined />}
                  type="email"
                  placeholder="Enter Email Id"
                />

              </Form.Item>

            </div>

            <Form.Item shouldUpdate>{() => (
              <Button htmlType="submit" className="login-form-button" style={{ paddingBottom: "7%", backgroundColor: "#19bc9c", color: "white", height: "30px", width: "130px", fontSize: "120%", bottom: '40px' }}
              >
                Submit
              </Button>
            )}

            </Form.Item>
          </Form>
        </Card>
      </div>

    </div>
  </>
  )
}

export default AdminCard