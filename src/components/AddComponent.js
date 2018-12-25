import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../css/add-component.css'
import AddDeveloperComponent from "./addComponents/AddDeveloperComponent";
import AddManagerComponent from "./addComponents/AddManagerComponent";
import AddProjectComponent from "./addComponents/AddProjectComponent";
import DeveloperContainer from '../containers/DeveloperContainer'

class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entity: ''
        };
        this.handleChange.bind(this);
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    validatePanel = (value) => {
        if (value === 10) return <AddDeveloperComponent/>
        if (value === 20) return <AddManagerComponent/>
        if (value === 30) return <AddProjectComponent/>
    };

    render() {
        return (
            <div className="choose_entity">
                <Select
                    value={this.state.entity}
                    onChange={this.handleChange}
                    displayEmpty
                    name="entity"
                >
                    <MenuItem value="">
                        <em>Add</em>
                    </MenuItem>
                    <MenuItem value={10}>Developer</MenuItem>
                    <MenuItem value={20}>Manager</MenuItem>
                    <MenuItem value={30}>Project</MenuItem>
                </Select>
                {this.validatePanel(this.state.entity)}


            </div>
        );
    }
}

export default AddComponent;