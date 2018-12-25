import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../../css/start-panel.css'
import * as API from '../../api/API.json';



class AddDeveloperComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            position: '',
            stringQuantity: '',
        };
        this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    fetchData = () => {
        fetch(API.host + API.POST.developers,  {
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

                <Select
                    value={this.state.position}
                    onChange={this.handleChange}
                    displayEmpty
                    name="position"
                >
                    <MenuItem value="">
                        <em>Position</em>
                    </MenuItem>
                    <MenuItem value={10}>JUNIOR</MenuItem>
                    <MenuItem value={20}>MIDDLE</MenuItem>
                    <MenuItem value={30}>SENIOR</MenuItem>
                </Select>

                <TextField
                    label="String quantity"
                    name="stringQuantity"
                    value={this.state.stringQuantity}
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

export default AddDeveloperComponent;