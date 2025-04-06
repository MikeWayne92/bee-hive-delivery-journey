
import React from "react";

interface HoneycombGridProps {
  items: {
    id: string;
    title: string;
    content: React.ReactNode;
    color?: string;
  }[];
  className?: string;
}

const HoneycombGrid: React.FC<HoneycombGridProps> = ({ items, className = "" }) => {
  return (
    <div className={`${className} flex flex-wrap justify-center gap-4 md:gap-6`}>
      {items.map((item, index) => (
        <div 
          key={item.id}
          className="hex-container perspective-container"
          style={{ 
            opacity: 0,
            animation: 'hex-scale 0.5s ease-out forwards',
            animationDelay: `${index * 0.1}s`
          }}
        >
          <div 
            className="hex w-[130px] h-[150px] md:w-[160px] md:h-[180px] flex items-center justify-center transform transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundColor: item.color || '#F2B707' }}
          >
            <div className="hex-content text-white">
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <div className="text-sm">{item.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoneycombGrid;
