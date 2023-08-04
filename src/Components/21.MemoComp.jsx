import React, { Component,memo } from 'react'

class MemoComp extends Component {
  render() {
    console.log(`Render From Memo`);
    return (
      <div>
        <h2>I am a Memo Comp</h2>
        {this.props.count}
      </div>
    )
  }
}

export default memo(MemoComp);
