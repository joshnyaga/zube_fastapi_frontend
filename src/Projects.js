import React, { useState, useEffect } from "react";
import axios from "axios" 
import { LoadingOutlined } from '@ant-design/icons';
import { Space,Spin, Breadcrumb, Table,  Row, Col, Button, Modal } from "antd";
import { Link } from "react-router-dom";

const Projects = () => {
  const [isLoading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([])
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true)
     try {
      setLoading(true)
      const res =  await axios.get("https://e5imanlxb3uxksb3eznjacrmmq0hiwbo.lambda-url.us-east-2.on.aws")
      setLoading(false)
      setProjects(res.data)
     } catch (error) {
      setLoading(false)
     }
    }
    fetchData()
  },[])
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Account Id",
      dataIndex: "accountId",
      key: "accountId",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/workspace/${record.id}`}>Go to Workspace </Link>
        </Space>
      ),
    },
  ];

  const data = [];
  return (
   
    <div className="container">
      <Breadcrumb>
        <Breadcrumb.Item>Projects/</Breadcrumb.Item>
       
      </Breadcrumb>
      <h3 className="heading">Projects</h3>
      <Row>
        <Col span={10}></Col>
        <Col span={10}></Col>
        <Col span={4}>
          <Button size="large" type="primary" onClick={showModal}>
            Create Project
          </Button>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          
        </Col>
      </Row>
      {isLoading? <div className="middle"><Spin size="large" indicator={antIcon} /></div>: <div>{projects.map((project)=>{
    return data.push({id: project.id, name: project.name, accountId: project.account_id, description: project.description})
  })} <Table columns={columns} dataSource={data} /></div>}
    </div>
  );
};

export default Projects;
