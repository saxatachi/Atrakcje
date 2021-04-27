import React, { Component } from 'react';
import '../css/App.min.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Option from './Option'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getGeojson} from '../actions/geojson'
import ClipLoader from "react-spinners/ClipLoader";
class MainApp extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getGeojson()
    }
    render() {
        return (
    <>
        {this.props.isLoaded ?<div className="app">
            <div className="body">
                <Body />
            </div>
        </div> : <ClipLoader />}
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