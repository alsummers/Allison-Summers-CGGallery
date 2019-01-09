import React from 'react'
import { Fade } from 'reactstrap'
import TetherScreens from './tether_img'


class Tether extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fadeIn: true
        }
    }

    render(){
        return(
            <Fade in={this.state.fadeIn}>
            <TetherScreens />
            </Fade>
        )
    }

}

export default Tether