import './App.css';
import Youtubeimg from './youtube.png';
import Pythoncode from './pythoncode.png';
import Running from './running.png';
import Failgraph from './failGraph.png';
import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    this.autoscroll = setTimeout(this.scrollNext, 2000);
    document.getElementById('introduce').addEventListener('scroll', () => {
      console.log("scroll");
      if (this.autoscroll) clearTimeout(this.autoscroll);
      this.autoscroll = setTimeout(this.scrollNext, 8000);
    })
  }

  scrollNext() {
    let a = document.getElementById('introduce');
    console.log(a.scrollTop);
    if (a.scrollTop == a.scrollHeight - window.innerHeight)
      a.scrollTo({top: 0, behavior: 'smooth'});
    else
      a.scrollTo({top: a.scrollTop+parseInt(a.scrollHeight*10/100), behavior: 'smooth'});
  }

  render() {
    return (
      <div className="App">
        
      
        <div className="introduce" id="introduce">
        
          <div className="scrollarea">
            <div className="title">Tacotron Speech Synthesis Project</div>
            <div className="my_name">Pyo Insu</div>
          </div>
  
          <div className="scrollarea">
            <div className="tacoWhat up" style={{fontSize: '2rem'}}>Tacotron is a  <span className="H">representative model</span> of deep learning-based speech learning models.</div>
          </div>
  
          <div className="scrollarea">
            <div className="tacoWhat title up">Deep learning?</div>
            <div className="tacoWhat desc">Deep learning is using artificial neural networks modeled after neurons in the human brain to teach computers how to think.</div>
          </div>
  
          <div className="scrollarea">
            <div className="tacoWhat title up">Voice synthesis?</div><br />
            <div className="tacoWhat desc">Most of the voices that machines like <span className="H">Siri, Bixby, and Naver Clova</span>, which we encounter a lot in our daily lives, are made up of voice synthesis.</div>
          </div>
          
          <div className="scrollarea">
            <div className="title">Tacotron Deep Learning Process</div>
          </div>
  
          <div className="scrollarea">
            <div className="tacoWhat title">Data navigation</div>
            <div className="tacoWhat desc">The goal of this project was to learn the voice of Gyeonggi-do Superintendent Lee Jae-jung using the voice synthesis model <span className="H">Tacotron.</span></div>
            <div className="tacoWhat desc">To do that, we first had to find voice data so that the computer could learn.</div>
            <div className="tacoWhat desc">So I searched on YouTube, where I can find voice data the easiest, and I got about two hours of voice data.</div>
            <img src={Youtubeimg}></img>
          </div>
  
          <div className="scrollarea">
            <div className="tacoWhat title up">Voice data processing</div>
            <div className="desc">Since you have obtained the voice data, you should extract the data only where necessary data.</div>
            <div className="desc">Many people helped because they needed 1,000 pieces of data for voice synthesis.</div>
            <div className="desc">At first, we went through a few trials and errors and thought about how to get data pre-processing faster and more accurately, so I created a few simple programs to do the hassle instead of.</div>
            <img src={Pythoncode}></img>
          </div>
  
          <div className="scrollarea">
            <div className="title">Deep Learning</div>
            <div className="desc">Now that the data has been preprocessed, it's time to start learning.</div>
            <div className="desc">We used the <span className="H">tensorflow</span> library created by Google for learning.</div>
            <img src={Running}></img>
          </div>
  
          <div className="scrollarea">
            <div className="title">Problem Occurred</div>
            <div className="desc">We have been learning for 3 to 4 days now, but we haven't been able to get the right results yet.</div>
            <div className="desc">The learning graph should be clearly yellow and green, but there was no progress with blurry spread.</div>
            <img src={Failgraph}></img>
            <div className="desc">(Wrong Graph)</div>
          </div>
  
          <div className="scrollarea">
            <div className="title">Problem Analysis and Feelings</div>
            <div className="desc">Perhaps there was a problem with the dataset that I made first.</div>
            <div className="desc">If you've learned more than 100,000 times, you'll get the results as you say.</div>
            <div className="desc">I've studied about 150,000 times, but the results didn't come out properly.</div>
            <div className="desc">I knew how important the amount and quality of data in deep learning is.</div>
          </div>
          
        </div>
      </div>
  
    );
  }
}
