describe('palindromes', function() {
  it('Works with a single word', function() {
    expect(palindromes('racecar')).toEqual(true);
  });
  it('Works with an ! or other punctuation', function() {
    expect(palindromes('Racecar!')).toEqual(true);
  });
  it('Works with multiple words', function() {
    expect(palindromes('A car, a man, a maraca.')).toEqual(true);
  });
  it('Works with multiple words (test 2)', function() {
    expect(palindromes('Animal loots foliated detail of stool lamina.')).toEqual(true);
  });
  it('Works when a non-palidrome is passed', function() {
    expect(palindromes('JavaScript and Java make the ultimate developer.')).toEqual(false);
  });

});