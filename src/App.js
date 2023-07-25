import logo from './logo.svg';
import './App.css';
import HeaderComp from './Components/HeaderWithClassComp.js'
import FunctionalComp from './Components/FunctionalComp';
import ReactStateComp from './Components/5.ReactStateClass';
import Props from './Components/Props';
import EventBindingInClassComp from './Components/8.EventBindingInClassComp.jsx'
import ConditionalRendering from './Components/8.ConditionalRendering';
import ParentComp from './Components/9.ParentComp';
import ParentComp_ChildToParentData from './Components/9.ParentComp_ChildToParentData';
import StyleReactComp from './Components/StyleReactComp';
import FormBasics from './Components/10.FormBasics';
import FormAdvance from './Components/11.FormAdvance';
import FormAssign from './Components/12.FormAssign';
import FormValidation from './Components/12.FormValidation';
import VirtualDom from './Components/13.VirtualDom';
import LifeCycle from './Components/14.LifeCycle';
import PureComp from './Components/14.PureComp';
import Ref from './Components/14.Ref';
import PropDrilling from './Components/15.PropDrilling';

function App() {
  const data = 'Welcome to codmind'
  return (
    <div className="App">
        <h2 className="heading">Welcome to React</h2>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <HeaderComp/> */}
      {/* <FunctionalComp/> */}
      {/* <ReactStateComp/>
      <Props/> */}
      {/* <EventBindingInClassComp/> */}
      {/* <ConditionalRendering/> */}
      {/* <ParentComp data={data}/> */}
      {/* <ParentComp_ChildToParentData/> */}
      {/* <StyleReactComp/> */}
      {/* <FormBasics/> */}
      {/* <FormAdvance/> */}
      {/* <FormAssign/> */}
      {/* <FormValidation/> */}
      {/* <VirtualDom/> */}
      {/* <14.LifeCycle msg={"Welcome to React LifeCycle"}/> */}
      {/* <PureComp/> */}
      {/* <Ref/> */}
      <PropDrilling/>
    </div>
  );
}

export default App;
