import React from 'react'

class TetherScreens extends React.Component{

render(){
    return(
        <div>
        <img className = "image" src={require('../img/HighresScreenshot00002.png')} alt="image0"/>
        <img className = "image" src={require('../img/HighresScreenshot00002.png')} alt="image0"/>
        <img className = "image" src={require('../img/HighresScreenshot00002B.png')} alt="image0"/>
        <img className = "image" src={require('../img/HighresScreenshot00003.png')} alt="image0"/>
        <img className = "image" src={require('../img/HighresScreenshot00003B.png')} alt="image0"/>
        <img className = "image" src={require('../img/HighresScreenshot00004.png')} alt="image0"/>
        <img className = "image" src={require('../img/HighresScreenshot00004B.png')} alt="image0"/>
        <img className = "image" src={require('../img/HighresScreenshot00005B.png')} alt="image0"/>
        </div>
    )
}
}

export default TetherScreens