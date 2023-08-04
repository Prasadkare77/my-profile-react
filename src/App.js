import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

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
import ContextInClass from './Components/16.ContextInClass';
import NavbarMenu from './Components/17.Roting In React - Profile/Index';
//import Index from './Components/17.Roting In React - Profile/Index';
import APIIntegration from './Components/18.APIIntegration';
import Index from './Components/18.CodmindDesign/Index';
import HooksIntro from './Components/19.HooksIntro';
import UseStateComp from './Components/19.UseStateComp';
import UseEffectHook from './Components/19.UseEffectHook';
import UseRefHooks from './Components/20.UseRefHook';
import UseContextHook from './Components/20.UseContextHook';
import MemoCompParent from './Components/21.MemoCompParent';
import UseMemoHook from './Components/21.UseMemoHook';
import UseReducerHook from './Components/21.UseReducerHook';
import MemoComp from './Components/21.MemoComp';




function App() {
  const data = 'Welcome to codmind'
  return (
    <div className="App">
      {/* <h2 className="heading">Welcome to React</h2> */}
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
      {/* <PropDrilling/> */}
      {/* <ContextInClass/> */}
      {/* <Index /> */}
      {/* <APIIntegration/> */}
      {/* <Index/> */}
      {/* <HooksIntro/> */}
      {/* <UseStateComp/> */}
      {/* <UseEffectHook/> */}
      {/* <UseRefHooks/>
      {/* <UseContextHook/> */}
      <MemoCompParent/>
      {/* <UseMemoHook/> */}
      {/* <UseReducerHook/> */}
    </div>
  );
}

export default App;
