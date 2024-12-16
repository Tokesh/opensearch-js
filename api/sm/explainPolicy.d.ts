/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

/*
 * This file was generated from the OpenSearch API Spec. Do NOT edit it
 * manually. If you want to make changes, either update the spec or
 * modify the API generator.
 */

import { ApiResponse } from '../../lib/Transport'
import * as Global from '../_types/_global'
import * as Sm_Common from '../_types/sm._common'

export type Sm_ExplainPolicy_Request = Global.Params & {
  policy_name: string;
}

export type Sm_ExplainPolicy_Response = ApiResponse & {
  body: Sm_ExplainPolicy_ResponseBody;
}

export type Sm_ExplainPolicy_ResponseBody = Sm_Common.PolicyExplanation

