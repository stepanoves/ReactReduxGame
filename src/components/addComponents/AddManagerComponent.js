import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../css/start-panel.css'
import * as API from '../../api/API.json';


class AddManagerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            coefficient: '',
        };
        this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    fetchData = () => {
        fetch(API.host + API.POST.managers,  {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    render() {
        return (
            <div className="start-panel">
                <TextField
                    label="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"

                />

                <TextField
                    label="Surname"
                    name="surname"
                    value={this.state.surname}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    label="Coefficient"
                    name="coefficient"
                    value={this.state.coefficient}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />

                <Button variant="contained" color="primary" onClick={this.fetchData}>
                    Add
                </Button>
            </div>
        );
    };
}

export default AddManagerComponent;