const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();

let token = "";


/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.DB_URL);
});

/* Closing database connection after each test. */
// afterEach(async () => {
//     await mongoose.connection.close();
// });


// Login user to get the JWT token
describe("POST /api/auth/login-user", () => {
  it("user login to the sysetm", async () => {
    const res = await request(app).post("/api/auth/login-user").send({
      email: "dinushkapiyumal678@gmail.com",
      password: "Iwin1day@",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe("dinushkapiyumal678@gmail.com");
    token = res.body.token;
  });
});

// Get all quizes
describe("GET /api/forum/all-quizes", () => {
  it("should return all quizes", async () => {
    const res = await request(app).get("/api/forum/all-quizes");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

// Ask quiz as authenticated user
describe("POST /api/forum/ask", () => {
  it("authenticated user can ask quiz", async () => {
    const res = await request(app)
      .post("/api/forum/ask")
      .send({
        quiz: "This is the test quiz",
      })
      .set("Authorization", `${token}`);
    expect(res.statusCode).toBe(201);
  });
});


