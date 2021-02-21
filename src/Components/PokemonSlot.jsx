import React from "react"
import App from "../App"
import EmptyPokemonSlot from "./EmptyPokemonSlot"
import FilledPokemonSlot from "./FilledPokemonSlot"

const base_URL="https://pokeapi.co/api/v2/"
let answer

class PokemonSlot extends React.Component{

    baseURL="https://pokeapi.co/api/v2/"

    constructor(){
        super()
        this.state= {
            isEmpty: true,
            pokemonName: null,
            loading:false,
            pokemonObject:null
        }
        this.emptyPokemonClick = this.emptyPokemonClick.bind(this)
    }

    
    
    async emptyPokemonClick(){
        let answer= window.prompt("What is the Pokemon's name?","Fill in pokemon here")
        console.log(answer)
        
        if ((answer !== "Fill in pokemon here") && (answer !== null)){
            answer=answer.toLowerCase();
            console.log(this.state)
            
            this.setState({pokemonName: answer})
            this.setState({loading: true})

            console.log(`HERE IS NAME ${this.state.pokemonName}`)
            await fetch(`https://pokeapi.co/api/v2/pokemon/${answer}`)
            //try catch with the data, once catch error
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        loading: false,
                        pokemonName: data.name,
                        pokemonObject: data
                    })
                    console.log(`Look at this!: ${this.state.pokemonName}`)
                })
            this.setState({isEmpty: false})
        }
    }   
    
   
    

    

    render(){
        console.log(this.state)
        if(this.state.isEmpty === true){
            return<div className="pokemon-slot" ><button onClick={(this.emptyPokemonClick)}><EmptyPokemonSlot /></button></div>
        }else if(this.state.pokemonName !== null){
            console.log(this.state.pokemonObject)
            return <div className="pokemon-slot"><FilledPokemonSlot 
            name={this.state.pokemonName} pokemonObject={this.state.pokemonObject}
            />
            </div>
        }
        
    }

}


export default PokemonSlot;