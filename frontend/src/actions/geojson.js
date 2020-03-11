import axios from 'axios'

import { GET_GEOJSON, GEOJSON_LOADING,GEOJSON_LOADED,GET_KINA,} from './types';

//Get Geojson
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
        // dispatch({
        //     type: GET_MUZEA,
        //     payload: res[1].data,
        // })
        // dispatch({
        //     type: GET_CMENTARZE,
        //     payload: res[2].data,
        // })
        // dispatch({
        //     type: CHECK_GET,
        // })
    })
    // dispatch({
    //     type: GEOJSON_LOADED
    // })
    // axios.get('/geojson/Muzea')
    // .then(res =>{
    //     dispatch({
    //         type: GET_GEOJSON,
    //         payload: res.data,
    //     })
    // })
    // axios.get('/geojson/Kina')
    // .then(res=>({
    //     type: GET_GEOJSON,
    //     payload: res.data,
    // })

}
    
    
    

