import React, { Component } from 'react';
import { Link, withRouter }from 'react-router-dom';
import { Breadcrumb  } from 'antd';

import style from './index.module.scss'

const breadcrumbNameMap = {
  '/cms': 'cms',
  '/cms/home': '首页',
  '/cms/add_ad':'新增广告',
  '/cms/ad_list':'广告列表',
}


class index extends Component {
  constructor(props) {
    super(props);
    this.state={
        pathSnippets: null,
        extraBreadcrumbItems: null,
    }
  }
  getPath() {
    this.state.pathSnippets = this.props.location.pathname.split('/').filter(i => i);
    let tempItems = this.state.pathSnippets.map((_, index) => {
      let url = `/${this.state.pathSnippets.slice(0, index + 1).join('/')}`;
      return (
          <Breadcrumb.Item key={url}>
              <Link to={url}>
                  {breadcrumbNameMap[url]}
              </Link>
          </Breadcrumb.Item>
      );
    });
    this.setState({
      extraBreadcrumbItems: tempItems
    })
  }
  componentWillMount() {
    this.getPath()
  }
  render() {
    console.log(this.props, 333)
      return (
        <div className={style['breadcrumb-box']}>
          <Breadcrumb className={style.breadcrumb} style={{padding: '10px 20px'}}>
          {this.state.extraBreadcrumbItems}
          </Breadcrumb>
        </div>
      )
  }
}

export default withRouter(index)