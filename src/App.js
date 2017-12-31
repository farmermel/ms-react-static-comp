import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Stories from './Stories';
import Footer from './Footer';
import './App.css';

const stories = [
  {
    img: '../public/bedbugs.png',
    title: 'Bedbugs',
    desc: 'For New Yorkers an almost inevitable disaster. For the rest of us, avoid them with these tips.',
    authImg: '../public/pamela.png',
    authName: 'Pamela',
    estTime: '11 min'
  },
  {
    img: '../public/ant.png',
    title: 'The Lives of Ants',
    desc: 'These lil\' arthropods do more than you think!',
    authImg: '../public/alternate.png',
    authName: 'Nathaniel',
    estTime: '10 min'
  },
  {
    img: '../public/capsuleperson.png',
    title: 'My Dream House',
    desc: 'Ten square feet IS livable; here\'s how.',
    authImg: '../public/leta.png',
    authName: 'Leta',
    estTime: '8 min'
  },
    {
    img: '../public/story1.jpg',
    title: 'Melena is the greatest',
    desc: 'The Acacia',
    authImg: '../public/louisa.png',
    authName: 'Louisa',
    estTime: '2 min'
  }
]

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Stories  storiesTitle="Today's Smallest Stories"
                stories={stories} />
      <Stories storiesTitle="Very Niche Culture"
                stories={stories} />         
      <Footer />
    </div>
  );
}

export default App;
