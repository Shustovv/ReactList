import React from "react"
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'
import AddUser from "./AddUser"
import { CSSTransition } from "react-transition-group";

class User extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      editForm: false,
      
    };
  }
  
  user = this.props.user;

  render(){
    return(
      <div className='user'>
            <div className="icons">
              <IoCloseCircleSharp onClick={(prevState) => this.props.onDelete(this.user.id)} className="delete-icon"/>
              <IoHammerSharp onClick={() => {
                this.setState(prevState => ({
                  editForm: !prevState.editForm
                }));
              }} className="edit-icon" />
            </div>  
            <img src={this.user.avatar} />
            <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
            <p>{this.props.user.email}</p>
            
            <CSSTransition
              in={this.state.editForm}
              timeout={500}
              classNames="alert"
              unmountOnExit
            >
              <div>
                <div className="backdrop" onClick={() => this.setState({ editForm: false })}></div>
                <AddUser user={this.props.user} buttonText="Изменить пользователя" onAdd={this.props.onEdit} />
              </div>
            </CSSTransition>
          
        </div>
    )
  }
}
export default User