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
  it("User login to the sysetm", async () => {
    const res = await request(app).post("/api/auth/login-user").send({
      email: "testuser@gmail.com",
      password: "test@12345",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe("testuser@gmail.com");
    token = res.body.token;
  });
});




// Add new post
describe("POST /api/user/plan-trip", () => {
  it("User should plan a new trip", async () => {
    const res = await request(app)
      .post("/api/user/plan-trip")
      .send({
        user:'testuser@gmail.com', 
        where:'UK', 
        start:'2022-12-12', 
        end:'2023-02-04', 
        tasks:[]
      })
      .set("Authorization", `${token}`);
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toEqual("You planned a new trip..");
  });
});

//Plan a trip as unauthorized user
describe("POST /api/user/plan-trip", () => {
  it("User should plan a new trip", async () => {
    const res = await request(app)
      .post("/api/user/plan-trip")
      .send({
        user:'testuser@gmail.com', 
        where:'UK', 
        start:'2022-12-12', 
        end:'2023-02-04', 
        tasks:[]
      })
    expect(res.statusCode).toBe(403);
  });
});



// Get all my trips
describe("GET /api/user/my-trips", () => {
  it("should return all posts", async () => {
    const res = await request(app)
      .get("/api/user/my-trips")
      .set("Authorization", `${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});