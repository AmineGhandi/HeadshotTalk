import React from 'react';
import useCountUp from '../hooks/useCountUp';

const NumberCard = ({ number, label, icon, bgColor, textColor, suffix = '' }) => {
  const [count, ref] = useCountUp(number, 2500);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <div ref={ref} className={`bg-white text-center p-6 ${bgColor} rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl`}>
      <div className={`w-16 h-16 ${textColor.replace('text-', 'bg-')} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <div className="text-gray-800">
          {icon}
        </div>
      </div>
      <div className={`text-4xl font-bold ${textColor} mb-2`}>
        {formatNumber(count)}{suffix}
      </div>
      <div className="text-gray-700 font-medium">{label}</div>
    </div>
  );
};

export default NumberCard;