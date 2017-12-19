// import utils from '../imports/utils.js';
// import someDefault, {greetUser, name} from '../imports/utils.js';

// console.log('Log from /client/main.js');

// console.log(utils.greetUser());
// console.log(greetUser());
// console.log(name);
// console.log(someDefault);

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
  let name = 'Tobias';
  var jsx = (
    <div>
      <p>Hello {name}</p>
      <p>This is for you</p>
    </div>
  );
  ReactDOM.render(jsx, document.querySelector('#app'));
});
