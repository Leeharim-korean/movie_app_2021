import React from 'react';

function Food({ fav }){
    return <h3>I like {fav}</h3>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav ="Potato" />
      <Food fav ="kimchi" />
      <Food fav ="curry" />
      <Food fav ="ramen" />
    </div>
  );
}

export default App;
