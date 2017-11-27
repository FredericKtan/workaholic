import React from 'react';

import Message from '../components/Message';

const MessagesPage = () => (
  <ul>
    <li><Message text="Message 1" /></li>
    <li><Message text="Message 2" /></li>
    <li><Message text="Message 3" /></li>
    <li><Message text="Message 4" /></li>
    <li><Message text="Message 5" /></li>
  </ul>
);

export default MessagesPage;
