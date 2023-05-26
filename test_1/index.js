"use strict";

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence.
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test1() {
  let results = [
    {
      first_name: "Homer",
      last_name: "Simpson",
      catchphrase: "Doh!",
      example: "Homer Simpson says Doh!",
    },
    {
      first_name: "Bart",
      last_name: "Simpson",
      catchphrase: "Ay Carumba",
      example: "Bart Simpson says Ay Carumba",
    },
    {
      first_name: "Barney",
      last_name: "Grumble",
      catchphrase: "Burrrrp!",
      example: "Barney Grumble says Burrrrp!",
    },
    {
      first_name: "Nelson",
      last_name: "Muntz",
      catchphrase: "Ha ha!",
      example: "Nelson Muntz says Ha ha!",
    },
    {
      first_name: "Ned",
      last_name: "Flanders",
      catchphrase: "Okily Dokily!",
      example: "Ned Flanders says Okily Dokily!",
    },
    {
      first_name: "Monty",
      last_name: "Burns",
      catchphrase: "Excellent!",
      example: "Monty Burns says Excellent!",
    },
    {
      first_name: "Krusty",
      last_name: "the Clown",
      catchphrase: "Hey Hey!",
      example: "Krusty the Clown says Hey Hey!",
    },
    {
      first_name: "Dr. Nick",
      last_name: "Riviera",
      catchphrase: "Hi Everybody!",
      example: "Dr. Nick Riviera says Hi Everybody!",
    },
    {
      first_name: "Seymour",
      last_name: "Skinner",
      catchphrase: "Simpson!",
      example: "Seymour Skinner says Simpson!",
    },
    {
      first_name: "Gary",
      last_name: "Chalmers",
      catchphrase: "Skinner!",
      example: "Gary Chalmers says Skinner!",
    },
  ];
  // fetch("./test_data.json")
  //   .then((res) => res.json())
  //   .then((data) => (results = data))
  //   .then((results) =>
  //     results.forEach((elem) => {
  //       elem.example =
  //         elem.first_name + " " + elem.last_name + " says " + elem.catchphrase;
  //     })
  //   )
  //   .then(() => console.log(results))
  //   .catch((er) => console.log(er));
  // Write your code here.  The pre-written lines above and below are just suggestions, feel free to delete
  // them and start fresh.
  results.forEach((elem) => {
    elem.example =
      elem.first_name + " " + elem.last_name + " says " + elem.catchphrase;
  });

  return results;
};
