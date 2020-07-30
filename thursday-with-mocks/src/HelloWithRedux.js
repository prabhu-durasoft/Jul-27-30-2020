import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class HelloWithRedux extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDataFromServer('/intuit.txt');
    }

    render() {
        return (<div>
            <h1>{ this.props.data }</h1>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDataFromServer: (url) => {
            axios
            .get(url)
            .then(response => dispatch({type: 'SUCCESS', payload: {data: response.data} }))
            .catch(err => dispatch({type: 'FAILURE', payload: {error: err} }));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWithRedux);