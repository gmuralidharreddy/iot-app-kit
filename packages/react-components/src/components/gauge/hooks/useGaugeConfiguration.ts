import { useEffect, useMemo } from 'react';
import { Primitive } from '@iot-app-kit/core';
import {
  DEFAULT_GAUGE_PROGRESS_SETTINGS,
  DEFAULT_GAUGE_PROGRESS_SETTINGS_WITH_THRESHOLDS,
  DEFAULT_GAUGE_SETTINGS,
} from '../constants';
import { ChartRef } from '../../../hooks/useECharts';
import { GaugeProps } from '../types';
import { useEmptyGaugeSeries } from '../gaugeOptions/series/useEmptyGaugeSeries';
import { useProgressBarGaugeSeries } from '../gaugeOptions/series/useProgressBarGaugeSeries';
import { useThresholdOutsideArcSeries } from '../gaugeOptions/series/useThresholdOutsideArcSeries';
import { getThresholds } from '../utils/getThresholds';

export type GaugeConfigurationOptions = Pick<
  GaugeProps,
  'thresholds' | 'settings' | 'significantDigits'
> & {
  gaugeValue?: Primitive;
  name?: string;
  color?: string;
  unit?: string;
  error?: string;
  isLoading?: boolean;
};

export const useGaugeConfiguration = (
  chartRef: ChartRef,
  {
    isLoading,
    thresholds = [],
    gaugeValue,
    name,
    color,
    settings,
    unit,
    significantDigits,
    error,
  }: GaugeConfigurationOptions
) => {
  const formattedThresholds =
    thresholds?.length > 0
      ? getThresholds({
          settings,
          thresholds,
        })
      : [];
  const hasThresholds = Boolean(formattedThresholds?.length ?? 0 > 0);

  const defaultSettings = useMemo(() => {
    if (error || isLoading) return DEFAULT_GAUGE_SETTINGS;

    return hasThresholds
      ? DEFAULT_GAUGE_PROGRESS_SETTINGS_WITH_THRESHOLDS
      : DEFAULT_GAUGE_PROGRESS_SETTINGS;
  }, [error, hasThresholds, isLoading]);

  useEffect(() => {
    const gauge = chartRef.current;
    if (!gauge) return;

    // Set default Gauge options
    gauge.setOption(defaultSettings);
  }, [chartRef, defaultSettings]);

  const emptySeries = useEmptyGaugeSeries({
    settings,
  });

  const progressSeries = useProgressBarGaugeSeries({
    hasThresholds,
    name,
    color,
    gaugeValue,
    unit,
    significantDigits,
    thresholds: formattedThresholds,
    settings,
  });

  const thresholdSeries = useThresholdOutsideArcSeries({
    hasThresholds,
    name,
    gaugeValue,
    unit,
    significantDigits,
    thresholds: formattedThresholds,
    settings,
  });

  useEffect(() => {
    // Update chart
    const gauge = chartRef.current;
    !(isLoading || error)
      ? gauge?.setOption({
          series: [
            emptySeries,
            progressSeries,
            ...(hasThresholds ? [thresholdSeries] : []),
          ],
        })
      : null;
  }, [
    chartRef,
    hasThresholds,
    emptySeries,
    progressSeries,
    thresholdSeries,
    isLoading,
    error,
  ]);
};
