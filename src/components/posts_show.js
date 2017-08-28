import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fecthPost } from '../actions';

class PostsShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fecthPost(id);
    }

    render() {
        this.props.post;
        return (
            <div>
              post show!  
            </div>
        );
    }
}

const mapStateToProps = ({ posts }, ownProps) => ({
   post: posts[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fecthPost })(PostsShow);