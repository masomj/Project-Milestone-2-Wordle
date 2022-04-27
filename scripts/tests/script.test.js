/**
 * @jest-environment jsdom
 */


 
 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close()
})

const { word, validWords, addLetterEventListener, incrementSelectedIndex } = require("../script");

 
describe("Word is correctly selected", () => {
    
    test("random word is selected from the correct array", ()=> {
        expect(validWords).toContain(word.toLowerCase());
     });
    
     test("Random word is 5 letters long", ()=> {
        expect(word.length).toBe(5);
     });
});


describe("Check OnScreen Keyboard loads correctly", () => {
    test('All Letters are on the dom and event listener is correctly loaded', () => {
            let letters = addLetterEventListener();
            expect(letters.length).toEqual(26);
    })
})

describe("Ensure selected index is incremented when a letter is click",() =>{
    test('selected index is incremented', () => {
        selectedIndex = incrementSelectedIndex();
        
        expect(selectedIndex).toEqual(1);
    })

})

