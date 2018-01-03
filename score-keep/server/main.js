// import utils from '../imports/utils.js';
import {
  Meteor
} from 'meteor/meteor'
import {
  Players
} from './../imports/api/players'

console.log('Log from /server/main.js');

Meteor.startup(() => {
  // Players.remove({
  //   name: 'Tobi'
  // });
  // Players.insert({
  //   name: 'Tobi',
  //   score: '3'
  // })
  // console.log(Players.find().fetch());

  // class Person {
  //   constructor(name = 'Anonymous', age = 0){
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting(){
  //     return `Hi I am ${this.name}.`
  //   }
  //   getPersonDescription(){
  //     return `${this.name} is ${age} year(s) old.`
  //   }
  // }
  //
  // class Employee extends Person{
  //   constructor(name, age, title){
  //     super(name, age);//constructor function call of parent
  //     this.title = title;
  //   }
  //   hasJob(){//new method
  //     return !!this.title;//make boolean out of it
  //   }
  //   getGreeting(){//override
  //     if(this.title){
  //       return `Hi I am ${this.name}. I work as ${this.title}.`
  //     } else {
  //         return super.getGreeting();//call normal method of parent
  //     }
  //   }
  // }
  //
  // class Programmer extends Person{
  //   constructor(name, age, lang = 'assembly'){
  //     super(name, age);
  //     this.lang = lang;
  //   }
  //   getGreeting(){
  //     return `Hi I am ${this.name}. I work as ${this.lang} developer.`
  //   }
  // }
  //
  // let me = new Employee('Tobi');
  //
  // console.log(me);
  // console.log(me.getGreeting);
  // console.log(me.hasJob());
  //
  // let andi = new Employee('Andi', 25, 'db admin');
  //
  // console.log(andi.getPersonDescription);
  // console.log(andi.hasJob());
  //
  // let charli = new Programmer('Charlie', 45, 'C#');
  //
  // console.log(charli.getGreeting());

  // let obj = {
  //   name: 'Tobi',
  //   printName() {
  //     console.log(`Name: ${this.name}`);
  //   }
  // }
  // // obj.printName();
  // setTimeout(obj.printName, 1000);
  // setTimeout(obj.printName.bind(obj), 1000);
})