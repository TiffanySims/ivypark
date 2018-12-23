import React, { Component } from 'react';


class Likes extends Component {

    state = {
        like: []
    }

addLike = () => {
    console.log('liked')
}

    render(){
        return(
            <div>Liked</div>
        )
    }
}

export default Likes;