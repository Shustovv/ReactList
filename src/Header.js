import React from "react"
class Header extends React.Component {
  render(){
    return(
      <header className="Header">
        {this.props.title}
      </header>
    )
  }
}
export default Header