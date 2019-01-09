import React from 'react'

const items = [
    {
      src: '../img/u313e905246156da6ede81fbc2ca24ebc.png',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];
class PersonalScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            images: items,
        }
        console.log(this.state.images)
    }
    // render(){
    //     return(
    //         items.map((url,index) => {
                
                
    //             return <div key = {index}>< img src={url.src} alt={url.altText}/></div>
            
    //         })
    //     )
    // }
    render(){
        return(
           <div>
               <img className="image" src={require('../img/u313e905246156da6ede81fbc2ca24ebc.png')} alt="image0" />
               <img className="image" src={require('../img/91af54ff253e6e396694fbd7445cdef8.png')} alt="image1" />
               <img className="image" src={require('../img/ca5d4ac6136c4b0acb4f3a3bba5d310a.jpg')} alt="image2" />
               <img className="image" src={require('../img/b257c3a8f42673a28714c1026af1cdbb.jpg')} alt="image3" />
               <img className="image" src={require('../img/670dec9f1523b21ca06b0bfe8ed77e82.jpg')} alt="image3" />
               <img className="image" src={require('../img/f83681ff3673d7a018ed086200cb589a.jpg')} alt="image3" />
           </div>
        )
    }
}
export default PersonalScreen