import React from 'react'
import { withRouter } from 'react-router-dom'

type propsType = {
  match: object
}

const MButton = React.forwardRef((props, ref:any) => {
  console.log(ref);
  return (
    <div>
      <div>sdfds</div>
      <button ref={ref}>click me</button>
    </div>
  )
})

class Article extends React.Component<any, propsType>{
  state:any = {
    ref:  React.createRef()
  }
  handleClick() {
    console.log(this.refs.test);
    console.log(this.state.ref.current);
  }
  render(){
    return (
      <div ref='test'>
        article page
        <div onClick={this.handleClick.bind(this)}>other click</div>
        <MButton ref={this.state.ref}></MButton>
      </div>
    )
  }
}


export default withRouter(Article)