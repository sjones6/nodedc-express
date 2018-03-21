const assert = require("assert")

const request = require("supertest")
const app = require("app")

describe("Users", () => {
  it("should return a resource", done => {
    request(app)
      .get('/users')
      .expect(200)
      .then(() => done())
      .catch(done)
  })
})