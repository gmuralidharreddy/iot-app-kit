import React from 'react';
import { mockTimeSeriesDataQuery } from '@iot-app-kit/testing-util';
import { DataStream } from '@iot-app-kit/core';
import { render } from '@testing-library/react';
import { ColumnDef } from '@tanstack/react-table';
import { Chart } from '../index';
import { ChartLegend } from '../types';
import { TanstackTable } from '../legend/tanstackTable';

const VIEWPORT = { duration: '5m' };

const DATA_STREAM: DataStream = { id: 'abc-1', data: [], resolution: 0, name: 'my-name' };
jest.mock('echarts', () => ({
  use: jest.fn(),
  init: jest.fn(),
  getInstanceByDom: jest.fn(),
  registerTheme: jest.fn(),
  connect: jest.fn(),
  disconnect: jest.fn(),
}));

afterAll(() => {
  jest.clearAllMocks();
});

export const mockQuery = mockTimeSeriesDataQuery([
  {
    dataStreams: [DATA_STREAM],
    viewport: VIEWPORT,
    thresholds: [],
  },
]);
describe('Chart Component Testing', () => {
  it('Chart renders', () => {
    const query = mockTimeSeriesDataQuery([
      {
        dataStreams: [DATA_STREAM],
        viewport: VIEWPORT,
        thresholds: [],
      },
    ]);

    const element = render(<Chart queries={[query]} viewport={VIEWPORT} size={{ width: 500, height: 500 }} />);
    expect(element).not.toBeNull();
  });

  it('Chart renders', () => {
    const element = render(<Chart queries={[mockQuery]} viewport={VIEWPORT} size={{ width: 500, height: 500 }} />);
    expect(element).not.toBeNull();
  });
});

describe('Chart slider testing', () => {
  it('should show resize slider when show legend feature is on', () => {
    const options = {
      queries: [],
      aggregationType: 'average',
      axis: { showY: true, showX: true, yMin: undefined, yMax: undefined },
      legend: {
        visible: true,
        position: 'left' as keyof ChartLegend['position'],
        width: '30%',
        height: '30%',
        visibleContent: {
          unit: true,
          asset: true,
        },
      },
      gestures: false,
      significantDigits: 4,
      styleSettings: {},
      thresholds: undefined,
    };

    const { container } = render(<Chart {...options} />);
    expect(container.getElementsByClassName('react-resizable-handle-se').length).toBe(1);
  });

  it('should show resize slider when show legend feature is off', () => {
    const options = {
      queries: [],
      aggregationType: 'average',
      axis: { showY: true, showX: true, yMin: undefined, yMax: undefined },
      legend: {
        visible: false,
        position: 'bottom' as keyof ChartLegend['position'],
        width: '30%',
        height: '30%',
        visibleContent: {
          unit: true,
          asset: true,
        },
      },
      gestures: false,
      significantDigits: 4,
      styleSettings: {},
      thresholds: undefined,
    };

    const { container } = render(<Chart {...options} />);
    expect(container.getElementsByClassName('react-resizable-handle-se').length).toBe(0);
  });
});

describe('Tanstack Table testing', () => {
  it('table renders', () => {
    const mockData = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ];
    const mockColumnDefinitions = [
      { header: 'Name', accessor: 'name' },
      { header: 'Value', accessor: 'value' },
    ];
    const { container } = render(
      <TanstackTable
        data={...mockData}
        columnDefinitions={mockColumnDefinitions as ColumnDef<object, string>[]}
        stickyColumns={{ first: 1 }}
        stickyHeader
      />
    );
    expect(container.getElementsByClassName('tanstack-table-container').length).toBe(1);
  });
});
