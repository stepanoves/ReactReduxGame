import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../actions/DeveloperActions';
import DeveloperItemComponent from "../components/itemComponents/DeveloperItemComponent";
import '../css/container.css'

class DeveloperContainer extends Component {

    componentWillMount () {
        this.props.loadDevelopers(false);
        this.props.loadDevelopers(true);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.loadDevelopers(false);
            this.props.loadDevelopers(true);
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getChilds(status) {
        return this.props.developers[status].map(dev => {
            return <DeveloperItemComponent
                key={dev.id}
                name={dev.name}
                surname={dev.surname}
                position={dev.position}
                stringQuantity={dev.stringQuantity}
            />
        });
    };

    render() {
        const freeDevelopers = this.getChilds(false);

        const busyDevelopers = this.getChilds(true);

        return (
            <Fragment>
                <div className="item">
                    <p>Free Developers</p>
                    {freeDevelopers}
                </div>
                <div className="item">
                    <p>Busy Developers</p>
                    {busyDevelopers}
                </div>
            </Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps, actionsCreators)(DeveloperContainer);