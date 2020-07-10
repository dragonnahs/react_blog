import React from 'react'
import {connect} from 'react-redux'
import {Skeleton} from 'antd'

import style from './index.module.scss'
interface article{
  title: string
}
type propsType = {
  articles: article[]
}

const Right: React.FC<propsType> = (props) => {
  console.log(props.articles.length);
  return (
    <div className={style['aside-right']}>
      <div className={style['new-articles']}>
        <div className={style['new-articles-title']}>最近文章</div>
        <div className={style['new-articles-box']}>
          <Skeleton active loading={props.articles.length === 0}>
          {
            props.articles.map((item, index) => {
              return <div key={index} className={style['article-item']}>{item.title}</div>
            })
          }
          </Skeleton>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state:any) => {
  return {
    ...state.siderInfo
  }
}

export default connect(
  mapStateToProps
)(Right)
