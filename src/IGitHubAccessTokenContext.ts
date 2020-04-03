/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IActionContext } from 'vscode-azureextensionui';
import { gitHubOrgData } from './github/connectToGitHub';

export interface IGitHubAccessTokenContext extends IActionContext {
    accessToken?: string;
    orgData?: gitHubOrgData;
}
