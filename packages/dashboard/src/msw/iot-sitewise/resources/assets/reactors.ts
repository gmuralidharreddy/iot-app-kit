import { v4 as uuid } from 'uuid';
import { AssetDescriptionFactory } from './AssetDescriptionFactory';
import { summarizeAssetDescription } from './summarizeAssetDescription';

const REACTOR_ASSET_MODEL_ID = uuid();

export const TEMPERATURE_ASSET_PROPERTY = {
  name: 'Temperature',
  id: uuid(),
  dataType: 'DOUBLE',
} as const;

export const MAX_TEMPERATURE_ASSET_PROPERTY = {
  name: 'Max Temperature',
  id: uuid(),
  dataType: 'DOUBLE',
} as const;

export const MIN_TEMPERATURE_ASSET_PROPERTY = {
  name: 'Min Temperature',
  id: uuid(),
  dataType: 'DOUBLE',
} as const;

export const PRESSURE_ASSET_PROPERTY = {
  name: 'Pressure',
  id: uuid(),
  dataType: 'DOUBLE',
} as const;

export const MAX_PRESSURE_ASSET_PROPERTY = {
  name: 'Max Pressure',
  id: uuid(),
  dataType: 'DOUBLE',
} as const;

export const MIN_PRESSURE_ASSET_PROPERTY = {
  name: 'Min Pressure',
  id: uuid(),
  dataType: 'DOUBLE',
} as const;

const reactorAssetDescriptionFactory = new AssetDescriptionFactory({
  assetModelId: REACTOR_ASSET_MODEL_ID,
  assetProperties: [
    TEMPERATURE_ASSET_PROPERTY,
    MAX_TEMPERATURE_ASSET_PROPERTY,
    MIN_TEMPERATURE_ASSET_PROPERTY,
    PRESSURE_ASSET_PROPERTY,
    MAX_PRESSURE_ASSET_PROPERTY,
    MIN_PRESSURE_ASSET_PROPERTY,
  ],
});

export const AFRICA_PRODUCTION_LINE_1_REACTOR_1_ASSET_ID = uuid();
export const AFRICA_PRODUCTION_LINE_1_REACTOR_2_ASSET_ID = uuid();
export const AFRICA_PRODUCTION_LINE_1_REACTOR_3_ASSET_ID = uuid();
export const AFRICA_PRODUCTION_LINE_1_REACTOR_4_ASSET_ID = uuid();
export const AFRICA_PRODUCTION_LINE_1_REACTOR_5_ASSET_ID = uuid();

export const AFRICA_PRODUCTION_LINE_1_REACTOR_1_ASSET_DESCRIPTION = reactorAssetDescriptionFactory.create({
  assetId: AFRICA_PRODUCTION_LINE_1_REACTOR_1_ASSET_ID,
  assetName: 'Reactor 1',
});
export const AFRICA_PRODUCTION_LINE_1_REACTOR_2_ASSET_DESCRIPTION = reactorAssetDescriptionFactory.create({
  assetId: AFRICA_PRODUCTION_LINE_1_REACTOR_2_ASSET_ID,
  assetName: 'Reactor 2',
});
export const AFRICA_PRODUCTION_LINE_1_REACTOR_3_ASSET_DESCRIPTION = reactorAssetDescriptionFactory.create({
  assetId: AFRICA_PRODUCTION_LINE_1_REACTOR_3_ASSET_ID,
  assetName: 'Reactor 3',
});
export const AFRICA_PRODUCTION_LINE_1_REACTOR_4_ASSET_DESCRIPTION = reactorAssetDescriptionFactory.create({
  assetId: AFRICA_PRODUCTION_LINE_1_REACTOR_4_ASSET_ID,
  assetName: 'Reactor 4',
});
export const AFRICA_PRODUCTION_LINE_1_REACTOR_5_ASSET_DESCRIPTION = reactorAssetDescriptionFactory.create({
  assetId: AFRICA_PRODUCTION_LINE_1_REACTOR_5_ASSET_ID,
  assetName: 'Reactor 5',
});

export const AFRICA_PRODUCTION_LINE_1_REACTOR_1_ASSET_SUMMARY = summarizeAssetDescription(
  AFRICA_PRODUCTION_LINE_1_REACTOR_1_ASSET_DESCRIPTION
);
export const AFRICA_PRODUCTION_LINE_1_REACTOR_2_ASSET_SUMMARY = summarizeAssetDescription(
  AFRICA_PRODUCTION_LINE_1_REACTOR_2_ASSET_DESCRIPTION
);
export const AFRICA_PRODUCTION_LINE_1_REACTOR_3_ASSET_SUMMARY = summarizeAssetDescription(
  AFRICA_PRODUCTION_LINE_1_REACTOR_3_ASSET_DESCRIPTION
);
export const AFRICA_PRODUCTION_LINE_1_REACTOR_4_ASSET_SUMMARY = summarizeAssetDescription(
  AFRICA_PRODUCTION_LINE_1_REACTOR_4_ASSET_DESCRIPTION
);
export const AFRICA_PRODUCTION_LINE_1_REACTOR_5_ASSET_SUMMARY = summarizeAssetDescription(
  AFRICA_PRODUCTION_LINE_1_REACTOR_5_ASSET_DESCRIPTION
);
