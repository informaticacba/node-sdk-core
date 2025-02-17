/* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */

/**
 * (C) Copyright IBM Corp. 2019, 2021.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AuthenticateOptions, AuthenticatorInterface } from './authenticator-interface';

/**
 * Base Authenticator class for other Authenticators to extend. Not intended
 * to be used as a stand-alone authenticator.
 */
export class Authenticator implements AuthenticatorInterface {
  /**
   * Create a new Authenticator instance.
   *
   * @throws {Error} The `new` keyword was not used to create construct the
   *   authenticator.
   */
  constructor() {
    if (!(this instanceof Authenticator)) {
      throw new Error('the "new" keyword is required to create authenticator instances');
    }
  }

  /**
   * Augment the request with authentication information.
   *
   * @param {object} requestOptions - The request to augment with authentication information.
   * @param {object.<string, string>} requestOptions.headers - The headers the
   *   authentication information will be added too.
   * @throws {Error} - The authenticate method was not implemented by a
   *   subclass.
   */
  public authenticate(requestOptions: AuthenticateOptions): Promise<void | Error> {
    const error = new Error('Should be implemented by subclass!');
    return Promise.reject(error);
  }
}
