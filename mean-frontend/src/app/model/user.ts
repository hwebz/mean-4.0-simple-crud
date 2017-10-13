export class User {
  constructor(
    public _id: String,
    public name: String,
    public age: Number,
    public location: String,
    public blog: String
  ){}

  static CreateDefault(): User {
    return new User('', '', 0, '', '');
  }
}
