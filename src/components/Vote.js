
import React from 'react';
import {ListGroup,Button} from 'react-bootstrap'
const Vote = ({upOnClick,downOnClick,thumbUp,thumbDown,address,link,description})=>{

    return (

        <ListGroup.Item as ='li'>
        <Button varian ="primary" onClick={upOnClick}> <i class="fas fa-thumbs-up">{thumbUp}</i></Button>
        <Button variant="secondary" onClick={downOnClick}> <i class="fas fa-thumbs-down" >{thumbDown}</i></Button>
         <div>
         <a href= {address} target="_blank"  rel="noopener noreferrer">{link}</a>
         <p>{description}</p>
         </div>
         </ListGroup.Item >
    )
}

export default Vote;