import React, { Component } from 'react';
import '../css/App.min.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Option from './Option'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getGeojson} from '../actions/geojson'
class MainApp extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
    componentDidMount(){
        this.props.getGeojson()
    }
    render() {
        if(this.props.isLoaded === false){
            console.log("nie ma danych")
        }else{
            console.log(this.props.muzea)
            console.log(this.props.kina)
            console.log(this.props.festiwale)
            console.log(this.props.cmentarze)
            console.log(this.props.pomniki)
            console.log(this.props.silownie)


        }
        
         return (
    <>
        {this.props.isLoaded ?<div className="app">
            <div className="header">
                <Header />
            </div>
            {/* <div className="option">
                <Option />
            </div> */}
            <div className="body">
                <Body />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div> : <h1>Jebać disa</h1>}
    </>    
        );
    }
}
const mapStateToProps = state =>({
    
    isLoading: state.geojson.isLoading,
    isLoaded: state.geojson.isLoaded,
    muzea: state.geojson.muzea,
    kina: state.geojson.kina,
    cmentarze: state.geojson.cmentarze,
    festiwale: state.geojson.festiwale,
    kluby: state.geojson.kluby,
    pomniki: state.geojson.pomniki,
    silownie: state.geojson.silownie,
    teatry: state.geojson.teatry,
})
export default connect(mapStateToProps,{getGeojson})(MainApp);