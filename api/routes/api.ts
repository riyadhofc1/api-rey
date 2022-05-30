import express from "express";
const api = express.Router();

api.get("/", (req, res) => {
    res.redirect("/docs");
})

api.get("/tolol", (req, res) => {
    res.json({
        message: "Hello Worlds"
    })
})

export default api;