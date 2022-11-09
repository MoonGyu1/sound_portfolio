import React, { useEffect } from 'react';
import Thumbnail from './Thumbnail';

const ThumbnailTest = (props) => {
  return (
    <div>
      <Thumbnail
        startm={1}
        starts={30}
        url="https://soundcloud.com/baek_a/ef2nn74nrnwm"
      />
      <Thumbnail
        startm={2}
        starts={30}
        url="https://soundcloud.com/imvelou/g-idle-nxde"
      />
    </div>
  );
};

export default ThumbnailTest;
