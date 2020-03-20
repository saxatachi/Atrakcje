import React, { Component } from 'react';
import '../css/Road.min.css'
import '../css/Body.min.css'
import {connect} from 'react-redux';
import Suggestions from './Suggestion'
class Road extends Component {
    constructor(props){
        super(props)
        this.firstinputRef = React.createRef()
        this.secondinputRef = React.createRef()
        this.thirdinputRef = React.createRef()
        this.fourthinputRef = React.createRef()
    }
    state={
        third: false,
        fourth: false,
        road: true,
        suggestions: false,
        firstcoordinates: [], 
        secondcoordinates: [],
        thirdcoordinates: [],
        fourthcoordinates: [],
    }
    render() {
        const addPoint=(
            <div className="road__options__point">
                <div className="road__options__point__title"><a>Podaj kolejny punkt</a></div>
                <input ref={this.thirdinputRef} placeholder="Kolejny punkt"></input><button onClick={this.handleButton3} className="road__options__point__add">Dodaj</button>
            </div>
        )
        const addPoint4=(
            <div className="road__options__point">
                <div className="road__options__point__title"><a>Podaj kolejny punkt</a></div>
                <input ref={this.fourthinputRef} placeholder="Kolejny punkt"></input><button onClick={this.handleButton4} className="road__options__point__add">Dodaj</button>
            </div>
        )
        const hideaddPoint=(
            <div className="road__options__addpoint" onClick={this.handleRoad}>+ Dodaj kolejne punkty</div>
        )
        let road="road"
        let suggestions="suggestions"
        if(this.state.road ==true){
            road += "-active"
        }else{
            road="road"
        }  
        if(this.state.suggestions== true){
            suggestions += "-active"
        }else{
            suggestions="suggestions"
        }
        
        return (
            <div className="road__suggestions">
            <div className={road} onClick={this.changeRoad}>Wyznaczanie trasy</div>
            
            <div className={suggestions} onClick={this.changeSuggestion}>Propozycje punktów</div>
                {this.state.road ? <div className="road__options">
                    <div className="road__options__point">
                        <div className="road__options__point__title"><a>Podaj punkt początkowy</a></div>
                        <input ref={this.firstinputRef} placeholder="Pierwszy punkt" ></input><button  onClick={this.handleButton} className="road__options__point__add">Dodaj</button><br />
                    </div>
                    <div className="road__options__point">
                    <div className="road__options__point__title"><a>Podaj kolejny punkt</a></div>
                    <input ref={this.secondinputRef} placeholder="Drugi punkt"></input><button onClick={this.handleButton2} className="road__options__point__add">Dodaj</button>
                    </div>
                    {this.state.third ? addPoint : null}
                    {this.state.fourth ? addPoint4 : null}
                    {this.state.fourth ? null : hideaddPoint }
                    <div className="road__options__submit"><button onClick={this.handleSend}>Wyznacz trasę</button></div>
                
            </div>: <Suggestions />}
            </div>
        );
    }
    handleSend=()=>{
        console.log("Wyznacz trasę")
        this.props.callbackcoords(this.state.firstcoordinates,this.state.secondcoordinates,this.state.thirdcoordinates,this.state.fourthcoordinates)
    }
    handleButton=()=>{
        this.firstinputRef.current.value = this.props.name
        this.setState({
            firstcoordinates: this.props.coordinates
        })
    }
    handleButton2=()=>{
        this.secondinputRef.current.value = this.props.name
        this.setState({
            secondcoordinates: this.props.coordinates
        })
    }
    handleButton3=()=>{
        this.thirdinputRef.current.value = this.props.name
        this.setState({
            thirdcoordinates: this.props.coordinates
        })
    }
    handleButton4=()=>{
        this.fourthinputRef.current.value = this.props.name
        this.setState({
            fourthcoordinates: this.props.coordinates
        })
    }
    changeRoad=()=>{
        
        this.setState((state)=>{
            return{
                road: true,
                suggestions: false,
            }
        })
    }
    changeSuggestion=()=>{
        
        this.setState((state)=>{
            return{
                suggestions: true,
                road: false,

            }
        })
    }
    handleRoad=()=>{
        console.log("Dodaj Punkt")
    if(this.state.third == true){    
        this.setState((state)=>{
            return{
                fourth: true
            }})
        }else{
        this.setState((state)=>{
            
            return{
                third: true
            }
        
            
        })
    }}
}
export default Road;