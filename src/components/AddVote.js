import React,{Component} from "react"
import {Button,Modal,Form} from "react-bootstrap";

class AddVote extends Component {

    constructor(props){
        super(props)
        this.state ={open:false,linkInput:"",descInput:"",addressInput:""};

        this.handleClose=this.handleClose.bind(this);
        this.handleOpen =this.handleOpen.bind(this);
        this.saveChange=this.saveChange.bind(this);

    }

    handleLinkChange = e => {
        this.setState({linkInput: e.target.value});
      };
      handleDescChange = e => {
        this.setState({descInput: e.target.value});

      };
      handleAddressChange = e => {
        this.setState({addressInput:e.target.value});

      };
      handleClose() {
        this.setState({ open: false });
      }
    
      handleOpen() {
        this.setState({ open: true });
      }
      saveChange = ()=> {
        this.props.addVote(this.state.addressInput,this.state.linkInput,this.state.descInput);
        this.setState({linkInput:"",addressInput:"",descInput:"",open:false});
      };
      render(){
        return(
          <div>
    <Button variant="primary" onClick={this.handleOpen}>
         Add your favorite website
        </Button>
        <Modal show={this.state.open} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Add New Website</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group controlId="formLink">
    <Form.Label>Enter link name</Form.Label>
    <Form.Control type="link" placeholder="Enter link name" value={this.state.linkInput} onChange={this.handleLinkChange}/>
  </Form.Group>
  <Form.Group controlId="formAddress">
    <Form.Label>Enter link address </Form.Label>
    <Form.Control type="link" placeholder="Enter link address" value={this.state.addressInput} onChange={this.handleAddressChange}/>
  </Form.Group>
  <Form.Group controlId="formDesc">
    <Form.Label>Description</Form.Label>
    <Form.Control type="description" placeholder="Description"value ={this.state.descInput} onChange={this.handleDescChange}/>
  </Form.Group>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.saveChange}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
            </div>
        )

}

}

export default AddVote;