import React, { Component, createContext } from 'react'

const MessageContext = createContext()
class ContextInClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Welcome to Context API in Class Component"
      }
    }
    
    render() {
        return (
            <div>
                <h3>I am Parent Component from Context</h3>
                <MessageContext.Provider value={this.state.message}>
                <Child1/>
                </MessageContext.Provider>
                
            </div>
        )
    }
}

export default ContextInClass

class Child1 extends Component {
    render() {
        return (
            <div>
                <h3>I am Child1</h3>
                <Child2/>
            </div>
        )
    }
}
class Child2 extends Component {
    render() {
        return (
            <div>
                <h3>I am Child2</h3>
                <MessageContext.Consumer>
                    {value=> <h3>{value}</h3>}
                </MessageContext.Consumer>
                <Child3/>
            </div>
        )
    }
}
class Child3 extends Component {
    render() {
        return (
            <div>
                <h3>I am Child3</h3>
                <Child4/>
            </div>
        )
    }
}
class Child4 extends Component {
    render() {
        return (
            <div>
                <h3>I am Child4</h3>
                <MessageContext.Consumer>
                    {value=> <h3>{value}</h3>}
                </MessageContext.Consumer>
                <Child5/>
            </div>
        )
    }
}
class Child5 extends Component {
    render() {
        return (
            <div>
                <h3>I am Child5</h3>
                <MessageContext.Consumer>
                    {value=> <h3>{value}</h3>}
                </MessageContext.Consumer>
            </div>
        )
    }
}
