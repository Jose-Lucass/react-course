const text = require('./text')

test('mostre o texto mais a', () => {
    expect(text("oi")).toBe("oia");
}); 