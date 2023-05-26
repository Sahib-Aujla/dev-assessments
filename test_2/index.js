"use strict";

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence. The function should then only return the elements where
 * the last name is "Simpson".
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test2() {
  let results = [
    {
      first_name: "Homer",
      last_name: "Simpson",
      catchphrase: "Doh!",
    },
    {
      first_name: "Bart",
      last_name: "Simpson",
      catchphrase: "Ay Carumba",
    },
    {
      first_name: "Barney",
      last_name: "Grumble",
      catchphrase: "Burrrrp!",
    },
    {
      first_name: "Nelson",
      last_name: "Muntz",
      catchphrase: "Ha ha!",
    },
    {
      first_name: "Ned",
      last_name: "Flanders",
      catchphrase: "Okily Dokily!",
    },
    {
      first_name: "Monty",
      last_name: "Burns",
      catchphrase: "Excellent!",
    },
    {
      first_name: "Krusty",
      last_name: "the Clown",
      catchphrase: "Hey Hey!",
    },
    {
      first_name: "Dr. Nick",
      last_name: "Riviera",
      catchphrase: "Hi Everybody!",
    },
    {
      first_name: "Seymour",
      last_name: "Skinner",
      catchphrase: "Simpson!",
    },
    {
      first_name: "Gary",
      last_name: "Chalmers",
      catchphrase: "Skinner!",
    },
  ];
  let res = results.filter((elem) => {
    elem.example =
      elem.first_name + " " + elem.last_name + " says " + elem.catchphrase;
    return elem.last_name === "Simpson";
  });
  // Write your code here.  The pre-written lines above and below are just suggestions, feel free to delete
  // them and start fresh.

  return res;
};
