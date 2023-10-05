import { v4 as uuid } from 'uuid';
import { AssetDescriptionFactory } from './AssetDescriptionFactory';
import { summarizeAssetDescription } from './summarizeAssetDescription';

const PRODUCTION_LINE_ASSET_MODEL_ID = uuid();

export const REACTOR_HIERARCHY = {
  id: uuid(),
  name: 'Reactor',
} as const;

export const STORAGE_TANK_HIERARCHY = {
  id: uuid(),
  name: 'Storage Tank',
} as const;

export const AFRICA_PRODUCTION_LINE_1_ASSET_ID = uuid();
export const AFRICA_PRODUCTION_LINE_2_ASSET_ID = uuid();
export const AFRICA_PRODUCTION_LINE_3_ASSET_ID = uuid();
export const AFRICA_PRODUCTION_LINE_4_ASSET_ID = uuid();

const productionLineAssetDescriptionFactory = new AssetDescriptionFactory({
  assetModelId: PRODUCTION_LINE_ASSET_MODEL_ID,
  assetHierarchies: [REACTOR_HIERARCHY, STORAGE_TANK_HIERARCHY],
});

export const AFRICA_PRODUCTION_LINE_1_ASSET_DESCRIPTION = productionLineAssetDescriptionFactory.create({
  assetId: AFRICA_PRODUCTION_LINE_1_ASSET_ID,
  assetName: 'Africa Production Line 1',
});
export const AFRICA_PRODUCTION_LINE_2_ASSET_DESCRIPTION = productionLineAssetDescriptionFactory.create({
  assetId: AFRICA_PRODUCTION_LINE_2_ASSET_ID,
  assetName: 'Africa Production Line 2',
});
export const AFRICA_PRODUCTION_LINE_3_ASSET_DESCRIPTION = productionLineAssetDescriptionFactory.create({
  assetId: AFRICA_PRODUCTION_LINE_3_ASSET_ID,
  assetName: 'Africa Production Line 3',
});
export const AFRICA_PRODUCTION_LINE_4_ASSET_DESCRIPTION = productionLineAssetDescriptionFactory.create({
  assetId: AFRICA_PRODUCTION_LINE_4_ASSET_ID,
  assetName: 'Africa Production Line 4',
});

export const AFRICA_PRODUCTION_LINE_1_ASSET_SUMMARY = summarizeAssetDescription(
  AFRICA_PRODUCTION_LINE_1_ASSET_DESCRIPTION
);
export const AFRICA_PRODUCTION_LINE_2_ASSET_SUMMARY = summarizeAssetDescription(
  AFRICA_PRODUCTION_LINE_2_ASSET_DESCRIPTION
);
export const AFRICA_PRODUCTION_LINE_3_ASSET_SUMMARY = summarizeAssetDescription(
  AFRICA_PRODUCTION_LINE_3_ASSET_DESCRIPTION
);
export const AFRICA_PRODUCTION_LINE_4_ASSET_SUMMARY = summarizeAssetDescription(
  AFRICA_PRODUCTION_LINE_4_ASSET_DESCRIPTION
);
