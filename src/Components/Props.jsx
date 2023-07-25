import React, { Component } from "react";
class Props extends Component {
  render() {
    console.log(this.props);
    //this.props.userName ='John'; //trying to update props value
    const { userName, age, company } = this.props //Destructuring props
    return (
      <>
        user Name:{userName} <br />
        Age:{age} <br />
        Company:{company}
      </>
    );
  }
}

export default Props;
