import { Addition } from '../additional-services/addition';

export class MovieSessionAddition {
  addition: Addition;
  price: number;

  constructor(addition: Addition, price: number) {
    this.addition = addition;
    this.price = price;
  }
}
