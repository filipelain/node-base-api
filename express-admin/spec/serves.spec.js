const Request = require("request");

const baseUrl = 'http://localhost:3000/';


describe("server functionality", () => {
    let server;
    beforeAll(() => server = require("../app"));

    describe("GET /",()=>{
        let data = {};
        beforeAll((done)=>{
            Request.get(baseUrl,(error, response,body)=>{
                    data.status = response.statusCode;
                    data.body = JSON.parse(body);
                    done();
            })
        });
        it("status 200",()=>{
            expect(data.status).toBe(200);
        });
        it("body is Hello World!",()=>{
            expect(data.body.service).toBe('ok');
        });
    });

    describe("GET /users",()=>{
        data = {};
        beforeAll((done)=>{
            Request.get(baseUrl+"users",(error, response,body)=>{
                    data.status = response.statusCode;
                    done();
            });
        });

        it("users not authorized",()=>{
            expect(data.status).toBe(401);
        })
    });

    afterAll(() => server.close());
});