var obj = {
  get() {
    console.log("get data from server");
  },
  post() {
    console.log("submit data");
  },
};

// exports.request = obj;
module.exports = obj;
