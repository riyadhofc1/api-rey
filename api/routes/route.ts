import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
    res.render("index");
})

route.get("/docs", (req, res) => {
    res.render("pages/docs");
})

route.get("/about", (req, res) => {
    res.render("pages/about");
})

route.get("*", (req, res) => {
    res.render("pages/notfound")
})

export default route;