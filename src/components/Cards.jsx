import React from "react";
import styled from "styled-components"
import {connect} from "react-redux"
import { getCharacters } from "../redux/actions";
import Card from "./Card";

const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    flex-wrap: wrap;
`

class Cards extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getCharacters();
    }

    render(){
        return(
            // cuando el componente se monta....
            // haga dispatch de la actionCreator que trae los personajes
            // 
            <Container>
                {
                    [...this.props.myCharacters,...this.props.characters].map(character=>{
                        return(
                            <Card
                                name={character.name}
                                gender = {character.gender}
                                status= {character.status}
                                image={character.image}
                                species = {character.species}
                                key={character.id}
                                id={character.id}
                            />
                        )
                    })
                }
            </Container>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        characters:state.characters,
        myCharacters:state.myCharacters
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getCharacters: () => dispatch(getCharacters()),        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cards);