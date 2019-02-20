import React, {Component} from 'react';
import AddVote from '../components/AddVote'
import VoteList from '../components/VoteList'
import {connect} from 'react-redux'
import * as actions from '../actions/actions';
class App extends Component {

  render() {
    return( <div>
  <VoteList list ={this.props.votes} upOnClick ={this.props.upOnClick} downOnClick={this.props.downOnClick}/>
  <AddVote addVote= {this.props.addVote}/>
  <button></button>
    </div>
    )
  }

}

const mapStateToProps = state => {
    return {
      votes: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      addVote: (address,link,description) => {
        dispatch(actions.addVote(link,address,description));
      },

      downOnClick :(id)=>{
        dispatch(actions.voteDown(id));

      },
      upOnClick :(id)=>{
        dispatch(actions.voteUp(id));
        
      }
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(App);