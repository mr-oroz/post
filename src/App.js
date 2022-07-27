import React from 'react';
import './App.css';
import CommentsComponent from './components/comments-compoment';
import LikeComponent from './components/like-component';

const App = () => {
  return (
    <div className='app'>
      <div className="wrap">
        <div className="card">
          <div className='card-image'>
              <img src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg" alt="" />
              <LikeComponent/>
          </div>
          <CommentsComponent/>
        </div>
      </div>
    </div>
  )
}

export default App;