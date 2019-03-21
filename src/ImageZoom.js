import React, { Component } from 'react';
import "./ImageZoom.css";
import ReactImageMagnify from 'react-image-magnify';

// const {
//   default: ReactImageMagnify
// } = ReactImageMagnify;
const image = 'image/';
const images = [
  {name: 'apples.jpg', vw: '355w'},
  {name: 'apples.jpg', vw: '481w'},
  {name: 'apples.jpg', vw: '584w'},
  {name: 'apples.jpg', vw: '687w'},
  {name: 'apples.jpg', vw: '770w'},
  {name: 'apples.jpg', vw: '861w'},
  {name: 'apples.jpg', vw: '955w'},
  {name: 'apples.jpg', vw: '1033w'},
  {name: 'apples.jpg', vw: '1112w'},
  {name: 'apples.jpg', vw: '1192w'},
  {name: 'apples.jpg', vw: '1200w'}
];


export default class ImageZoom extends Component {
  get srcSet() {
    return images.map(image => {
      return `${image}${image.name} ${image.vw}`;
    }).join(', ')
  }    
  render() {
    return (
      
      <div className="perimeter">
      <div className="image">
        <ReactImageMagnify {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: `${image}apples.jpg`,
            srcSet: this.srcSet,
            sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw',
          },
          largeImage: {
            alt: '',
            src: `${image}apples.jpg`,
            width: 1000,
            height: 1500
          },
          isHintEnabled: true
        }}/>
      </div>
      <div className="copy">
        <h3>Touch</h3>
        <p className="App-intro">
          Press (long touch) image to magnify. Pan (drag) to traverse image.
        </p>
        <p className="App-intro">
          Note the page can be scrolled when touch begins on image.
        </p>
        <h3>Mouse</h3>
        <p>Hover image to magnify</p>
      </div>
    </div>
    
    )
  }
}
