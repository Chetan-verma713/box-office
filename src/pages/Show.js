import React, { useEffect, useState, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { getApi } from '../misc/config';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isLoading: false, show: action.show, error: null };
    }

    case 'FETCH_FAILED': {
      return { ...prevState, isLoading: false, error: action.error };
    }

    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

const Show = () => {
  const { id } = useParams();
  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);
  useEffect(() => {
    let isMounted = true;

    getApi(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        setTimeout(() => {
          if (isMounted) {
            dispatch({ type: 'FETCH_SUCCESS', action: results });
          }
        }, 2000);
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', error: err.message });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  // console.log('show', show);

  if (state.isLoading) {
    return <div>Data is Being Loaded</div>;
  }

  if (state.error) {
    return <div>Error Occured : {state.error}</div>;
  }

  return <div>This is show page</div>;
};

export default Show;
