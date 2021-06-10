@preprocessor typescript
@builtin "whitespace.ne"

@{%
  const moo = require('moo');

  const lexer = moo.compile({
    character:  /'@'[\w]/,
    background: /'.'[\w]/,
    dialog: /(\n|^).*?(?=\n|$)/
  });
%}

character -> character

background -> background

dialog -> dialog