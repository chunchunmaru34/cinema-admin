import { Addition } from '../additional-services/addition';

export class MovieSessionAddition {
  additionalService: Addition;
  additionalServiceId: number;
  price: number;

  constructor(addition: Addition, price: number) {
    this.additionalService = addition;
    this.additionalServiceId = addition.id;
    this.price = price;
  }
}
