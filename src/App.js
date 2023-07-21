import React, { useState } from "react"
import Header from "./Header";
import Users from "./Users";
import AddUser from "./AddUser";
import axios from "axios";
import './css/style.css';
import { CSSTransition } from "react-transition-group";
const baseUrl = 'https://reqres.in/api/users?page=1' 
class App extends React.Component{  
  constructor(props){
    super(props)

    axios.get(baseUrl).then((res) => {
      this.setState({users: res.data.data})
    })

    this.state = {
      
        users: [
            // {
            //     id: 1,
            //     firstname: 'Bob',
            //     lastname: 'Marley',
            //     bio: 'Lorem ipsum dolor sit amet',
            //     age: 40,
            //     isHappy: true
            // },
            // {
            //     id: 2,
            //     firstname: 'Rayan',
            //     lastname: 'Goslin',
            //     bio: 'Lorem ipsum dolor sit amet',
            //     age: 22,
            //     isHappy: false
            // }
            
        ]
    }
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
    
  }
  
  render(){
    
    return (
      <div>
        <Header title = 'Список пользователей' />
          <main className="main">
            
              <Users users = {this.state.users} onEdit = {this.editUser} onDelete = {this.deleteUser}/>
            <aside>
            <AddUser onAdd = {this.addUser} />
            </aside>
            
          </main>
          
      </div>   
    )
  }

  deleteUser(id){
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user){
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({users: []}, () => {
      this.setState({users: [...allUsers]})
    })
  }

  addUser(user){
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, {id,...user}] }) //добавлем нового юзера
  }

}

export default App