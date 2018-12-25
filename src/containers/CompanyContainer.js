import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../actions/CompanyActions';
import '../css/container.css'
import CompanyItemComponent from "../components/itemComponents/CompanyItemComponent";

class CompanyContainer extends Component {

    componentWillMount () {
        this.props.loadCompany();
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.loadCompany();
            this.props.loadCompany();
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        console.log(this.props);
        return (
            <CompanyItemComponent companyName={this.props.company.title} currentBudget={this.props.company.budget}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps, actionsCreators)(CompanyContainer);