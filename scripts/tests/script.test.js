/**
 * @jest-environment jsdom
 */



 const { word, validWords, letters } = require("../script");
 
 
describe("Word is correctly selected", () => {
    
    test("random word is selected from the correct array", ()=> {
        expect(validWords).toContain(word.toLowerCase());
     });
    
     test("Random word is 5 letters long", ()=> {
        expect(word.length).toBe(5);
     });
});
describe("Check game environment loads correctly", () => {
    test('All Letters are on the dom', () => {
        
        document.addEventListener('DOMContentLoaded', () => {
        
        expect(letters.length).toEqual(26);
        })    
        
    })
    test('Backspace and enter buttons are on the dom', () => {
        document.addEventListener('DOMContentLoaded', () => {
            expect(backspaceBTN.length).toBe(1);
            expect(enter.length).toBe(1);
        })    
    })

})

