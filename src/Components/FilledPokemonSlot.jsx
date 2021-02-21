import React from "react"
import EmptyPokemonSlot from "./EmptyPokemonSlot"
import PokemonSlot from "./PokemonSlot"
import PokemonProfileBox from "./PokemonProfileBox"




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
            <PokemonProfileBox name={this.state.name} picture={this.state.data.sprites.front_default} baseHP={this.state.data.stats[1].base_stat} id={this.state.data.id}/>
            {/* <ul><h1>{this.state.name}</h1></ul> */}
        </div>)
        }
    
    
}


export default FilledPokemonSlot


//Component did mount- class
//empty use effect - function- call itself anytime a var in it changes
//fetch axios

//promises 