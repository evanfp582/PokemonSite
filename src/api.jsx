import React from "react"
import { render } from "react-dom"




class api extends React.Component{
    baseURL="https://pokeapi.co/api/v2/"
    constructor(){
        super()
        this.state = {
            loading: false,
            pokemonName: null
        }
    }
    
    
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    pokemonName: data
                })
            })
        return(
            this.state.pokemonName
        )
    }
    
    

    
    // componentDidMount() {
    //     fetch(`${baseURL}/pokemon/${this.props.name}`)
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }
    
    // render() {
    //     return (
    //         <div>
    //             Code goes here
    //         </div>
    //     )
    // }
    // render(){
    //     return(
    //         null
    //     )
    // }
}

export default api

