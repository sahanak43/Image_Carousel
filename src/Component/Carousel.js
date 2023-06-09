// This component will contain all the carousel’s interactive elements, including next and previous buttons, slide indicators, and all the functionalities of the carousel

import React, { Component } from 'react';
import {CarouselData} from "./CarouselData"
import Swipe from 'react-easy-swipe';

import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"

export default class Carousel extends Component {
    constructor(props) {
      super(props)
      this.state = {
         currentSlide:0,
         paused:false,
      };
    }
    componentDidMount(){
      setInterval(()=>{
        if(this.state.paused===false){
          let newSlide=
          this.state.currentSlide===CarouselData.length -1
           ? 0 
           : this.state.currentSlide +1
          this.setState({currentSlide:newSlide})
        }
          },4000)//delay:which means that the function executes after every 6 seconds.
    }
    nextSlide=()=>{
      let newSlide=
      this.state.currentSlide===CarouselData.length-1
      ? 0
      : this.state.currentSlide+1;
      this.setState({currentSlide:newSlide})
    };

    prevSlide=()=>{
      let newSlide=
      this.state.currentSlide===0
      ? CarouselData.length -1
      : this.state.currentSlide -1;
      this.setState({currentSlide:newSlide})

    };

    setCurrentSlide=(index)=>{
      this.setState({currentSlide:index})
    }

  render() {
    // const {currentSlide}=this.props;
    return (
      <div className='marginset'>
        <div className='leftdetail'>
        <AiOutlineLeft 
        onClick={this.prevSlide}
        className='leftslidedetail'
        />

        <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {CarouselData.map((slide,index)=>{
              return(
                <img
                 src={slide.image}
                 alt="This is a carousel slide"
                 key={index} 
                 className={
                  index===this.state.currentSlide
                  ? "indexdetail"
                  :"hiddendetail"
                 }
                 onMouseEnter={()=>{
                  this.setState({paused:true})
                 }}
                 onMouseLeave={()=>{
                  this.setState({paused:false})
                 }}
                 />
              )
            })}
         </Swipe>

            <div className='elementdetail'>
              {CarouselData.map((element,index)=>{
                return(
                  <div
                  className={
                    index===this.state.currentSlide
                    ? "currentslide"
                    : "previousslide"
                  }
                  key={index}
                  onClick={()=>{
                    this.setCurrentSlide(index);
                  }}
                  >.</div>
                )
              })}
            </div>
            <AiOutlineRight 
            onClick={this.nextSlide}  
            className='rightslidedetail'
            />
        </div>
      </div>
    );
  }
}

