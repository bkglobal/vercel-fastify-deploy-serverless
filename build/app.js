"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function routes(instance, opts, done) {
    instance.get("/", async (req, res) => {
        res.status(200).send({
            hello: "World",
        });
    });
    instance.register(async (instance, opts, done) => {
        instance.get("/", async (req, res) => {
            const { name = "" } = req.query;
            res.status(200).send(`Hello ${name}`);
        });
        instance.get("/:name", async (req, res) => {
            const { name = "" } = req.params;
            res.status(200).send(`Hello ${name}`);
        });
        done();
    }, {
        prefix: "/hello",
    });
    done();
}
exports.default = routes;
