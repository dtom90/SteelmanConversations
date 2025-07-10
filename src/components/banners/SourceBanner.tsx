interface SourceBannerProps {
  sourceTitle: string;
  sourceUrl: string;
}

const SourceBanner = ({ sourceTitle, sourceUrl }: SourceBannerProps) => {
  return (
    <div>
      <div className="text-2xl steel-text mb-2">
        <i className="fas fa-book-open mr-2"></i>
        <span>Source</span>
      </div>
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
        <span>{sourceTitle}</span>
        <i className="fas fa-external-link-alt ml-1"></i>
      </a>
    </div>
  );
};

export default SourceBanner; 