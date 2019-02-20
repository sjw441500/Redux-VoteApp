import React from 'react';
import Vote from './Vote';
import {ListGroup} from 'react-bootstrap'
const VoteList = ({list,upOnClick,downOnClick}) => {
  return (
    <ListGroup as="ul">
      {list.map(vote => {
        return (
          <Vote key={vote.id} {...vote} upOnClick={() => upOnClick(vote.id)} downOnClick={() => downOnClick(vote.id)} />
        );
      })}
     </ListGroup>
  );
};

export default VoteList;