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
describe("POST /api/auth/login-admin", () => {
  it("Admin login to the sysetm", async () => {
    const res = await request(app).post("/api/auth/login-admin").send({
      email: "admin@tourista.com",
      password: "admin@tourista",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe("admin@tourista.com");
    token = res.body.token;
  });
});

// Invalid login credentials
describe("POST /api/auth/login-admin", () => {
  it("Admin login to the sysetm", async () => {
    const res = await request(app).post("/api/auth/login-admin").send({
      email: "admin",
      password: "password",
    });
    expect(res.statusCode).toBe(404);
  });
});

// Get all accommodations
describe("GET /api/accommodation/get-accommodations", () => {
  it("should return all accommodation", async () => {
    const res = await request(app)
      .get("/api/accommodation/get-accommodations")
      .set("Authorization", `${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

// Add new accommodation
describe("POST /api/accommodation/add-accommodation", () => {
  it("Admin should add new post", async () => {
    const res = await request(app)
      .post("/api/accommodation/add-accommodation")
      .send({
        type: 'Hotel',
        name: 'Test name',
        image:'Test Image',
        location: 'Test Location',
        city: 'Test city',
        description: 'Test description',
        contact: '072636127127',
        email: 'test@gmail.com'
      })
      .set("Authorization", `${token}`);
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toEqual("accommodation submitted")
  });
});


// Add new accommodation as unaouthroized user
describe("POST /api/accommodation/add-accommodation", () => {
  it("Admin should add new post", async () => {
    const res = await request(app)
      .post("/api/accommodation/add-accommodation")
      .send({
        type: 'Hotel',
        name: 'Test name',
        image:'Test Image',
        location: 'Test Location',
        city: 'Test city',
        description: 'Test description',
        contact: '072636127127',
        email: 'test@gmail.com'
      })
    expect(res.statusCode).toBe(403);
  });
});