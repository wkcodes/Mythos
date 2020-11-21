import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from '../Button/index';
import Card from '../Card/index';

const Jumbo = () => {
    return (
        <Jumbotron>
        <h1>Mythos Card</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <Card></Card>
        <p>
          
          <Button></Button>
        </p>
      </Jumbotron> 
    );
}

export default Jumbo;