import React from 'react';
import AnimatedSection from '../common/AnimatedSection';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center">
      <AnimatedSection className="w-full lg:w-1/2 p-4 lg:p-8">
        <LeftBanner />
      </AnimatedSection>
      <AnimatedSection delay={0.2} className="w-full lg:w-1/2 p-4 lg:p-8">
        <RightBanner />
      </AnimatedSection>
    </div>
  );
};

export default Banner;