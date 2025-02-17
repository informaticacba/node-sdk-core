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

import { Authenticator } from './authenticator';
import { AuthenticateOptions } from './authenticator-interface';

/**
 * NoAuthAuthenticator is a placeholder authenticator implementation which
 * performs no authentication of outgoing REST API requests. It might be
 * useful during development and testing.
 */
export class NoAuthAuthenticator extends Authenticator {
  public authenticate(requestOptions: AuthenticateOptions): Promise<void> {
    // immediately proceed to request. it will probably fail
    return Promise.resolve();
  }
}
