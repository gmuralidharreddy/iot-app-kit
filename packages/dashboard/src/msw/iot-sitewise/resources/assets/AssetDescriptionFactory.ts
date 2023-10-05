import { type DescribeAssetResponse } from '@aws-sdk/client-iotsitewise';
import { v4 as uuid } from 'uuid';

export type AssetDescription = DescribeAssetResponse;
type PartialAssetDescription = Partial<AssetDescription>;

export class AssetDescriptionFactory {
  readonly #template?: Partial<AssetDescription>;

  constructor(template?: Partial<AssetDescription>) {
    this.#template = template;
  }

  public create(partialAssetDescription: Partial<AssetDescription>): AssetDescription {
    const assetDescription = {
      ...this.#createMinimalDefaults(partialAssetDescription),
      ...partialAssetDescription,
      ...this.#template,
    };

    return assetDescription;
  }

  #createMinimalDefaults(
    {
      assetId,
      assetName,
      assetModelId,
      assetProperties,
      assetHierarchies,
      assetCreationDate,
      assetLastUpdateDate,
      assetStatus,
    }: PartialAssetDescription = {
      assetId: uuid(),
      assetName: 'Asset',
      assetModelId: uuid(),
      assetProperties: [],
      assetHierarchies: [],
      assetCreationDate: new Date(),
      assetLastUpdateDate: new Date(),
      assetStatus: {
        state: 'ACTIVE',
      },
    }
  ) {
    const assetArn = `arn:aws:iotsitewise:us-east-1:123456789012:asset/${assetId}`;
    const defaults = {
      assetId,
      assetModelId,
      assetName,
      assetArn,
      assetProperties,
      assetHierarchies,
      assetCreationDate,
      assetLastUpdateDate,
      assetStatus,
    };

    return defaults;
  }
}
