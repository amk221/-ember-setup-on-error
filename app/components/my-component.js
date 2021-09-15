import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MyComponent extends Component {
  @action
  check() {
    if (true) { // Some condition
      throw new Error('check failed');
    }
  }
}
