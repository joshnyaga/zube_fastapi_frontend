import React, { useState, useEffect } from "react";
import axios from "axios" 
import { LoadingOutlined } from '@ant-design/icons';
import { Space,Spin, Breadcrumb, Table} from "antd";
import { Link, useLocation} from "react-router-dom";
const WorkSpace = () => {
  const [isLoading, setLoading] = useState(false)
  const [workspace, setWorkspace] = useState([])
  const id = useLocation().pathname.split("/")[2];


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
      const res =  await axios.get(`http://127.0.0.1:8000/workspace?project_id=${id}`)
      setLoading(false)
      setWorkspace(res.data)
     } catch (error) {
      setLoading(false)
     }
    }
    fetchData()
  },[id])
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
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Created at",
      dataIndex: "created",
      key: "created",
    },
    
  
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/analytics/${record.id}`}>Go to Analytics </Link>
        </Space>
      ),
    },
  ];

  const data = [];
  return (
   
    <div className="container">
      <Breadcrumb>
      <Breadcrumb.Item><Link to="/">Projects</Link></Breadcrumb.Item>
        <Breadcrumb.Item>Workspace/</Breadcrumb.Item>
       
      </Breadcrumb>
      <h3 className="heading">workspace</h3>

      {isLoading? <div className="middle"><Spin size="large" indicator={antIcon} /></div>: <div>{workspace.map((workspace)=>{
    return data.push({id: workspace.id, name: workspace.name, description: workspace.description, created: workspace.created_at})
  })} <Table columns={columns} dataSource={data} /></div>}
    </div>
  );
};

export default WorkSpace;
