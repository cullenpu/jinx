import React from "react";
import { Button, Input } from "reactstrap";
import { edit } from "components/authComponents/authFunctions";
import "styles/dashboard.css";

class UserRow extends React.Component {
  // Get states from props
  state = {
    name: this.props.name,
    email: this.props.email,
    role: this.props.role,
    userID: this.props.userID,

    // Update Messages
    nameMsg: "",
    emailMsg: "",
    ratingMsg: "",
    roleMsg: "",
  };

  // Handle input changes
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  // Save edits to the db
  edit = (param) => (event) => {
    event.preventDefault();

    let value = null;
    if (param === "/name") {
      value = this.state.name;
    } else if (param === "/email") {
      value = this.state.email;
    } else if (param === "/rating") {
      value = this.state.rating;
    } else if (param === "/role") {
      value = this.state.role;
    }
    const result = edit(
      this.state.userID,
      "replace",
      param,
      value
    );
    // Get result of the promise
    result.then((a) => {
      if (!a) {
        if (param === "/name") {
          this.setState({
            nameMsg: "Please enter valid inputs!",
          });
        } else if (param === "/email") {
          this.setState({
            emailMsg: "Please enter valid inputs!",
          });
        } else if (param === "/rating") {
          this.setState({
            ratingMsg: "Please enter valid inputs!",
          });
        } else if (param === "/role") {
          this.setState({
            roleMsg: "Please enter valid inputs!",
          });
        }
      } else {
        if (param === "/name") {
          this.setState({
            nameMsg: "Successfully Updated!",
          });
        } else if (param === "/email") {
          this.setState({
            emailMsg: "Successfully Updated!",
          });
        } else if (param === "/rating") {
          this.setState({
            ratingMsg: "Successfully Updated!",
          });
        } else if (param === "/role") {
          this.setState({
            roleMsg: "Successfully Updated!",
          });
        }
      }
    });
  };

  render() {
    const { avatar, handleRemove } = this.props;

    const ProfileImage = ({ src }) => {
      return (
        <img
          src={src}
          alt="Avatar"
          style={{ borderRadius: "50%", width: "50px" }}
        />
      );
    };

    return (
      <tr>
        <td>
          <ProfileImage src={avatar} />
        </td>
        <td>
          <Input
            type="name"
            name="name"
            className="inputText"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <Button className="editButton" onClick={this.edit("/name")}>
            Edit
          </Button>
          <div className="statusText">
            <p>{this.state.nameMsg}</p>
          </div>
        </td>
        <td>
          <Input
            type="email"
            name="email"
            className="inputText"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <Button className="editButton" onClick={this.edit("/email")}>
            Edit
          </Button>
          <div className="statusText">
            <p>{this.state.emailMsg}</p>
          </div>
        </td>
        <td>
          <select
            name="role"
            className="dropDownSelect"
            value={this.state.role}
            onChange={this.handleInputChange}
          >
            <option value="admin">admin</option>
            <option value="applicant">applicant</option>
          </select>
          <Button className="editButton" onClick={this.edit("/role")}>
            Edit
          </Button>
          <div className="statusText">
            <p>{this.state.roleMsg}</p>
          </div>
        </td>
        <td>
          <Button onClick={handleRemove(this.state.userID)}>Remove</Button>
        </td>
      </tr>
    );
  }
}

export default UserRow;
