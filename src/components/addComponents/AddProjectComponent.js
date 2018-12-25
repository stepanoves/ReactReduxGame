import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../css/start-panel.css'
import * as API from '../../api/API.json';

class AddProjectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            cost: '',
            developerQuantity: '',
            stringQuantity: ''
        };
        this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    fetchData = () => {
        fetch(API.host + API.POST.projects,  {
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
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"

                />

                <TextField
                    label="Cost"
                    name="cost"
                    value={this.state.cost}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    label="Developers quantity"
                    name="developerQuantity"
                    value={this.state.developerQuantity}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />

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

export default AddProjectComponent;