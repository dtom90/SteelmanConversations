export default function VoteBanner() {
  return (
    <div>
      <div className="text-2xl">Who debated with the strongest steel?</div>
      <div className="text-lg">Who steel-manned the strongest?</div>
      <div className="text-lg">Who had the fewest fallacies?</div>
      <div className="text-lg italic">(Regardless of which side you agree with)</div>

      <div className="flex text-xl">
        <div className="flex-1">
          <div>Senator Bernie Sanders</div>
          <button>
            <i className="fas fa-thumbs-up"></i>
          </button>
        </div>
        <div className="flex-1"></div>
        <div className="flex-1">
          <div>Congressman Wesley Hunt</div>
          <button>
            <i className="fas fa-thumbs-up"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
