import React from 'react';

import Button from '@cloudscape-design/components/button';
import DateRangePicker from '@cloudscape-design/components/date-range-picker';
import FormField from '@cloudscape-design/components/form-field';
import SpaceBetween from '@cloudscape-design/components/space-between';
import type { DateRangePickerProps } from '@cloudscape-design/components/date-range-picker';
import type { NonCancelableEventHandler } from '@cloudscape-design/components/internal/events';

import { dateRangeToViewport, relativeOptions, viewportToDateRange, getNewViewportStartDate } from './viewportAdapter';
import { rangeValidator } from './rangeValidator';
import { useViewport } from '../../hooks/useViewport';
import { Viewport } from '@iot-app-kit/core';
import Tooltip from '../tooltip/tooltip';

export type ViewportMessages = DateRangePickerProps.I18nStrings & {
  title: string;
  placeholder: string;
  dateRangeIncompleteError: string;
  dateRangeInvalidError: string;
};
const messages: ViewportMessages = {
  title: 'Time machine',
  placeholder: 'Dashboard time range',
  todayAriaLabel: 'Today',
  nextMonthAriaLabel: 'Next month',
  previousMonthAriaLabel: 'Previous month',
  customRelativeRangeDurationLabel: 'Duration',
  customRelativeRangeDurationPlaceholder: 'Enter duration',
  customRelativeRangeOptionLabel: 'Custom range',
  customRelativeRangeOptionDescription: 'Set a custom range in the past',
  customRelativeRangeUnitLabel: 'Unit of time',
  dateTimeConstraintText: 'For date, use YYYY/MM/DD. For time, use 24 hr format.',
  relativeModeTitle: 'Relative range',
  absoluteModeTitle: 'Absolute range',
  relativeRangeSelectionHeading: 'Choose a range',
  startDateLabel: 'Start date',
  endDateLabel: 'End date',
  startTimeLabel: 'Start time',
  endTimeLabel: 'End time',
  clearButtonLabel: 'Clear and dismiss',
  cancelButtonLabel: 'Cancel',
  applyButtonLabel: 'Apply',
  formatRelativeRange: (e) => (e.amount === 1 ? `Last ${e.unit}` : `Last ${e.amount} ${e.unit}s`),
  formatUnit: (e, n) => (1 === n ? e : `${e}s`),
  dateRangeIncompleteError: 'The selected date range is incomplete. Select a start and end date for the date range.',
  dateRangeInvalidError: 'The selected date range is invalid. The start date must be before the end date.',
};

/**
 * Component for visualizing and updating the viewport.
 * This component works with the <TimeSync /> component
 * and must be used as a child component of <TimeSync />
 *
 * This component will modify the viewport of the closest
 * parent TimeSync and affect all other viewports in
 * that TimeSync group.
 */
export const TimeSelection = ({ isPaginationEnabled }: { isPaginationEnabled?: boolean }) => {
  const { viewport, setViewport } = useViewport();

  const getDisableForwardBoolean = (viewport: Viewport | undefined) => {
    if (!viewport) return true;
    if ('duration' in viewport) return true;
    const duration = new Date(viewport.end).getTime() - new Date(viewport.start).getTime();
    return new Date(viewport.end).getTime() + duration > Date.now();
  };

  const handleChangeDateRange: NonCancelableEventHandler<DateRangePickerProps.ChangeDetail> = (event) => {
    const { value } = event.detail;
    if (!value) return;
    setViewport(dateRangeToViewport(value), 'date-picker');
  };

  const handlePaginateForward = () => {
    const value = viewportToDateRange(viewport);
    if (!value) return;
    if (value.type == 'absolute') {
      const duration = new Date(value.endDate).getTime() - new Date(value.startDate).getTime();
      const newEnd = new Date(new Date(value.endDate).getTime() + duration);
      setViewport(
        dateRangeToViewport({ startDate: value.endDate, endDate: newEnd.toISOString(), type: value.type }),
        'date-picker'
      );
    }
  };

  const handlePaginateBackward = () => {
    const value = viewportToDateRange(viewport);
    if (!value) return;
    if (value.type == 'absolute') {
      const duration = new Date(value.endDate).getTime() - new Date(value.startDate).getTime();
      const newStart = new Date(new Date(value.startDate).getTime() - duration);
      setViewport(
        dateRangeToViewport({ startDate: newStart.toISOString(), endDate: value.startDate, type: value.type }),
        'date-picker'
      );
    } else if (value.type == 'relative') {
      const newEnd = new Date();
      const newStart = getNewViewportStartDate(value);
      setViewport(
        dateRangeToViewport({ startDate: newStart.toISOString(), endDate: newEnd.toISOString(), type: 'absolute' }),
        'date-picker'
      );
      return;
    }
  };

  const { title, placeholder, dateRangeIncompleteError, dateRangeInvalidError, ...i18nStrings } = messages;

  return (
    <FormField label={title}>
      <SpaceBetween direction='horizontal' size='xxs'>
        {isPaginationEnabled && (
          <div className='tooltip'>
            <Button ariaLabel='paginate-backward' iconName='caret-left-filled' onClick={handlePaginateBackward} />
            <Tooltip
              displayText={`Move back ${viewport && 'duration' in viewport ? viewport.duration : 'selected range'}`}
            ></Tooltip>
          </div>
        )}

        <DateRangePicker
          expandToViewport={true}
          onChange={handleChangeDateRange}
          value={viewportToDateRange(viewport)}
          showClearButton={false}
          relativeOptions={relativeOptions}
          isValidRange={rangeValidator({ dateRangeIncompleteError, dateRangeInvalidError })}
          i18nStrings={i18nStrings}
          placeholder={placeholder}
        />
        {isPaginationEnabled && (
          <div className='tooltip'>
            <Button
              ariaLabel='paginate-foward'
              disabled={getDisableForwardBoolean(viewport)}
              iconName='caret-right-filled'
              onClick={handlePaginateForward}
            />
            {!getDisableForwardBoolean(viewport) && (
              <Tooltip
                displayText={`Move forward ${
                  viewport && 'duration' in viewport ? viewport.duration : 'selected range'
                }`}
              ></Tooltip>
            )}
          </div>
        )}
      </SpaceBetween>
    </FormField>
  );
};
