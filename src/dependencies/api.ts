export class Api {
  get() {
    try {
      return 200;
    } catch (err) {
      return 500;
    }
  }
}
