import React, { Component } from 'react';
import {Skeleton} from 'antd'
import {connect} from 'react-redux'

import style from './index.module.scss'
import ArticleItem from './components/articleItem.tsx'
import {setArticles} from '../../store/siderInfo/action'

type MState = {
  articles: object[],
  loading: boolean,
}
type MProps = {
  setArticles: Function
  [propName: string]: any
}

class Home extends Component<MProps, MState> {
  state: MState ={
    articles: [],
    loading: true,
  }
  componentDidMount(){
    console.log(this.props);
    this.setState({
      articles: [
        {
          title: '在这喧闹的城市，车水马龙，人来人往',
          content: '在这喧闹的城市，车水马龙，人来人往。却没有属于自己的一点空间，哪怕是一条狭小的缝隙。看着窗外的阳光升起又落下，感觉自己的青春正在无法挽回的流逝。曾经的梦想，曾经的快乐，都埋葬在这灰暗的城市中。不想让[...]',
          imgList: [
            'http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/aerial-photo-of-sea-1858161-500x625.jpg',
            'http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/aerial-photo-of-sea-1858161-500x625.jpg',
            'http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/aerial-photo-of-sea-1858161-500x625.jpg'
          ],
          author: '天马星空',
          time: '2020-01-20'
        },
        {
          title: '在这喧闹的城市，车水马龙，人来人往',
          content: '在这喧闹的城市，车水马龙，人来人往。却没有属于自己的一点空间，哪怕是一条狭小的缝隙。看着窗外的阳光升起又落下，感觉自己的青春正在无法挽回的流逝。曾经的梦想，曾经的快乐，都埋葬在这灰暗的城市中。不想让[...]',
          imgList: [
            'http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/aerial-photo-of-sea-1858161-500x625.jpg',
            'http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/aerial-photo-of-sea-1858161-500x625.jpg',
            'http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/aerial-photo-of-sea-1858161-500x625.jpg'
          ],
          author: '天马星空',
          time: '2020-01-20'
        },
        {
          title: '在这喧闹的城市，车水马龙，人来人往',
          content: '在这喧闹的城市，车水马龙，人来人往。却没有属于自己的一点空间，哪怕是一条狭小的缝隙。看着窗外的阳光升起又落下，感觉自己的青春正在无法挽回的流逝。曾经的梦想，曾经的快乐，都埋葬在这灰暗的城市中。不想让[...]',
          imgList: [
            'http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/aerial-photo-of-sea-1858161-500x625.jpg',
            'http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/aerial-photo-of-sea-1858161-500x625.jpg',
            'http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/aerial-photo-of-sea-1858161-500x625.jpg'
          ],
          author: '天马星空',
          time: '2020-01-20'
        },
      ],
    })
    setTimeout(() => {
      this.setState({
        loading: false,
      })
      this.props.setArticles([
        {title: '剪影流殇，光影华年'},
        {title: '剪影流殇，光影华年'},
        {title: '剪影流殇，光影华年'},
      ])
    }, 2000)
  }
  render() {
    return (
      <div className={style.home}>
        <div className={style.title}>最新文章</div>
        <div className={style['home-box']}>
        <Skeleton active paragraph={{ rows: 5 }} loading={this.state.loading}>
          {
            this.state.articles.map((item,index) => {
              return (
                <ArticleItem key={index} {...item} />
              )
            })
          }
        </Skeleton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state:any) => {
  return {
    ...state.siderInfo
  }
}

export default connect(mapStateToProps, {
  setArticles
})(Home)