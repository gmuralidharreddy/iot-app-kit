import { v4 as uuid } from 'uuid';
import { AssetDescriptionFactory } from './AssetDescriptionFactory';
import { summarizeAssetDescription } from './summarizeAssetDescription';

const SITE_ASSET_MODEL_ID = uuid();

export const AFRICA_SITE_ASSET_ID = uuid();
export const ANTARCTICA_SITE_ASSET_ID = uuid();
export const ASIA_SITE_ASSET_ID = uuid();
export const AUSTRALIA_SITE_ASSET_ID = uuid();
export const EUROPE_SITE_ASSET_ID = uuid();
export const NORTH_AMERICA_SITE_ASSET_ID = uuid();
export const SOUTH_AMERICA_SITE_ASSET_ID = uuid();

export const PRODUCTION_LINE_HIERARCHY = {
  id: uuid(),
  name: 'Production Line',
} as const;

export const COORDINATES_ASSET_PROPERTY = {
  name: 'Coordinates',
  id: uuid(),
  dataType: 'STRING',
} as const;

export const PRODUCTION_RATE_ASSET_PROPERTY = {
  name: 'Production Rate',
  id: uuid(),
  dataType: 'DOUBLE',
} as const;

const siteAssetDescriptionFactory = new AssetDescriptionFactory({
  assetModelId: SITE_ASSET_MODEL_ID,
  assetProperties: [COORDINATES_ASSET_PROPERTY, PRODUCTION_RATE_ASSET_PROPERTY],
  assetHierarchies: [PRODUCTION_LINE_HIERARCHY],
});

function createSiteAssetDescription({ assetName, assetId }: { assetName: string; assetId: string }) {
  const assetDescription = siteAssetDescriptionFactory.create({ assetName, assetId });

  return assetDescription;
}

export const AFRICA_SITE_ASSET_DESCRIPTION = createSiteAssetDescription({
  assetName: 'Africa Site',
  assetId: AFRICA_SITE_ASSET_ID,
});
export const ANTARCTICA_SITE_ASSET_DESCRIPTION = createSiteAssetDescription({
  assetName: 'Antarctica Site',
  assetId: ANTARCTICA_SITE_ASSET_ID,
});
export const ASIA_SITE_ASSET_DESCRIPTION = createSiteAssetDescription({
  assetName: 'Asia Site',
  assetId: ASIA_SITE_ASSET_ID,
});
export const AUSTRALIA_SITE_ASSET_DESCRIPTION = createSiteAssetDescription({
  assetName: 'Australia Site',
  assetId: AUSTRALIA_SITE_ASSET_ID,
});
export const EUROPE_SITE_ASSET_DESCRIPTION = createSiteAssetDescription({
  assetName: 'Europe Site',
  assetId: EUROPE_SITE_ASSET_ID,
});
export const NORTH_AMERICA_SITE_ASSET_DESCRIPTION = createSiteAssetDescription({
  assetName: 'North America Site',
  assetId: NORTH_AMERICA_SITE_ASSET_ID,
});
export const SOUTH_AMERICA_SITE_ASSET_DESCRIPTION = createSiteAssetDescription({
  assetName: 'South America Site',
  assetId: SOUTH_AMERICA_SITE_ASSET_ID,
});

export const AFRICA_SITE_ASSET_SUMMARY = summarizeAssetDescription(AFRICA_SITE_ASSET_DESCRIPTION);
export const ANTARCTICA_SITE_ASSET_SUMMARY = summarizeAssetDescription(ANTARCTICA_SITE_ASSET_DESCRIPTION);
export const ASIA_SITE_ASSET_SUMMARY = summarizeAssetDescription(ASIA_SITE_ASSET_DESCRIPTION);
export const AUSTRALIA_SITE_ASSET_SUMMARY = summarizeAssetDescription(AUSTRALIA_SITE_ASSET_DESCRIPTION);
export const EUROPE_SITE_ASSET_SUMMARY = summarizeAssetDescription(EUROPE_SITE_ASSET_DESCRIPTION);
export const NORTH_AMERICA_SITE_ASSET_SUMMARY = summarizeAssetDescription(NORTH_AMERICA_SITE_ASSET_DESCRIPTION);
export const SOUTH_AMERICA_SITE_ASSET_SUMMARY = summarizeAssetDescription(SOUTH_AMERICA_SITE_ASSET_DESCRIPTION);

export type SITE_ASSET_IDS =
  | typeof AFRICA_SITE_ASSET_ID
  | typeof ANTARCTICA_SITE_ASSET_ID
  | typeof ASIA_SITE_ASSET_ID
  | typeof AUSTRALIA_SITE_ASSET_ID
  | typeof EUROPE_SITE_ASSET_ID
  | typeof NORTH_AMERICA_SITE_ASSET_ID
  | typeof SOUTH_AMERICA_SITE_ASSET_ID;

export const SITE_ASSET_DESCRIPTIONS = {
  [AFRICA_SITE_ASSET_ID]: AFRICA_SITE_ASSET_DESCRIPTION,
  [ANTARCTICA_SITE_ASSET_ID]: ANTARCTICA_SITE_ASSET_DESCRIPTION,
  [ASIA_SITE_ASSET_ID]: ASIA_SITE_ASSET_DESCRIPTION,
  [AUSTRALIA_SITE_ASSET_ID]: AUSTRALIA_SITE_ASSET_DESCRIPTION,
  [EUROPE_SITE_ASSET_ID]: EUROPE_SITE_ASSET_DESCRIPTION,
  [NORTH_AMERICA_SITE_ASSET_ID]: NORTH_AMERICA_SITE_ASSET_DESCRIPTION,
  [SOUTH_AMERICA_SITE_ASSET_ID]: SOUTH_AMERICA_SITE_ASSET_DESCRIPTION,
};

export const SITE_ASSET_SUMMARIES = {
  [AFRICA_SITE_ASSET_ID]: AFRICA_SITE_ASSET_SUMMARY,
  [ANTARCTICA_SITE_ASSET_ID]: ANTARCTICA_SITE_ASSET_SUMMARY,
  [ASIA_SITE_ASSET_ID]: ASIA_SITE_ASSET_SUMMARY,
  [AUSTRALIA_SITE_ASSET_ID]: AUSTRALIA_SITE_ASSET_SUMMARY,
  [EUROPE_SITE_ASSET_ID]: EUROPE_SITE_ASSET_SUMMARY,
  [NORTH_AMERICA_SITE_ASSET_ID]: NORTH_AMERICA_SITE_ASSET_SUMMARY,
  [SOUTH_AMERICA_SITE_ASSET_ID]: SOUTH_AMERICA_SITE_ASSET_SUMMARY,
};
