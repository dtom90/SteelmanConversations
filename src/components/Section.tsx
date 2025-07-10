import React from 'react';
import FadeIn from './FadeIn';

interface SectionProps {
  title: string;
  points?: string[];
  image?: string;
  banner?: React.ReactNode;
  description?: React.ReactNode;
  verticalLine?: boolean;
}

const Section = ({ title, points, image, banner, description, verticalLine = true }: SectionProps) => {
  return (<div>
    <FadeIn>
      <p className="mt-6 text-4xl">
        <span className='steel-text'>{title}</span>
      </p>
      {points && points.map((point, index) => (
        <p key={index} className="mt-6 text-2xl font-bold">
          {point}
        </p>
      ))}
      {image && <div className="mt-6 relative">
        <img src={`/SteelmanConversations/${image}`} alt={title} />
        {banner && <div className="flex flex-col items-center absolute bottom-0 w-full bg-gray-800 text-white opacity-90 py-4">
          <div className="w-full">
            {banner}
          </div>
        </div>}
      </div>}
    </FadeIn>

    {description && <div className="mt-6">
      {description}
    </div>}

    {verticalLine && 
      <FadeIn>
        <VerticalLine />
      </FadeIn>
    }
    </div>
  )
}

const VerticalLine = () => {
  return (
    <div className="w-px h-100 bg-gray-300 mx-auto my-8"></div>
  )
}

export default Section;
