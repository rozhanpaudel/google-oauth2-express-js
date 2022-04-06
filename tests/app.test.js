const app = require("../app.js");
const request = require("supertest").agent(app);

describe("Users API", (done) => {
  it("GET api/users/ ---> Fetch all users", async () => {
    const response = await request.get("/api/users");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("msg");
    expect(response.body).toHaveProperty("data");
  });

  it("POST api/users/ ---> Create an User", async () => {
    const response = await request
      .post("/api/users")
      .send({
        email: "earlrozhan@gmail.com",
        name: "Roshan paudel",
      })
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(201);
    expect(
      response.body &&
        typeof response.body.data === "object" &&
        response.body.msg
    );

    // expect(response.body).toHaveProperty("msg");
    // expect(response.body).toHaveProperty("data");
    // expect(response.body.data).toEqual(expect.arrayContaining([]));
  });
  it("PUT api/users/ ---> Update user", async () => {
    const response = await request
      .put("/api/users/7")
      .send({
        email: "earlrozhan@gmail.com",
      })
      .set("Accept", "application/json");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("msg");
    expect(response.body).toHaveProperty("data");
  });
  // it("DELETE api/users/ ---> Delete user", async () => {
  //   const response = await request
  //     .delete("/api/users/4")
  //     .set("Accept", "application/json");
  //   expect(response.statusCode).toBe(202);
  //   expect(response.body).toHaveProperty("msg");
  //   expect(response.body).toHaveProperty("data");
  // });

  //for those apis which uses file

  //   request(app)
  //  .post('/upload/single/withfields')
  //  .attach('testFile', filePath)
  //  .field('firstName', mockUser.firstName)
  //  .field('lastName', mockUser.lastName)
});
