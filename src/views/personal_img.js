import React from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap'
  import personal_001 from '../img/screenshot000.png'
  import personal_002 from '../img/screenshot001.png'
  import personal_003 from '../img/Scooby.png'
  import personal_004 from '../img/SciFiHighresScreenshot00002.png'
  import personal_005 from '../img/SciFiHighresScreenshot00003.png'

const items = [
    {
      src: personal_005,
      altText: 'SciHall_1',
      caption: 'Sci-fi hall concept'
    },
    {
      src: personal_004,
      altText: 'SciHall_2',
      caption: 'Sci-fi hall concept'
    },
    {
      src: personal_001,
      altText: 'GrecianHelmet_1',
      caption: 'Grecian Steam'
    },
    {
      src: personal_002,
      altText: 'GrecianHelmet_2',
      caption: 'Grecian Steam'
    },
    {
      src: personal_003,
      altText: 'Scooby',
      caption: 'Scooby Doo Bust'
    }
  ];
class PersonalScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            images: items,
            activeIndex: 0
        }
        this.onExiting =  this.onExiting.bind(this)
        this.onExited = this.onExited.bind(this)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.goToIndex = this.goToIndex.bind(this)
    }
    // render(){
    //     return(
    //         items.map((url,index) => {
                
                
    //             return <div key = {index}>< img src={url.src} alt={url.altText}/></div>
            
    //         })
    //     )
    // }
    onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    
    render(){
            const { activeIndex } = this.state;

            const slides = items.map((item) => {
              return (
                <CarouselItem
                  onExiting={this.onExiting}
                  onExited={this.onExited}
                  key={item.src}
                >
                  <img className="image" src={item.src} alt={item.altText} />
                  <CarouselCaption captionText={item.caption} />
                </CarouselItem>
              );
            });
            return (
                <Carousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
              );
    }
    
}
export default PersonalScreen