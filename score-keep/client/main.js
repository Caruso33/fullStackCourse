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

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

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

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={ () => {
          Players.update({ _id: player._id },
            { $inc: {score: 1} }
          );
        }}>+1</button>
        <button onClick={() => {
          Players.update({_id: player._id}, {
            $inc: {score: -1}
          });
        }}>-1</button>
          <button onClick={() => Players.remove({_id :player._id })}>X</button>
        </p>
    );
  });
}

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    var jsx = (
      <div>
        <TitleBar title={title} subtitle='Created by caruso33'/>
        {renderPlayers(players)}
        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.querySelector('#app'));
  })
});
