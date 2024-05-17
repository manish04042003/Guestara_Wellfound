const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const PORT_NO = 3000;
require('dotenv').config();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());


// All three Router Import from router Folder
const categoryRouter = require('./routes/category');
const subCategoryRouter = require('./routes/subCategory');
const itemsRouter = require('./routes/items');

app.use("/category",categoryRouter);
app.use("/subcategory",subCategoryRouter);
app.use("/item",itemsRouter);

// Connecting DB
mongoose.connect(process.env.MONGODB_URL).then(()=>{
  console.log("db connected");
});

app.listen(PORT_NO, () => {
  console.log(`Listening to port ${PORT_NO}`);
});
