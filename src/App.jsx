import React from "react"
import Container from '@material-ui/core/Container';
import Header from "./Components/Header"
import FormRow from "./Components/FormRow"
//import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PokemonBio from "./Components/PokemonBio"

function App(){

    return (
        <div>
            <Header />
            <div className="main-container">
                <Container > 
                    <FormRow />
                </Container>
                {/* <main>
                    {this.props.children}
                </main> */}
            </div>
        </div>
      )

}

export default App

{/* <Layout>
                <h1>Home Page <span>{location.pathname}</span></h1>
                <h2>Static HTML Page</h2>
            </Layout> */}