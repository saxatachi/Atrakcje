import {GET_GEOJSON,GEOJSON_LOADING,ADD_TRUE,ADD_FALSE,ADD_LAT_LNG,ROUTING,ROUTING_ON,ROUTING_OFF} from '../actions/types.js'
const initialState={
    something: 'text',
    geojson:[],
    isLoading :false,
    isLoaded: false,
    muzea:[],
    cmentarze:[],
    kina:[],
    festiwale:[],
    kluby:[],
    pomniki:[],
    silownie:[],
    teatry:[],
    name: '',
    add: false,
    latidute: '',
    longitude: '',
    routing: null,
    routingon: false
}

export default function(state = initialState,action){
    switch(action.type){
        case ROUTING:
            return{
                ...state,
                routing: action.payload
            }
        case ROUTING_ON:
            return{
                ...state,
                routingon: true

            }
        case ROUTING_OFF:
            return{
                ...state,
                routingon: false
    
            }
        case ADD_LAT_LNG:
            return{
                ...state,
                latidute: action.payload.latidute,
                longitude: action.payload.longitude
            }
        case ADD_FALSE:
            return{
                ...state,
                add:false
            }
        case ADD_TRUE:
            return{
                ...state,
                add:true
            }
        case GEOJSON_LOADING:
            return{
                ...state,
                isLoading:true,
            }
        case GET_GEOJSON:
            return{
                ...state,
                muzea: action.payload1,
                kina: action.payload2,
                cmentarze: action.payload3,
                festiwale: action.payload4,
                kluby: action.payload5,
                pomniki: action.payload6,
                silownie: action.payload7,
                teatry: action.payload8,
                isLoading: false,
                isLoaded: true,
            }

        default: 
            return state;    

    }
}