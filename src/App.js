import React, { Component } from 'react';
// import Nav from './Nav';
import graph from './graph.png';
import happy from './happy.png';
import sad from './sad.png';
import angry from './angry.png';
import scared from './scared.png';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        
        <section className="header">
          <img className="profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Tom_Brady_2017.JPG/440px-Tom_Brady_2017.JPG" alt="tom image"></img>
          <h1>Tom Brady</h1>
        </section>

        <section className="vr">
          {/* <img src={vr1} alt="vr-img" className="vr-img"/>  */}
          {/* <img src={vr2} alt="vr-img2" className="vr-img"/>  */}
        </section>

        <article className="emostory">
          <h2>EmoStory</h2>
          <ul className='emo-list'>
            <li className='emo-item' tabIndex='0'>
              <img src={happy} className="emotion happy" />
              <article className='emo-title'>
                <p className='plate-name'>Happy</p>       
                <p className="elapsed-time">5 hrs ago</p>
              </article>      

           </li>
           <li className='emo-item' tabIndex='0'>
            <img src={sad} className="emotion sad" />
            <article className='emo-title'>
              <p className='plate-name'>Sad</p>       
              <p className="elapsed-time">4 hrs ago</p>
            </article>      
           </li>
           <li className='emo-item' tabIndex='0'>
            <img src={angry} className="emotion angry" />
            <article className='emo-title'>
              <p className='plate-name'>Angry</p>       
              <p className="elapsed-time">3 hrs ago</p>
            </article>      
           </li>
           <li className='emo-item' tabIndex='0'>
            <img src={scared} className="emotion scared" />
            <article className='emo-title'>
              <p className='plate-name'>Scared</p>       
              <p className="elapsed-time">2 hrs ago</p>
            </article>      
           </li>
           <li className='emo-item' tabIndex='0'>
            <img src={happy} className="emotion happy" />
            <article className='emo-title'>
              <p className='plate-name'>Happy</p>       
              <p className="elapsed-time">1 hr ago</p>
            </article>      
           </li>
          </ul>
        </article>

        <section className="summary">
          <h2>Summary</h2>
          <img src={graph} alt="day-graph" className="graph1" />
        </section>
        
      </div>
    );
  }
}

export default App;
