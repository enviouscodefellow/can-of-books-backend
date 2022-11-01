const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_DATABASE_URL);

const Book = require('./models/Book.js');

async function seed() {
  await Book.create({
    title: 'Fight Club',
    description: `Fight Club's estranged narrator leaves his lackluster job when he comes under the thrall of Tyler Durden, an enigmatic young man who holds secret after-hours boxing matches in the basements of bars. There, two men fight "as long as they have to."`,
    status: 'Finished',
  });

  console.log(`Fight Club was created.`);

  await Book.create({
    title: 'Moby Dick',
    description: `The story of Captain Ahab's quest to avenge the whale that 'reaped' his leg. The quest is an obsession and the novel is a diabolical study of how a man becomes a fanatic.`,
    status: 'Finished',
  });

  console.log(`Moby Dick was created.`);

  await Book.create({
    title: 'Harry Potter and the Prisoner of Azkaban',
    description: `When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss.`,
    status: 'Finished',
  });

  console.log(`Harry Potter was created.`);

  mongoose.disconnect();
}

// const seed = () => {
//   if (Book.find()){
//     console.log('Data found');
//   } else {
//     let bookOne = new Book ({
//       title: 'Fight Club',
//       description: `Fight Club's estranged narrator leaves his lackluster job when he comes under the thrall of Tyler Durden, an enigmatic young man who holds secret after-hours boxing matches in the basements of bars. There, two men fight "as long as they have to."`,
//       status: 'Finished'
//     });

//     let bookTwo = new Book ({
//       title: 'Moby Dick',
//       description: `The story of Captain Ahab's quest to avenge the whale that 'reaped' his leg. The quest is an obsession and the novel is a diabolical study of how a man becomes a fanatic.`,
//       status: 'Finished'
//     });

//     let bookThree = new Book ({
//       title: 'Harry Potter and the Prisoner of Azkaban',
//       description: `When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss.`,
//       status: 'Finished'
//     });
//     bookOne.save();
//     bookTwo.save();
//     bookThree.save();
//     mongoose.disconnect();
//   }
// };

seed();
