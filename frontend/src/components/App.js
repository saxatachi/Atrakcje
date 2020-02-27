import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../css/App.min.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Option from './Option'
class App extends Component {
    render() {
        return(
            
        <div className="app">
            <div className="header">
                <Header />
            </div>
            <div className="option">
                <Option />
            </div>
            <div className="body">
                <Body />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
        
        )
    }
}
ReactDOM.render(<App />,document.getElementById('app'));