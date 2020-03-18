import {GET_GEOJSON,GEOJSON_LOADING,GEOJSON_LOADED,GET_KINA,GET_MUZEA,GET_CMENTARZE,CHECK_GET} from '../actions/types.js'
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
    name: ''
}

export default function(state = initialState,action){
    switch(action.type){
        case GEOJSON_LOADING:
            return{
                ...state,
                isLoading:true,
            }
        case GET_GEOJSON:
            return{
                ...state,
                kina: action.payload1,
                muzea: action.payload2,
                cmentarze: action.payload3,
                festiwale: action.payload4,
                kluby: action.payload5,
                pomniki: action.payload6,
                silownie: action.payload7,
                teatry: action.payload8,
                isLoading: false,
                isLoaded: true,
                
            }
            // case GEOJSON_LOADED:
            //     return{
            //         ...state,
            //         isLoaded: true,
            //         isLoading: false,
            //     }   

        default: 
            return state;    

    }
}