
import React from "react";

interface PageHeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: string;
  children?: React.ReactNode;
  isHomePage?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://i.imgur.com/1FQHSz1.jpeg", 
  height = "h-64 md:h-80",
  children,
  isHomePage = false
}) => {
  return (
    <section 
      className={`relative ${isHomePage ? 'h-screen min-h-[600px]' : height} bg-chimelo-black text-white overflow-hidden`}
    >
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center" 
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className={`relative chimelo-container h-full flex flex-col ${isHomePage ? 'justify-center pt-40 md:pt-32 md:justify-center' : 'justify-center'}`}>
        {children ? (
          children
        ) : (
          <div className="max-w-3xl">
            {title && <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-4">{title}</h1>}
            {subtitle && <p className="text-base sm:text-lg text-chimelo-silver max-w-full md:max-w-2xl">{subtitle}</p>}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
