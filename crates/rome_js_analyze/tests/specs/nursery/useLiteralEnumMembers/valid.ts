
enum ValidRegex {
  A = /test/
}


enum ValidString {
  A = 'test',
}


enum ValidLiteral {
  A = `test`,
}


enum ValidNumber {
  A = 42,
}


enum ValidNumber {
  A = -42,
}


enum ValidNumber {
  A = +42,
}


enum ValidNull {
  A = null,
}


enum ValidPlain {
  A,
}


enum ValidQuotedKey {
  'a',
}


enum ValidQuotedKeyWithAssignment {
  'a' = 1,
}


enum ValidKeyWithComputedSyntaxButNoComputedKey {
  ['a'],
}


enum Foo {
  A = 1 << 0,
  B = 1 >> 0,
  C = 1 >>> 0,
  D = 1 | 0,
  E = 1 & 0,
  F = 1 ^ 0,
  G = ~1,
}


enum FileAccess {
  None = 0,
  Read = 1,
  Write = 1 << 1,
  All = (1 | (1 << 1)) // ESlint rejects this
}


enum Parenthesis {
  Left = ((("Left"))),
  Right = (((1))),
}