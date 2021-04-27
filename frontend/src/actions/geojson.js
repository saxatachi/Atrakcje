import axios from 'axios'

import { GET_GEOJSON, GEOJSON_LOADING,ADD_FALSE,ADD_TRUE,ADD_LAT_LNG,ROUTING,ROUTING_ON,ROUTING_OFF} from './types';

export const addLatLng = (data) => (dispatch) => {
    dispatch({ 
        type: ADD_LAT_LNG,
        payload: data
    })
}
export const routingon = () => (dispatch) => {
    dispatch({
        type: ROUTING_ON
    })
}
export const routingoff = () => (dispatch) => {
    dispatch({
        type: ROUTING_OFF
    })
}
export const routing = (data) => (dispatch) => {
    dispatch({
        type: ROUTING,
        payload: data
    })
}
export const addSuggestionTrue = () => (dispatch) =>{
    dispatch({ type: ADD_TRUE })
}
export const addSuggestionFalse = () => (dispatch) =>{
    dispatch({ type: ADD_FALSE })
}
//Get Geojson
export const sendPoint = (data) => (dispatch) => {
    axios.post('/send/',data)
}
export const getGeojson = () => (dispatch,getState) =>{
    const muzeaurl= '/geojson/Muzea'
    const kinaurl='/geojson/Kina'
    const cmentarzeurl='/geojson/Cmentarze'
    const festiwaleurl ='/geojson/Festiwale'
    const klubyurl='geojson/Kluby'
    const pomnikiurl='geojson/Pomniki'
    const silownieurl='geojson/Silownie'
    const teatryurl='geojson/Teatry'
    const promise1= axios.get(muzeaurl);
    const promise2= axios.get(kinaurl);
    const promise3= axios.get(cmentarzeurl);
    const promise4= axios.get(festiwaleurl);
    const promise5= axios.get(klubyurl);
    const promise6 = axios.get(pomnikiurl);
    const promise7 = axios.get(silownieurl);
    const promise8 = axios.get(teatryurl);
    dispatch({ type: GEOJSON_LOADING })
    Promise.all([promise1,promise2,promise3,promise4,promise5,promise6,promise7,promise8]).then(res=>{
        dispatch({
            type: GET_GEOJSON,
            payload1: res[0].data,
            payload2: res[1].data,
            payload3: res[2].data,
            payload4: res[3].data,
            payload5: res[4].data,
            payload6: res[5].data,
            payload7: res[6].data,
            payload8: res[7].data,

        })
    })
}
    
    
    

