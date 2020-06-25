import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/actions';

const Link = ({ children, active, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    console.log('click');
    return dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
