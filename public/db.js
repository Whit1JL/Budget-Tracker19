const indexedDB 

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/budget-trackerpwa19',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  
// tutor says DB is referred here