import React, {useState, useEffect} from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Row, Col, Avatar , Spin} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import axios from "axios";
const Layout = () => {
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    const fetchUser = async()=>{
      try {
        setLoading(true)
        const res = await axios.get("https://e5imanlxb3uxksb3eznjacrmmq0hiwbo.lambda-url.us-east-2.on.aws/user")
        setLoading(false)
        console.log(res.data.name)
        setName(res.data.name)
      } catch (error) {
        setLoading(false)
        
      }
      
    }
    fetchUser()
  },[])
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  return (
    <>
      <div className="wrapper">
        <Row>
          <Col span={20}></Col>
          <Col span={4}>
            {" "}
            <Avatar size={64} icon={<UserOutlined />} />
            {loading?<Spin size="large" indicator={antIcon} />:<>  {name}</>}
           
          </Col>
        </Row>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
