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

    handleNext() {

        this.setState({
            nextClicked: true
        })
    }

    render() {
        return (
            <div>
                <h2>Create account!</h2>
                <form onChange={props.handleChange} textInputs={props.textInputs}>
                    <label>
                        Name:
                    <input type="text" name="name" value={props.textInputs.name} /> <br></br>
                    </label>
                    <label>
                        Email:
                    <input type="text" name="email" value={props.textInputs.email} /> <br></br>
                    </label>
                    <label>
                        Password:
                    <input type="password" name="password" value={props.textInputs.password} /> <br></br>
                    </label>
                    <input type="submit" value="next" handleNext={this.handleNext}></input>
                </form>
            </div>
        );
    }
}

export default F1