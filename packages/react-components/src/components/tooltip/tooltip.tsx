import React from 'react';
import './tooltip.css';
import {
  colorBackgroundHomeHeader,
  colorBackgroundLayoutMain,
  colorBorderButtonNormalDisabled,
  spaceScaledS,
  spaceScaledM,
  spaceStaticXs,
  spaceScaledXxxs,
} from '@cloudscape-design/design-tokens';

type TooltipProps = {
  displayText: string;
};

const Tooltip: React.FC<TooltipProps> = ({ displayText }) => {
  const tooltipStyle = {
    fontSize: spaceScaledM,
    color: colorBackgroundHomeHeader,
    backgroundColor: colorBackgroundLayoutMain,
    padding: `${spaceScaledS} ${spaceScaledM}`,
    borderRadius: spaceStaticXs,
    borderWidth: spaceScaledXxxs,
    borderColor: colorBorderButtonNormalDisabled,
    boxShadow: `${spaceScaledXxxs} ${spaceScaledXxxs} ${spaceScaledXxxs} ${colorBorderButtonNormalDisabled}`,
  };

  return (
    <span className='tooltiptext' role='tooltip' aria-label='tooltip-text' style={tooltipStyle}>
      {displayText}
    </span>
  );
};

export default Tooltip;
