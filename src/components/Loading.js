import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

const style = {
  root: {
    width: '100%',
    textAlign: 'center',
    margin: '0 auto',
    position: 'absolute',
    top: '50%'
  }
};
export default function Loading() {
  return (
    <div style={style.root}>
      <CircularProgress variant='indeterminate' />
    </div>
  );
}

Loading.propTypes = {};
