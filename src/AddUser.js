import React from "react"
class AddUser extends React.Component {
  userAdd = {};
  constructor(props){
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      avatar: "",
      isHappy: false
    }
  }
  render(){
    return(
        <form ref={(el) => this.myForm = el}>
            
            <input placeholder="Имя" onChange={(e) => this.setState({first_name: e.target.value})} />
            <input placeholder="Фамилия" onChange={(e) => this.setState({last_name: e.target.value})}/>
            <input placeholder="e-mail" onChange={(e) => this.setState({email: e.target.value})}/>
            <label htmlFor="fileUpload" className="customFileUpload">
            Загрузить изображение
            </label>  
            <input id="fileUpload" type="file" onChange={(e) => {
              const file = e.target.files[0];
              const avatarUrl = URL.createObjectURL(file);
              this.setState({avatar: avatarUrl});
            }} />
            
            <button type="button"  onClick={() => {

              this.myForm.reset()

              this.userAdd = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                avatar: this.state.avatar,
                isHappy: this.state.isHappy
              }
              if(this.props.user){
                this.userAdd.id = this.props.user.id;
              }
              this.props.onAdd(this.userAdd)}}>{this.props.buttonText || 'Добавить пользователя'}</button>
        </form>
    )
  }
}
export default AddUser


