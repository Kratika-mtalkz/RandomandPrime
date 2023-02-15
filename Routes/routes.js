const getRandom = {
  schema: {
    summary: "Get a list of random numbers",
    params: {
      description: "number",
      type: "object",
      properties: {
        n: { type: "number" },
      },
    },
    response: {
      200: { description: "OK", type: "array" },
    },
    tags: ["Random"],
  },
  handler: function (request, reply) {
    const n = request.params.n;
    let N = [];
    if (n >= 0 && n <= 1000) {
      for (var i = 1; i <= n; i++) {
        N.push(Math.floor(Math.random() * 1000 + 1));
      }
      reply.send(N);
    } else {
      reply.send("Please enter a number between 0 to 1000");
    }
  },
};

const getPrime = {
  schema: {
    summary: "Get a list of first n Prime numbers",
    params: {
      description: "number",
      type: "object",
      properties: {
        n: { type: "number" },
      },
    },
    response: {
      200: { description: "OK", type: "array" },
    },
    tags: ["Prime"],
  },

  handler: function (req, res) {
    const n = req.params.n;
    let X = [];
    let i = 2;
    if (n >= 0 && n <= 1000) {
      while (X.length < n) {
        if (isPrime(i)) {
          X.push(i);
        }
        i = i === 2 ? i + 1 : i + 2;
      }
      res.send(X);
    } else {
      res.send("Please enter a number between 0 to 1000");
    }
  },
};

const isPrime = (n) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0) return false;
  }
  return true;
};


function userRoute(fastify, options, done) {

//Endpoint for random numbers
  fastify.get("/random/:n", getRandom);

//Endpoint for prime numbers
  fastify.get("/prime/:n", getPrime);

  done();
}
module.exports = userRoute;
