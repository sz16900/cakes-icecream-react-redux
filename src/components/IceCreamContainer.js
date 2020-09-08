import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of IceCream - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

// First: when you want to access the redux state in your component
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.icecream.numOfIceCreams,
  };
};

// Second: gets the dispatch method as a parameter and allows to map actions creators to props in our component
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

// Third: this connects a react component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
