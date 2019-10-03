import React from 'react';
import axios from 'axios';
import F1 from './F1';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            phoneNum: '',
            cardNum: '',
            expDate: '',
            CVV: '',
            billingZipCode: '',
            checkoutClicked: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        name = event.target.value;

        this.setState({
            [name]: name
        })
    }

    handleClick(event) {
        event.preventDefault();

        console.log('been clicked!');
        this.setState({
            checkoutClicked: true
        })
    }

    render() {
        let toBeRendered;
        console.log('clicked?', this.state.checkoutClicked);
        if (this.state.checkoutClicked) {
            console.log('yeah we clicked')
            toBeRendered = <F1 handleSubmit={this.handleSubmit} />
        } else {
            toBeRendered = <form onSubmit={this.handleClick}>
                                <input type="submit" value="checkout"></input>
                            </form>
        }
    
    
        return (
            <div>
                {toBeRendered}
            </div>
        );
    };

}


export default App;