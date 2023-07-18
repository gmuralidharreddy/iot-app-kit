import React from 'react';
import { StyleSettingsMap, Threshold, ThresholdSettings, TimeSeriesDataQuery, Viewport } from '@iot-app-kit/core';
import { ScatterChart as ScatterChartBase } from '@iot-app-kit/charts';
import type { DataStream as DataStreamViz } from '@iot-app-kit/charts-core';
import { YAnnotation } from '@iot-app-kit/charts-core';
import { useTimeSeriesData } from '../../hooks/useTimeSeriesData';
import { useViewport } from '../../hooks/useViewport';
import { DEFAULT_LEGEND, DEFAULT_VIEWPORT } from '../../common/constants';
import { AxisSettings, ChartSize } from '../../common/chartTypes';

export interface ScatterChartProps {
  queries: TimeSeriesDataQuery[];
  thresholdSettings?: ThresholdSettings;
  chartSize?: ChartSize;
  axis?: AxisSettings;
  yMin?: number;
  yMax?: number;
  thresholds?: Threshold[];
  viewport?: Viewport;
  styles?: StyleSettingsMap;
  aggregationType?: string;
  gestures?: boolean;
  significantDigits?: number;
}

export const ScatterChart = (props: ScatterChartProps) => {
  const {
    queries,
    thresholds = [],
    viewport: passedInViewport,
    thresholdSettings,
    axis,
    yMin,
    yMax,
    styles,
    aggregationType,
    ...rest
  } = props;
  const { dataStreams, thresholds: queryThresholds } = useTimeSeriesData({
    viewport: passedInViewport,
    queries,
    settings: {
      fetchFromStartToEnd: true,
      fetchMostRecentBeforeStart: true,
    },
    styles,
  });
  const { viewport, setViewport, group, lastUpdatedBy } = useViewport();
  const allThresholds = [...queryThresholds, ...thresholds];

  const utilizedViewport = passedInViewport || viewport || DEFAULT_VIEWPORT; // explicitly passed in viewport overrides viewport group

  return (
    <ScatterChartBase
      widgetId=''
      dataStreams={dataStreams as DataStreamViz[]}
      axis={{
        showX: axis?.showX ?? true,
        showY: axis?.showY ?? true,
        labels: { yAxis: { content: axis?.yAxisLabel || '' } },
      }}
      aggregationType={aggregationType}
      viewport={{ ...utilizedViewport, group, lastUpdatedBy, yMin, yMax }}
      annotations={{
        y: allThresholds as YAnnotation[],
        thresholdOptions: { showColor: thresholdSettings?.colorBreachedData ?? true },
      }}
      setViewport={setViewport}
      legend={DEFAULT_LEGEND}
      {...rest}
    />
  );
};
