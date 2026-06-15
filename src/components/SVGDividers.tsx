interface DividerProps {
  fillColor?: string;
  bgClass?: string;
}

// Organic wavy divider sloping downwards
export const WaveDividerTop = ({ fillColor = '#1E140F', bgClass = 'bg-transparent' }: DividerProps) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${bgClass} pointer-events-none`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[50px] md:h-[90px]"
        fill={fillColor}
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
      </svg>
    </div>
  );
};

// Fllipped version of the wavy divider
export const WaveDividerBottom = ({ fillColor = '#1E140F', bgClass = 'bg-transparent' }: DividerProps) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${bgClass} transform rotate-180 pointer-events-none`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[50px] md:h-[90px]"
        fill={fillColor}
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
      </svg>
    </div>
  );
};

// Organic flowing wave divider
export const OrganicDivider = ({ fillColor = '#1E140F', bgClass = 'bg-transparent' }: DividerProps) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${bgClass} pointer-events-none`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[45px] md:h-[75px]"
        fill={fillColor}
      >
        <path d="M0,0 C150,90 350,10 600,80 C850,150 1050,40 1200,100 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
};
