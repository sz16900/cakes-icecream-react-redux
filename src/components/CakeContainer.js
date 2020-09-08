import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

// First: when you want to access the redux state in your component
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

// Second: gets the dispatch method as a parameter and allows to map actions creators to props in our component
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// Third: this connects a react component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
