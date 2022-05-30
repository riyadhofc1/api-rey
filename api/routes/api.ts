import express from "express";
const api = express.Router();

api.get("/", (req, res) => {
    res.redirect("/docs");
})

export default api;