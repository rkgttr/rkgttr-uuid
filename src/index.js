/**
 * rkgttr-uuid
 *
 * Copyright © 2016 Erik Guittiere. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 import PRNG from 'rkgttr-prng';

 const prng = new PRNG(Date.now());

 export default function UUID() {
   return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(
     /[018]/g,
     a => (a ^ prng.gen() * 16 >> a / 4).toString(16)
   );
 }
