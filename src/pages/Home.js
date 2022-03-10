import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { getApi } from '../misc/config';
import ActorGrid from '../components/actor/ActorGrid';
import { useLastQuery } from '../misc/custom-hooks';

const Home = () => {
  const [input, setInput] = useLastQuery('');
  const [result, setResult] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isChecked = searchOption === 'shows';

  const onClickSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls
    getApi(`/search/${searchOption}?q=${input}`).then(res => {
      setResult(res);
      // console.log(res);
    });
  };

  const onChangeInput = event => {
    setInput(event.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onClickSearch();
    }
  };

  const renderResult = () => {
    if (result && result.length === 0) {
      return (
        <div>
          <h1>No Data Found!</h1>
        </div>
      );
    }

    if (result && result.length > 0) {
      return result[0].show ? (
        <ShowGrid data={result} />
      ) : (
        <ActorGrid data={result} />
      );
    }

    return null;
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  // console.log(searchOption);
  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onChangeInput}
        onKeyDown={onKeyDown}
        value={input}
        placeholder="Search for something"
      />

      <label htmlFor="shows-search">
        Shows
        <input
          type="radio"
          id="shows-search"
          value="shows"
          checked={isChecked}
          onChange={onRadioChange}
        />
      </label>
      <label htmlFor="actors-search">
        Actors
        <input
          type="radio"
          id="actors-search"
          value="people"
          checked={!isChecked}
          onChange={onRadioChange}
        />
      </label>

      <button onClick={onClickSearch}>Search</button>

      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
