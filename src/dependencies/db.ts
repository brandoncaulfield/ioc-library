export class Db {
  getItem(itemId: string) {
    try {
      return { itemId: itemId };
    } catch (err) {
      return err;
    }
  }
}
