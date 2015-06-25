describe('triangleChecker', function(){
  it('returns equilateral when 3 sides are equal', function(){
    expect(triangleChecker(10,10,10)).to.equal("Equilateral");
  });

  it('returns scalene when none of the 3 sides are equal', function(){
    expect(triangleChecker(10,11,12)).to.equal("Scalene");
  });

  it('returns isosceles when only 2 sides are equal', function() {
    expect(triangleChecker(10,10,12)).to.equal("Isosceles");
  });
});
