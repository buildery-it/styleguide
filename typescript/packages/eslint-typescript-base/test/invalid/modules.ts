/* eslint-disable @typescript-eslint/no-unused-vars */

// expect: import/no-extraneous-dependencies
import 'chalk';

// expect: import/no-duplicates
import module from '../../index';
// expect: import/no-duplicates
import sameThing from '../../index';
// expect: import/named, import/no-duplicates
import { some } from '../../index';

// expect: import/no-unresolved
import './unexisted_module';

const variable = 2;

// expect: import/no-mutable-exports
let mutable = 1;
mutable = 2;
export { mutable };
