import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../actions/ProjectsActions';
import ProjectItemComponent from "../components/itemComponents/ProjectItemComponent";
import '../css/container.css'

class ProjectContainer extends Component {

    componentWillMount () {
        this.props.loadProjects(false);
        this.props.loadProjects(true);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.loadProjects(false);
            this.props.loadProjects(true);
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getChilds(status) {
        return this.props.projects[status].map(pr => {
            return <ProjectItemComponent
                key={pr.id}
                title={pr.title}
                cost={pr.cost}
                developerQuantity={pr.developerQuantity}
                stringQuantity={pr.stringQuantity}
            />
        });
    };

    render() {
        const freeProjects = this.getChilds(false);

        const busyProjects = this.getChilds(true);

        return (
            <Fragment>
                <div className="item">
                    <p>Free Projects</p>
                    {freeProjects}
                </div>
                <div className="item">
                    <p>Busy Projects</p>
                    {busyProjects}
                </div>
            </Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps, actionsCreators)(ProjectContainer);