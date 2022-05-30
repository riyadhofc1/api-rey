import express from "express";
import api from "./routes/api";
import Configure from "./config";
import route from "./routes/route";

const app = express();
const PORT = process.env.PORT || 8080;
Configure(app);

app.use("/api", api);
app.use("/", route);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})