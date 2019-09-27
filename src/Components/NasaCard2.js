import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const NasaCard = props => {
    return (
        <Card>
            <CardBody className="Card--Body">
                <CardTitle><h1>{props.title}</h1></CardTitle>
                <CardSubtitle><h3>{props.date}</h3></CardSubtitle>
                <CardText>{props.explanation}</CardText>
            </CardBody>
            <CardImg top width="60%" alt="nasa img" src={props.hdurl}/>
            <h4>{props.copyright}</h4>
        </Card>
    )
}

export default NasaCard;