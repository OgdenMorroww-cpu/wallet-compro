const express = require("express");
const PORT = 3000;
const app = express();

const logger = require("./middleware/logger");

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/privateKey", require("./Routes/api/users"));

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
