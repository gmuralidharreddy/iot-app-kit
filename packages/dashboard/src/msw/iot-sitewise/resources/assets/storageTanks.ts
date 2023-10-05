import { v4 as uuid } from 'uuid';
import { AssetDescriptionFactory } from './AssetDescriptionFactory';
import { summarizeAssetDescription } from './summarizeAssetDescription';

const STORAGE_TANK_ASSET_MODEL_ID = uuid();

const CAPACITY_ASSET_PROPERTY = {
  name: 'Capacity',
  id: uuid(),
  dataType: 'INTEGER',
} as const;

const VOLUME_ASSET_PROPERTY = {
  name: 'Volume',
  id: uuid(),
  dataType: 'INTEGER',
} as const;

const storageTankAssetDescriptionFactory = new AssetDescriptionFactory({
  assetModelId: STORAGE_TANK_ASSET_MODEL_ID,
  assetProperties: [CAPACITY_ASSET_PROPERTY, VOLUME_ASSET_PROPERTY],
});

export const AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_1_ASSET_ID = uuid();
export const AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_2_ASSET_ID = uuid();
export const AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_3_ASSET_ID = uuid();

export const AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_1_ASSET_DESCRIPTION = storageTankAssetDescriptionFactory.create({
  assetId: AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_1_ASSET_ID,
  assetName: 'Storage Tank 1',
});
export const AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_2_ASSET_DESCRIPTION = storageTankAssetDescriptionFactory.create({
  assetId: AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_2_ASSET_ID,
  assetName: 'Storage Tank 2',
});
export const AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_3_ASSET_DESCRIPTION = storageTankAssetDescriptionFactory.create({
  assetId: AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_3_ASSET_ID,
  assetName: 'Storage Tank 3',
});

export const AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_1_ASSET_SUMMARY = summarizeAssetDescription(
  AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_1_ASSET_DESCRIPTION
);
export const AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_2_ASSET_SUMMARY = summarizeAssetDescription(
  AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_2_ASSET_DESCRIPTION
);
export const AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_3_ASSET_SUMMARY = summarizeAssetDescription(
  AFRICA_PRODUCTION_LINE_1_STORAGE_TANK_3_ASSET_DESCRIPTION
);
