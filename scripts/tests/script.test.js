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

const { word, validWords, addLetterEventListener,addBackspaceEventListener,addEnterEventListener } = require("../script");

 
describe("Word is correctly selected", () => {
    
    test("random word is selected from the correct array", ()=> {
        expect(validWords).toContain(word.toLowerCase());
     });
    
     test("Random word is 5 letters long", ()=> {
        expect(word.length).toBe(5);
     });
});


describe("Check game environment loads correctly", () => {
    test('All Letters are on the dom and event listener is correctly loaded', () => {
            let letters = addLetterEventListener();
            expect(letters.length).toEqual(26);
          
        
    })
    test('Backspace button is on the dom and favicon code from font awseome is present', () => {
           let backspace = addBackspaceEventListener();
            expect(backspace.innerHTML).toEqual(`<i class="fas fa-backspace"></i>`);

            
         
    })
    test('Enter button is on the dom and displays correct text', ()=>{
        let enter = addEnterEventListener();
        console.log(enter.innerHTML)
        expect(enter.innerHTML).toEqual('Enter');
    })

})


