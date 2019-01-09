import React from 'react'
import { Fade } from 'reactstrap'
import UnderEarthScreen from './underEarth_img'


class UnderEarth extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fadeIn: true
        }
    }




    render(){
        return(
            <Fade in={this.state.fadeIn}>
            <div>
                <UnderEarthScreen />
                </div>
            </Fade>
        )
    }
}
export default UnderEarth