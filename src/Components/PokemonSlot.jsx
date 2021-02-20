import React from "react"
import App from "../App"
import EmptyPokemonSlot from "./EmptyPokemonSlot"
import FilledPokemonSlot from "./FilledPokemonSlot"

class PokemonSlot extends React.Component{
    constructor(){
        super()
        this.state= {
            isEmpty: true
        }
        this.emptyPokemonClick = this.emptyPokemonClick(this)
    }

    emptyPokemonClick(){
        
        this.setState({isEmpty: false})
        console.log(this.state)
    }   
    
    render(){
        console.log(this.state)
        if(this.state.isEmpty === true){
            return<div className="pokemon-slot" ><button onClick={(this.emptyPokemonClick)}><EmptyPokemonSlot /></button></div>
        }else{
            return <div className="pokemon-slot"><FilledPokemonSlot /></div>
        }
        
    }

}


export default PokemonSlot;