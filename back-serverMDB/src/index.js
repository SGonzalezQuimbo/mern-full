const app = require('./app.js')
const connectDB = require('./db.js');


connectDB();
app.listen(3001, () => {console.log('Listening at 3001');});

