import React, { Component } from 'react';
import '../css/Body.min.css'
import Mapa from './Mapa'
import Road from './Road'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getGeojson} from '../actions/geojson'
class Body extends Component {
    render() {
        return (
        <>    
            <div className="body__elements">
                <div className="body__elements__frame"><Mapa /></div>
            </div>
        </>
        );
    }
}

const mapStateToProps = state =>({
    geojson: state.geojson.geojson,
    isLoading: state.geojson.isLoading,
    isLoaded: state.geojson.isLoaded,
})
export default connect(mapStateToProps,{getGeojson})(Body);