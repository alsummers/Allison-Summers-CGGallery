import React from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  } from 'reactstrap'
import uE_000 from '../img/1f9f6845bd2eee3f4056f54171b6a7e8.jpg'
import uE_001 from '../img/2d77ab477b47451865c39d91fe105761.jpg'
import uE_002 from '../img/759d8a91cce3681e0b566d20f9e6a7e4.jpg'
import uE_003 from '../img/a74ef377ee45a51f7adc5fc50efa5093.jpg'
import uE_004 from '../img/ca1aca009e2231811b0d1fc47f096017.jpg'
import uE_005 from '../img/cc88b9343c65af3da2e58c6de6248a4c.jpg'

const items = [
    {
        src: uE_000,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: uE_001,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: uE_002,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: uE_003,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: uE_004,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: uE_005,
        altText: 'Slide 1',
        caption: 'Slide 1'
    }
]

class UnderEarthScreen extends React.Component{
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

export default UnderEarthScreen