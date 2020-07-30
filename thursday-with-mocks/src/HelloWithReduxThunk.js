import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class HelloWithReduxThunk extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getDataFromServer('/intuit.txt'));
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

const getDataFromServer = (url) => {
    return dispatch => {
        dispatch(fetchDataBegin());
        return axios
                .get(url)
                .then(response => {
                    dispatch(fetchDataSuccess(response.data)); 
                    return response.data;
                })
                .catch(err => dispatch(fetchDataFailure(err)));
    }
};

const fetchDataBegin = () => ({type: 'LOADING'});
const fetchDataSuccess = (data) => ({
    type: 'SUCCESS',
    payload: { data }
}); 

const fetchDataFailure = (error) => ({
    type: 'FAILURE',
    payload: { error: error.message }
}); 

export default connect(mapStateToProps)(HelloWithReduxThunk);