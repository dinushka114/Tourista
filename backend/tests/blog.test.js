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

// Get all blog posts
describe("GET /api/blog/get-posts", () => {
  it("should return all posts", async () => {
    const res = await request(app)
      .get("/api/blog/get-posts")
      .set("Authorization", `${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

// Add new post
describe("POST /api/blog/add-post", () => {
  it("Admin should add new post", async () => {
    const res = await request(app)
      .post("/api/blog/add-post")
      .send({
        title:"Testing blog post",
        subtitle:"Testing subtitle post",
        image:"Testing image post",
        content:"Testing content post",
        status:"publish"
      })
      .set("Authorization", `${token}`);
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toEqual("Post submitted");
  });
});
