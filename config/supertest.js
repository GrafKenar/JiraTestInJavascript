import local from "./local";

const supertest = require("supertest");
const REQUEST = supertest(local.baseUrl);

export const TOKEN = local.token;
export default REQUEST;
