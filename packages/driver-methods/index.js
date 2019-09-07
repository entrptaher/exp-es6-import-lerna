import autoBind from 'auto-bind';

export default class Driver {
  constructor() {
    autoBind(this);
  }
  getLocation(){
    return window.location.href;
  }
  click(selector) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const clickBtn = document.querySelector(selector);
        this.simulateEvent('click', clickBtn);
        this.simulateEvent('mousedown', clickBtn);
        resolve('done');
      }, 100);
    });
  }

  simulateEvent(eventX, elem) {
    const event = new MouseEvent(eventX, {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    const cb = elem;
    return !cb.dispatchEvent(event);
  }

  simulateType(selector, value) {
    const elem = document.querySelector(selector);
    elem.value = value;
    for (const event of [
      'click',
      'focus',
      'keydown',
      'keypress',
      'mousedown',
      'compositionend',
      'compositionstart',
      'blur',
    ]) {
      this.simulateEvent(event, elem);
    }
  }
}