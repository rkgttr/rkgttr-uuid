/**
 * rkgttr-uuid
 *
 * Copyright © 2016 Erik Guittiere. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import { expect } from 'chai';
import UUID from '../src/index';
let i;
describe('UUID', () => {
  it('should return different ids', () => {
    for (i = 0; i < 1000; i++) {
      expect(UUID()).to.not.equal(UUID());
    }
  });
});
