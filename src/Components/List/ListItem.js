import React from 'react';
import { List, Image, Button, Modal, Icon } from 'semantic-ui-react';

class ListItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close(){
    this.setState(() => ({open: false}))
  }
  open(){
    this.setState(() => ({open: true}))
  }
  render(){
    const { company, title, location, company_logo, id } = this.props.jobObject
    return(
      <List.Item className="listItem">
        <Image style={{backgroundColor:"white"}} avatar src={company_logo} />
        <List.Content>
          <List.Header> {title} </List.Header>
          <List.Description>{`Company: ${company} | Location: ${location}`}</List.Description>
          <Modal
            closeOnEscape={true}
            closeOnDimmerClick={true}
            open={this.state.open}
          >
            <Modal.Header>Are you sure you want to remove this position?</Modal.Header>
            <Modal.Actions>
              <Button onClick={this.close} color='red'>
                <Icon name='remove' /> No
              </Button>
              <Button onClick={() => {this.props.removePosition(id); this.close}} color='green'>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
          <Button onClick={this.open}>Remove</Button>
        </List.Content>
      </List.Item>
    )
  }
}

export default ListItem;
