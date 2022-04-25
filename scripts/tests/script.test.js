/**
 * @jest-environment jsdom
 */
 const {word, validWords,} = require("../script");
 
 
describe("=Word is correctly selected", () => {
    
    test("random word is selected from the correct array", ()=> {
        expect(validWords).toContain(word.toLowerCase());
     });
    
     test("Random word is 5 letters long", ()=> {
        expect(word.length).toBe(5);
     });

     
    


});
