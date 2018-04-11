import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


class PostsNew extends Component{

    render(){
        return (
            <div>
                Posts New
            </div>
        )
    }
}

function mapStateToProps(state){
    return {};
}

export default connect(mapStateToProps)(PostsNew);