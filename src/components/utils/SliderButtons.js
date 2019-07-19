import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const LeftArrow = (props) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="2x"
        color="aqua"
      />
    </div>
  );
};

export const RightArrow = (props) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faChevronRight}
        size="2x"
        color="aqua"
      />
    </div>
  );
};

