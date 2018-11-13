let events = {};

export default class EventEmitter {
  constructor() {

  }

  static subscribe( eventName, fn ) {
    if( !events[eventName] ) {
       events[eventName] = [];
    }

    events[eventName].push(fn);
  }

  static emit(eventName, data) {
    const event = events[eventName];
    if( event ) {
      event.forEach(fn => {
         fn.call(null, data);
       });
     }
  }
}
