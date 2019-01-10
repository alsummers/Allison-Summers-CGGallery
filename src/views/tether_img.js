import React from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap'
import tether_000 from '../img/HighresScreenshot00002.png'
import tether_001 from '../img/HighresScreenshot00002B.png'
import tether_002 from '../img/HighresScreenshot00003.png'
import tether_003 from '../img/HighresScreenshot00003B.png'
import tether_004 from '../img/HighresScreenshot00004.png'
import tether_005 from '../img/HighresScreenshot00004B.png'
import tether_006 from '../img/HighresScreenshot00005B.png'

const items = [
    {
        src: tether_000,
        altText: "Slide 1",
        caption: "Slide 1"
    },
    {
        src: tether_002,
        altText: "Slide 2",
        caption: "Slide 2"
    },
    {
        src: tether_004,
        altText: "Slide 3",
        caption: "Slide 3"
    },
    {
        src: tether_001,
        altText: "Slide 4",
        caption: "Slide 4"
    },
    {
        src: tether_005,
        altText: "Slide 5",
        caption: "Slide 5"
    },
    {
        src: tether_003,
        altText: "Slide 6",
        caption: "Slide 6"
    },
    {
        src: tether_006,
        altText: "Slide 7",
        caption: "Slide 7"
    }
]
class TetherScreens extends React.Component{
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

export default TetherScreens