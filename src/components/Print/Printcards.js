import React, { Component } from 'react';
import './printcardsstyle.css';
import any1 from './printimages/any1.JPG';
import any2 from './printimages/any2.JPG';
import any3 from './printimages/any3.JPG';
import any4 from './printimages/any4.JPG';
import any5 from './printimages/any5.JPG';
import any6 from './printimages/any6.JPG';
import any7 from './printimages/any7.JPG';
import any8 from './printimages/any7.JPG';
import birthday1 from './printimages/birthday1.JPG';
import birthday2 from './printimages/birthday2.JPG';
import birthday3 from './printimages/birthday3.JPG';
import christmas1 from './printimages/christmas1.JPG';
import christmas2 from './printimages/christmas2.JPG';
import christmas3 from './printimages/christmas3.JPG';
import christmas4 from './printimages/christmas4.JPG';
import christmas5 from './printimages/christmas5.JPG';
import christmas6 from './printimages/christmas6.JPG';
import easter1 from './printimages/easter1.JPG';
import easter2 from './printimages/easter2.JPG';
import easter3 from './printimages/easter3.JPG';
import easter4 from './printimages/easter4.JPG';
import easter5 from './printimages/easter5.JPG';
import easter6 from './printimages/easter6.JPG';
import easter7 from './printimages/easter7.JPG';
import halloween1 from './printimages/halloween1.JPG';
import halloween2 from './printimages/halloween2.JPG';
import halloween3 from './printimages/halloween3.JPG';
import halloween4 from './printimages/halloween4.JPG';
import halloween5 from './printimages/halloween5.JPG';
import halloween6 from './printimages/halloween6.JPG';
import thanksgiving1 from './printimages/thanksgiving1.JPG';
import thanksgiving2 from './printimages/thanksgiving2.JPG';
import thanksgiving3 from './printimages/thanksgiving3.JPG';
import thanksgiving4 from './printimages/thanksgiving4.JPG';
import thanksgiving5 from './printimages/thanksgiving5.JPG';
import valentines1 from './printimages/valentines1.JPG';
import valentines2 from './printimages/valentines2.JPG';
import valentines3 from './printimages/valentines3.JPG';
import valentines4 from './printimages/valentines4.JPG';
import valentines5 from './printimages/valentines5.JPG';
import valentines6 from './printimages/valentines6.JPG';


class Printcards extends Component {
    render () {
    return (
      <section className="printcardsbox">
        <h3 classname="printheader">Greeting Cards: Any Occasion</h3>
        <div className="gallery">
          <img src={any1}/>
          <img src={any2}/>
          <img src={any3}/>
          <img src={any4}/>
          <img src={any5}/>
          <img src={any6}/>
          <img src={any7}/>
          <img src={any8}/>
        </div>

        <h3 classname="printheader">Birthday Cards</h3>
        <div className="gallery">
          <img src={birthday1}/>
          <img src={birthday2}/>
          <img src={birthday3}/>
        </div>

        <h3 classname="printheader">Christmas Cards</h3>
        <div className="gallery">
          <img src={christmas1}/>
          <img src={christmas2}/>
          <img src={christmas3}/>
          <img src={christmas4}/>
          <img src={christmas5}/>
          <img src={christmas6}/>
        </div>

        <h3 classname="printheader">Easter Cards</h3>
        <div className="gallery">
          <img src={easter1}/>
          <img src={easter2}/>
          <img src={easter3}/>
          <img src={easter4}/>
          <img src={easter5}/>
          <img src={easter6}/>
          <img src={easter7}/>
        </div>

        <h3 classname="printheader">Halloween Cards</h3>
        <div className="gallery">
          <img src={halloween1}/>
          <img src={halloween2}/>
          <img src={halloween3}/>
          <img src={halloween4}/>
          <img src={halloween5}/>
          <img src={halloween6}/>
        </div>

        <h3 classname="printheader">Thanskgiving Cards</h3>
        <div className="gallery">
          <img src={thanksgiving1}/>
          <img src={thanksgiving2}/>
          <img src={thanksgiving3}/>
          <img src={thanksgiving4}/>
          <img src={thanksgiving5}/>
        </div>

        <h3 classname="printheader">Valentines Day Cards</h3>
        <div className="gallery">
          <img src={valentines1}/>
          <img src={valentines2}/>
          <img src={valentines3}/>
          <img src={valentines4}/>
          <img src={valentines5}/>
          <img src={valentines6}/>
        </div>






      </section>
    )
  }
}
  
  export default Printcards;