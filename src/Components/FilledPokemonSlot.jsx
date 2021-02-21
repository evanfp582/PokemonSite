import React from "react"
import EmptyPokemonSlot from "./EmptyPokemonSlot"
import PokemonSlot from "./PokemonSlot"


class FilledPokemonSlot extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            data: this.props.pokemonObject,
            name: this.props.pokemonObject.name
        }
    }
    
    render(){
        return(
        <div className="filled-pokemon-slot">
            <ul><h1>{this.state.name}</h1></ul>
        </div>)
        }
    
    
}


export default FilledPokemonSlot


//Component did mount- class
//empty use effect - function- call itself anytime a var in it changes
//fetch axios

//promises 