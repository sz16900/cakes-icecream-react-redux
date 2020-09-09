import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy X Cakes</button>
    </div>
  );
}

// First: when you want to access the redux state in your component
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

// Second: gets the dispatch method as a parameter and allows to map actions creators to props in our component
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

// Third: this connects a react component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
