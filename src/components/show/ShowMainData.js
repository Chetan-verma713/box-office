import React from 'react';

import IMG_PLACEHOLDER from '../../images/imageNotFound.png';
import { Star } from '../Styled';
import { Headline, MainDataWrapper, TagList } from './ShowMainData.style';

const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <div className="text-side">
        <div>
          <h1>{name}</h1>
          <div>
            <Star />
            <span>{rating.average || 'N/A'}</span>
          </div>
        </div>
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <Headline>
          Tags:
          <TagList>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </TagList>
        </Headline>
      </div>
    </MainDataWrapper>
  );
};
export default ShowMainData;
