import React from 'react'

import style from './articleItem.module.scss'

type defaultProps = {
  title: string
  content: string
  imgList: string[]
  author: string
  time: string
  [propName:string]: any
}

const ArticleItem: React.FC<defaultProps> = (props) => {
  return (
    <>
      <div className={style['article-item']}>
        <div className={style['item-title']}>{props.title}</div>
        <div className={style['item-content']}>{props.content}</div>
        
        <div className={style['item-img-box']}>
          {
            props.imgList.map((imgItem, index) => {
              return <div key={index} style={{backgroundImage: imgItem}} className={style['item-img']}></div>
            })
          }
        </div>
        <div className={style['article-info']}>
          <div className={style['article-author']}>{props.author}</div>
          <div className={style['article-time']}>{props.time}</div>
        </div>
      </div>
    </>
  )
}

export default ArticleItem