import { rest } from 'msw';
import { listWorkspacesRequestStub } from './handlers/iot-twinmaker/list-workspaces-request-stub';
import { executeQueryRequestStub } from './handlers/iot-twinmaker/execute-query-request-stub';
import { defaultDescribeAssetHandler } from './iot-sitewise/describeAsset/defaultDescribeAssetHandler';
import { defaultListAssetsHandler } from './iot-sitewise/listAssets/defaultListAssetsHandler';
import { listAssociatedAssetsHandler } from './iot-sitewise/listAssociatedAssets/listAssociatedAssetsHandler';
import { batchGetAssetPropertyValueHandler } from './iot-sitewise/handlers/batchGetAssetPropertyValue/batchGetAssetPropertyValue';

export const handlers = [
  // https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListWorkspaces.html#API_ListWorkspaces_RequestSyntax
  rest.post('https://api.iottwinmaker.us-east-1.amazonaws.com/workspaces-list', listWorkspacesRequestStub),
  // https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ExecuteQuery.html
  rest.post('https://api.iottwinmaker.us-east-1.amazonaws.com/queries/execution', executeQueryRequestStub),

  defaultDescribeAssetHandler(),
  defaultListAssetsHandler(),
  listAssociatedAssetsHandler(),
  batchGetAssetPropertyValueHandler(),
];
