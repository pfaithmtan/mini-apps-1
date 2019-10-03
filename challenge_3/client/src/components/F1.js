import React from 'react';

const F1 = (props) => (
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
            <input type="submit" value="next"></input>
        </form>
    </div>
);


export default F1