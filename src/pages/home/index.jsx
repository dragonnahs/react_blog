import React, { Component } from 'react';

import { Card, Statistic, Row, Col } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'

import style from './index.module.scss'

import Breadcrumb from '../../components/breadcrumb'

import * as echarts from 'echarts/lib/echarts';
// 引入折线图。
import 'echarts/lib/chart/bar';

class Home extends Component {
  
  handleRowItem(e,target){
    console.log(target)
  }
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('echarts'));
    console.log(myChart)
    myChart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    })
  }
  render() {
    
    return (
      <>
        <Breadcrumb/>
        <div className={style.home}>
          <div className={style.header}>
          <Row gutter={16}>
            <Col span={8}>
              <Card>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
          </div>





          <div className={style['home-content']}>
            <div className={style.echarts} id='echarts'></div>
          </div>
        </div>
      </>
    );
  }
}

export default Home