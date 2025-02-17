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

import extend = require('extend');
import { computeBasicAuthHeader, validateInput } from '../utils';
import { Authenticator } from './authenticator';
import { AuthenticateOptions } from './authenticator-interface';

/** Configuration options for basic authentication. */
export type Options = {
  /** The username to be used in basic authorization. */
  username: string;
  /** The password to be used in basic authorization. */
  password: string;
};

/**
 * The BasicAuthenticator is used to add basic authentication information to
 *   requests.
 *
 * Basic Authorization will be sent as an Authorization header in the form:
 *
 *     Authorization: Basic <encoded username and password>
 *
 */
export class BasicAuthenticator extends Authenticator {
  protected requiredOptions = ['username', 'password'];

  protected authHeader: {
    Authorization: string;
  };

  /**
   * Create a new BasicAuthenticator instance.
   *
   * @param {object} options Configuration options for basic authentication.
   * @param {string} options.username The username portion of basic authentication.
   * @param {string} options.password The password portion of basic authentication.
   * @throws {Error} The configuration options are not valid.
   */
  constructor(options: Options) {
    super();
    validateInput(options, this.requiredOptions);
    const { username, password } = options;
    const authHeaderString = computeBasicAuthHeader(username, password);
    this.authHeader = { Authorization: authHeaderString };
  }

  /**
   * Add basic authentication information to `request`. The basic authentication information
   * will be set in the Authorization property of`request.headers` in the form:
   *
   *     Authorization: Basic <encoded username and password>
   *
   * @param {object} requestOptions - The request to augment with authentication information.
   * @param {object.<string, string>} requestOptions.headers - The headers the
   *   authentication information will be added too.
   */
  public authenticate(requestOptions: AuthenticateOptions): Promise<void | Error> {
    return new Promise((resolve) => {
      requestOptions.headers = extend(true, {}, requestOptions.headers, this.authHeader);
      resolve();
    });
  }
}
