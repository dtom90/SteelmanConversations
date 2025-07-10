interface FallacyBannerProps {
  fallacyName: string;
  description: string;
  imageSrc: string;
  learnMoreUrl: string;
}

const FallacyBanner = ({ fallacyName, description, imageSrc, learnMoreUrl }: FallacyBannerProps) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-[75px] h-[30px]"></div>
        <span className="text-2xl mr-4 steel-text">Fallacy: {fallacyName}</span>
        <img
          src={imageSrc}
          alt={`${fallacyName} fallacy icon`}
          width={75}
          height={75}
        />
      </div>
      <div className="flex justify-center pt-2">
        <span className="font-bold">{description}</span>
        <a href={learnMoreUrl} 
          target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center">
          Learn more 
          <i className="fas fa-external-link-alt ml-1"></i>
        </a>
      </div>
    </div>
  );
};

export default FallacyBanner; 