import Calcul from "../src/calcul";

describe("Calcul",()=>{
    it('should return 13', () => {
      let a:number=8;
      let b:number=5;
      let expected=13;
      expect(Calcul.somme(a,b)).toBe(expected);
    });
});