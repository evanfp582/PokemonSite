import React from "react"
import Container from '@material-ui/core/Container';
import Header from "./Components/Header"
import FormRow from "./Components/FormRow"


function App(){

    return (
        <div>
        <Header />
        <div className="main-container">
            <Container > 
                <FormRow />
            </Container>
        </div>
        </div>
      )

}

export default App