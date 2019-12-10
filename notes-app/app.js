const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
      }
  },
  handler: function(argv) {
    console.log(`My Title: ${argv.title}`);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Removing a note",
  handler: function() {
    console.log("Removing a note");
  }
});

// Create a list command
yargs.command({
    command: "list",
    describe: "List the notes",
    handler: function() {
      console.log("Listing out all note");
    }
  });

  // Create a read command
yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function() {
      console.log("Reading a note");
    }
  });

// add, remove, read, list

yargs.parse();
