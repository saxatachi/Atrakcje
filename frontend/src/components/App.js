import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MainApp from './MainApp'
import {Provider } from 'react-redux';
import store from '../store';
import {connect} from 'react-redux';
import {getGeojson} from '../actions/geojson'
import PropTypes from 'prop-types';
class App extends Component {
    static propTypes={
        isLoaded: PropTypes.bool,
        isLoading: PropTypes.bool,
        
    }
    render() {
        return(
        <Provider store={store}>
            <MainApp/>
        </Provider>
        
        )
    }
}

ReactDOM.render(<App />,document.getElementById('app'));
