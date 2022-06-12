class Print {
  constructor(debug = true) {
    if (typeof debug !== "boolean") {
      throw new Error("Print.constructor: Must be a boolean.");
    }
    this.debug = debug;
  }

  mess = (mess) => {
    if (this.debug == false) return;
    console.log(mess);
  };

  error = (mess) => {
    if (this.debug == false) return;
    console.error(mess);
  };

  table = (mess) => {
    if (this.debug == false) return;
    console.table(mess);
  };
}

let p = new Print();

p.mess("Hey You");

p.error("Hey You");

p.table({ name: "dfs", age: "32423" });
module.exports = Print;
