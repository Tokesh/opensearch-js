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
import * as Ml_Common from '../_types/ml._common'

export interface Ml_Predict_Request extends Global.Params {
  algorithm_name: string;
  body?: Ml_Predict_RequestBody;
  model_id: string;
}

export type Ml_Predict_RequestBody = {
  input_index?: string[];
  input_query?: Ml_Common.InputQuery;
  return_number?: boolean;
  target_response?: string[];
  text_docs?: string[];
}

export interface Ml_Predict_Response extends ApiResponse {
  body: Ml_Predict_ResponseBody;
}

export type Ml_Predict_ResponseBody = Ml_Common.PredictResponse

