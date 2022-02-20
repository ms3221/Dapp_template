
const hello = artifacts.require("Helloworld");



// contract("Helloworld", function () {
    
//     it("should be same as constructor argument", function () {
//         return hello.deployed().then(function (instance) {
//             return instance.say().then(function (greeting) {
//                 assert.equal(greeting, "Hello, World");
//             })
//         })
//     })
//})

contract("Helloworld", () => {

    it("Hello, World 나오면 성공", async () => {
        let instance = await hello.deployed();
        let greeting = await instance.say.call();
        assert.equal(greeting, "Hello, World");
    })

 })