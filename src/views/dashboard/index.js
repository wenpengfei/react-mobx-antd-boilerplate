import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router'
import { Statistic, Card, Row, Col, Button } from 'antd'

@withRouter
@observer
class Dashboard extends React.Component {
  render() {
    return <Row gutter={32}>
      <Col span={6}>
        <Card>
          <Statistic title="用户数" value={112893} valueStyle={{ color: '#3f8600' }} />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title="交易额" value={112893} precision={2} />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title="用户数" value={112893} valueStyle={{ color: '#3f8600' }} />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title="交易额" value={112893} precision={2} />
        </Card>
      </Col>
    </Row>
  }
}

export default Dashboard
