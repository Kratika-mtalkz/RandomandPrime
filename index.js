const fastify = require("fastify")({ logger: true });
const PORT = process.env.PORT || 3000;
const swaggerConfig = require("./swagger");

fastify.get("/", (req, res) => {
  res.send("Server is running");
});

fastify.register(require("@fastify/swagger"), swaggerConfig);
fastify.register(require("@fastify/swagger-ui", swaggerConfig));
fastify.register(require("./Routes/routes"));

// // Run the server!
fastify.listen({ port: PORT }, (err, address) => {
  if (err) throw err;
});
