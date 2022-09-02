import React from 'react'
import { MdOutlineStarPurple500 } from 'react-icons/md';

const Ratings = ({rate, size, margin}) => {
      const stars = Array(5).fill(0);
  return (
    <div>
      {stars.map((_, index) => {
        return (
          <MdOutlineStarPurple500
            key={index}
            size={size}
            style={{
              marginRight: margin,

              cursor: "pointer",
            }}
            color={rate > index ? "orange" : "grey"}
          />
        );
      })}
    </div>
  );
}

export default Ratings