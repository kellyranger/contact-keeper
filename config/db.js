const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose
      .connect(db, {
        //these are to prevent error messages 
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        //Deprecation fix To use the new Server Discover and Monitoring engine
        useUnifiedTopology: true
      })
    console.log('MongoDB Connected ...')
  } catch (err) {
    console.error(err.message);
    process.exit(1);

  }
  //Refactored from basic JavaScript to use async / await
  // mongoose
  //   .connect(db, {
  //     //these are to prevent error messages 
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useFindAndModify: false,
  //     useUnifiedTopology: true
  //   })
  //   .then(() => console.log('MongoDB Connected'))
  //   .catch(err => {
  //     console.error(err.message);
  //     process.exit(1);
  //   });
};

module.exports = connectDB;