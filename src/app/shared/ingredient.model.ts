// export class Ingredient {
//   public name: string;
//   public amount: number;
//   constructor(name: string, amount: amount) {
//     this.name = name;
//     this.amount = amount;
//   }
// }

export class Ingredient {
  // TS shortcut
  constructor(public name: string, public amount: number) {}
}
