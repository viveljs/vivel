import * as nearley from 'nearley';
import grammar from './grammar';
const myParser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

console.log(myParser.feed('Battery: 51%, 4.01 Volt'));
