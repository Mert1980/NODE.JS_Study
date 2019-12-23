const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();

  // const dublicateNotes = notes.filter(note => note.title === title);
  // IOT prevent the code running all through the lists, find method returns the first match,
  // if not, it returns undefined

  const dublicateNote = notes.find(note => note.title === title);

  if (!dublicateNote) {
    // alternatively ==> if(dublicateNote === undefined)
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  // keep the notes if it is true (that does not match)
  const notesToKeep = notes.filter(note => note.title !== title);
  const log = console.log;
  if (notes.length > notesToKeep.length) {
    log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    log(chalk.red.inverse("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes: "));
  notes.forEach(note => console.log(note.title));
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(item => item.title === title);
  if (note) {
    console.log(chalk.blueBright.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note found found!"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
