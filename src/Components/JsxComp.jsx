import React from "react";
const JsxComp =()=>{
    let a=10, b=20;
    // return(
    //     <div>
    //       <h1>Hello,My Name is Reyansh</h1>
    //       <h2>Addition of two number :{a+b} </h2>
    //       <h3>{a>40 ?'A is gretter than 40':"A is less than 40"}</h3>
    //     </div>
    // )

    //without jsx
    return React.createElement('div',null,React.createElement('h1',null,'Hello,My Name is Reyansh'))
}
export default JsxComp