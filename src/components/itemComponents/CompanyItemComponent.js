import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class CompanyItemComponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick.bind(this);
    }

    handleClick = (event) => {
        this.props.started(false);
    };

    render () {
        return (
            <div>
                <Paper elevation={1}>
                    <Typography variant="h5" component="h3">
                        {`Company Name: ${this.props.companyName}`}
                    </Typography>
                    <Typography component="p">
                        {`Current budget: ${this.props.currentBudget}`}
                    </Typography>
                </Paper>
                <Button variant="contained" color="secondary" onClick={this.handleClick}>
                    Stop Game
                </Button>
            </div>
        )
    }
}

export default CompanyItemComponent;