import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../actions/ManagerActions';
import ManagerItemComponent from "../components/itemComponents/ManagerItemComponent";
import '../css/container.css'

class ManagerContainer extends Component {

    componentWillMount () {
        this.props.loadManagers(false);
        this.props.loadManagers(true);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.loadManagers(false);
            this.props.loadManagers(true);
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getChilds(status) {
        return this.props.managers[status].map(man => {
            return <ManagerItemComponent
                key={man.id}
                name={man.name}
                surname={man.surname}
                coefficient={man.coefficient}
            />
        });
    };

    render() {
        const freeManagers = this.getChilds(false);

        const busyManagers = this.getChilds(true);

        return (
            <Fragment>
                <div className="item">
                    <p>Free Managers</p>
                    {freeManagers}
                </div>
                <div className="item">
                    <p>Busy Managers</p>
                    {busyManagers}
                </div>
            </Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps, actionsCreators)(ManagerContainer);