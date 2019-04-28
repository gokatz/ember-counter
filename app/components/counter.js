import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CounterComponent extends Component {
  @tracked count = 0;
  maxValue = 10;

  decrement() {
    this.count > 0 && this.count--;
  }

  increment() {
    this.count < this.maxValue && this.count++;
  }

  get isMax() {
    return this.count >= this.maxValue;
  }
}
