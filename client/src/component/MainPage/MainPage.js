import React, { useEffect } from 'react';
import client from '../../axios';

const MainPage = (props) => {
  useEffect(() => {
    client
      .post('/api/user/test', {
        userId: 1,
      })
      .then(() => {
        console.log('success');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>Hi</div>
    </div>
  );
};

export default MainPage;
