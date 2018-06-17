const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exampleApp');

// EXAMPLE INSERT INTO DATABASE

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Ironhacker' });
// // kitty.save((err) => {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log('meow');
// //   }
// // });

// function addNewCat(catName) {
//   const kitty = new Cat({ name: catName });
//   kitty.save(function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(`meow! ${catName} SAVED.`);
//     }
//   });
// }

// function showCats() {
//   console.log('All the CATS!');
//   Cat.find({}, (err, cats) => {
//     cats.forEach((cat)=> {
//       console.log(' --> cat: ', cat.name);
//     })
//   });
// }

// function addTenCats(){
//   for (let i=0; i<10; i++){
//     addNewCat(`Ironhacker ${i}`);
//   }
// }

// addTenCats();

// /* We have to wait for our cats to save before displaying them
//  Remember, it's async */
// setTimeout(showCats, 1500);

/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

/* EXAMPLES USING Promise.all*/

let Student = mongoose.model('Student', { firstname: String});
let City = mongoose.model('City', { name: String });

let promise1 = Student.insertMany([{ firstname: 'Alice' }, { firstname: 'Bob' }]);
let promise2 = City.insertMany([{ name: 'Madrid' }, { name: 'Barcelone' }, { name: 'Paris' }]);

Promise.all([promise1, promise2])
  .then(values => { 
    console.log("students and cities has been inserted");
    console.log(values);
    /*
    [ [ { _id: 5a4e462048841e65562c465a, firstname: 'Alice', __v: 0 },
      { _id: 5a4e462048841e65562c465b, firstname: 'Bob', __v: 0 } ],
    [ { _id: 5a4e462048841e65562c465c, name: 'Madrid', __v: 0 },
      { _id: 5a4e462048841e65562c465d, name: 'Barcelone', __v: 0 },
      { _id: 5a4e462048841e65562c465e, name: 'Paris', __v: 0 } ] ]
    */
    mongoose.connection.close();
  })
  .catch(err => console.error(err));

/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
