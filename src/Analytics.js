import React from 'react'
import { Card, Col, Row , Button, Breadcrumb} from 'antd';
import { Link } from 'react-router-dom';
const Analytics = () => {
  return (
    <div className="container">
        <Breadcrumb>
        <Breadcrumb.Item><Link to="/">Projects</Link></Breadcrumb.Item>
        <Breadcrumb.Item>Workspace</Breadcrumb.Item>
        <Breadcrumb.Item>Analytics
        </Breadcrumb.Item>
       
      </Breadcrumb>
        <h3 className='heading'>Analytics</h3>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Deployment Frequency" bordered={false}>
         <h3>20</h3>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Burn Down" bordered={false}>
        <Button>View Sprints</Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Burn Up" bordered={false}>
          <Button>View Sprints</Button>
        </Card>
      </Col>
    </Row>
    <br/>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Code Velocity" bordered={false}>
         <h3>20</h3>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="User Velocity" bordered={false}>
        <h3>20</h3>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Cycle time" bordered={false}>
        <h3>20</h3>
        </Card>
      </Col>
    </Row>
    <br/>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Aging Charts" bordered={false}>
        <Button>View Chart</Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Critical Path" bordered={false}>
        <h3>20</h3>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Cards" bordered={false}>
        <h3>20</h3>
        </Card>
      </Col>
    </Row>
  </div>
  )
}

export default Analytics