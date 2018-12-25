import React, { Component } from 'react';
import '../css/start-panel.css'
import Grid from '@material-ui/core/Grid';
import AddComponent from "./AddComponent";
import DeveloperContainer from "../containers/DeveloperContainer";
import ManagerContainer from "../containers/ManagerContainer";
import ProjectContainer from "../containers/ProjectContainer";
import CompanyContainer from "../containers/CompanyContainer";
import * as API from '../api/API.json';



class GamePanelComponent extends Component {

    componentDidMount() {
        this.interval = setInterval(() => {
            fetch(API.host + API.PUT.checkprojects,  {
                method: 'PUT'
            });

            fetch(API.host + API.PUT.paysalary,  {
                method: 'PUT'
            })

        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={2}>
                    <AddComponent/>
                </Grid>
                <Grid item xs={2}>
                    <DeveloperContainer/>
                </Grid>
                <Grid item xs={2}>
                    <ManagerContainer/>
                </Grid>
                <Grid item xs={2}>
                    <ProjectContainer/>
                </Grid>
                <Grid item xs={2}>
                    <CompanyContainer started={this.props.started}/>
                </Grid>
            </Grid>
        );
    };
}

export default GamePanelComponent;