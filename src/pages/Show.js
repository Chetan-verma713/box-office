import React, { useEffect, useState, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { getApi } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useReducer(state, initi);

  //   console.log(params);
  useEffect(() => {
    let isMounted = true;

    getApi(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        setTimeout(() => {
          if (isMounted) {
            setShow(results);
            setIsLoading(false);
          }
        }, 2000);
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log('show', show);

  if (isLoading) {
    return <div>Data is Being Loaded</div>;
  }

  if (error) {
    return <div>Error Occured : {error}</div>;
  }

  return <div>This is show page</div>;
};

export default Show;
