// Model for a name

export class Name {
  /**
   *
   * @param {string} value The value to set in the name
   */
  constructor(value) {
    // value set to string
    this.value = value.toString();
  }

  getLength() {
    length = this.value.length;

    return {
      value: length,
    };
  }
}
