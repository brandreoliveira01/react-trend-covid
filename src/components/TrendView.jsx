import React from 'react';
import Trend from 'react-trend';

export default function TrendView({ data, radius, width }) {
  const radiusNumber = parseInt(radius);

  return (
    <div className='mb-12'>
      <Trend
        smooth
        data={data}
        gradient={['#00c6ff', '#F0F', '#FF0']}
        radius={radiusNumber}
        strokeWidth={width}
        strokeLinecap={'butt'}
      />
      <div className='text-center text-sm'>
        Curva de novos casos no Brazil do início da pandemia até 28/07/2021 (média 7 dias)
      </div>
    </div>
  );
}
