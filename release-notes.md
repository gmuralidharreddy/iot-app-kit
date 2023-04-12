:robot: I have created a release *beep* *boop*
---


<details><summary>components: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/components-v5.2.0...components-v6.0.0) (2023-04-12)


###   BREAKING CHANGES

* **ReactComponents:** remove web-component iot app kit visualizations
* **TableComponent:** replace table annotations API with thresholds, remove stencilJS wrapper
* Remove unecessary exports, utilize core types instead of SynchroChart types ([#600](https://github.com/awslabs/iot-app-kit/issues/600))
* **core:** Refactored export from `@iot-app-kit/core` IoTAppKitDataModule to be named TimeSeriesDataModule, and removed the concept of multiple data sources per time series data module

### Features

* Add Asset Hierarchy loading & Asset Tree support ([e36380a](https://github.com/awslabs/iot-app-kit/commit/e36380ad011b3e0b10a3b8a2d65245446248f55f))
* Add Core SiteWise Asset Module ([a3ffec2](https://github.com/awslabs/iot-app-kit/commit/a3ffec2e490542b9bdd5587316e4ddd72573c109))
* add in styles overrides and refId in query ([#38](https://github.com/awslabs/iot-app-kit/issues/38)) ([76a9d63](https://github.com/awslabs/iot-app-kit/commit/76a9d63e02a13f3229f1ee58a1d35b974fe81ae2))
* add npm-publish github workflow ([#68](https://github.com/awslabs/iot-app-kit/issues/68)) ([64e64b8](https://github.com/awslabs/iot-app-kit/commit/64e64b800ad3b6ddbee78cfe84c3750e73dead65))
* Add proposed API changes within types declarations ([#37](https://github.com/awslabs/iot-app-kit/issues/37)) ([629fbeb](https://github.com/awslabs/iot-app-kit/commit/629fbeb46e10cfce699ca2c7906e651cb2a83f7b))
* add support for resolution mapping ([#16](https://github.com/awslabs/iot-app-kit/issues/16)) ([8dda905](https://github.com/awslabs/iot-app-kit/commit/8dda905ff27d6e5a749a7f90d59dd6cf1dad4ec8))
* add test runner github action ([#8](https://github.com/awslabs/iot-app-kit/issues/8)) ([ef398b9](https://github.com/awslabs/iot-app-kit/commit/ef398b9e9c65c75562d87ec95e3b9c7b90751eaa))
* allow to specify region for data-module ([#4](https://github.com/awslabs/iot-app-kit/issues/4)) ([ae2ef66](https://github.com/awslabs/iot-app-kit/commit/ae2ef662ef98230fa64676e374e0401cbe64cce3))
* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))
* api simplification of requestSettings ([#27](https://github.com/awslabs/iot-app-kit/issues/27)) ([537b8ca](https://github.com/awslabs/iot-app-kit/commit/537b8ca3a459cb1ea70ec99a10697f34ba343657))
* backfill component integration tests ([#66](https://github.com/awslabs/iot-app-kit/issues/66)) ([4f17201](https://github.com/awslabs/iot-app-kit/commit/4f17201f5990876b67861f091dbdcdb5345a28c2))
* batch API for historical, aggregated, and latest value data ([#137](https://github.com/awslabs/iot-app-kit/issues/137)) ([b7a38e2](https://github.com/awslabs/iot-app-kit/commit/b7a38e225199989524914b88f8da43ca77af2e54))
* bind gestures to components ([#31](https://github.com/awslabs/iot-app-kit/issues/31)) ([799763b](https://github.com/awslabs/iot-app-kit/commit/799763b8dc0adf146704ad56d7814bc3ae88d3e9))
* **components:** support viewport grouping in iot-table using ViewportManager. ([feba985](https://github.com/awslabs/iot-app-kit/commit/feba985487156207fee0ca576ed76d39133d9db0))
* **core:** Refactor time series data module to  remove unused functionality. Add meta field to data stream. ([7f12267](https://github.com/awslabs/iot-app-kit/commit/7f1226784158bdfff6ab67ab5b0523649a2f7a34))
* create react-components and source-iotsitewise pkgs ([#57](https://github.com/awslabs/iot-app-kit/issues/57)) ([16451b1](https://github.com/awslabs/iot-app-kit/commit/16451b12e0fe2662069275185b2fea61048d3fab))
* create tree table base component ([#15](https://github.com/awslabs/iot-app-kit/issues/15)) ([4678f80](https://github.com/awslabs/iot-app-kit/commit/4678f80a114958d8fedf51c980fc3c2fbd718d2c))
* customizable resolutions ([#23](https://github.com/awslabs/iot-app-kit/issues/23)) ([0ffd474](https://github.com/awslabs/iot-app-kit/commit/0ffd4748c3be124045def6a404d097aa0d029a7b))
* **dashboard/components:** memoize components to prevent unnecessary re-renders ([50050ca](https://github.com/awslabs/iot-app-kit/commit/50050ca206efa320256b848f187854c11de85d73))
* **dashboard:** refactor sitewise clients ([ddac5b2](https://github.com/awslabs/iot-app-kit/commit/ddac5b2626d24bf8bfacb840611b8b880b2c99af))
* error handling/data-module core ([#14](https://github.com/awslabs/iot-app-kit/issues/14)) ([376929f](https://github.com/awslabs/iot-app-kit/commit/376929fda106a808d312b8b92a309c9184857fe1))
* expand children in resource explorer ([#115](https://github.com/awslabs/iot-app-kit/issues/115)) ([8f1c03c](https://github.com/awslabs/iot-app-kit/commit/8f1c03c57f19c30dc04fbad10b5622ad9fc3c5bd))
* explicitly type sitewise query ([#59](https://github.com/awslabs/iot-app-kit/issues/59)) ([e62f44b](https://github.com/awslabs/iot-app-kit/commit/e62f44b6a776d09677786e8978a0c0c2d786c9d1))
* improve error handling ([#61](https://github.com/awslabs/iot-app-kit/issues/61)) ([5016e41](https://github.com/awslabs/iot-app-kit/commit/5016e4108714edc3e3b2a2465126f48212068ffd))
* Introduce alarms ([#135](https://github.com/awslabs/iot-app-kit/issues/135)) ([5c19b99](https://github.com/awslabs/iot-app-kit/commit/5c19b9957c05fbc8df15545ae9847d39030b686b))
* introduce module coordinator ([#47](https://github.com/awslabs/iot-app-kit/issues/47)) ([36684eb](https://github.com/awslabs/iot-app-kit/commit/36684ebf6eb71928c3b66f9bb694a3694a2dbabf))
* Onboard cypress with component test runner ([#34](https://github.com/awslabs/iot-app-kit/issues/34)) ([b82d682](https://github.com/awslabs/iot-app-kit/commit/b82d682798295547248df2ffa57f0790dd328d96))
* pass thru annotations ([#65](https://github.com/awslabs/iot-app-kit/issues/65)) ([f9e3d31](https://github.com/awslabs/iot-app-kit/commit/f9e3d31fae6f5b2f905edc6f26875e8b8317cb5a))
* prevent unsupported data types from being rendered ([#426](https://github.com/awslabs/iot-app-kit/issues/426)) ([dec2a86](https://github.com/awslabs/iot-app-kit/commit/dec2a86f0eccfe87ebfc32d89f74fb8695bb552d))
* **props:** adapt props for synchro-charts ([#133](https://github.com/awslabs/iot-app-kit/issues/133)) ([a98bf06](https://github.com/awslabs/iot-app-kit/commit/a98bf064f14979823f51437dbd599259b6bd6d78))
* query provider classes and TimeSeriesData support ([#51](https://github.com/awslabs/iot-app-kit/issues/51)) ([173f46a](https://github.com/awslabs/iot-app-kit/commit/173f46a8951339da412a9e5c3ba282f41a897718))
* **React18:** Adds support for react 18 ([596c6b0](https://github.com/awslabs/iot-app-kit/commit/596c6b0ca2757baf445e4b203c3546e2d041e559))
* refactor app kit ([#67](https://github.com/awslabs/iot-app-kit/issues/67)) ([215584d](https://github.com/awslabs/iot-app-kit/commit/215584db25265437117462c579c1d15c2f1e4dca))
* Refactor Asset Tree to use the new Query/Provider system ([#62](https://github.com/awslabs/iot-app-kit/issues/62)) ([cccbe61](https://github.com/awslabs/iot-app-kit/commit/cccbe61cb596b284752cc240b8e95e261b03956b))
* Refactor Site Wise Asset session interface to support Promises ([#40](https://github.com/awslabs/iot-app-kit/issues/40)) ([184ccc6](https://github.com/awslabs/iot-app-kit/commit/184ccc6dc6ce9236048aa6e8595e7d4e61afeed3))
* request data in descending order ([#30](https://github.com/awslabs/iot-app-kit/issues/30)) ([29b23a7](https://github.com/awslabs/iot-app-kit/commit/29b23a775acae75c65172e68e4b502e5238f863f))
* Resource Explorer ([#24](https://github.com/awslabs/iot-app-kit/issues/24)) ([2e9d746](https://github.com/awslabs/iot-app-kit/commit/2e9d7467ff3aa4c954f486f89a6693a193821cb2))
* restructure mocks of sitewise to all be co-located ([#52](https://github.com/awslabs/iot-app-kit/issues/52)) ([557484f](https://github.com/awslabs/iot-app-kit/commit/557484f3182168b6253d653417318dcbd127698e))
* sitewise components use query and provider ([#54](https://github.com/awslabs/iot-app-kit/issues/54)) ([80cf5d4](https://github.com/awslabs/iot-app-kit/commit/80cf5d4cf08e78d05b90bb0c84c18323885c32e5))
* Sitewise Resource Explorer ([#21](https://github.com/awslabs/iot-app-kit/issues/21)) ([8f26b58](https://github.com/awslabs/iot-app-kit/commit/8f26b58433ff05bd6709c7659dfb6b015e6a90dd))
* source-iotsitewise useable module ([#63](https://github.com/awslabs/iot-app-kit/issues/63)) ([21a1014](https://github.com/awslabs/iot-app-kit/commit/21a1014b29df70185360d71fdfb963863b1944d9))
* support auto-assigning colors for certain components ([#96](https://github.com/awslabs/iot-app-kit/issues/96)) ([d75e426](https://github.com/awslabs/iot-app-kit/commit/d75e4261088fefab5886a0325818228930c6f363))
* support fetchMostRecentBeforeStart ([#79](https://github.com/awslabs/iot-app-kit/issues/79)) ([c44b7b8](https://github.com/awslabs/iot-app-kit/commit/c44b7b8d3e04d1b7becacd1fe1f7c59de681d517))
* Support multiple queries per subscription ([#39](https://github.com/awslabs/iot-app-kit/issues/39)) ([57772c1](https://github.com/awslabs/iot-app-kit/commit/57772c1b9beb5a0b39d5e1475bd0b0038271f944))
* **TableComponent:** replace table annotations API with thresholds, remove stencilJS wrapper ([74880c4](https://github.com/awslabs/iot-app-kit/commit/74880c44117c12a494f6c6591f0c6df21cd7d00f))
* **table:** support messageOverrides ([#211](https://github.com/awslabs/iot-app-kit/issues/211)) ([ccb7a32](https://github.com/awslabs/iot-app-kit/commit/ccb7a3286962f459386d10d84a923621b5839625))
* **TwinMaker:** Add TwinMaker packages ([#252](https://github.com/awslabs/iot-app-kit/issues/252)) ([fabbe03](https://github.com/awslabs/iot-app-kit/commit/fabbe0399dd37293e99588124404c37c929f4330))
* update sitewise component interface ([#58](https://github.com/awslabs/iot-app-kit/issues/58)) ([1927053](https://github.com/awslabs/iot-app-kit/commit/1927053f7c8b3dff25b26d246e632ba2b26a4429))
* update synchro charts to 3.1.0, update docs ([#92](https://github.com/awslabs/iot-app-kit/issues/92)) ([10a55fa](https://github.com/awslabs/iot-app-kit/commit/10a55fad0b2eb1271aa449f0c0ebfc010a40e08b))


### Bug Fixes

* Add appropriate default resolution for bar chart ([#76](https://github.com/awslabs/iot-app-kit/issues/76)) ([ddce235](https://github.com/awslabs/iot-app-kit/commit/ddce2355bbb8edefaa246ea1872efef6c24a480a))
* build to pass when publishing package ([#635](https://github.com/awslabs/iot-app-kit/issues/635)) ([82c3c42](https://github.com/awslabs/iot-app-kit/commit/82c3c42f1f59b42024f3a25a6dc4283b507d6a64))
* **components:** fix connector to iot app kit components ([be91864](https://github.com/awslabs/iot-app-kit/commit/be91864aee326c1c3fd5320b30b86d34f9f246d0))
* **components:** import missing CSS style sheets. ([9634ec9](https://github.com/awslabs/iot-app-kit/commit/9634ec92bb471700e5e982bf014b355595cf7f25))
* **components:** move message merge to componentWillRender() ([8e2d260](https://github.com/awslabs/iot-app-kit/commit/8e2d2601a2e7e6808b0c1037cee1dd7957b39af3))
* **dashboard/components:** add missing prop to webgl component and refactor in dashboard to fix overlay problem ([59738ac](https://github.com/awslabs/iot-app-kit/commit/59738ac9551aa5b55448281a82fa88d1edc700d0))
* **deps:** update synchro-charts, node-sass, nth-check ([#295](https://github.com/awslabs/iot-app-kit/issues/295)) ([164b751](https://github.com/awslabs/iot-app-kit/commit/164b7511ef2d42f1e816d804628440e577f03e43))
* mock SDK in component tests ([#56](https://github.com/awslabs/iot-app-kit/issues/56)) ([dd4bab5](https://github.com/awslabs/iot-app-kit/commit/dd4bab50d755baad24ec907312d428b9161389ac))
* prevent stream render if dataType unknown ([#448](https://github.com/awslabs/iot-app-kit/issues/448)) ([16999db](https://github.com/awslabs/iot-app-kit/commit/16999dbf8ed18770cccda0c993041a57e1c3d0c0))
* related-table eslint and prettier ([#10](https://github.com/awslabs/iot-app-kit/issues/10)) ([67a7149](https://github.com/awslabs/iot-app-kit/commit/67a7149131813b8239079f2b931c78e5b607a708))
* remove prettier, enforce eslint on build ([#29](https://github.com/awslabs/iot-app-kit/issues/29)) ([1b2e5ca](https://github.com/awslabs/iot-app-kit/commit/1b2e5cad203a561feda89544382e38f453c64124))
* Remove unecessary exports, utilize core types instead of SynchroChart types ([#600](https://github.com/awslabs/iot-app-kit/issues/600)) ([15d6740](https://github.com/awslabs/iot-app-kit/commit/15d67401b7e152eeba1e550efc75faf79cefbf7e))
* requestBuffer ([#49](https://github.com/awslabs/iot-app-kit/issues/49)) ([b342b32](https://github.com/awslabs/iot-app-kit/commit/b342b32d5701cb9fe48e793628d6f0f89a2248f8))
* resolves [#83](https://github.com/awslabs/iot-app-kit/issues/83) ([#87](https://github.com/awslabs/iot-app-kit/issues/87)) ([364716f](https://github.com/awslabs/iot-app-kit/commit/364716f72857526b93e63146fa378d2464974400))
* sitewise source time series module ([#71](https://github.com/awslabs/iot-app-kit/issues/71)) ([6671217](https://github.com/awslabs/iot-app-kit/commit/6671217f3f2b813ecec6e907ee85ba6e0dd347c6))
* testing ground DataModule parameter ([#17](https://github.com/awslabs/iot-app-kit/issues/17)) ([61632de](https://github.com/awslabs/iot-app-kit/commit/61632de997cc5ced9e21b2625d6e221432649803))
* **typescript:** re-enables typescript for component package tests ([12f60b7](https://github.com/awslabs/iot-app-kit/commit/12f60b7847853e17d398e6346d470606467e2d5c))
* use viewport from provider ([#515](https://github.com/awslabs/iot-app-kit/issues/515)) ([eb515a5](https://github.com/awslabs/iot-app-kit/commit/eb515a58cb807f421ca62004bb07cc3bdcb7cc50))


### Code Refactoring

* **ReactComponents:** remove web-component iot app kit visualizations ([e0cb301](https://github.com/awslabs/iot-app-kit/commit/e0cb301d1dc204f55684cbd61d4d5c2b66276556))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/related-table bumped from 5.2.0 to 6.0.0
  * devDependencies
    * @iot-app-kit/source-iotsitewise bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/testing-util bumped from 5.2.0 to 6.0.0
    * eslint-config-iot-app-kit bumped from 5.2.0 to 6.0.0
</details>

<details><summary>core: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/core-v5.2.0...core-v6.0.0) (2023-04-12)


###   BREAKING CHANGES

* **core, source-iotsitewise, source-iottwinmaker, react-components:** Add toQueryString method on Query type, implement in iotsitewise and iottwinmaker ([#634](https://github.com/awslabs/iot-app-kit/issues/634))
* **core, source-iotsitewise:** 
* Remove unecessary exports, utilize core types instead of SynchroChart types ([#600](https://github.com/awslabs/iot-app-kit/issues/600))
* **core,source-iotsitewise:** Change time series data modules getRequestsFromQueries to be async
* **core:** Refactored export from `@iot-app-kit/core` IoTAppKitDataModule to be named TimeSeriesDataModule, and removed the concept of multiple data sources per time series data module

### Features

* Add Asset Hierarchy loading & Asset Tree support ([e36380a](https://github.com/awslabs/iot-app-kit/commit/e36380ad011b3e0b10a3b8a2d65245446248f55f))
* Add Core SiteWise Asset Module ([a3ffec2](https://github.com/awslabs/iot-app-kit/commit/a3ffec2e490542b9bdd5587316e4ddd72573c109))
* add in styles overrides and refId in query ([#38](https://github.com/awslabs/iot-app-kit/issues/38)) ([76a9d63](https://github.com/awslabs/iot-app-kit/commit/76a9d63e02a13f3229f1ee58a1d35b974fe81ae2))
* add npm-publish github workflow ([#68](https://github.com/awslabs/iot-app-kit/issues/68)) ([64e64b8](https://github.com/awslabs/iot-app-kit/commit/64e64b800ad3b6ddbee78cfe84c3750e73dead65))
* Add proposed API changes within types declarations ([#37](https://github.com/awslabs/iot-app-kit/issues/37)) ([629fbeb](https://github.com/awslabs/iot-app-kit/commit/629fbeb46e10cfce699ca2c7906e651cb2a83f7b))
* add support for aggregated data for sitewise data source ([#6](https://github.com/awslabs/iot-app-kit/issues/6)) ([a50b31e](https://github.com/awslabs/iot-app-kit/commit/a50b31e8da30b93aa02ea8e89e44fa686bd71d67))
* add support for resolution mapping ([#16](https://github.com/awslabs/iot-app-kit/issues/16)) ([8dda905](https://github.com/awslabs/iot-app-kit/commit/8dda905ff27d6e5a749a7f90d59dd6cf1dad4ec8))
* Add support for update within subscribeToTimeSeriesData ([#53](https://github.com/awslabs/iot-app-kit/issues/53)) ([83b100f](https://github.com/awslabs/iot-app-kit/commit/83b100f29e7a2d5062597c13946db44af2ae4029))
* add test runner github action ([#8](https://github.com/awslabs/iot-app-kit/issues/8)) ([ef398b9](https://github.com/awslabs/iot-app-kit/commit/ef398b9e9c65c75562d87ec95e3b9c7b90751eaa))
* allow to specify region for data-module ([#4](https://github.com/awslabs/iot-app-kit/issues/4)) ([ae2ef66](https://github.com/awslabs/iot-app-kit/commit/ae2ef662ef98230fa64676e374e0401cbe64cce3))
* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))
* api simplification of requestSettings ([#27](https://github.com/awslabs/iot-app-kit/issues/27)) ([537b8ca](https://github.com/awslabs/iot-app-kit/commit/537b8ca3a459cb1ea70ec99a10697f34ba343657))
* batch API for historical, aggregated, and latest value data ([#137](https://github.com/awslabs/iot-app-kit/issues/137)) ([b7a38e2](https://github.com/awslabs/iot-app-kit/commit/b7a38e225199989524914b88f8da43ca77af2e54))
* **components:** support viewport grouping in iot-table using ViewportManager. ([feba985](https://github.com/awslabs/iot-app-kit/commit/feba985487156207fee0ca576ed76d39133d9db0))
* **core, source-iotsitewise, source-iottwinmaker, react-components:** Add toQueryString method on Query type, implement in iotsitewise and iottwinmaker ([#634](https://github.com/awslabs/iot-app-kit/issues/634)) ([38a4b98](https://github.com/awslabs/iot-app-kit/commit/38a4b9833ba45eb54585581d661badd93162540c))
* **core,source-iotsitewise:** Change time series data modules getRequestsFromQueries to be async ([69a017e](https://github.com/awslabs/iot-app-kit/commit/69a017ea8dfbd99fcd3c155278cac3c241b30527))
* **core:** Add meta field to requestInfos in TimeSeriesDataModule ([5db70c8](https://github.com/awslabs/iot-app-kit/commit/5db70c85e51dd6a44b2ab89049a952da9140c990))
* **core:** Add viewportManager to orchestrate viewport syncing within groups ([8990d13](https://github.com/awslabs/iot-app-kit/commit/8990d135c26cc02619a87312d8b00edc5978a603))
* **core:** Refactor time series data module to  remove unused functionality. Add meta field to data stream. ([7f12267](https://github.com/awslabs/iot-app-kit/commit/7f1226784158bdfff6ab67ab5b0523649a2f7a34))
* **core:** Support caching of dataType, name and other fields describing dataStreams ([542add6](https://github.com/awslabs/iot-app-kit/commit/542add6cac2f40c421687843c3977c9e4cb6e808))
* create react-components and source-iotsitewise pkgs ([#57](https://github.com/awslabs/iot-app-kit/issues/57)) ([16451b1](https://github.com/awslabs/iot-app-kit/commit/16451b12e0fe2662069275185b2fea61048d3fab))
* customizable resolutions ([#23](https://github.com/awslabs/iot-app-kit/issues/23)) ([0ffd474](https://github.com/awslabs/iot-app-kit/commit/0ffd4748c3be124045def6a404d097aa0d029a7b))
* error handling/data-module core ([#14](https://github.com/awslabs/iot-app-kit/issues/14)) ([376929f](https://github.com/awslabs/iot-app-kit/commit/376929fda106a808d312b8b92a309c9184857fe1))
* explicitly type sitewise query ([#59](https://github.com/awslabs/iot-app-kit/issues/59)) ([e62f44b](https://github.com/awslabs/iot-app-kit/commit/e62f44b6a776d09677786e8978a0c0c2d786c9d1))
* expose ttlDurationMapping as data module configuration ([#20](https://github.com/awslabs/iot-app-kit/issues/20)) ([acb7520](https://github.com/awslabs/iot-app-kit/commit/acb752048840e7de6b087d45ecc999ed13a4b355))
* improve error handling ([#61](https://github.com/awslabs/iot-app-kit/issues/61)) ([5016e41](https://github.com/awslabs/iot-app-kit/commit/5016e4108714edc3e3b2a2465126f48212068ffd))
* increase sitewise default resolution mapping thresholds ([#46](https://github.com/awslabs/iot-app-kit/issues/46)) ([f2d1011](https://github.com/awslabs/iot-app-kit/commit/f2d10116e512bb4ba799cb09b5227098ea43b688))
* Introduce alarms ([#135](https://github.com/awslabs/iot-app-kit/issues/135)) ([5c19b99](https://github.com/awslabs/iot-app-kit/commit/5c19b9957c05fbc8df15545ae9847d39030b686b))
* introduce module coordinator ([#47](https://github.com/awslabs/iot-app-kit/issues/47)) ([36684eb](https://github.com/awslabs/iot-app-kit/commit/36684ebf6eb71928c3b66f9bb694a3694a2dbabf))
* prevent unsupported data types from being rendered ([#426](https://github.com/awslabs/iot-app-kit/issues/426)) ([dec2a86](https://github.com/awslabs/iot-app-kit/commit/dec2a86f0eccfe87ebfc32d89f74fb8695bb552d))
* **props:** adapt props for synchro-charts ([#133](https://github.com/awslabs/iot-app-kit/issues/133)) ([a98bf06](https://github.com/awslabs/iot-app-kit/commit/a98bf064f14979823f51437dbd599259b6bd6d78))
* query provider classes and TimeSeriesData support ([#51](https://github.com/awslabs/iot-app-kit/issues/51)) ([173f46a](https://github.com/awslabs/iot-app-kit/commit/173f46a8951339da412a9e5c3ba282f41a897718))
* refactor app kit ([#67](https://github.com/awslabs/iot-app-kit/issues/67)) ([215584d](https://github.com/awslabs/iot-app-kit/commit/215584db25265437117462c579c1d15c2f1e4dca))
* Refactor Asset Tree to use the new Query/Provider system ([#62](https://github.com/awslabs/iot-app-kit/issues/62)) ([cccbe61](https://github.com/awslabs/iot-app-kit/commit/cccbe61cb596b284752cc240b8e95e261b03956b))
* Refactor Site Wise Asset session interface to support Promises ([#40](https://github.com/awslabs/iot-app-kit/issues/40)) ([184ccc6](https://github.com/awslabs/iot-app-kit/commit/184ccc6dc6ce9236048aa6e8595e7d4e61afeed3))
* request data in descending order ([#30](https://github.com/awslabs/iot-app-kit/issues/30)) ([29b23a7](https://github.com/awslabs/iot-app-kit/commit/29b23a775acae75c65172e68e4b502e5238f863f))
* Resource Explorer ([#24](https://github.com/awslabs/iot-app-kit/issues/24)) ([2e9d746](https://github.com/awslabs/iot-app-kit/commit/2e9d7467ff3aa4c954f486f89a6693a193821cb2))
* restructure mocks of sitewise to all be co-located ([#52](https://github.com/awslabs/iot-app-kit/issues/52)) ([557484f](https://github.com/awslabs/iot-app-kit/commit/557484f3182168b6253d653417318dcbd127698e))
* sitewise components use query and provider ([#54](https://github.com/awslabs/iot-app-kit/issues/54)) ([80cf5d4](https://github.com/awslabs/iot-app-kit/commit/80cf5d4cf08e78d05b90bb0c84c18323885c32e5))
* support fetchMostRecentBeforeStart ([#79](https://github.com/awslabs/iot-app-kit/issues/79)) ([c44b7b8](https://github.com/awslabs/iot-app-kit/commit/c44b7b8d3e04d1b7becacd1fe1f7c59de681d517))
* Support multiple queries per subscription ([#39](https://github.com/awslabs/iot-app-kit/issues/39)) ([57772c1](https://github.com/awslabs/iot-app-kit/commit/57772c1b9beb5a0b39d5e1475bd0b0038271f944))
* **table:** create new Table component based on AWSUI Table component ([#129](https://github.com/awslabs/iot-app-kit/issues/129)) ([ba18720](https://github.com/awslabs/iot-app-kit/commit/ba18720829be791fd030e4a6cf57f2254b65f09f))
* update sitewise component interface ([#58](https://github.com/awslabs/iot-app-kit/issues/58)) ([1927053](https://github.com/awslabs/iot-app-kit/commit/1927053f7c8b3dff25b26d246e632ba2b26a4429))
* Wrap SiteWise Asset related API calls in a Data Source ([36475b8](https://github.com/awslabs/iot-app-kit/commit/36475b826b11a4ac205312eaee63f7188d1b9ea8))


### Bug Fixes

* backfill on requestBuffer tests ([#55](https://github.com/awslabs/iot-app-kit/issues/55)) ([416eea1](https://github.com/awslabs/iot-app-kit/commit/416eea108bc9b353ab9da1d98f3f3ceeaf994cdb))
* **components:** fix connector to iot app kit components ([be91864](https://github.com/awslabs/iot-app-kit/commit/be91864aee326c1c3fd5320b30b86d34f9f246d0))
* **composer:** fix object transforms during reparenting ([#477](https://github.com/awslabs/iot-app-kit/issues/477)) ([7a45bb3](https://github.com/awslabs/iot-app-kit/commit/7a45bb3eb1c2418396b39c7d092a380eb32ba250))
* **core, source-iotsitewise:** Remove unecessary exports ([#620](https://github.com/awslabs/iot-app-kit/issues/620)) ([4bfe6f8](https://github.com/awslabs/iot-app-kit/commit/4bfe6f8724b48e28c7efc668aa7268f39e60385a))
* **core:** add currentTime param to viewportStartDate and `viewportEndDate` ([ea75c74](https://github.com/awslabs/iot-app-kit/commit/ea75c748e48f8490d3fc9dce87ddee9ea4e84222))
* **core:** use Map to avoid prototype pollution ([fa0b7ef](https://github.com/awslabs/iot-app-kit/commit/fa0b7efaf27a62ad155a589d13096529e67fb874))
* **dashboard/components:** add missing prop to webgl component and refactor in dashboard to fix overlay problem ([59738ac](https://github.com/awslabs/iot-app-kit/commit/59738ac9551aa5b55448281a82fa88d1edc700d0))
* **deps:** update synchro-charts, node-sass, nth-check ([#295](https://github.com/awslabs/iot-app-kit/issues/295)) ([164b751](https://github.com/awslabs/iot-app-kit/commit/164b7511ef2d42f1e816d804628440e577f03e43))
* Fix setTimeout error ([#32](https://github.com/awslabs/iot-app-kit/issues/32)) ([e174598](https://github.com/awslabs/iot-app-kit/commit/e174598bd6d323ed48af6feee610dc4312d26462))
* mock SDK in component tests ([#56](https://github.com/awslabs/iot-app-kit/issues/56)) ([dd4bab5](https://github.com/awslabs/iot-app-kit/commit/dd4bab50d755baad24ec907312d428b9161389ac))
* related-table eslint and prettier ([#10](https://github.com/awslabs/iot-app-kit/issues/10)) ([67a7149](https://github.com/awslabs/iot-app-kit/commit/67a7149131813b8239079f2b931c78e5b607a708))
* remove full file eslint disable. Switch to minimal eslint disable. ([ba18720](https://github.com/awslabs/iot-app-kit/commit/ba18720829be791fd030e4a6cf57f2254b65f09f))
* remove prettier, enforce eslint on build ([#29](https://github.com/awslabs/iot-app-kit/issues/29)) ([1b2e5ca](https://github.com/awslabs/iot-app-kit/commit/1b2e5cad203a561feda89544382e38f453c64124))
* Remove unecessary exports, utilize core types instead of SynchroChart types ([#600](https://github.com/awslabs/iot-app-kit/issues/600)) ([15d6740](https://github.com/awslabs/iot-app-kit/commit/15d67401b7e152eeba1e550efc75faf79cefbf7e))
* requestBuffer ([#49](https://github.com/awslabs/iot-app-kit/issues/49)) ([b342b32](https://github.com/awslabs/iot-app-kit/commit/b342b32d5701cb9fe48e793628d6f0f89a2248f8))
* resolve float decimal precision issue on round() function. ([#160](https://github.com/awslabs/iot-app-kit/issues/160)) ([6efeac4](https://github.com/awslabs/iot-app-kit/commit/6efeac47acce17da5f99104aec9d5a70cad366a2))
* sitewise source time series module ([#71](https://github.com/awslabs/iot-app-kit/issues/71)) ([6671217](https://github.com/awslabs/iot-app-kit/commit/6671217f3f2b813ecec6e907ee85ba6e0dd347c6))
* Swaped ternary statement terms ([#22](https://github.com/awslabs/iot-app-kit/issues/22)) ([b7899f1](https://github.com/awslabs/iot-app-kit/commit/b7899f12d88f22a1c5047859ddd3cedee9668915))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @iot-app-kit/jest-config bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/ts-config bumped from 5.2.0 to 6.0.0
    * eslint-config-iot-app-kit bumped from 5.2.0 to 6.0.0
</details>

<details><summary>core-util: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/core-util-v5.2.0...core-util-v6.0.0) (2023-04-12)


### Features

* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))
* **dashboard:** assign default color based on cloudscape design ([5855096](https://github.com/awslabs/iot-app-kit/commit/58550960ce402c6e18ee25ffee87945a6aeb4f77))
* **dashboard:** refactor sitewise clients ([ddac5b2](https://github.com/awslabs/iot-app-kit/commit/ddac5b2626d24bf8bfacb840611b8b880b2c99af))


### Bug Fixes

* **core-util:** fix subdomain for clients ([cc0d584](https://github.com/awslabs/iot-app-kit/commit/cc0d58464155d04d30cb433d96003cd43f2a9ee4))
* **core-util:** remove private flag for the core-util packages ([0d86584](https://github.com/awslabs/iot-app-kit/commit/0d86584f9ab15a732ccb7d440a9cbf1f82eccae0))
* **core-util:** update publish config for core-utils ([2a3f22f](https://github.com/awslabs/iot-app-kit/commit/2a3f22f8f3df207f1882fa856f90a10ac40d23fd))
</details>

<details><summary>dashboard: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/dashboard-v5.2.0...dashboard-v6.0.0) (2023-04-12)


###   BREAKING CHANGES

* **ReactComponents:** remove web-component iot app kit visualizations
* **TableComponent:** replace table annotations API with thresholds, remove stencilJS wrapper

### Features

* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))
* **charts:** add legend to charts ([0abfcf6](https://github.com/awslabs/iot-app-kit/commit/0abfcf6c5a325ee24290d5ac990703e24f6db3f0))
* **dashboard/components:** memoize components to prevent unnecessary re-renders ([50050ca](https://github.com/awslabs/iot-app-kit/commit/50050ca206efa320256b848f187854c11de85d73))
* **dashboard:** add alarm support for widgets ([bf7964a](https://github.com/awslabs/iot-app-kit/commit/bf7964ac18c66c3bcc979425f62a13a705bfae7c))
* **dashboard:** add input widet configuration ([#581](https://github.com/awslabs/iot-app-kit/issues/581)) ([a1bf180](https://github.com/awslabs/iot-app-kit/commit/a1bf18084aed3126dac0540a848a0e3b35492e32))
* **dashboard:** add selection and move components and actions ([13aa08e](https://github.com/awslabs/iot-app-kit/commit/13aa08e26c1a6fee6b791851fdd1a233ccc62e81))
* **dashboard:** add status timeline widget ([085ab29](https://github.com/awslabs/iot-app-kit/commit/085ab29fcd18778c6232bb6823b843dba8ae81e7))
* **dashboard:** add table support to dashboard ([1d8d44e](https://github.com/awslabs/iot-app-kit/commit/1d8d44e2a7bb67811de9702efa23dbdd5653f572))
* **dashboard:** alpha release of dashboard component ([a2f237e](https://github.com/awslabs/iot-app-kit/commit/a2f237ec0434cff0c3b765d5c46686b190620b53))
* **dashboard:** assign default color based on cloudscape design ([5855096](https://github.com/awslabs/iot-app-kit/commit/58550960ce402c6e18ee25ffee87945a6aeb4f77))
* **dashboard:** complete table support ([29bbb4c](https://github.com/awslabs/iot-app-kit/commit/29bbb4cb3297ed739390e349af9069ad6601c368))
* **dashboard:** define public api ([35910ba](https://github.com/awslabs/iot-app-kit/commit/35910ba8531ebe09468902fb87577357aaea4ddd))
* **dashboard:** disable asset drop for widgets that are not compatible with that data type ([31b8361](https://github.com/awslabs/iot-app-kit/commit/31b83611ffdd478ad2020dcac9dcf395caa2af79))
* **dashboard:** enable edit mode for text widget by default ([2b4db27](https://github.com/awslabs/iot-app-kit/commit/2b4db27d1acb468293d702c0a5aba02cdbd235cc))
* **dashboard:** enable font size dropdown selection ([fe25dd7](https://github.com/awslabs/iot-app-kit/commit/fe25dd70ed7c6a2ad54a196923cb1057abe7c97e))
* **dashboard:** initial dashboard work ([06cc210](https://github.com/awslabs/iot-app-kit/commit/06cc21079dc0446a06c72db676dba27f05a1606f))
* **dashboard:** initial scaffolding for input widget ([#566](https://github.com/awslabs/iot-app-kit/issues/566)) ([e6bbb46](https://github.com/awslabs/iot-app-kit/commit/e6bbb46cf738dceeb7a9a3a8873f0d148f182db8))
* **dashboard:** kpi and status widget empty states ([9dea96d](https://github.com/awslabs/iot-app-kit/commit/9dea96d8b6fb1f59ba2173510ebeb749ebe6233c))
* **dashboard:** refactor sitewise clients ([ddac5b2](https://github.com/awslabs/iot-app-kit/commit/ddac5b2626d24bf8bfacb840611b8b880b2c99af))
* **dashboard:** update resource explorer ([#613](https://github.com/awslabs/iot-app-kit/issues/613)) ([b75a33b](https://github.com/awslabs/iot-app-kit/commit/b75a33be0106ff341e66c219e7090f7f0c8f791b))
* **react-comp:** sync viewports using @iot-app-kit/charts pckg ([08c7eda](https://github.com/awslabs/iot-app-kit/commit/08c7eda38c600120aebe228285c5c1dc311ab8af))
* **React18:** Adds support for react 18 ([596c6b0](https://github.com/awslabs/iot-app-kit/commit/596c6b0ca2757baf445e4b203c3546e2d041e559))
* **RemoveNodeSass:** Replace node-sass dependency with a native javascript implementation ([f5ca005](https://github.com/awslabs/iot-app-kit/commit/f5ca005094d6c0164845d573a7dd89eb75bfca5f))
* **resource explorer:** allow dashboard to only show asset name ([5df2c5c](https://github.com/awslabs/iot-app-kit/commit/5df2c5cf9f289360ea4a80f3188c7d16307b5e06))
* **TableComponent:** replace table annotations API with thresholds, remove stencilJS wrapper ([74880c4](https://github.com/awslabs/iot-app-kit/commit/74880c44117c12a494f6c6591f0c6df21cd7d00f))


### Bug Fixes

* build to pass when publishing package ([#635](https://github.com/awslabs/iot-app-kit/issues/635)) ([82c3c42](https://github.com/awslabs/iot-app-kit/commit/82c3c42f1f59b42024f3a25a6dc4283b507d6a64))
* **charts:** fix live mode viewport scrollingbug ([dbea3ff](https://github.com/awslabs/iot-app-kit/commit/dbea3ff3f1908a6a48b1ca9ee5c654f9b55eb616))
* **composer:** Removing dashboard package to fix pipeline ([#338](https://github.com/awslabs/iot-app-kit/issues/338)) ([9a2c991](https://github.com/awslabs/iot-app-kit/commit/9a2c9917729a5a8b273920aec91e47bacf8b8251))
* **dashboard/components:** add missing prop to webgl component and refactor in dashboard to fix overlay problem ([59738ac](https://github.com/awslabs/iot-app-kit/commit/59738ac9551aa5b55448281a82fa88d1edc700d0))
* **dashboard:** add buffer to dependencies so consuming apps don't need to install it ([bb9d48a](https://github.com/awslabs/iot-app-kit/commit/bb9d48a64c18dc925a788c2d8a1528ff3d26db30))
* **dashboard:** add css resets ([7e23bc1](https://github.com/awslabs/iot-app-kit/commit/7e23bc13ff99ff80d769d69558a96a44f138faba))
* **dashboard:** add guard on widget sizes & positions and dispatch relative actions from side panel ([12044ec](https://github.com/awslabs/iot-app-kit/commit/12044ec65af159b4f65ba41af8134271536c3dda))
* **dashboard:** add node polyfill and svg plugin ([08ca02d](https://github.com/awslabs/iot-app-kit/commit/08ca02de6c475978334a629bf0995dd803333a29))
* **dashboard:** allow gestures when widget is in error state ([7545487](https://github.com/awslabs/iot-app-kit/commit/754548700fdaff1d84db63d29d244fb411898241))
* **dashboard:** better empty thresholds pane ([493b9f2](https://github.com/awslabs/iot-app-kit/commit/493b9f2442f618617eaa6821fe9d89e3cb844f9a))
* **dashboard:** bugfix for color reset on new property drop ([05c04e6](https://github.com/awslabs/iot-app-kit/commit/05c04e6db3beeca398d0c288209fe9ba2bffc1c4))
* **dashboard:** constrain drag start and endpoint in grid ([ea2b875](https://github.com/awslabs/iot-app-kit/commit/ea2b8757adcf26f9cd6afc0db36031159d2e0142))
* **dashboard:** disable user select on drag to prevent text selection ([56b5d09](https://github.com/awslabs/iot-app-kit/commit/56b5d098ebfda31e9c200c5d665b90f158cadebd))
* **dashboard:** fix edit mode bugs ([2e88abf](https://github.com/awslabs/iot-app-kit/commit/2e88abf6c7ec72f192ec272b13c3d66101646734))
* **dashboard:** fix grid scrolling issues ([bbb43aa](https://github.com/awslabs/iot-app-kit/commit/bbb43aa70e73ed19f2d7641f78f3f123e22edd2d))
* **dashboard:** fix layering of widgets with selection and context menu ([f98d5e7](https://github.com/awslabs/iot-app-kit/commit/f98d5e7642d6c73ad88206391e418347b840b69b))
* **dashboard:** fix resizing issue ([024feb9](https://github.com/awslabs/iot-app-kit/commit/024feb923500f9e798c4a84b94aa5667ce1ce3b4))
* **dashboard:** fix styling for component palette and add tests for drag and drop ([41fd944](https://github.com/awslabs/iot-app-kit/commit/41fd944edcfdd0159aec29dd86b5f0b3dc17ff23))
* **dashboard:** fix the build ([c160031](https://github.com/awslabs/iot-app-kit/commit/c16003156ed22e85b1569a7b3e5024c53b8a4be4))
* **dashboard:** grow asset properties panel ([#628](https://github.com/awslabs/iot-app-kit/issues/628)) ([89fb6b6](https://github.com/awslabs/iot-app-kit/commit/89fb6b6e0c8b76068febb7810e0425080b436d27))
* **dashboard:** hide y axis settings for status timeline component ([217899a](https://github.com/awslabs/iot-app-kit/commit/217899a787f1076806fa977d29491058da0caf5f))
* **dashboard:** refactor widget type ([fc3e41e](https://github.com/awslabs/iot-app-kit/commit/fc3e41e3e4c1cececd49f34d6d9aaa6821b21ae7))
* **dashboard:** remove chart suffix from empty states ([28e4c09](https://github.com/awslabs/iot-app-kit/commit/28e4c09b56896f0083d501b2f0f1fe9d536deb7e))
* **dashboard:** remove font dropdown and text position dropdowns ([bc4ca9a](https://github.com/awslabs/iot-app-kit/commit/bc4ca9acae3dce98af991e689139ecc3f8486b20))
* **dashboard:** remove tailing digits on widget dragging. ([b89c5f7](https://github.com/awslabs/iot-app-kit/commit/b89c5f794adc782b51090d13e6bd47b6169e5c0a))
* **dashboard:** remove testing-util as a dependency ([8f7bce5](https://github.com/awslabs/iot-app-kit/commit/8f7bce54b9c1f9615fba4e40ea89462d6d96f05f))
* **dashboard:** remove widget background color ([7392aad](https://github.com/awslabs/iot-app-kit/commit/7392aad1d6800a3c932f196788e9fe9085c9beee))
* **dashboard:** resolve pretty paths in storybook ([#588](https://github.com/awslabs/iot-app-kit/issues/588)) ([a82178e](https://github.com/awslabs/iot-app-kit/commit/a82178ebc7f05375b1108aad98cb4cfd966dd20e))
* **dashboard:** support decimals for thresholds ([3cfd8a4](https://github.com/awslabs/iot-app-kit/commit/3cfd8a44d6028486a9f7b6cb4694a828d23bbb56))
* **DashboardToolbar:** remove scrollbar from toolbar ([8a18a25](https://github.com/awslabs/iot-app-kit/commit/8a18a250106d16bcad2f8bda63f0fc2a42c9f47b))
* **dashboard:** update property name for tables when displaying alarms ([d8d5541](https://github.com/awslabs/iot-app-kit/commit/d8d55410c78abf6c8cd7f9d442c311f0e2e9a752))
* **dashboard:** update props passed to kpi and status components based on new api ([e2023c9](https://github.com/awslabs/iot-app-kit/commit/e2023c92ecfea6cac947f5c5f795001395ad2bd4))
* **dashboard:** update side panel styling to remove sass variable references ([36d8648](https://github.com/awslabs/iot-app-kit/commit/36d8648818edba3b83f8a36912290ef641cacd9a))
* **dashboard:** update type path in package json ([d4647e1](https://github.com/awslabs/iot-app-kit/commit/d4647e1b85eb8bcc2e343de954f9d51260c62a77))
* **dashboard:** use sentence casting in headers ([90ff030](https://github.com/awslabs/iot-app-kit/commit/90ff0308693d6110438659b5b4d1241a0b8a8f84))
* **UITests:** fix dashbaord e2e tests ([dd98c0e](https://github.com/awslabs/iot-app-kit/commit/dd98c0ea9ccd6a7dacc9ee5f994ccce7007f0b21))


### Code Refactoring

* **ReactComponents:** remove web-component iot app kit visualizations ([e0cb301](https://github.com/awslabs/iot-app-kit/commit/e0cb301d1dc204f55684cbd61d4d5c2b66276556))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/components bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/core bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/core-util bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/react-components bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/source-iotsitewise bumped from 5.2.0 to 6.0.0
  * devDependencies
    * @iot-app-kit/jest-config bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/testing-util bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/ts-config bumped from 5.2.0 to 6.0.0
    * eslint-config-iot-app-kit bumped from 5.2.0 to 6.0.0
</details>

<details><summary>jest-config: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/jest-config-v5.2.0...jest-config-v6.0.0) (2023-04-12)


### Features

* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))
</details>

<details><summary>react-components: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/react-components-v5.2.0...react-components-v6.0.0) (2023-04-12)


###   BREAKING CHANGES

* **ReactComponents:** remove web-component iot app kit visualizations
* **TableComponent:** replace table annotations API with thresholds, remove stencilJS wrapper
* **core, source-iotsitewise, source-iottwinmaker, react-components:** Add toQueryString method on Query type, implement in iotsitewise and iottwinmaker ([#634](https://github.com/awslabs/iot-app-kit/issues/634))
* Remove unecessary exports, utilize core types instead of SynchroChart types ([#600](https://github.com/awslabs/iot-app-kit/issues/600))

### Features

* add npm-publish github workflow ([#68](https://github.com/awslabs/iot-app-kit/issues/68)) ([64e64b8](https://github.com/awslabs/iot-app-kit/commit/64e64b800ad3b6ddbee78cfe84c3750e73dead65))
* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))
* backfill component integration tests ([#66](https://github.com/awslabs/iot-app-kit/issues/66)) ([4f17201](https://github.com/awslabs/iot-app-kit/commit/4f17201f5990876b67861f091dbdcdb5345a28c2))
* **charts:** add legend to charts ([0abfcf6](https://github.com/awslabs/iot-app-kit/commit/0abfcf6c5a325ee24290d5ac990703e24f6db3f0))
* **core, source-iotsitewise, source-iottwinmaker, react-components:** Add toQueryString method on Query type, implement in iotsitewise and iottwinmaker ([#634](https://github.com/awslabs/iot-app-kit/issues/634)) ([38a4b98](https://github.com/awslabs/iot-app-kit/commit/38a4b9833ba45eb54585581d661badd93162540c))
* create react-components and source-iotsitewise pkgs ([#57](https://github.com/awslabs/iot-app-kit/issues/57)) ([16451b1](https://github.com/awslabs/iot-app-kit/commit/16451b12e0fe2662069275185b2fea61048d3fab))
* **dashboard:** add table support to dashboard ([1d8d44e](https://github.com/awslabs/iot-app-kit/commit/1d8d44e2a7bb67811de9702efa23dbdd5653f572))
* **dashboard:** assign default color based on cloudscape design ([5855096](https://github.com/awslabs/iot-app-kit/commit/58550960ce402c6e18ee25ffee87945a6aeb4f77))
* **dashboard:** initial dashboard work ([06cc210](https://github.com/awslabs/iot-app-kit/commit/06cc21079dc0446a06c72db676dba27f05a1606f))
* **EnvironmentModel:** Adding support for environment overlay ([#262](https://github.com/awslabs/iot-app-kit/issues/262)) ([0277027](https://github.com/awslabs/iot-app-kit/commit/0277027d59f232c2c8e29fac0bc53399a1eb9c1e))
* improve documentation and clarity of react-components pkg ([#60](https://github.com/awslabs/iot-app-kit/issues/60)) ([f4239cf](https://github.com/awslabs/iot-app-kit/commit/f4239cf1ca201044095004a2e6c358f3a4c90ebc))
* Introduce alarms ([#135](https://github.com/awslabs/iot-app-kit/issues/135)) ([5c19b99](https://github.com/awslabs/iot-app-kit/commit/5c19b9957c05fbc8df15545ae9847d39030b686b))
* **props:** adapt props for synchro-charts ([#133](https://github.com/awslabs/iot-app-kit/issues/133)) ([a98bf06](https://github.com/awslabs/iot-app-kit/commit/a98bf064f14979823f51437dbd599259b6bd6d78))
* **react-comp:** isThresholdBreached checks all comparison ops ([de3fe49](https://github.com/awslabs/iot-app-kit/commit/de3fe495b764d45dd9c364b93f2e5898d2cb661e))
* **react-components:** publish TimeSync component as part of the public API ([#621](https://github.com/awslabs/iot-app-kit/issues/621)) ([a4e2f66](https://github.com/awslabs/iot-app-kit/commit/a4e2f66e6a0a2d58eb1a5316ac3fab4520dd3161))
* **react-components:** release useViewport hook ([#631](https://github.com/awslabs/iot-app-kit/issues/631)) ([794b4a4](https://github.com/awslabs/iot-app-kit/commit/794b4a49c70824836ac0fadf8008d0937059d16d))
* **react-comp:** sync viewports using @iot-app-kit/charts pckg ([08c7eda](https://github.com/awslabs/iot-app-kit/commit/08c7eda38c600120aebe228285c5c1dc311ab8af))
* **React18:** Adds support for react 18 ([596c6b0](https://github.com/awslabs/iot-app-kit/commit/596c6b0ca2757baf445e4b203c3546e2d041e559))
* **ReactComponents:** support alarms via thresholds ingested from useTimeSeriesData hook ([4df9ff0](https://github.com/awslabs/iot-app-kit/commit/4df9ff00083239e3eb32b7766ec16396a5f7deb4))
* **TableComponent:** replace table annotations API with thresholds, remove stencilJS wrapper ([74880c4](https://github.com/awslabs/iot-app-kit/commit/74880c44117c12a494f6c6591f0c6df21cd7d00f))
* **time-sync:** useViewport returns a group ([c12349b](https://github.com/awslabs/iot-app-kit/commit/c12349b17e7ed917babd394a05c7a47f0b8bccc0))
* **TimeSync:** add a lastUsedBy string to the useViewport hook ([526f059](https://github.com/awslabs/iot-app-kit/commit/526f059dcfe74d8590b9ee0add435700d3ed943d))
* **TwinMaker:** Add TwinMaker packages ([#252](https://github.com/awslabs/iot-app-kit/issues/252)) ([fabbe03](https://github.com/awslabs/iot-app-kit/commit/fabbe0399dd37293e99588124404c37c929f4330))


### Bug Fixes

* **BarChart:** prevent bar chart from trying to request raw data by default ([6845d95](https://github.com/awslabs/iot-app-kit/commit/6845d95789861a1d6d97cfb4322f6371983de729))
* **charts:** fix live mode viewport scrollingbug ([dbea3ff](https://github.com/awslabs/iot-app-kit/commit/dbea3ff3f1908a6a48b1ca9ee5c654f9b55eb616))
* **components:** fix connector to iot app kit components ([be91864](https://github.com/awslabs/iot-app-kit/commit/be91864aee326c1c3fd5320b30b86d34f9f246d0))
* **dashboard:** update props passed to kpi and status components based on new api ([e2023c9](https://github.com/awslabs/iot-app-kit/commit/e2023c92ecfea6cac947f5c5f795001395ad2bd4))
* **react-components, videoPlayer:** fix propertiesNotChanged for videoPlayer ([11665c0](https://github.com/awslabs/iot-app-kit/commit/11665c0af13e98dc6602d8bf8aac7733d063633c))
* **react-components:** add core-util as a dependency ([5c4d420](https://github.com/awslabs/iot-app-kit/commit/5c4d4209d364640aebb78134fc08bc32707795f0))
* **react-components:** fix binding styles in `useTimeSeriesData` hook ([c1c0125](https://github.com/awslabs/iot-app-kit/commit/c1c012577448c6e07090b23ad988e39a3d530bb6))
* **react-components:** set timezone for jest to UTC to prevent local test failures ([44c3793](https://github.com/awslabs/iot-app-kit/commit/44c379338a2a9110600a0502e37ae4dceaf0ab09))
* **ReactComponents:** configure table, kpi and status to always fetch raw data ([c02b566](https://github.com/awslabs/iot-app-kit/commit/c02b566cad9aa2b8e700765f7923df2d4a6fbec4))
* Remove unecessary exports, utilize core types instead of SynchroChart types ([#600](https://github.com/awslabs/iot-app-kit/issues/600)) ([15d6740](https://github.com/awslabs/iot-app-kit/commit/15d67401b7e152eeba1e550efc75faf79cefbf7e))
* **UITests:** fix dashbaord e2e tests ([dd98c0e](https://github.com/awslabs/iot-app-kit/commit/dd98c0ea9ccd6a7dacc9ee5f994ccce7007f0b21))
* **video-player:** use static timestamps instead dynamic ones ([1e434a6](https://github.com/awslabs/iot-app-kit/commit/1e434a6632c6dd797f9d0dacd3ed3547622d93c9))


### Code Refactoring

* **ReactComponents:** remove web-component iot app kit visualizations ([e0cb301](https://github.com/awslabs/iot-app-kit/commit/e0cb301d1dc204f55684cbd61d4d5c2b66276556))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/components bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/core bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/core-util bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/source-iottwinmaker bumped from 5.2.0 to 6.0.0
  * devDependencies
    * @iot-app-kit/jest-config bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/source-iotsitewise bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/testing-util bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/ts-config bumped from 5.2.0 to 6.0.0
    * eslint-config-iot-app-kit bumped from 5.2.0 to 6.0.0
</details>

<details><summary>related-table: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/related-table-v5.2.0...related-table-v6.0.0) (2023-04-12)


###   BREAKING CHANGES

* **ReactComponents:** remove web-component iot app kit visualizations
* **core,source-iotsitewise:** Change time series data modules getRequestsFromQueries to be async

### Features

* add npm-publish github workflow ([#68](https://github.com/awslabs/iot-app-kit/issues/68)) ([64e64b8](https://github.com/awslabs/iot-app-kit/commit/64e64b800ad3b6ddbee78cfe84c3750e73dead65))
* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))
* **core,source-iotsitewise:** Change time series data modules getRequestsFromQueries to be async ([69a017e](https://github.com/awslabs/iot-app-kit/commit/69a017ea8dfbd99fcd3c155278cac3c241b30527))
* create react-components and source-iotsitewise pkgs ([#57](https://github.com/awslabs/iot-app-kit/issues/57)) ([16451b1](https://github.com/awslabs/iot-app-kit/commit/16451b12e0fe2662069275185b2fea61048d3fab))
* **dashboard:** alpha release of dashboard component ([a2f237e](https://github.com/awslabs/iot-app-kit/commit/a2f237ec0434cff0c3b765d5c46686b190620b53))
* error handling/data-module core ([#14](https://github.com/awslabs/iot-app-kit/issues/14)) ([376929f](https://github.com/awslabs/iot-app-kit/commit/376929fda106a808d312b8b92a309c9184857fe1))
* expand children in resource explorer ([#115](https://github.com/awslabs/iot-app-kit/issues/115)) ([8f1c03c](https://github.com/awslabs/iot-app-kit/commit/8f1c03c57f19c30dc04fbad10b5622ad9fc3c5bd))
* **props:** adapt props for synchro-charts ([#133](https://github.com/awslabs/iot-app-kit/issues/133)) ([a98bf06](https://github.com/awslabs/iot-app-kit/commit/a98bf064f14979823f51437dbd599259b6bd6d78))
* **React18:** Adds support for react 18 ([596c6b0](https://github.com/awslabs/iot-app-kit/commit/596c6b0ca2757baf445e4b203c3546e2d041e559))
* Resource Explorer ([#24](https://github.com/awslabs/iot-app-kit/issues/24)) ([2e9d746](https://github.com/awslabs/iot-app-kit/commit/2e9d7467ff3aa4c954f486f89a6693a193821cb2))
* Sitewise Resource Explorer ([#21](https://github.com/awslabs/iot-app-kit/issues/21)) ([8f26b58](https://github.com/awslabs/iot-app-kit/commit/8f26b58433ff05bd6709c7659dfb6b015e6a90dd))


### Bug Fixes

* related-table eslint and prettier ([#10](https://github.com/awslabs/iot-app-kit/issues/10)) ([67a7149](https://github.com/awslabs/iot-app-kit/commit/67a7149131813b8239079f2b931c78e5b607a708))
* **related-table:** expanded toggling already expanded nodes ([#382](https://github.com/awslabs/iot-app-kit/issues/382)) ([a6d29c8](https://github.com/awslabs/iot-app-kit/commit/a6d29c8b2ea1d74ede87a8db2db6920f3f546958))
* remove prettier, enforce eslint on build ([#29](https://github.com/awslabs/iot-app-kit/issues/29)) ([1b2e5ca](https://github.com/awslabs/iot-app-kit/commit/1b2e5cad203a561feda89544382e38f453c64124))
* Support additional parameters in intercepting calls to table cell renderer ([ce2be51](https://github.com/awslabs/iot-app-kit/commit/ce2be513327e658b5f391f0fbf94f9fe192af530))
* update @testing-library/react to use create root ([#151](https://github.com/awslabs/iot-app-kit/issues/151)) ([380e4cf](https://github.com/awslabs/iot-app-kit/commit/380e4cf60a7612a586d6a86891b78fe14240bff5))


### Code Refactoring

* **ReactComponents:** remove web-component iot app kit visualizations ([e0cb301](https://github.com/awslabs/iot-app-kit/commit/e0cb301d1dc204f55684cbd61d4d5c2b66276556))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @iot-app-kit/jest-config bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/ts-config bumped from 5.2.0 to 6.0.0
    * eslint-config-iot-app-kit bumped from 5.2.0 to 6.0.0
</details>

<details><summary>scene-composer: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/scene-composer-v5.2.0...scene-composer-v6.0.0) (2023-04-12)


### Features

* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))
* **composer:** add data overaly ([42f8896](https://github.com/awslabs/iot-app-kit/commit/42f889620c01d02250c6856ab4a56a446bc3f556))
* **composer:** add overlay panel config editor ([42f8896](https://github.com/awslabs/iot-app-kit/commit/42f889620c01d02250c6856ab4a56a446bc3f556))
* **composer:** add runtime tag settings change support ([eeda501](https://github.com/awslabs/iot-app-kit/commit/eeda501d456c10f61123f9c4f77618bb870816f5))
* **composer:** data binding variable support for data overlay ([42f8896](https://github.com/awslabs/iot-app-kit/commit/42f889620c01d02250c6856ab4a56a446bc3f556))
* **composer:** data overlay editor & render markdown ([42f8896](https://github.com/awslabs/iot-app-kit/commit/42f889620c01d02250c6856ab4a56a446bc3f556))
* **composer:** implement add overlay from menu ([42f8896](https://github.com/awslabs/iot-app-kit/commit/42f889620c01d02250c6856ab4a56a446bc3f556))
* **composer:** Implement data overlay container ([#595](https://github.com/awslabs/iot-app-kit/issues/595)) ([42f8896](https://github.com/awslabs/iot-app-kit/commit/42f889620c01d02250c6856ab4a56a446bc3f556))
* **Composer:** twinMaker-matterport integration ([bcfe40f](https://github.com/awslabs/iot-app-kit/commit/bcfe40fc7f4b26af7510f32b0b4986d62b6ef30b))
* **composer:** update overlay UI and flow ([5bf75aa](https://github.com/awslabs/iot-app-kit/commit/5bf75aa0a9e2128f0e41798f8cc3d94322e18888))
* **composer:** update TagResize feature implementation ([b8dfb46](https://github.com/awslabs/iot-app-kit/commit/b8dfb468043ff6c8b4f154c145f997c6467117ec))
* **composer:** visibility toggles for overlays in settings panel ([4fc0527](https://github.com/awslabs/iot-app-kit/commit/4fc05276aa3f55f19aa8c0792ade3deb58eef7a3))
* **EnvironmentModel:** Adding support for environment overlay ([#262](https://github.com/awslabs/iot-app-kit/issues/262)) ([0277027](https://github.com/awslabs/iot-app-kit/commit/0277027d59f232c2c8e29fac0bc53399a1eb9c1e))
* Introduce alarms ([#135](https://github.com/awslabs/iot-app-kit/issues/135)) ([5c19b99](https://github.com/awslabs/iot-app-kit/commit/5c19b9957c05fbc8df15545ae9847d39030b686b))
* **Matterport:** Integrate Matterport Showcase Viewer into TwinMaker SceneComposer ([58236e7](https://github.com/awslabs/iot-app-kit/commit/58236e7eed7f5435480cba6ce214346a4f8d3a86))
* **OpacityFilterZero:** Setting opacity to 0 should effectively hide the object ([#342](https://github.com/awslabs/iot-app-kit/issues/342)) ([91e491b](https://github.com/awslabs/iot-app-kit/commit/91e491b45ad2e31f4e407686fbf40c8c0df9f9d0))
* **React18:** Adds support for react 18 ([596c6b0](https://github.com/awslabs/iot-app-kit/commit/596c6b0ca2757baf445e4b203c3546e2d041e559))
* **RemoveNodeSass:** Replace node-sass dependency with a native javascript implementation ([f5ca005](https://github.com/awslabs/iot-app-kit/commit/f5ca005094d6c0164845d573a7dd89eb75bfca5f))
* **TwinMaker:** Add TwinMaker packages ([#252](https://github.com/awslabs/iot-app-kit/issues/252)) ([fabbe03](https://github.com/awslabs/iot-app-kit/commit/fabbe0399dd37293e99588124404c37c929f4330))


### Bug Fixes

* Allows user to hit Esc key to cancel Enhanced Editing ([#272](https://github.com/awslabs/iot-app-kit/issues/272)) ([6b73fad](https://github.com/awslabs/iot-app-kit/commit/6b73fad6db0bc61a4935bec76ebaecf39da366c5))
* **build:** add missing dev deps in scene-composer ([b128405](https://github.com/awslabs/iot-app-kit/commit/b1284052e7db7247bd1bbe4758cde21ba584f8c5))
* **CameraView:** Minimum FOV check introduced ([#284](https://github.com/awslabs/iot-app-kit/issues/284)) ([6a8d9f1](https://github.com/awslabs/iot-app-kit/commit/6a8d9f1cbc7995efc612a7cac9f551c7c43ba438))
* **composer:** Adding ability to deselect by click radio button ([#351](https://github.com/awslabs/iot-app-kit/issues/351)) ([8c402b7](https://github.com/awslabs/iot-app-kit/commit/8c402b774b9a10ffdcdd13fc0a9f2f89f3eb507b))
* **composer:** Adjusting logic for reparenting scene nodes ([#369](https://github.com/awslabs/iot-app-kit/issues/369)) ([3475ebd](https://github.com/awslabs/iot-app-kit/commit/3475ebd404c728226cc1582667cabfd1420a8afa))
* **composer:** Allows nodes to be dropped at root level ([#390](https://github.com/awslabs/iot-app-kit/issues/390)) ([d9d7978](https://github.com/awslabs/iot-app-kit/commit/d9d79789e67a43b94057ad0ff45c663e186cacf7))
* **composer:** Auto expand hierarchy when selecting node on scene ([#452](https://github.com/awslabs/iot-app-kit/issues/452)) ([9b3e80f](https://github.com/awslabs/iot-app-kit/commit/9b3e80f17f26ef0268eaeb6222d79f077d057c97))
* **composer:** boolean data always converted to false ([#323](https://github.com/awslabs/iot-app-kit/issues/323)) ([254d68f](https://github.com/awslabs/iot-app-kit/commit/254d68f610efd1c75963f91c185bd42a2d649365))
* **composer:** Bug fix for rerenders on name input in inspect panel ([#334](https://github.com/awslabs/iot-app-kit/issues/334)) ([b8a0b4c](https://github.com/awslabs/iot-app-kit/commit/b8a0b4c4e8371637a0f1342f96196ca5b46ed383))
* **composer:** Camera and Light helper visibility toggling ([#294](https://github.com/awslabs/iot-app-kit/issues/294)) ([4f62051](https://github.com/awslabs/iot-app-kit/commit/4f6205157cb30c3a4af28ea6680ebfe39e0a16e4))
* **composer:** convert to inline overlay CSS ([0f5b82a](https://github.com/awslabs/iot-app-kit/commit/0f5b82af6ebf954e6a7fa388c5946b56686b98ab))
* **composer:** CSS Cleanup for Sceneviewer ([#379](https://github.com/awslabs/iot-app-kit/issues/379)) ([890dc4d](https://github.com/awslabs/iot-app-kit/commit/890dc4d57b3b756e90d47884fdf8a275595a1bc5))
* **composer:** drag root node crashes scene ([#372](https://github.com/awslabs/iot-app-kit/issues/372)) ([ca01c40](https://github.com/awslabs/iot-app-kit/commit/ca01c40241cad7f86f1bbb1a9b920795485076b8))
* **composer:** enable new features for SceneViewer ([#355](https://github.com/awslabs/iot-app-kit/issues/355)) ([631953a](https://github.com/awslabs/iot-app-kit/commit/631953a674fd8969e88b64c215ed8cd51b961e8e))
* **composer:** Enhanced Edit now allows for undo operation ([#376](https://github.com/awslabs/iot-app-kit/issues/376)) ([5e73bb8](https://github.com/awslabs/iot-app-kit/commit/5e73bb80d303fda63f81dd543b76add11ca61670))
* **composer:** entityId data binding not rendered ([#389](https://github.com/awslabs/iot-app-kit/issues/389)) ([6ad596f](https://github.com/awslabs/iot-app-kit/commit/6ad596f2d5cf31039b8dd5d0fdd069fb91ffc45d))
* **composer:** fix adding tag always attached to root ([#281](https://github.com/awslabs/iot-app-kit/issues/281)) ([f9ff7b1](https://github.com/awslabs/iot-app-kit/commit/f9ff7b1198fdcf073340bbdd4df89c61752d2b4d))
* **composer:** Fix camera view positioning under sub model ([#341](https://github.com/awslabs/iot-app-kit/issues/341)) ([94dcdda](https://github.com/awslabs/iot-app-kit/commit/94dcdda65a7c44cf449828338bed1ea132f995ea))
* **composer:** Fix e.removeFromParent and camera focus ([#350](https://github.com/awslabs/iot-app-kit/issues/350)) ([8458e50](https://github.com/awslabs/iot-app-kit/commit/8458e50f4ec87aa5e7e4f722017766f447d71b5e))
* **composer:** fix error with rendering 3D tiles ([785d833](https://github.com/awslabs/iot-app-kit/commit/785d8338fbb2908a01a6a40b55cc3d7b3fda1ab4))
* **composer:** Fix for bug on drag/drop introduced in last PR & fix for drag/drop icons: ([#364](https://github.com/awslabs/iot-app-kit/issues/364)) ([6dc40b9](https://github.com/awslabs/iot-app-kit/commit/6dc40b918cdfe6cc0d5447d9cb5ca2267ccd2afa))
* **composer:** Fix for displaying children on search results ([#365](https://github.com/awslabs/iot-app-kit/issues/365)) ([15f75cb](https://github.com/awslabs/iot-app-kit/commit/15f75cb6a9094ec4218a21fca287137d9feb7c88))
* **composer:** Fix for duplicate submodels in tree on adding objects to scene ([#370](https://github.com/awslabs/iot-app-kit/issues/370)) ([6c4bcdf](https://github.com/awslabs/iot-app-kit/commit/6c4bcdfd9c76895c76b487f0dfd323e76770d8b3))
* **composer:** Fix for useEffect error ([#373](https://github.com/awslabs/iot-app-kit/issues/373)) ([d74e45e](https://github.com/awslabs/iot-app-kit/commit/d74e45e3094450679a936e852bd7e2c7a65de678))
* **composer:** fix model shader material color restore ([#290](https://github.com/awslabs/iot-app-kit/issues/290)) ([19ce7f1](https://github.com/awslabs/iot-app-kit/commit/19ce7f196850897aa37873e2710974496ac89ac9))
* **composer:** fix object transforms during reparenting ([#477](https://github.com/awslabs/iot-app-kit/issues/477)) ([7a45bb3](https://github.com/awslabs/iot-app-kit/commit/7a45bb3eb1c2418396b39c7d092a380eb32ba250))
* **composer:** fix reparent rotation and add new object issues ([2628c29](https://github.com/awslabs/iot-app-kit/commit/2628c29f285001609840d69c1c81d0d49e84d93c))
* **composer:** fix show svg ([#279](https://github.com/awslabs/iot-app-kit/issues/279)) ([3b7924d](https://github.com/awslabs/iot-app-kit/commit/3b7924dace7d11c726bb43a3f7a790415a049ed5))
* **composer:** Fix to persist drag/drop actions after refresh ([#367](https://github.com/awslabs/iot-app-kit/issues/367)) ([50f3538](https://github.com/awslabs/iot-app-kit/commit/50f353869e241fc05cc2d7d6122ccc604f7bf081))
* **composer:** Fix to restore drag-&-drop placement after refresh ([#361](https://github.com/awslabs/iot-app-kit/issues/361)) ([bd47478](https://github.com/awslabs/iot-app-kit/commit/bd474787dff3c43bcc9ca1d3711396936066c85f))
* **composer:** Fixes 2nd camera viewing click bug ([#291](https://github.com/awslabs/iot-app-kit/issues/291)) ([7899333](https://github.com/awslabs/iot-app-kit/commit/78993334a60ea16293ed6a53f82f99b29a54c0df))
* **composer:** Fixes expand button on hierarchies ([#371](https://github.com/awslabs/iot-app-kit/issues/371)) ([69fc869](https://github.com/awslabs/iot-app-kit/commit/69fc869f178d90ad8e785948b0aae48b01fea27d))
* **composer:** Fixes for layout in Console, submodel layout updates, bug fix for submodel interactive highlights ([#344](https://github.com/awslabs/iot-app-kit/issues/344)) ([a1ea148](https://github.com/awslabs/iot-app-kit/commit/a1ea148c8de1ddabc713c87b379d9e95901d2e03))
* **composer:** Fixes the Duplication of sub models on scene reload by adding persistant identifier to the sub model ([#356](https://github.com/awslabs/iot-app-kit/issues/356)) ([446a4ca](https://github.com/awslabs/iot-app-kit/commit/446a4caa6fb71b05ffaeadac80839fe9c7fd56af))
* **composer:** Fixes the light helper delete while maintaining visibility link ([#349](https://github.com/awslabs/iot-app-kit/issues/349)) ([2f51263](https://github.com/awslabs/iot-app-kit/commit/2f5126377e8cc40645188487499946e2477418e4))
* **composer:** gate empty overlay section in inspector ([2726f10](https://github.com/awslabs/iot-app-kit/commit/2726f10d4aa26426c1650daa2852bdedba91678b))
* **composer:** hdr url is sometimes wrong ([#352](https://github.com/awslabs/iot-app-kit/issues/352)) ([2c2625e](https://github.com/awslabs/iot-app-kit/commit/2c2625e6630cecd64231f2b8a6d7876a75ee3347))
* **composer:** Maintain the position in 3D space regardless of the parent ([#375](https://github.com/awslabs/iot-app-kit/issues/375)) ([a106e77](https://github.com/awslabs/iot-app-kit/commit/a106e774bd0bdb13278cdc978f7fb22df1c01a38))
* **composer:** One instance of sub models allowed per instance of the model ([#366](https://github.com/awslabs/iot-app-kit/issues/366)) ([24f3914](https://github.com/awslabs/iot-app-kit/commit/24f3914ac0954cf411a215dd58d74a9eeb8f05cc))
* **composer:** reorder doesn't persist after reloading ([#374](https://github.com/awslabs/iot-app-kit/issues/374)) ([8c90889](https://github.com/awslabs/iot-app-kit/commit/8c908898f34c51a9ab05c4ef284db4428b3d4f2e))
* **composer:** reorder to same parent duplicates child ([b76057d](https://github.com/awslabs/iot-app-kit/commit/b76057d17f23ad25d9f48497619bf49e23fcecb3))
* **composer:** Restores drag-&-drop functionality in Scene Hierarchy ([#359](https://github.com/awslabs/iot-app-kit/issues/359)) ([b220501](https://github.com/awslabs/iot-app-kit/commit/b22050101400f102be2a0aed46b5b15c7b6fecc5))
* **Composer:** Safe bounding box and 3D cursor fix ([#327](https://github.com/awslabs/iot-app-kit/issues/327)) ([a31585f](https://github.com/awslabs/iot-app-kit/commit/a31585fe447d0aa6a0bda855ffbdd8a4d756798d))
* **composer:** scene change is sometimes not saved ([#409](https://github.com/awslabs/iot-app-kit/issues/409)) ([7b0c45a](https://github.com/awslabs/iot-app-kit/commit/7b0c45aab025a90827a472afb0efc85077dd7ef9))
* **composer:** Scene Hierarchy radio buttons & bug fix for selection on single click ([#326](https://github.com/awslabs/iot-app-kit/issues/326)) ([1026cb4](https://github.com/awslabs/iot-app-kit/commit/1026cb4d607317a43bb45e0058e9762a3a5430c1))
* **composer:** selectedDataBinding not able to update selected node ([#274](https://github.com/awslabs/iot-app-kit/issues/274)) ([ee68f7e](https://github.com/awslabs/iot-app-kit/commit/ee68f7e6825b438f2f7dfd7927f3ee24d471d3fa))
* **composer:** Set tree hierarchy items to auto-collapsed on load ([#380](https://github.com/awslabs/iot-app-kit/issues/380)) ([dad88a0](https://github.com/awslabs/iot-app-kit/commit/dad88a0925a0dbf5c9c15e9e79cd4f025fb54682))
* **composer:** submodel and hierarchy search fix ([#320](https://github.com/awslabs/iot-app-kit/issues/320)) ([364cefb](https://github.com/awslabs/iot-app-kit/commit/364cefb9d4fb820b04e30e8761409a7ad00a5825))
* **composer:** SubModel child fix ([#363](https://github.com/awslabs/iot-app-kit/issues/363)) ([da574e8](https://github.com/awslabs/iot-app-kit/commit/da574e8cd3b62c1dbe275e38faf8590481fc1f0b))
* **composer:** support Windows dependency file paths in GLTF loader ([#417](https://github.com/awslabs/iot-app-kit/issues/417)) ([9f7c075](https://github.com/awslabs/iot-app-kit/commit/9f7c075f58458c75f7bc04cd8287dd0087281f0c))
* **composer:** update overlay css ([3136571](https://github.com/awslabs/iot-app-kit/commit/31365712bbd7cbfc3b871710b73dc4b348ddc355))
* **composer:** update overlay visibility toggles behavior ([0e90781](https://github.com/awslabs/iot-app-kit/commit/0e907816a79befc94f56e26d501f1f94c8e6902c))
* **composer:** update translations ([3e8d391](https://github.com/awslabs/iot-app-kit/commit/3e8d39155ea077f37320890ac57e9505d9a719a2))
* **composer:** update translations ([#302](https://github.com/awslabs/iot-app-kit/issues/302)) ([8b6f7a1](https://github.com/awslabs/iot-app-kit/commit/8b6f7a19fac0a3f1e11f1f722bbe6df3b010042b))
* **composer:** use arrow data as texture to avoid public path issue ([#276](https://github.com/awslabs/iot-app-kit/issues/276)) ([f7cbd96](https://github.com/awslabs/iot-app-kit/commit/f7cbd969f93ae021ebfa6853bd478b43e890c738))
* **dashboard:** refactor widget type ([fc3e41e](https://github.com/awslabs/iot-app-kit/commit/fc3e41e3e4c1cececd49f34d6d9aaa6821b21ae7))
* **deps:** update synchro-charts, node-sass, nth-check ([#295](https://github.com/awslabs/iot-app-kit/issues/295)) ([164b751](https://github.com/awslabs/iot-app-kit/commit/164b7511ef2d42f1e816d804628440e577f03e43))
* **DragHandleIcon:** Drag Handle icon not showing up without special webpack config ([#345](https://github.com/awslabs/iot-app-kit/issues/345)) ([b8952ce](https://github.com/awslabs/iot-app-kit/commit/b8952ceba6c1e462bc3a45bb06b5c7ef54c5da32))
* Fix the tag scaling with parent scale regression ([#282](https://github.com/awslabs/iot-app-kit/issues/282)) ([efd49fc](https://github.com/awslabs/iot-app-kit/commit/efd49fc66fbb1c30ff7e971c0d8e024a778468e8))
* **PeerDependencies:** react-intl should be declared as a peer dependency ([9ea3f75](https://github.com/awslabs/iot-app-kit/commit/9ea3f75ee2c4a294b0ac1f80803a916c7d9b2215))
* propertyName with multi hyphen not working ([#496](https://github.com/awslabs/iot-app-kit/issues/496)) ([7c7dc2c](https://github.com/awslabs/iot-app-kit/commit/7c7dc2c9ab1d82505b1e30dab98b58e728cf75a0))
* **ReactExample:** build issues preventing id generation for react-intl ([4339592](https://github.com/awslabs/iot-app-kit/commit/43395927587fd49852c6775d9e40921631b7bf44))
* **Reparenting:** Fix reparenting nodes ([#368](https://github.com/awslabs/iot-app-kit/issues/368)) ([8a66f94](https://github.com/awslabs/iot-app-kit/commit/8a66f940e98a31e3ef6937336e0e5114e23ad20c))
* **scene-composer:** remove invalid workspace syntax ([#640](https://github.com/awslabs/iot-app-kit/issues/640)) ([ed3b28d](https://github.com/awslabs/iot-app-kit/commit/ed3b28dc86fdae2e70b639ce2774217cd92b6122))
* **SceneHierarchyPerformance:** SceneHierarchy Tree Performance ([#283](https://github.com/awslabs/iot-app-kit/issues/283)) ([5e93adc](https://github.com/awslabs/iot-app-kit/commit/5e93adcc5eb338b98a5c9d90b7873880df1bba1a))
* **SubModelHidingChildren:** Unnamed children should be skipped not omitted ([#377](https://github.com/awslabs/iot-app-kit/issues/377)) ([46be1c4](https://github.com/awslabs/iot-app-kit/commit/46be1c4ab34551b22cb1638e97025f4ae4b43347))
* TilesLoader will now load all visible tiles ([5d59509](https://github.com/awslabs/iot-app-kit/commit/5d5950944a0b0c9d832d2d14621dcc53fed28868))
* TilesLoader will now load all visible tiles ([#593](https://github.com/awslabs/iot-app-kit/issues/593)) ([5d59509](https://github.com/awslabs/iot-app-kit/commit/5d5950944a0b0c9d832d2d14621dcc53fed28868))
* Updating documentation for Storybook ([#264](https://github.com/awslabs/iot-app-kit/issues/264)) ([83352bd](https://github.com/awslabs/iot-app-kit/commit/83352bdab956c8115dc08937e4acb442c6841a0d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/related-table bumped from 5.2.0 to 6.0.0
  * devDependencies
    * @iot-app-kit/source-iottwinmaker bumped from 5.2.0 to 6.0.0
    * eslint-config-iot-app-kit bumped from 5.2.0 to 6.0.0
</details>

<details><summary>source-iotsitewise: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/source-iotsitewise-v5.2.0...source-iotsitewise-v6.0.0) (2023-04-12)


###   BREAKING CHANGES

* **source-iotsitewise:** support propertyAlias in quries
* **core, source-iotsitewise, source-iottwinmaker, react-components:** Add toQueryString method on Query type, implement in iotsitewise and iottwinmaker ([#634](https://github.com/awslabs/iot-app-kit/issues/634))
* **core, source-iotsitewise:** 
* Remove unecessary exports, utilize core types instead of SynchroChart types ([#600](https://github.com/awslabs/iot-app-kit/issues/600))
* **core,source-iotsitewise:** Change time series data modules getRequestsFromQueries to be async
* **core:** Refactored export from `@iot-app-kit/core` IoTAppKitDataModule to be named TimeSeriesDataModule, and removed the concept of multiple data sources per time series data module

### Features

* add npm-publish github workflow ([#68](https://github.com/awslabs/iot-app-kit/issues/68)) ([64e64b8](https://github.com/awslabs/iot-app-kit/commit/64e64b800ad3b6ddbee78cfe84c3750e73dead65))
* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))
* batch API for historical, aggregated, and latest value data ([#137](https://github.com/awslabs/iot-app-kit/issues/137)) ([b7a38e2](https://github.com/awslabs/iot-app-kit/commit/b7a38e225199989524914b88f8da43ca77af2e54))
* **core, source-iotsitewise, source-iottwinmaker, react-components:** Add toQueryString method on Query type, implement in iotsitewise and iottwinmaker ([#634](https://github.com/awslabs/iot-app-kit/issues/634)) ([38a4b98](https://github.com/awslabs/iot-app-kit/commit/38a4b9833ba45eb54585581d661badd93162540c))
* **core,source-iotsitewise:** Change time series data modules getRequestsFromQueries to be async ([69a017e](https://github.com/awslabs/iot-app-kit/commit/69a017ea8dfbd99fcd3c155278cac3c241b30527))
* **core:** Refactor time series data module to  remove unused functionality. Add meta field to data stream. ([7f12267](https://github.com/awslabs/iot-app-kit/commit/7f1226784158bdfff6ab67ab5b0523649a2f7a34))
* **core:** Support caching of dataType, name and other fields describing dataStreams ([542add6](https://github.com/awslabs/iot-app-kit/commit/542add6cac2f40c421687843c3977c9e4cb6e808))
* create react-components and source-iotsitewise pkgs ([#57](https://github.com/awslabs/iot-app-kit/issues/57)) ([16451b1](https://github.com/awslabs/iot-app-kit/commit/16451b12e0fe2662069275185b2fea61048d3fab))
* **dashboard:** refactor sitewise clients ([ddac5b2](https://github.com/awslabs/iot-app-kit/commit/ddac5b2626d24bf8bfacb840611b8b880b2c99af))
* expand children in resource explorer ([#115](https://github.com/awslabs/iot-app-kit/issues/115)) ([8f1c03c](https://github.com/awslabs/iot-app-kit/commit/8f1c03c57f19c30dc04fbad10b5622ad9fc3c5bd))
* Introduce alarms ([#135](https://github.com/awslabs/iot-app-kit/issues/135)) ([5c19b99](https://github.com/awslabs/iot-app-kit/commit/5c19b9957c05fbc8df15545ae9847d39030b686b))
* prevent unsupported data types from being rendered ([#426](https://github.com/awslabs/iot-app-kit/issues/426)) ([dec2a86](https://github.com/awslabs/iot-app-kit/commit/dec2a86f0eccfe87ebfc32d89f74fb8695bb552d))
* **props:** adapt props for synchro-charts ([#133](https://github.com/awslabs/iot-app-kit/issues/133)) ([a98bf06](https://github.com/awslabs/iot-app-kit/commit/a98bf064f14979823f51437dbd599259b6bd6d78))
* refactor app kit ([#67](https://github.com/awslabs/iot-app-kit/issues/67)) ([215584d](https://github.com/awslabs/iot-app-kit/commit/215584db25265437117462c579c1d15c2f1e4dca))
* source-iotsitewise useable module ([#63](https://github.com/awslabs/iot-app-kit/issues/63)) ([21a1014](https://github.com/awslabs/iot-app-kit/commit/21a1014b29df70185360d71fdfb963863b1944d9))
* **source-iotsitewise:** support propertyAlias in quries ([bfe32ce](https://github.com/awslabs/iot-app-kit/commit/bfe32ce74ba6008ae6bb15d1b5f60e8546d36135))
* support fetchMostRecentBeforeStart ([#79](https://github.com/awslabs/iot-app-kit/issues/79)) ([c44b7b8](https://github.com/awslabs/iot-app-kit/commit/c44b7b8d3e04d1b7becacd1fe1f7c59de681d517))


### Bug Fixes

* build to pass when publishing package ([#635](https://github.com/awslabs/iot-app-kit/issues/635)) ([82c3c42](https://github.com/awslabs/iot-app-kit/commit/82c3c42f1f59b42024f3a25a6dc4283b507d6a64))
* **core, source-iotsitewise:** Remove unecessary exports ([#620](https://github.com/awslabs/iot-app-kit/issues/620)) ([4bfe6f8](https://github.com/awslabs/iot-app-kit/commit/4bfe6f8724b48e28c7efc668aa7268f39e60385a))
* **dashboard/components:** add missing prop to webgl component and refactor in dashboard to fix overlay problem ([59738ac](https://github.com/awslabs/iot-app-kit/commit/59738ac9551aa5b55448281a82fa88d1edc700d0))
* **dashboard:** refactor widget type ([fc3e41e](https://github.com/awslabs/iot-app-kit/commit/fc3e41e3e4c1cececd49f34d6d9aaa6821b21ae7))
* **deps:** update synchro-charts, node-sass, nth-check ([#295](https://github.com/awslabs/iot-app-kit/issues/295)) ([164b751](https://github.com/awslabs/iot-app-kit/commit/164b7511ef2d42f1e816d804628440e577f03e43))
* Remove unecessary exports, utilize core types instead of SynchroChart types ([#600](https://github.com/awslabs/iot-app-kit/issues/600)) ([15d6740](https://github.com/awslabs/iot-app-kit/commit/15d67401b7e152eeba1e550efc75faf79cefbf7e))
* sitewise source time series module ([#71](https://github.com/awslabs/iot-app-kit/issues/71)) ([6671217](https://github.com/awslabs/iot-app-kit/commit/6671217f3f2b813ecec6e907ee85ba6e0dd347c6))
* **source-iotsitewise:** deduplicate batch requests ([#629](https://github.com/awslabs/iot-app-kit/issues/629)) ([0a5e8a1](https://github.com/awslabs/iot-app-kit/commit/0a5e8a1ec7eeec2c7f214a0f8c7963bb66990678))
* **source-iotsitewise:** move testing util to dev dep ([e10e548](https://github.com/awslabs/iot-app-kit/commit/e10e5487bf3f31e3b107a51cb4fc9da28057efe6))
* **source-iotsitewise:** use alarm model name in data stream instead of alarm state name ([3c3a1ae](https://github.com/awslabs/iot-app-kit/commit/3c3a1ae52df8f32d0217e82c463e624cc4880890))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/core-util bumped from 5.2.0 to 6.0.0
  * devDependencies
    * @iot-app-kit/jest-config bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/testing-util bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/ts-config bumped from 5.2.0 to 6.0.0
    * eslint-config-iot-app-kit bumped from 5.2.0 to 6.0.0
</details>

<details><summary>source-iottwinmaker: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/source-iottwinmaker-v5.2.0...source-iottwinmaker-v6.0.0) (2023-04-12)


###   BREAKING CHANGES

* **core, source-iotsitewise, source-iottwinmaker, react-components:** Add toQueryString method on Query type, implement in iotsitewise and iottwinmaker ([#634](https://github.com/awslabs/iot-app-kit/issues/634))
* Remove unecessary exports, utilize core types instead of SynchroChart types ([#600](https://github.com/awslabs/iot-app-kit/issues/600))

### Features

* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))
* **Composer:** twinMaker-matterport integration ([bcfe40f](https://github.com/awslabs/iot-app-kit/commit/bcfe40fc7f4b26af7510f32b0b4986d62b6ef30b))
* **core, source-iotsitewise, source-iottwinmaker, react-components:** Add toQueryString method on Query type, implement in iotsitewise and iottwinmaker ([#634](https://github.com/awslabs/iot-app-kit/issues/634)) ([38a4b98](https://github.com/awslabs/iot-app-kit/commit/38a4b9833ba45eb54585581d661badd93162540c))
* Introduce alarms ([#135](https://github.com/awslabs/iot-app-kit/issues/135)) ([5c19b99](https://github.com/awslabs/iot-app-kit/commit/5c19b9957c05fbc8df15545ae9847d39030b686b))
* prevent unsupported data types from being rendered ([#426](https://github.com/awslabs/iot-app-kit/issues/426)) ([dec2a86](https://github.com/awslabs/iot-app-kit/commit/dec2a86f0eccfe87ebfc32d89f74fb8695bb552d))
* **React18:** Adds support for react 18 ([596c6b0](https://github.com/awslabs/iot-app-kit/commit/596c6b0ca2757baf445e4b203c3546e2d041e559))
* **TwinMaker:** Add TwinMaker packages ([#252](https://github.com/awslabs/iot-app-kit/issues/252)) ([fabbe03](https://github.com/awslabs/iot-app-kit/commit/fabbe0399dd37293e99588124404c37c929f4330))


### Bug Fixes

* **dashboard/components:** add missing prop to webgl component and refactor in dashboard to fix overlay problem ([59738ac](https://github.com/awslabs/iot-app-kit/commit/59738ac9551aa5b55448281a82fa88d1edc700d0))
* **deps:** update synchro-charts, node-sass, nth-check ([#295](https://github.com/awslabs/iot-app-kit/issues/295)) ([164b751](https://github.com/awslabs/iot-app-kit/commit/164b7511ef2d42f1e816d804628440e577f03e43))
* Remove unecessary exports, utilize core types instead of SynchroChart types ([#600](https://github.com/awslabs/iot-app-kit/issues/600)) ([15d6740](https://github.com/awslabs/iot-app-kit/commit/15d67401b7e152eeba1e550efc75faf79cefbf7e))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 5.2.0 to 6.0.0
  * devDependencies
    * @iot-app-kit/jest-config bumped from 5.2.0 to 6.0.0
    * @iot-app-kit/ts-config bumped from 5.2.0 to 6.0.0
    * eslint-config-iot-app-kit bumped from 5.2.0 to 6.0.0
</details>

<details><summary>testing-util: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/testing-util-v5.2.0...testing-util-v6.0.0) (2023-04-12)


### Features

* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))
* **dashboard:** refactor sitewise clients ([ddac5b2](https://github.com/awslabs/iot-app-kit/commit/ddac5b2626d24bf8bfacb840611b8b880b2c99af))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 5.2.0 to 6.0.0
</details>

<details><summary>ts-config: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/ts-config-v5.2.0...ts-config-v6.0.0) (2023-04-12)


###   BREAKING CHANGES

* **TableComponent:** replace table annotations API with thresholds, remove stencilJS wrapper

### Features

* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))
* **TableComponent:** replace table annotations API with thresholds, remove stencilJS wrapper ([74880c4](https://github.com/awslabs/iot-app-kit/commit/74880c44117c12a494f6c6591f0c6df21cd7d00f))
</details>

<details><summary>eslint-config: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/eslint-config-v5.2.0...eslint-config-v6.0.0) (2023-04-12)


### Features

* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))


### Bug Fixes

* increase commitlint body-max-line-length to 250 ([52cab67](https://github.com/awslabs/iot-app-kit/commit/52cab674f56c2f65f2471d34f655264fe105bad8))
</details>

<details><summary>root: 6.0.0</summary>

## [6.0.0](https://github.com/awslabs/iot-app-kit/compare/root-v5.2.0...root-v6.0.0) (2023-04-12)


###   BREAKING CHANGES

* **ReactComponents:** remove web-component iot app kit visualizations
* **TableComponent:** replace table annotations API with thresholds, remove stencilJS wrapper
* **source-iotsitewise:** support propertyAlias in quries
* **core, source-iotsitewise, source-iottwinmaker, react-components:** Add toQueryString method on Query type, implement in iotsitewise and iottwinmaker ([#634](https://github.com/awslabs/iot-app-kit/issues/634))
* **core, source-iotsitewise:** 
* Remove unecessary exports, utilize core types instead of SynchroChart types ([#600](https://github.com/awslabs/iot-app-kit/issues/600))
* **core,source-iotsitewise:** Change time series data modules getRequestsFromQueries to be async
* **core:** Refactored export from `@iot-app-kit/core` IoTAppKitDataModule to be named TimeSeriesDataModule, and removed the concept of multiple data sources per time series data module

### Features

* Add Asset Hierarchy loading & Asset Tree support ([e36380a](https://github.com/awslabs/iot-app-kit/commit/e36380ad011b3e0b10a3b8a2d65245446248f55f))
* add CodeQL workflow ([#64](https://github.com/awslabs/iot-app-kit/issues/64)) ([bfd7c88](https://github.com/awslabs/iot-app-kit/commit/bfd7c88424faac92d2f11eb7fa44910cd1e2872d))
* Add Core SiteWise Asset Module ([a3ffec2](https://github.com/awslabs/iot-app-kit/commit/a3ffec2e490542b9bdd5587316e4ddd72573c109))
* add in styles overrides and refId in query ([#38](https://github.com/awslabs/iot-app-kit/issues/38)) ([76a9d63](https://github.com/awslabs/iot-app-kit/commit/76a9d63e02a13f3229f1ee58a1d35b974fe81ae2))
* add npm-publish github workflow ([#68](https://github.com/awslabs/iot-app-kit/issues/68)) ([64e64b8](https://github.com/awslabs/iot-app-kit/commit/64e64b800ad3b6ddbee78cfe84c3750e73dead65))
* Add proposed API changes within types declarations ([#37](https://github.com/awslabs/iot-app-kit/issues/37)) ([629fbeb](https://github.com/awslabs/iot-app-kit/commit/629fbeb46e10cfce699ca2c7906e651cb2a83f7b))
* add support for aggregated data for sitewise data source ([#6](https://github.com/awslabs/iot-app-kit/issues/6)) ([a50b31e](https://github.com/awslabs/iot-app-kit/commit/a50b31e8da30b93aa02ea8e89e44fa686bd71d67))
* add support for resolution mapping ([#16](https://github.com/awslabs/iot-app-kit/issues/16)) ([8dda905](https://github.com/awslabs/iot-app-kit/commit/8dda905ff27d6e5a749a7f90d59dd6cf1dad4ec8))
* Add support for update within subscribeToTimeSeriesData ([#53](https://github.com/awslabs/iot-app-kit/issues/53)) ([83b100f](https://github.com/awslabs/iot-app-kit/commit/83b100f29e7a2d5062597c13946db44af2ae4029))
* add test runner github action ([#8](https://github.com/awslabs/iot-app-kit/issues/8)) ([ef398b9](https://github.com/awslabs/iot-app-kit/commit/ef398b9e9c65c75562d87ec95e3b9c7b90751eaa))
* allow to specify region for data-module ([#4](https://github.com/awslabs/iot-app-kit/issues/4)) ([ae2ef66](https://github.com/awslabs/iot-app-kit/commit/ae2ef662ef98230fa64676e374e0401cbe64cce3))
* **all:** release 4.0.3 ([2b933ba](https://github.com/awslabs/iot-app-kit/commit/2b933ba31e60666323df7bfae0e962698636a4bf))
* **all:** release version 4.0.2 ([72ca893](https://github.com/awslabs/iot-app-kit/commit/72ca8930db4de95e56381c7f79c9d934230c2283))
* api simplification of requestSettings ([#27](https://github.com/awslabs/iot-app-kit/issues/27)) ([537b8ca](https://github.com/awslabs/iot-app-kit/commit/537b8ca3a459cb1ea70ec99a10697f34ba343657))
* backfill component integration tests ([#66](https://github.com/awslabs/iot-app-kit/issues/66)) ([4f17201](https://github.com/awslabs/iot-app-kit/commit/4f17201f5990876b67861f091dbdcdb5345a28c2))
* batch API for historical, aggregated, and latest value data ([#137](https://github.com/awslabs/iot-app-kit/issues/137)) ([b7a38e2](https://github.com/awslabs/iot-app-kit/commit/b7a38e225199989524914b88f8da43ca77af2e54))
* bind gestures to components ([#31](https://github.com/awslabs/iot-app-kit/issues/31)) ([799763b](https://github.com/awslabs/iot-app-kit/commit/799763b8dc0adf146704ad56d7814bc3ae88d3e9))
* **charts:** add legend to charts ([0abfcf6](https://github.com/awslabs/iot-app-kit/commit/0abfcf6c5a325ee24290d5ac990703e24f6db3f0))
* **components:** support viewport grouping in iot-table using ViewportManager. ([feba985](https://github.com/awslabs/iot-app-kit/commit/feba985487156207fee0ca576ed76d39133d9db0))
* **composer:** add data overaly ([42f8896](https://github.com/awslabs/iot-app-kit/commit/42f889620c01d02250c6856ab4a56a446bc3f556))
* **composer:** add overlay panel config editor ([42f8896](https://github.com/awslabs/iot-app-kit/commit/42f889620c01d02250c6856ab4a56a446bc3f556))
* **composer:** add runtime tag settings change support ([eeda501](https://github.com/awslabs/iot-app-kit/commit/eeda501d456c10f61123f9c4f77618bb870816f5))
* **composer:** data binding variable support for data overlay ([42f8896](https://github.com/awslabs/iot-app-kit/commit/42f889620c01d02250c6856ab4a56a446bc3f556))
* **composer:** data overlay editor & render markdown ([42f8896](https://github.com/awslabs/iot-app-kit/commit/42f889620c01d02250c6856ab4a56a446bc3f556))
* **composer:** implement add overlay from menu ([42f8896](https://github.com/awslabs/iot-app-kit/commit/42f889620c01d02250c6856ab4a56a446bc3f556))
* **composer:** Implement data overlay container ([#595](https://github.com/awslabs/iot-app-kit/issues/595)) ([42f8896](https://github.com/awslabs/iot-app-kit/commit/42f889620c01d02250c6856ab4a56a446bc3f556))
* **Composer:** twinMaker-matterport integration ([bcfe40f](https://github.com/awslabs/iot-app-kit/commit/bcfe40fc7f4b26af7510f32b0b4986d62b6ef30b))
* **composer:** update overlay UI and flow ([5bf75aa](https://github.com/awslabs/iot-app-kit/commit/5bf75aa0a9e2128f0e41798f8cc3d94322e18888))
* **composer:** update TagResize feature implementation ([b8dfb46](https://github.com/awslabs/iot-app-kit/commit/b8dfb468043ff6c8b4f154c145f997c6467117ec))
* **composer:** visibility toggles for overlays in settings panel ([4fc0527](https://github.com/awslabs/iot-app-kit/commit/4fc05276aa3f55f19aa8c0792ade3deb58eef7a3))
* **core, source-iotsitewise, source-iottwinmaker, react-components:** Add toQueryString method on Query type, implement in iotsitewise and iottwinmaker ([#634](https://github.com/awslabs/iot-app-kit/issues/634)) ([38a4b98](https://github.com/awslabs/iot-app-kit/commit/38a4b9833ba45eb54585581d661badd93162540c))
* **core,source-iotsitewise:** Change time series data modules getRequestsFromQueries to be async ([69a017e](https://github.com/awslabs/iot-app-kit/commit/69a017ea8dfbd99fcd3c155278cac3c241b30527))
* **core:** Add meta field to requestInfos in TimeSeriesDataModule ([5db70c8](https://github.com/awslabs/iot-app-kit/commit/5db70c85e51dd6a44b2ab89049a952da9140c990))
* **core:** Add viewportManager to orchestrate viewport syncing within groups ([8990d13](https://github.com/awslabs/iot-app-kit/commit/8990d135c26cc02619a87312d8b00edc5978a603))
* **core:** Refactor time series data module to  remove unused functionality. Add meta field to data stream. ([7f12267](https://github.com/awslabs/iot-app-kit/commit/7f1226784158bdfff6ab67ab5b0523649a2f7a34))
* **core:** Support caching of dataType, name and other fields describing dataStreams ([542add6](https://github.com/awslabs/iot-app-kit/commit/542add6cac2f40c421687843c3977c9e4cb6e808))
* create react-components and source-iotsitewise pkgs ([#57](https://github.com/awslabs/iot-app-kit/issues/57)) ([16451b1](https://github.com/awslabs/iot-app-kit/commit/16451b12e0fe2662069275185b2fea61048d3fab))
* create tree table base component ([#15](https://github.com/awslabs/iot-app-kit/issues/15)) ([4678f80](https://github.com/awslabs/iot-app-kit/commit/4678f80a114958d8fedf51c980fc3c2fbd718d2c))
* customizable resolutions ([#23](https://github.com/awslabs/iot-app-kit/issues/23)) ([0ffd474](https://github.com/awslabs/iot-app-kit/commit/0ffd4748c3be124045def6a404d097aa0d029a7b))
* **dashboard/components:** memoize components to prevent unnecessary re-renders ([50050ca](https://github.com/awslabs/iot-app-kit/commit/50050ca206efa320256b848f187854c11de85d73))
* **dashboard:** add alarm support for widgets ([bf7964a](https://github.com/awslabs/iot-app-kit/commit/bf7964ac18c66c3bcc979425f62a13a705bfae7c))
* **dashboard:** add input widet configuration ([#581](https://github.com/awslabs/iot-app-kit/issues/581)) ([a1bf180](https://github.com/awslabs/iot-app-kit/commit/a1bf18084aed3126dac0540a848a0e3b35492e32))
* **dashboard:** add selection and move components and actions ([13aa08e](https://github.com/awslabs/iot-app-kit/commit/13aa08e26c1a6fee6b791851fdd1a233ccc62e81))
* **dashboard:** add status timeline widget ([085ab29](https://github.com/awslabs/iot-app-kit/commit/085ab29fcd18778c6232bb6823b843dba8ae81e7))
* **dashboard:** add table support to dashboard ([1d8d44e](https://github.com/awslabs/iot-app-kit/commit/1d8d44e2a7bb67811de9702efa23dbdd5653f572))
* **dashboard:** alpha release of dashboard component ([a2f237e](https://github.com/awslabs/iot-app-kit/commit/a2f237ec0434cff0c3b765d5c46686b190620b53))
* **dashboard:** assign default color based on cloudscape design ([5855096](https://github.com/awslabs/iot-app-kit/commit/58550960ce402c6e18ee25ffee87945a6aeb4f77))
* **dashboard:** complete table support ([29bbb4c](https://github.com/awslabs/iot-app-kit/commit/29bbb4cb3297ed739390e349af9069ad6601c368))
* **dashboard:** define public api ([35910ba](https://github.com/awslabs/iot-app-kit/commit/35910ba8531ebe09468902fb87577357aaea4ddd))
* **dashboard:** disable asset drop for widgets that are not compatible with that data type ([31b8361](https://github.com/awslabs/iot-app-kit/commit/31b83611ffdd478ad2020dcac9dcf395caa2af79))
* **dashboard:** enable edit mode for text widget by default ([2b4db27](https://github.com/awslabs/iot-app-kit/commit/2b4db27d1acb468293d702c0a5aba02cdbd235cc))
* **dashboard:** enable font size dropdown selection ([fe25dd7](https://github.com/awslabs/iot-app-kit/commit/fe25dd70ed7c6a2ad54a196923cb1057abe7c97e))
* **dashboard:** initial dashboard work ([06cc210](https://github.com/awslabs/iot-app-kit/commit/06cc21079dc0446a06c72db676dba27f05a1606f))
* **dashboard:** initial scaffolding for input widget ([#566](https://github.com/awslabs/iot-app-kit/issues/566)) ([e6bbb46](https://github.com/awslabs/iot-app-kit/commit/e6bbb46cf738dceeb7a9a3a8873f0d148f182db8))
* **dashboard:** kpi and status widget empty states ([9dea96d](https://github.com/awslabs/iot-app-kit/commit/9dea96d8b6fb1f59ba2173510ebeb749ebe6233c))
* **dashboard:** refactor sitewise clients ([ddac5b2](https://github.com/awslabs/iot-app-kit/commit/ddac5b2626d24bf8bfacb840611b8b880b2c99af))
* **dashboard:** update resource explorer ([#613](https://github.com/awslabs/iot-app-kit/issues/613)) ([b75a33b](https://github.com/awslabs/iot-app-kit/commit/b75a33be0106ff341e66c219e7090f7f0c8f791b))
* **EnvironmentModel:** Adding support for environment overlay ([#262](https://github.com/awslabs/iot-app-kit/issues/262)) ([0277027](https://github.com/awslabs/iot-app-kit/commit/0277027d59f232c2c8e29fac0bc53399a1eb9c1e))
* error handling/data-module core ([#14](https://github.com/awslabs/iot-app-kit/issues/14)) ([376929f](https://github.com/awslabs/iot-app-kit/commit/376929fda106a808d312b8b92a309c9184857fe1))
* expand children in resource explorer ([#115](https://github.com/awslabs/iot-app-kit/issues/115)) ([8f1c03c](https://github.com/awslabs/iot-app-kit/commit/8f1c03c57f19c30dc04fbad10b5622ad9fc3c5bd))
* explicitly type sitewise query ([#59](https://github.com/awslabs/iot-app-kit/issues/59)) ([e62f44b](https://github.com/awslabs/iot-app-kit/commit/e62f44b6a776d09677786e8978a0c0c2d786c9d1))
* expose ttlDurationMapping as data module configuration ([#20](https://github.com/awslabs/iot-app-kit/issues/20)) ([acb7520](https://github.com/awslabs/iot-app-kit/commit/acb752048840e7de6b087d45ecc999ed13a4b355))
* **github:** add github workflow to publish alpha dashboard ([92eb162](https://github.com/awslabs/iot-app-kit/commit/92eb162288b26a3bdc2297b65108537a7c4ceb9d))
* improve clean script ([#43](https://github.com/awslabs/iot-app-kit/issues/43)) ([38f5f84](https://github.com/awslabs/iot-app-kit/commit/38f5f846b02c3dfc6b8b827f5daaa8ffc5d50199))
* improve documentation ([#90](https://github.com/awslabs/iot-app-kit/issues/90)) ([83c706d](https://github.com/awslabs/iot-app-kit/commit/83c706d74d896db6fd2864af6b26db4718d4fcdc))
* improve documentation and clarity of react-components pkg ([#60](https://github.com/awslabs/iot-app-kit/issues/60)) ([f4239cf](https://github.com/awslabs/iot-app-kit/commit/f4239cf1ca201044095004a2e6c358f3a4c90ebc))
* Improve documentation formatting ([#93](https://github.com/awslabs/iot-app-kit/issues/93)) ([035d8e1](https://github.com/awslabs/iot-app-kit/commit/035d8e13f6e3ce77141ec610ef64abaa435a1a73))
* improve error handling ([#61](https://github.com/awslabs/iot-app-kit/issues/61)) ([5016e41](https://github.com/awslabs/iot-app-kit/commit/5016e4108714edc3e3b2a2465126f48212068ffd))
* Improve resource explorer docs ([#95](https://github.com/awslabs/iot-app-kit/issues/95)) ([0709c08](https://github.com/awslabs/iot-app-kit/commit/0709c0838fc51f100d7de7c4239579073aaf17ea))
* increase sitewise default resolution mapping thresholds ([#46](https://github.com/awslabs/iot-app-kit/issues/46)) ([f2d1011](https://github.com/awslabs/iot-app-kit/commit/f2d10116e512bb4ba799cb09b5227098ea43b688))
* Introduce alarms ([#135](https://github.com/awslabs/iot-app-kit/issues/135)) ([5c19b99](https://github.com/awslabs/iot-app-kit/commit/5c19b9957c05fbc8df15545ae9847d39030b686b))
* introduce module coordinator ([#47](https://github.com/awslabs/iot-app-kit/issues/47)) ([36684eb](https://github.com/awslabs/iot-app-kit/commit/36684ebf6eb71928c3b66f9bb694a3694a2dbabf))
* **Matterport:** Integrate Matterport Showcase Viewer into TwinMaker SceneComposer ([58236e7](https://github.com/awslabs/iot-app-kit/commit/58236e7eed7f5435480cba6ce214346a4f8d3a86))
* Onboard cypress with component test runner ([#34](https://github.com/awslabs/iot-app-kit/issues/34)) ([b82d682](https://github.com/awslabs/iot-app-kit/commit/b82d682798295547248df2ffa57f0790dd328d96))
* **OpacityFilterZero:** Setting opacity to 0 should effectively hide the object ([#342](https://github.com/awslabs/iot-app-kit/issues/342)) ([91e491b](https://github.com/awslabs/iot-app-kit/commit/91e491b45ad2e31f4e407686fbf40c8c0df9f9d0))
* pass thru annotations ([#65](https://github.com/awslabs/iot-app-kit/issues/65)) ([f9e3d31](https://github.com/awslabs/iot-app-kit/commit/f9e3d31fae6f5b2f905edc6f26875e8b8317cb5a))
* prevent unsupported data types from being rendered ([#426](https://github.com/awslabs/iot-app-kit/issues/426)) ([dec2a86](https://github.com/awslabs/iot-app-kit/commit/dec2a86f0eccfe87ebfc32d89f74fb8695bb552d))
* **props:** adapt props for synchro-charts ([#133](https://github.com/awslabs/iot-app-kit/issues/133)) ([a98bf06](https://github.com/awslabs/iot-app-kit/commit/a98bf064f14979823f51437dbd599259b6bd6d78))
* query provider classes and TimeSeriesData support ([#51](https://github.com/awslabs/iot-app-kit/issues/51)) ([173f46a](https://github.com/awslabs/iot-app-kit/commit/173f46a8951339da412a9e5c3ba282f41a897718))
* **react-comp:** isThresholdBreached checks all comparison ops ([de3fe49](https://github.com/awslabs/iot-app-kit/commit/de3fe495b764d45dd9c364b93f2e5898d2cb661e))
* **react-components:** publish TimeSync component as part of the public API ([#621](https://github.com/awslabs/iot-app-kit/issues/621)) ([a4e2f66](https://github.com/awslabs/iot-app-kit/commit/a4e2f66e6a0a2d58eb1a5316ac3fab4520dd3161))
* **react-components:** release useViewport hook ([#631](https://github.com/awslabs/iot-app-kit/issues/631)) ([794b4a4](https://github.com/awslabs/iot-app-kit/commit/794b4a49c70824836ac0fadf8008d0937059d16d))
* **react-comp:** sync viewports using @iot-app-kit/charts pckg ([08c7eda](https://github.com/awslabs/iot-app-kit/commit/08c7eda38c600120aebe228285c5c1dc311ab8af))
* **React18:** Adds support for react 18 ([596c6b0](https://github.com/awslabs/iot-app-kit/commit/596c6b0ca2757baf445e4b203c3546e2d041e559))
* **ReactComponents:** support alarms via thresholds ingested from useTimeSeriesData hook ([4df9ff0](https://github.com/awslabs/iot-app-kit/commit/4df9ff00083239e3eb32b7766ec16396a5f7deb4))
* refactor app kit ([#67](https://github.com/awslabs/iot-app-kit/issues/67)) ([215584d](https://github.com/awslabs/iot-app-kit/commit/215584db25265437117462c579c1d15c2f1e4dca))
* Refactor Asset Tree to use the new Query/Provider system ([#62](https://github.com/awslabs/iot-app-kit/issues/62)) ([cccbe61](https://github.com/awslabs/iot-app-kit/commit/cccbe61cb596b284752cc240b8e95e261b03956b))
* Refactor Site Wise Asset session interface to support Promises ([#40](https://github.com/awslabs/iot-app-kit/issues/40)) ([184ccc6](https://github.com/awslabs/iot-app-kit/commit/184ccc6dc6ce9236048aa6e8595e7d4e61afeed3))
* **RemoveNodeSass:** Replace node-sass dependency with a native javascript implementation ([f5ca005](https://github.com/awslabs/iot-app-kit/commit/f5ca005094d6c0164845d573a7dd89eb75bfca5f))
* request data in descending order ([#30](https://github.com/awslabs/iot-app-kit/issues/30)) ([29b23a7](https://github.com/awslabs/iot-app-kit/commit/29b23a775acae75c65172e68e4b502e5238f863f))
* Resource Explorer ([#24](https://github.com/awslabs/iot-app-kit/issues/24)) ([2e9d746](https://github.com/awslabs/iot-app-kit/commit/2e9d7467ff3aa4c954f486f89a6693a193821cb2))
* **resource explorer:** allow dashboard to only show asset name ([5df2c5c](https://github.com/awslabs/iot-app-kit/commit/5df2c5cf9f289360ea4a80f3188c7d16307b5e06))
* restructure mocks of sitewise to all be co-located ([#52](https://github.com/awslabs/iot-app-kit/issues/52)) ([557484f](https://github.com/awslabs/iot-app-kit/commit/557484f3182168b6253d653417318dcbd127698e))
* set up table package and add createTableItems method ([#124](https://github.com/awslabs/iot-app-kit/issues/124)) ([d827d21](https://github.com/awslabs/iot-app-kit/commit/d827d216ef69cb6207f6ef6f23b7ddce4ae76b6b))
* sitewise components use query and provider ([#54](https://github.com/awslabs/iot-app-kit/issues/54)) ([80cf5d4](https://github.com/awslabs/iot-app-kit/commit/80cf5d4cf08e78d05b90bb0c84c18323885c32e5))
* Sitewise Resource Explorer ([#21](https://github.com/awslabs/iot-app-kit/issues/21)) ([8f26b58](https://github.com/awslabs/iot-app-kit/commit/8f26b58433ff05bd6709c7659dfb6b015e6a90dd))
* source-iotsitewise useable module ([#63](https://github.com/awslabs/iot-app-kit/issues/63)) ([21a1014](https://github.com/awslabs/iot-app-kit/commit/21a1014b29df70185360d71fdfb963863b1944d9))
* **source-iotsitewise:** support propertyAlias in quries ([bfe32ce](https://github.com/awslabs/iot-app-kit/commit/bfe32ce74ba6008ae6bb15d1b5f60e8546d36135))
* support auto-assigning colors for certain components ([#96](https://github.com/awslabs/iot-app-kit/issues/96)) ([d75e426](https://github.com/awslabs/iot-app-kit/commit/d75e4261088fefab5886a0325818228930c6f363))
* support fetchMostRecentBeforeStart ([#79](https://github.com/awslabs/iot-app-kit/issues/79)) ([c44b7b8](https://github.com/awslabs/iot-app-kit/commit/c44b7b8d3e04d1b7becacd1fe1f7c59de681d517))
* Support multiple queries per subscription ([#39](https://github.com/awslabs/iot-app-kit/issues/39)) ([57772c1](https://github.com/awslabs/iot-app-kit/commit/57772c1b9beb5a0b39d5e1475bd0b0038271f944))
* **TableComponent:** replace table annotations API with thresholds, remove stencilJS wrapper ([74880c4](https://github.com/awslabs/iot-app-kit/commit/74880c44117c12a494f6c6591f0c6df21cd7d00f))
* **table:** create new Table component based on AWSUI Table component ([#129](https://github.com/awslabs/iot-app-kit/issues/129)) ([ba18720](https://github.com/awslabs/iot-app-kit/commit/ba18720829be791fd030e4a6cf57f2254b65f09f))
* **table:** support messageOverrides ([#211](https://github.com/awslabs/iot-app-kit/issues/211)) ([ccb7a32](https://github.com/awslabs/iot-app-kit/commit/ccb7a3286962f459386d10d84a923621b5839625))
* **time-sync:** useViewport returns a group ([c12349b](https://github.com/awslabs/iot-app-kit/commit/c12349b17e7ed917babd394a05c7a47f0b8bccc0))
* **TimeSync:** add a lastUsedBy string to the useViewport hook ([526f059](https://github.com/awslabs/iot-app-kit/commit/526f059dcfe74d8590b9ee0add435700d3ed943d))
* **TwinMaker:** Add TwinMaker packages ([#252](https://github.com/awslabs/iot-app-kit/issues/252)) ([fabbe03](https://github.com/awslabs/iot-app-kit/commit/fabbe0399dd37293e99588124404c37c929f4330))
* **TwinMakerTools:** add automatic workspace creation in deploy + misc bug fixes, add unit tests ([503103c](https://github.com/awslabs/iot-app-kit/commit/503103ce1de5a00a0dca64386a0a375697ff2812))
* **TwinMakerTools:** add twin maker tools package ([79cf53b](https://github.com/awslabs/iot-app-kit/commit/79cf53b5a5e278de783e860a360e45867acf1b4d))
* update sitewise component interface ([#58](https://github.com/awslabs/iot-app-kit/issues/58)) ([1927053](https://github.com/awslabs/iot-app-kit/commit/1927053f7c8b3dff25b26d246e632ba2b26a4429))
* update synchro charts to 3.1.0, update docs ([#92](https://github.com/awslabs/iot-app-kit/issues/92)) ([10a55fa](https://github.com/awslabs/iot-app-kit/commit/10a55fad0b2eb1271aa449f0c0ebfc010a40e08b))
* Wrap SiteWise Asset related API calls in a Data Source ([36475b8](https://github.com/awslabs/iot-app-kit/commit/36475b826b11a4ac205312eaee63f7188d1b9ea8))


### Bug Fixes

* **actions:** run publish workflow on change to the workflow ([11c5dfe](https://github.com/awslabs/iot-app-kit/commit/11c5dfe567821e16944f9b5ce1f8ad5d9ac542d7))
* **actions:** update publish action for core-util ([16bf9fc](https://github.com/awslabs/iot-app-kit/commit/16bf9fcacbf4dffd3979402b8451b880e14c6a61))
* **actions:** updating release-please command ([5fb120e](https://github.com/awslabs/iot-app-kit/commit/5fb120e1d88e8193b0cb99b1bb24803518aef2aa))
* Add appropriate default resolution for bar chart ([#76](https://github.com/awslabs/iot-app-kit/issues/76)) ([ddce235](https://github.com/awslabs/iot-app-kit/commit/ddce2355bbb8edefaa246ea1872efef6c24a480a))
* add dashboard package to the npm workspace config ([91ec14e](https://github.com/awslabs/iot-app-kit/commit/91ec14e0bd8747717c9acaf6a63fb2a9aa987753))
* Add dashboard to release-please-config ([35730e7](https://github.com/awslabs/iot-app-kit/commit/35730e7e7f78ae83a51a65dd41f572d96e4e5eb2))
* Allows user to hit Esc key to cancel Enhanced Editing ([#272](https://github.com/awslabs/iot-app-kit/issues/272)) ([6b73fad](https://github.com/awslabs/iot-app-kit/commit/6b73fad6db0bc61a4935bec76ebaecf39da366c5))
* backfill on requestBuffer tests ([#55](https://github.com/awslabs/iot-app-kit/issues/55)) ([416eea1](https://github.com/awslabs/iot-app-kit/commit/416eea108bc9b353ab9da1d98f3f3ceeaf994cdb))
* **BarChart:** prevent bar chart from trying to request raw data by default ([6845d95](https://github.com/awslabs/iot-app-kit/commit/6845d95789861a1d6d97cfb4322f6371983de729))
* build to pass when publishing package ([#635](https://github.com/awslabs/iot-app-kit/issues/635)) ([82c3c42](https://github.com/awslabs/iot-app-kit/commit/82c3c42f1f59b42024f3a25a6dc4283b507d6a64))
* **build:** add missing dev deps in scene-composer ([b128405](https://github.com/awslabs/iot-app-kit/commit/b1284052e7db7247bd1bbe4758cde21ba584f8c5))
* **CameraView:** Minimum FOV check introduced ([#284](https://github.com/awslabs/iot-app-kit/issues/284)) ([6a8d9f1](https://github.com/awslabs/iot-app-kit/commit/6a8d9f1cbc7995efc612a7cac9f551c7c43ba438))
* **charts:** fix live mode viewport scrollingbug ([dbea3ff](https://github.com/awslabs/iot-app-kit/commit/dbea3ff3f1908a6a48b1ca9ee5c654f9b55eb616))
* **ci:** allow releases to be trigged via changes to github workflows ([5265ed0](https://github.com/awslabs/iot-app-kit/commit/5265ed0f30a4524cb5b5f0643f8b079537ffd074))
* **ci:** release as 3.0.1@alpha ([6677a1f](https://github.com/awslabs/iot-app-kit/commit/6677a1f011e72387fcf170e0944a9acb780a239a))
* **components:** fix connector to iot app kit components ([be91864](https://github.com/awslabs/iot-app-kit/commit/be91864aee326c1c3fd5320b30b86d34f9f246d0))
* **components:** import missing CSS style sheets. ([9634ec9](https://github.com/awslabs/iot-app-kit/commit/9634ec92bb471700e5e982bf014b355595cf7f25))
* **components:** move message merge to componentWillRender() ([8e2d260](https://github.com/awslabs/iot-app-kit/commit/8e2d2601a2e7e6808b0c1037cee1dd7957b39af3))
* **composer:** Adding ability to deselect by click radio button ([#351](https://github.com/awslabs/iot-app-kit/issues/351)) ([8c402b7](https://github.com/awslabs/iot-app-kit/commit/8c402b774b9a10ffdcdd13fc0a9f2f89f3eb507b))
* **composer:** Adjusting logic for reparenting scene nodes ([#369](https://github.com/awslabs/iot-app-kit/issues/369)) ([3475ebd](https://github.com/awslabs/iot-app-kit/commit/3475ebd404c728226cc1582667cabfd1420a8afa))
* **composer:** Allows nodes to be dropped at root level ([#390](https://github.com/awslabs/iot-app-kit/issues/390)) ([d9d7978](https://github.com/awslabs/iot-app-kit/commit/d9d79789e67a43b94057ad0ff45c663e186cacf7))
* **composer:** Auto expand hierarchy when selecting node on scene ([#452](https://github.com/awslabs/iot-app-kit/issues/452)) ([9b3e80f](https://github.com/awslabs/iot-app-kit/commit/9b3e80f17f26ef0268eaeb6222d79f077d057c97))
* **composer:** boolean data always converted to false ([#323](https://github.com/awslabs/iot-app-kit/issues/323)) ([254d68f](https://github.com/awslabs/iot-app-kit/commit/254d68f610efd1c75963f91c185bd42a2d649365))
* **composer:** Bug fix for rerenders on name input in inspect panel ([#334](https://github.com/awslabs/iot-app-kit/issues/334)) ([b8a0b4c](https://github.com/awslabs/iot-app-kit/commit/b8a0b4c4e8371637a0f1342f96196ca5b46ed383))
* **composer:** Camera and Light helper visibility toggling ([#294](https://github.com/awslabs/iot-app-kit/issues/294)) ([4f62051](https://github.com/awslabs/iot-app-kit/commit/4f6205157cb30c3a4af28ea6680ebfe39e0a16e4))
* **composer:** convert to inline overlay CSS ([0f5b82a](https://github.com/awslabs/iot-app-kit/commit/0f5b82af6ebf954e6a7fa388c5946b56686b98ab))
* **composer:** CSS Cleanup for Sceneviewer ([#379](https://github.com/awslabs/iot-app-kit/issues/379)) ([890dc4d](https://github.com/awslabs/iot-app-kit/commit/890dc4d57b3b756e90d47884fdf8a275595a1bc5))
* **composer:** drag root node crashes scene ([#372](https://github.com/awslabs/iot-app-kit/issues/372)) ([ca01c40](https://github.com/awslabs/iot-app-kit/commit/ca01c40241cad7f86f1bbb1a9b920795485076b8))
* **composer:** enable new features for SceneViewer ([#355](https://github.com/awslabs/iot-app-kit/issues/355)) ([631953a](https://github.com/awslabs/iot-app-kit/commit/631953a674fd8969e88b64c215ed8cd51b961e8e))
* **composer:** Enhanced Edit now allows for undo operation ([#376](https://github.com/awslabs/iot-app-kit/issues/376)) ([5e73bb8](https://github.com/awslabs/iot-app-kit/commit/5e73bb80d303fda63f81dd543b76add11ca61670))
* **composer:** entityId data binding not rendered ([#389](https://github.com/awslabs/iot-app-kit/issues/389)) ([6ad596f](https://github.com/awslabs/iot-app-kit/commit/6ad596f2d5cf31039b8dd5d0fdd069fb91ffc45d))
* **composer:** fix adding tag always attached to root ([#281](https://github.com/awslabs/iot-app-kit/issues/281)) ([f9ff7b1](https://github.com/awslabs/iot-app-kit/commit/f9ff7b1198fdcf073340bbdd4df89c61752d2b4d))
* **composer:** Fix camera view positioning under sub model ([#341](https://github.com/awslabs/iot-app-kit/issues/341)) ([94dcdda](https://github.com/awslabs/iot-app-kit/commit/94dcdda65a7c44cf449828338bed1ea132f995ea))
* **composer:** Fix e.removeFromParent and camera focus ([#350](https://github.com/awslabs/iot-app-kit/issues/350)) ([8458e50](https://github.com/awslabs/iot-app-kit/commit/8458e50f4ec87aa5e7e4f722017766f447d71b5e))
* **composer:** fix error with rendering 3D tiles ([785d833](https://github.com/awslabs/iot-app-kit/commit/785d8338fbb2908a01a6a40b55cc3d7b3fda1ab4))
* **composer:** Fix for bug on drag/drop introduced in last PR & fix for drag/drop icons: ([#364](https://github.com/awslabs/iot-app-kit/issues/364)) ([6dc40b9](https://github.com/awslabs/iot-app-kit/commit/6dc40b918cdfe6cc0d5447d9cb5ca2267ccd2afa))
* **composer:** Fix for displaying children on search results ([#365](https://github.com/awslabs/iot-app-kit/issues/365)) ([15f75cb](https://github.com/awslabs/iot-app-kit/commit/15f75cb6a9094ec4218a21fca287137d9feb7c88))
* **composer:** Fix for duplicate submodels in tree on adding objects to scene ([#370](https://github.com/awslabs/iot-app-kit/issues/370)) ([6c4bcdf](https://github.com/awslabs/iot-app-kit/commit/6c4bcdfd9c76895c76b487f0dfd323e76770d8b3))
* **composer:** Fix for useEffect error ([#373](https://github.com/awslabs/iot-app-kit/issues/373)) ([d74e45e](https://github.com/awslabs/iot-app-kit/commit/d74e45e3094450679a936e852bd7e2c7a65de678))
* **composer:** fix model shader material color restore ([#290](https://github.com/awslabs/iot-app-kit/issues/290)) ([19ce7f1](https://github.com/awslabs/iot-app-kit/commit/19ce7f196850897aa37873e2710974496ac89ac9))
* **composer:** fix object transforms during reparenting ([#477](https://github.com/awslabs/iot-app-kit/issues/477)) ([7a45bb3](https://github.com/awslabs/iot-app-kit/commit/7a45bb3eb1c2418396b39c7d092a380eb32ba250))
* **composer:** fix reparent rotation and add new object issues ([2628c29](https://github.com/awslabs/iot-app-kit/commit/2628c29f285001609840d69c1c81d0d49e84d93c))
* **composer:** fix show svg ([#279](https://github.com/awslabs/iot-app-kit/issues/279)) ([3b7924d](https://github.com/awslabs/iot-app-kit/commit/3b7924dace7d11c726bb43a3f7a790415a049ed5))
* **composer:** Fix to persist drag/drop actions after refresh ([#367](https://github.com/awslabs/iot-app-kit/issues/367)) ([50f3538](https://github.com/awslabs/iot-app-kit/commit/50f353869e241fc05cc2d7d6122ccc604f7bf081))
* **composer:** Fix to restore drag-&-drop placement after refresh ([#361](https://github.com/awslabs/iot-app-kit/issues/361)) ([bd47478](https://github.com/awslabs/iot-app-kit/commit/bd474787dff3c43bcc9ca1d3711396936066c85f))
* **composer:** Fixes 2nd camera viewing click bug ([#291](https://github.com/awslabs/iot-app-kit/issues/291)) ([7899333](https://github.com/awslabs/iot-app-kit/commit/78993334a60ea16293ed6a53f82f99b29a54c0df))
* **composer:** Fixes expand button on hierarchies ([#371](https://github.com/awslabs/iot-app-kit/issues/371)) ([69fc869](https://github.com/awslabs/iot-app-kit/commit/69fc869f178d90ad8e785948b0aae48b01fea27d))
* **composer:** Fixes for layout in Console, submodel layout updates, bug fix for submodel interactive highlights ([#344](https://github.com/awslabs/iot-app-kit/issues/344)) ([a1ea148](https://github.com/awslabs/iot-app-kit/commit/a1ea148c8de1ddabc713c87b379d9e95901d2e03))
* **composer:** Fixes the Duplication of sub models on scene reload by adding persistant identifier to the sub model ([#356](https://github.com/awslabs/iot-app-kit/issues/356)) ([446a4ca](https://github.com/awslabs/iot-app-kit/commit/446a4caa6fb71b05ffaeadac80839fe9c7fd56af))
* **composer:** Fixes the light helper delete while maintaining visibility link ([#349](https://github.com/awslabs/iot-app-kit/issues/349)) ([2f51263](https://github.com/awslabs/iot-app-kit/commit/2f5126377e8cc40645188487499946e2477418e4))
* **composer:** gate empty overlay section in inspector ([2726f10](https://github.com/awslabs/iot-app-kit/commit/2726f10d4aa26426c1650daa2852bdedba91678b))
* **composer:** hdr url is sometimes wrong ([#352](https://github.com/awslabs/iot-app-kit/issues/352)) ([2c2625e](https://github.com/awslabs/iot-app-kit/commit/2c2625e6630cecd64231f2b8a6d7876a75ee3347))
* **composer:** Maintain the position in 3D space regardless of the parent ([#375](https://github.com/awslabs/iot-app-kit/issues/375)) ([a106e77](https://github.com/awslabs/iot-app-kit/commit/a106e774bd0bdb13278cdc978f7fb22df1c01a38))
* **composer:** One instance of sub models allowed per instance of the model ([#366](https://github.com/awslabs/iot-app-kit/issues/366)) ([24f3914](https://github.com/awslabs/iot-app-kit/commit/24f3914ac0954cf411a215dd58d74a9eeb8f05cc))
* **composer:** Removing dashboard package to fix pipeline ([#338](https://github.com/awslabs/iot-app-kit/issues/338)) ([9a2c991](https://github.com/awslabs/iot-app-kit/commit/9a2c9917729a5a8b273920aec91e47bacf8b8251))
* **composer:** reorder doesn't persist after reloading ([#374](https://github.com/awslabs/iot-app-kit/issues/374)) ([8c90889](https://github.com/awslabs/iot-app-kit/commit/8c908898f34c51a9ab05c4ef284db4428b3d4f2e))
* **composer:** reorder to same parent duplicates child ([b76057d](https://github.com/awslabs/iot-app-kit/commit/b76057d17f23ad25d9f48497619bf49e23fcecb3))
* **composer:** Restores drag-&-drop functionality in Scene Hierarchy ([#359](https://github.com/awslabs/iot-app-kit/issues/359)) ([b220501](https://github.com/awslabs/iot-app-kit/commit/b22050101400f102be2a0aed46b5b15c7b6fecc5))
* **Composer:** Safe bounding box and 3D cursor fix ([#327](https://github.com/awslabs/iot-app-kit/issues/327)) ([a31585f](https://github.com/awslabs/iot-app-kit/commit/a31585fe447d0aa6a0bda855ffbdd8a4d756798d))
* **composer:** scene change is sometimes not saved ([#409](https://github.com/awslabs/iot-app-kit/issues/409)) ([7b0c45a](https://github.com/awslabs/iot-app-kit/commit/7b0c45aab025a90827a472afb0efc85077dd7ef9))
* **composer:** Scene Hierarchy radio buttons & bug fix for selection on single click ([#326](https://github.com/awslabs/iot-app-kit/issues/326)) ([1026cb4](https://github.com/awslabs/iot-app-kit/commit/1026cb4d607317a43bb45e0058e9762a3a5430c1))
* **composer:** selectedDataBinding not able to update selected node ([#274](https://github.com/awslabs/iot-app-kit/issues/274)) ([ee68f7e](https://github.com/awslabs/iot-app-kit/commit/ee68f7e6825b438f2f7dfd7927f3ee24d471d3fa))
* **composer:** Set tree hierarchy items to auto-collapsed on load ([#380](https://github.com/awslabs/iot-app-kit/issues/380)) ([dad88a0](https://github.com/awslabs/iot-app-kit/commit/dad88a0925a0dbf5c9c15e9e79cd4f025fb54682))
* **composer:** submodel and hierarchy search fix ([#320](https://github.com/awslabs/iot-app-kit/issues/320)) ([364cefb](https://github.com/awslabs/iot-app-kit/commit/364cefb9d4fb820b04e30e8761409a7ad00a5825))
* **composer:** SubModel child fix ([#363](https://github.com/awslabs/iot-app-kit/issues/363)) ([da574e8](https://github.com/awslabs/iot-app-kit/commit/da574e8cd3b62c1dbe275e38faf8590481fc1f0b))
* **composer:** support Windows dependency file paths in GLTF loader ([#417](https://github.com/awslabs/iot-app-kit/issues/417)) ([9f7c075](https://github.com/awslabs/iot-app-kit/commit/9f7c075f58458c75f7bc04cd8287dd0087281f0c))
* **composer:** update overlay css ([3136571](https://github.com/awslabs/iot-app-kit/commit/31365712bbd7cbfc3b871710b73dc4b348ddc355))
* **composer:** update overlay visibility toggles behavior ([0e90781](https://github.com/awslabs/iot-app-kit/commit/0e907816a79befc94f56e26d501f1f94c8e6902c))
* **composer:** update translations ([3e8d391](https://github.com/awslabs/iot-app-kit/commit/3e8d39155ea077f37320890ac57e9505d9a719a2))
* **composer:** update translations ([#302](https://github.com/awslabs/iot-app-kit/issues/302)) ([8b6f7a1](https://github.com/awslabs/iot-app-kit/commit/8b6f7a19fac0a3f1e11f1f722bbe6df3b010042b))
* **composer:** use arrow data as texture to avoid public path issue ([#276](https://github.com/awslabs/iot-app-kit/issues/276)) ([f7cbd96](https://github.com/awslabs/iot-app-kit/commit/f7cbd969f93ae021ebfa6853bd478b43e890c738))
* **core-util:** fix subdomain for clients ([cc0d584](https://github.com/awslabs/iot-app-kit/commit/cc0d58464155d04d30cb433d96003cd43f2a9ee4))
* **core-util:** remove private flag for the core-util packages ([0d86584](https://github.com/awslabs/iot-app-kit/commit/0d86584f9ab15a732ccb7d440a9cbf1f82eccae0))
* **core-util:** update publish config for core-utils ([2a3f22f](https://github.com/awslabs/iot-app-kit/commit/2a3f22f8f3df207f1882fa856f90a10ac40d23fd))
* **core, source-iotsitewise:** Remove unecessary exports ([#620](https://github.com/awslabs/iot-app-kit/issues/620)) ([4bfe6f8](https://github.com/awslabs/iot-app-kit/commit/4bfe6f8724b48e28c7efc668aa7268f39e60385a))
* **core:** add currentTime param to viewportStartDate and `viewportEndDate` ([ea75c74](https://github.com/awslabs/iot-app-kit/commit/ea75c748e48f8490d3fc9dce87ddee9ea4e84222))
* **core:** use Map to avoid prototype pollution ([fa0b7ef](https://github.com/awslabs/iot-app-kit/commit/fa0b7efaf27a62ad155a589d13096529e67fb874))
* **dashboard/components:** add missing prop to webgl component and refactor in dashboard to fix overlay problem ([59738ac](https://github.com/awslabs/iot-app-kit/commit/59738ac9551aa5b55448281a82fa88d1edc700d0))
* **dashboard:** add buffer to dependencies so consuming apps don't need to install it ([bb9d48a](https://github.com/awslabs/iot-app-kit/commit/bb9d48a64c18dc925a788c2d8a1528ff3d26db30))
* **dashboard:** add css resets ([7e23bc1](https://github.com/awslabs/iot-app-kit/commit/7e23bc13ff99ff80d769d69558a96a44f138faba))
* **dashboard:** add guard on widget sizes & positions and dispatch relative actions from side panel ([12044ec](https://github.com/awslabs/iot-app-kit/commit/12044ec65af159b4f65ba41af8134271536c3dda))
* **dashboard:** add node polyfill and svg plugin ([08ca02d](https://github.com/awslabs/iot-app-kit/commit/08ca02de6c475978334a629bf0995dd803333a29))
* **dashboard:** allow gestures when widget is in error state ([7545487](https://github.com/awslabs/iot-app-kit/commit/754548700fdaff1d84db63d29d244fb411898241))
* **dashboard:** better empty thresholds pane ([493b9f2](https://github.com/awslabs/iot-app-kit/commit/493b9f2442f618617eaa6821fe9d89e3cb844f9a))
* **dashboard:** bugfix for color reset on new property drop ([05c04e6](https://github.com/awslabs/iot-app-kit/commit/05c04e6db3beeca398d0c288209fe9ba2bffc1c4))
* **dashboard:** constrain drag start and endpoint in grid ([ea2b875](https://github.com/awslabs/iot-app-kit/commit/ea2b8757adcf26f9cd6afc0db36031159d2e0142))
* **dashboard:** disable user select on drag to prevent text selection ([56b5d09](https://github.com/awslabs/iot-app-kit/commit/56b5d098ebfda31e9c200c5d665b90f158cadebd))
* **dashboard:** fix edit mode bugs ([2e88abf](https://github.com/awslabs/iot-app-kit/commit/2e88abf6c7ec72f192ec272b13c3d66101646734))
* **dashboard:** fix grid scrolling issues ([bbb43aa](https://github.com/awslabs/iot-app-kit/commit/bbb43aa70e73ed19f2d7641f78f3f123e22edd2d))
* **dashboard:** fix layering of widgets with selection and context menu ([f98d5e7](https://github.com/awslabs/iot-app-kit/commit/f98d5e7642d6c73ad88206391e418347b840b69b))
* **dashboard:** fix resizing issue ([024feb9](https://github.com/awslabs/iot-app-kit/commit/024feb923500f9e798c4a84b94aa5667ce1ce3b4))
* **dashboard:** fix styling for component palette and add tests for drag and drop ([41fd944](https://github.com/awslabs/iot-app-kit/commit/41fd944edcfdd0159aec29dd86b5f0b3dc17ff23))
* **dashboard:** fix the build ([c160031](https://github.com/awslabs/iot-app-kit/commit/c16003156ed22e85b1569a7b3e5024c53b8a4be4))
* **dashboard:** grow asset properties panel ([#628](https://github.com/awslabs/iot-app-kit/issues/628)) ([89fb6b6](https://github.com/awslabs/iot-app-kit/commit/89fb6b6e0c8b76068febb7810e0425080b436d27))
* **dashboard:** hide y axis settings for status timeline component ([217899a](https://github.com/awslabs/iot-app-kit/commit/217899a787f1076806fa977d29491058da0caf5f))
* **dashboard:** refactor widget type ([fc3e41e](https://github.com/awslabs/iot-app-kit/commit/fc3e41e3e4c1cececd49f34d6d9aaa6821b21ae7))
* **dashboard:** remove chart suffix from empty states ([28e4c09](https://github.com/awslabs/iot-app-kit/commit/28e4c09b56896f0083d501b2f0f1fe9d536deb7e))
* **dashboard:** remove font dropdown and text position dropdowns ([bc4ca9a](https://github.com/awslabs/iot-app-kit/commit/bc4ca9acae3dce98af991e689139ecc3f8486b20))
* **dashboard:** remove tailing digits on widget dragging. ([b89c5f7](https://github.com/awslabs/iot-app-kit/commit/b89c5f794adc782b51090d13e6bd47b6169e5c0a))
* **dashboard:** remove testing-util as a dependency ([8f7bce5](https://github.com/awslabs/iot-app-kit/commit/8f7bce54b9c1f9615fba4e40ea89462d6d96f05f))
* **dashboard:** remove widget background color ([7392aad](https://github.com/awslabs/iot-app-kit/commit/7392aad1d6800a3c932f196788e9fe9085c9beee))
* **dashboard:** resolve pretty paths in storybook ([#588](https://github.com/awslabs/iot-app-kit/issues/588)) ([a82178e](https://github.com/awslabs/iot-app-kit/commit/a82178ebc7f05375b1108aad98cb4cfd966dd20e))
* **dashboard:** support decimals for thresholds ([3cfd8a4](https://github.com/awslabs/iot-app-kit/commit/3cfd8a44d6028486a9f7b6cb4694a828d23bbb56))
* **DashboardToolbar:** remove scrollbar from toolbar ([8a18a25](https://github.com/awslabs/iot-app-kit/commit/8a18a250106d16bcad2f8bda63f0fc2a42c9f47b))
* **dashboard:** update property name for tables when displaying alarms ([d8d5541](https://github.com/awslabs/iot-app-kit/commit/d8d55410c78abf6c8cd7f9d442c311f0e2e9a752))
* **dashboard:** update props passed to kpi and status components based on new api ([e2023c9](https://github.com/awslabs/iot-app-kit/commit/e2023c92ecfea6cac947f5c5f795001395ad2bd4))
* **dashboard:** update side panel styling to remove sass variable references ([36d8648](https://github.com/awslabs/iot-app-kit/commit/36d8648818edba3b83f8a36912290ef641cacd9a))
* **dashboard:** update type path in package json ([d4647e1](https://github.com/awslabs/iot-app-kit/commit/d4647e1b85eb8bcc2e343de954f9d51260c62a77))
* **dashboard:** use sentence casting in headers ([90ff030](https://github.com/awslabs/iot-app-kit/commit/90ff0308693d6110438659b5b4d1241a0b8a8f84))
* **deps:** update synchro-charts, node-sass, nth-check ([#295](https://github.com/awslabs/iot-app-kit/issues/295)) ([164b751](https://github.com/awslabs/iot-app-kit/commit/164b7511ef2d42f1e816d804628440e577f03e43))
* Development Quick Start Docs/Scripts ([#148](https://github.com/awslabs/iot-app-kit/issues/148)) ([aa9dba6](https://github.com/awslabs/iot-app-kit/commit/aa9dba6215dc066cc67a6f3933f9de7321b09507))
* **DragHandleIcon:** Drag Handle icon not showing up without special webpack config ([#345](https://github.com/awslabs/iot-app-kit/issues/345)) ([b8952ce](https://github.com/awslabs/iot-app-kit/commit/b8952ceba6c1e462bc3a45bb06b5c7ef54c5da32))
* **Example:** correct instructions on providing AWS credentials to example react-app ([960067f](https://github.com/awslabs/iot-app-kit/commit/960067f138b3cd6b65735f4b307f7bb8fd5608ba))
* Fix setTimeout error ([#32](https://github.com/awslabs/iot-app-kit/issues/32)) ([e174598](https://github.com/awslabs/iot-app-kit/commit/e174598bd6d323ed48af6feee610dc4312d26462))
* fix syntax not supported in all circumstances for package.json override ([#360](https://github.com/awslabs/iot-app-kit/issues/360)) ([7b97dd1](https://github.com/awslabs/iot-app-kit/commit/7b97dd1ab9064feee1c92ad615ef0a09cc4556a1))
* Fix the tag scaling with parent scale regression ([#282](https://github.com/awslabs/iot-app-kit/issues/282)) ([efd49fc](https://github.com/awslabs/iot-app-kit/commit/efd49fc66fbb1c30ff7e971c0d8e024a778468e8))
* increase commitlint body-max-line-length to 250 ([52cab67](https://github.com/awslabs/iot-app-kit/commit/52cab674f56c2f65f2471d34f655264fe105bad8))
* **InternalBuild:** Downgrade cloudscape dependency to support internal build ([b20912b](https://github.com/awslabs/iot-app-kit/commit/b20912b77fa1d594d81364ac26df960754c0bace))
* mock SDK in component tests ([#56](https://github.com/awslabs/iot-app-kit/issues/56)) ([dd4bab5](https://github.com/awslabs/iot-app-kit/commit/dd4bab50d755baad24ec907312d428b9161389ac))
* **PeerDependencies:** react-intl should be declared as a peer dependency ([9ea3f75](https://github.com/awslabs/iot-app-kit/commit/9ea3f75ee2c4a294b0ac1f80803a916c7d9b2215))
* prevent stream render if dataType unknown ([#448](https://github.com/awslabs/iot-app-kit/issues/448)) ([16999db](https://github.com/awslabs/iot-app-kit/commit/16999dbf8ed18770cccda0c993041a57e1c3d0c0))
* propertyName with multi hyphen not working ([#496](https://github.com/awslabs/iot-app-kit/issues/496)) ([7c7dc2c](https://github.com/awslabs/iot-app-kit/commit/7c7dc2c9ab1d82505b1e30dab98b58e728cf75a0))
* **react-components, videoPlayer:** fix propertiesNotChanged for videoPlayer ([11665c0](https://github.com/awslabs/iot-app-kit/commit/11665c0af13e98dc6602d8bf8aac7733d063633c))
* **react-components:** add core-util as a dependency ([5c4d420](https://github.com/awslabs/iot-app-kit/commit/5c4d4209d364640aebb78134fc08bc32707795f0))
* **react-components:** fix binding styles in `useTimeSeriesData` hook ([c1c0125](https://github.com/awslabs/iot-app-kit/commit/c1c012577448c6e07090b23ad988e39a3d530bb6))
* **react-components:** set timezone for jest to UTC to prevent local test failures ([44c3793](https://github.com/awslabs/iot-app-kit/commit/44c379338a2a9110600a0502e37ae4dceaf0ab09))
* **ReactComponents:** configure table, kpi and status to always fetch raw data ([c02b566](https://github.com/awslabs/iot-app-kit/commit/c02b566cad9aa2b8e700765f7923df2d4a6fbec4))
* **ReactExample:** build issues preventing id generation for react-intl ([4339592](https://github.com/awslabs/iot-app-kit/commit/43395927587fd49852c6775d9e40921631b7bf44))
* related-table eslint and prettier ([#10](https://github.com/awslabs/iot-app-kit/issues/10)) ([67a7149](https://github.com/awslabs/iot-app-kit/commit/67a7149131813b8239079f2b931c78e5b607a708))
* **related-table:** expanded toggling already expanded nodes ([#382](https://github.com/awslabs/iot-app-kit/issues/382)) ([a6d29c8](https://github.com/awslabs/iot-app-kit/commit/a6d29c8b2ea1d74ede87a8db2db6920f3f546958))
* **release:** release as 4.0.0-nightly ([f2967b0](https://github.com/awslabs/iot-app-kit/commit/f2967b0d134b51fa8e7c0c833d8113eceaa79b0d))
* **release:** remove stray table references from release manifest ([83b1a9b](https://github.com/awslabs/iot-app-kit/commit/83b1a9b4c56473b93d75eb8303bcfabd75afe4df))
* remove full file eslint disable. Switch to minimal eslint disable. ([ba18720](https://github.com/awslabs/iot-app-kit/commit/ba18720829be791fd030e4a6cf57f2254b65f09f))
* remove prettier, enforce eslint on build ([#29](https://github.com/awslabs/iot-app-kit/issues/29)) ([1b2e5ca](https://github.com/awslabs/iot-app-kit/commit/1b2e5cad203a561feda89544382e38f453c64124))
* Remove unecessary exports, utilize core types instead of SynchroChart types ([#600](https://github.com/awslabs/iot-app-kit/issues/600)) ([15d6740](https://github.com/awslabs/iot-app-kit/commit/15d67401b7e152eeba1e550efc75faf79cefbf7e))
* remove unused variables. ([13c7dfe](https://github.com/awslabs/iot-app-kit/commit/13c7dfe10dc4a8c02621d08bc1b959d647c083fb))
* **Reparenting:** Fix reparenting nodes ([#368](https://github.com/awslabs/iot-app-kit/issues/368)) ([8a66f94](https://github.com/awslabs/iot-app-kit/commit/8a66f940e98a31e3ef6937336e0e5114e23ad20c))
* requestBuffer ([#49](https://github.com/awslabs/iot-app-kit/issues/49)) ([b342b32](https://github.com/awslabs/iot-app-kit/commit/b342b32d5701cb9fe48e793628d6f0f89a2248f8))
* require npm &gt;=8.7.0 to fix yarn.lock issue with d3-color-1-fix ([#331](https://github.com/awslabs/iot-app-kit/issues/331)) ([eba59ca](https://github.com/awslabs/iot-app-kit/commit/eba59cac747cb5a359ddb6596f02c8a26d5cd5c0))
* resolve float decimal precision issue on round() function. ([#160](https://github.com/awslabs/iot-app-kit/issues/160)) ([6efeac4](https://github.com/awslabs/iot-app-kit/commit/6efeac47acce17da5f99104aec9d5a70cad366a2))
* resolves [#83](https://github.com/awslabs/iot-app-kit/issues/83) ([#87](https://github.com/awslabs/iot-app-kit/issues/87)) ([364716f](https://github.com/awslabs/iot-app-kit/commit/364716f72857526b93e63146fa378d2464974400))
* **scene-composer:** remove invalid workspace syntax ([#640](https://github.com/awslabs/iot-app-kit/issues/640)) ([ed3b28d](https://github.com/awslabs/iot-app-kit/commit/ed3b28dc86fdae2e70b639ce2774217cd92b6122))
* **SceneHierarchyPerformance:** SceneHierarchy Tree Performance ([#283](https://github.com/awslabs/iot-app-kit/issues/283)) ([5e93adc](https://github.com/awslabs/iot-app-kit/commit/5e93adcc5eb338b98a5c9d90b7873880df1bba1a))
* sitewise source time series module ([#71](https://github.com/awslabs/iot-app-kit/issues/71)) ([6671217](https://github.com/awslabs/iot-app-kit/commit/6671217f3f2b813ecec6e907ee85ba6e0dd347c6))
* **source-iotsitewise:** deduplicate batch requests ([#629](https://github.com/awslabs/iot-app-kit/issues/629)) ([0a5e8a1](https://github.com/awslabs/iot-app-kit/commit/0a5e8a1ec7eeec2c7f214a0f8c7963bb66990678))
* **source-iotsitewise:** move testing util to dev dep ([e10e548](https://github.com/awslabs/iot-app-kit/commit/e10e5487bf3f31e3b107a51cb4fc9da28057efe6))
* **source-iotsitewise:** use alarm model name in data stream instead of alarm state name ([3c3a1ae](https://github.com/awslabs/iot-app-kit/commit/3c3a1ae52df8f32d0217e82c463e624cc4880890))
* **SubModelHidingChildren:** Unnamed children should be skipped not omitted ([#377](https://github.com/awslabs/iot-app-kit/issues/377)) ([46be1c4](https://github.com/awslabs/iot-app-kit/commit/46be1c4ab34551b22cb1638e97025f4ae4b43347))
* Support additional parameters in intercepting calls to table cell renderer ([ce2be51](https://github.com/awslabs/iot-app-kit/commit/ce2be513327e658b5f391f0fbf94f9fe192af530))
* Swaped ternary statement terms ([#22](https://github.com/awslabs/iot-app-kit/issues/22)) ([b7899f1](https://github.com/awslabs/iot-app-kit/commit/b7899f12d88f22a1c5047859ddd3cedee9668915))
* **table:** add missing brackets. ([#183](https://github.com/awslabs/iot-app-kit/issues/183)) ([5c5ec7b](https://github.com/awslabs/iot-app-kit/commit/5c5ec7bb6e7cf636bf90dfe9eecdf6170ce2ea6a))
* **table:** fix an issue when key in columnDefinition doesn't exist in TableItems ([#146](https://github.com/awslabs/iot-app-kit/issues/146)) ([13c7dfe](https://github.com/awslabs/iot-app-kit/commit/13c7dfe10dc4a8c02621d08bc1b959d647c083fb))
* testing ground DataModule parameter ([#17](https://github.com/awslabs/iot-app-kit/issues/17)) ([61632de](https://github.com/awslabs/iot-app-kit/commit/61632de997cc5ced9e21b2625d6e221432649803))
* TilesLoader will now load all visible tiles ([5d59509](https://github.com/awslabs/iot-app-kit/commit/5d5950944a0b0c9d832d2d14621dcc53fed28868))
* TilesLoader will now load all visible tiles ([#593](https://github.com/awslabs/iot-app-kit/issues/593)) ([5d59509](https://github.com/awslabs/iot-app-kit/commit/5d5950944a0b0c9d832d2d14621dcc53fed28868))
* **TwinMakerTools:** added a additional condition to prevent saving an s3 folder as a model ([a991335](https://github.com/awslabs/iot-app-kit/commit/a991335d8ccbb476813b4ab092113c01fb80052c))
* **typescript:** re-enables typescript for component package tests ([12f60b7](https://github.com/awslabs/iot-app-kit/commit/12f60b7847853e17d398e6346d470606467e2d5c))
* **UITests:** fix dashbaord e2e tests ([dd98c0e](https://github.com/awslabs/iot-app-kit/commit/dd98c0ea9ccd6a7dacc9ee5f994ccce7007f0b21))
* update @testing-library/react to use create root ([#151](https://github.com/awslabs/iot-app-kit/issues/151)) ([380e4cf](https://github.com/awslabs/iot-app-kit/commit/380e4cf60a7612a586d6a86891b78fe14240bff5))
* Updating documentation for Storybook ([#264](https://github.com/awslabs/iot-app-kit/issues/264)) ([83352bd](https://github.com/awslabs/iot-app-kit/commit/83352bdab956c8115dc08937e4acb442c6841a0d))
* use viewport from provider ([#515](https://github.com/awslabs/iot-app-kit/issues/515)) ([eb515a5](https://github.com/awslabs/iot-app-kit/commit/eb515a58cb807f421ca62004bb07cc3bdcb7cc50))
* **video-player:** use static timestamps instead dynamic ones ([1e434a6](https://github.com/awslabs/iot-app-kit/commit/1e434a6632c6dd797f9d0dacd3ed3547622d93c9))


### Miscellaneous Chores

* release 4.0.0-nightly ([c4d2c1b](https://github.com/awslabs/iot-app-kit/commit/c4d2c1b9201890be3b4d112079269b2207d3fd7c))


### Code Refactoring

* **ReactComponents:** remove web-component iot app kit visualizations ([e0cb301](https://github.com/awslabs/iot-app-kit/commit/e0cb301d1dc204f55684cbd61d4d5c2b66276556))
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).