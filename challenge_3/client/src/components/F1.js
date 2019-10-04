import React from 'react';
import axios from 'axios';

class F1 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nextClicked: false
        }

        this.handleNext = this.handleNext.bind(this);
    }

    handleNext(event) {
        event.preventDefault();
        
        axios.post('/user', {
            name: this.props.textInputs.name,
            email: this.props.textInputs.email,
            password: this.props.textInputs.password
        })
        .then(function(response) {console.log(response)})
        .catch(function(error) {console.log(error)});

        this.setState({
            nextClicked: true
        })
    }

    render() {
        return (
            <div>
                <h2>Create account!</h2>
                <form onChange={this.props.handleChange} textInputs={this.props.textInputs}>
                    <label>
                        Name:
                    <input type="text" name="name" value={this.props.textInputs.name} /> <br></br>
                    </label>
                    <label>
                        Email:
                    <input type="text" name="email" value={this.props.textInputs.email} /> <br></br>
                    </label>
                    <label>
                        Password:
                    <input type="password" name="password" value={this.props.textInputs.password} /> <br></br>
                    </label>
                    <input type="submit" value="next" onClick={this.handleNext}></input>
                </form>
            </div>
        );
    }
}

export default F1