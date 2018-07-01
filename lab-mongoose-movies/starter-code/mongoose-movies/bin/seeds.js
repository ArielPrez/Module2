
const celebrityData = [
  {
    name : 'Tom Cruise',
    occupation : 'Actor & Producer',
    catchPhrase : 'When you have to cope with a lot of problems, you\'re either going to sink or you\'re going to swim.'
  },
  {
    name : 'Clint Eastwood',
    occupation : 'Actor, Director, Producer',
    catchPhrase : 'You should never give up your inner self. / If you want a guarantee, buy a toaster.'
  },
  {
    name : 'Arnold Schwarzenegger',
    occupation : 'Actor, filmmaker, businessman, investor, author, philanthropist, activist, politician, and former professional bodybuilder',
    catchPhrase : 'Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.'
  },
  {
    name : 'Meryl Streep',
    occupation : 'Actress',
    catchPhrase : 'Everything we say signifies; everything counts, that we put out into the world. It impacts on kids, it impacts on the zeitgeist of the time.'
  },
];

const mongoose = require("mongoose");
const dbname = '';
mongoose.connect(`mongodb://localhost/${dbname}`);

const celebrityCollection = require('../models/celebrity');
celebrityCollection.collection.drop();

celebrityCollection.create(celebrityData, (err) => {
  if(err){throw err;}
  console.log("Connection Success");
  mongoose.connection.close();
});

