import React from "react";
import axios from "axios";

export default class AddUser extends React.Component{
    state={
        UserFirstName: '',
        UserLastName: '',
        UserEmailId: ''
    }
    onChangeAddUser = event => {
        this.setState ({UserFirstName: event.target.value.UserFirstName},
            {UserLastName: event.target.value.UserLastName},
            {UserEmailId: event.target.value.UserEmailId});
    }
    handleSubmit = event => {
        event.preventDefault();

        const user = {
            UserFirstName: this.state.UserFirstName,    
            UserLastName: this.state.UserLastName,
            UserEmailId: this.state.UserEmailId
        };
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Person Name:
                <input type="text" name="name" onChange={this.onChangeAddUsers} />
              </label>
              <button type="submit">Add</button>
            </form>
          </div>
        )
      }
}