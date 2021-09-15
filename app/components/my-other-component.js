import Component from '@glimmer/component';

export default class MyOtherComponent extends Component {
  constructor() {
    super(...arguments);

    if (true) { // Some condition
      throw new Error('check failed');
    }
  }
}
