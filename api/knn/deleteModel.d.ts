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
import * as Knn_Common from '../_types/knn._common'

export type Knn_DeleteModel_Request = Global.Params & {
  model_id: string;
}

export type Knn_DeleteModel_Response = ApiResponse & {
  body: Knn_DeleteModel_ResponseBody;
}

export type Knn_DeleteModel_ResponseBody = Knn_Common.DeletedModel

