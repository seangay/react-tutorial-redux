import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
  const ninjaList = ninjas.map(ninja => {
    return (
      (
        <div className="ninja" key={ninja.id}>
          <span>Name: {ninja.name}</span> -
          <span>Age: {ninja.age}</span> -
          <span>Belt: {ninja.belt}</span>
          <button onClick={() => deleteNinja(ninja.id)}>-</button>
        </div>
      )
    );
  });
  
  return (
    <div className="ninja-list">{ninjaList}</div>
  );
};

export default Ninjas;
