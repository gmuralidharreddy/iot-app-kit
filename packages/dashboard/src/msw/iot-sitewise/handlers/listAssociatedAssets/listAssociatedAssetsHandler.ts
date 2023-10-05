import { type ListAssociatedAssetsResponse, type ListAssociatedAssetsRequest } from '@aws-sdk/client-iotsitewise';
import { rest } from 'msw';

import { LIST_ASSOCIATED_ASSETS_URL } from './constants';
import { CHILD_ASSET_MAP, PARENT_ASSET_MAP } from '../../resources/assets';

export function listAssociatedAssetsHandler() {
  return rest.get<ListAssociatedAssetsRequest>(LIST_ASSOCIATED_ASSETS_URL, (req, res, ctx) => {
    const { assetId } = req.params as { assetId: ListAssociatedAssetsRequest['assetId'] };
    const hierarchyId = req.url.searchParams.get('hierarchyId') as ListAssociatedAssetsRequest['hierarchyId'];
    const traversalDirection =
      (req.url.searchParams.get('traversalDirection') as ListAssociatedAssetsRequest['traversalDirection']) ?? 'CHILD';

    if (!assetId) {
      return res(ctx.status(400));
    }

    if (traversalDirection !== 'CHILD' && traversalDirection !== 'PARENT') {
      return res(ctx.status(400));
    }

    if (traversalDirection === 'CHILD' && !hierarchyId) {
      return res(ctx.status(400));
    }

    const response: ListAssociatedAssetsResponse = {
      assetSummaries:
        traversalDirection === 'CHILD'
          ? CHILD_ASSET_MAP[assetId.concat(hierarchyId ?? '')]
          : PARENT_ASSET_MAP[assetId] ?? [],
      nextToken: undefined,
    };

    return res(ctx.status(200), ctx.json(response));
  });
}
