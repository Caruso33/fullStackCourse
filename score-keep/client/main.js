// import utils from '../imports/utils.js';
// import someDefault, {greetUser, name} from '../imports/utils.js';

// console.log('Log from /client/main.js');

// console.log(utils.greetUser());
// console.log(greetUser());
// console.log(name);
// console.log(someDefault);

import React from 'react';
import ReactDOM from 'react-dom';

import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';

// const players = [{
//   name: 'Tobi',
//   score: 5,
//   _id: 1
// }, {
//   name: 'Andi',
//   score: 10,
//   _id: 2
// }, {
//   name: 'Catu',
//   score: 0,
//   _id: 3
// }];

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    let title = 'Score Keep';

    ReactDOM.render(<App title={title} players={positionedPlayers}/>,
      document.querySelector('#app'));
  })
});
