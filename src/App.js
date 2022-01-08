import logo from './logo.svg';
import './App.css';
import flower1 from './flower1.jpg'
import flower2 from './flower2.jpg'
import flower3 from './flower3.jpg'

import flower4 from './flower4.jpg'

import flower5 from './flower5.jpg'

import './App.css'

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 5px red', maxWidth: '100vw'}} className='pink'>
            <h1 className="title">Collection Baudelaire </h1>
            <br />
            <img src= {flower1} alt="" width= "250px"/>
            <br />
            <img src= {flower2} alt=""  width= "250px"/>
            <br />
            <img src= {flower3} alt=""width= "250px"/>
            <br />
            <img src= {flower4} alt="" width= "250px"/>
            <br />
            <img src= {flower5} alt="" width= "250px"/>
            <br />
    </div>
    <div className='chrismas-collection'>

          <h1 className="title1">NOUVEAU ! Collection Noël </h1>
          <br />
              <img src="/chris1.jpg" alt="chris1" width= "550px"/><br />
              <img src="/chris2.jpg" alt="chris2" width= "350px" />
              <img src="/chris3.jpg" alt="chris3" width= "250px"/>
              <img src="/chris4.jpg" alt="chris4" width= "550px"/>
              <img src="/chris5.jpg" alt="chris5" width= "450px"/>
    </div>
    <div className='video'>
    <vidéo width={320} height={240} contrôles className='video'>
        <iframe width={560} height={315} src="https://www.youtube.com/embed/V-PD5iz7qdE" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </vidéo>
      </div>

    <div className='footer'>
      
       by KOTTI Soulayma 2021-2022


    </div>
    </div>

  );
}

export default App;
