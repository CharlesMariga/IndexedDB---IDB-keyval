import {
  get,
  set,
  update,
  keys,
  values,
  entries,
  createStore,
} from "idb-keyval";

(() => {
  const st = createStore("MyDB", "mystore");

  /**
   * This overwrites old values and writes new ones.
   */
  set("user_id", Date.now(), st)
    .then(() => {
      console.log("User ID set");
    })
    .catch(console.warn);

  const myobj = {
    id: 123,
    name: "steve",
    email: "steve@work.org",
  };

  set("info", myobj).then(() => {
    console.log("saved the info");
  }).catch;

  get("info")
    .then((data) => {
      console.log(data);
    })
    .catch(console.warn);

  /**
   * Update overwrites the value
   */
  update("user_id", (val) => val - 1000)
    .then((data) => {
      console.log("update complete");
    })
    .catch(console.warn);

  keys().then((resp) => {
    console.log(resp);
  });

  values()
    .then((resp) => {
      console.log("Values: ", resp);
    })
    .catch(console.warn);

  entries()
    .then((res) => {
      console.log("Entries: ", res);
    })
    .catch(console.warn);
})();
