import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../css/start-panel.css'
import * as API from '../api/API.json';



class StartPanelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            companyBudget: ''
        };
        this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    fetchData = () => {
        fetch(API.host + API.POST.company,  {
            method: 'POST',
            body: JSON.stringify({title: this.state.companyName, budget: this.state.companyBudget}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        this.props.started(true);
    };

    render() {
        return (
            <div className="start-panel">
                    <TextField
                        label="Company Name"
                        name="companyName"
                        value={this.state.companyName}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"

                    />
                    <TextField
                        label="Company Budget"
                        name="companyBudget"
                        value={this.state.companyBudget}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button variant="contained" color="primary" onClick={this.fetchData}>
                        Start Game
                    </Button>
            </div>
        );
    };
}

export default StartPanelComponent;