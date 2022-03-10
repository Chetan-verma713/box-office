import React, { useEffect, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';
import { getApi } from '../misc/config';
import ShowGrid from '../components/show/ShowGrid';

const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => getApi(`/shows/${showId}`));
      Promise.all(promises)
        .then(getApi => getApi.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      {isLoading && <div>Show is still loading.</div>}
      {error && <div>Error occured : {error}</div>}
      {!isLoading && !shows && <div>No data were added</div>}
      {!isLoading && !error && (
        <div>
          <ShowGrid data={shows} />
        </div>
      )}
    </MainPageLayout>
  );
};

export default Starred;
