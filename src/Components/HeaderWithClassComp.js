import React, { Fragment, Component } from "react"; //import React object form React package

class HeaderComp extends Component {
  render() {
    return (
        
         //<div>
      //     <h1>This is header componet</h1>
      //     <h4> We are learning JSX</h4>
      // </div>

      // <React.Fragment>
      //     <h1>This is header componet</h1>
      //     <h4> We are learning JSX</h4>
      // </React.Fragment>

    //   <Fragment>
    //     <h1>This is header componet</h1>
    //     <h4> We are learning JSX</h4>
    //   </Fragment>

            <>
                <h1>This is header componet</h1>
                <h4> We are learning JSX</h4>
            </>
    );
  }
}

export default HeaderComp;
