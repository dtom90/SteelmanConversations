function App() {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-screen-md xl:max-w-screen-lg mx-auto">

      <h1 className="my-40 steel-text">
        <div className="text-7xl">Steel Man</div>
        <div className="text-7xl">Debates</div>
      </h1>

      <img
        src="/SteelmanConversations/Tucker-Crux-Lex.png"
        alt="Tucker Carlson, Lex Fridman, and Ted Cruz"
      />

      <div className="mt-60 mb-120">
        <TextSection
          title="Bringing high-quality conversations to humanity"
        />

        <VerticalLine />

        <TextSection
          title="Fallacy Flagging"
          points={[
            "Identify fallacies",
            "Present them on screen",
            'Repeat fallacies earn "fallacy badges"',
          ]}
        />
        <div className="relative">
          <img
            src="/SteelmanConversations/DaveSmith-DouglasMurray-Lex.png"
            alt="Dave Smith, Douglas Murray, and Lex Fridman"
          />
          
          <div className="flex flex-col items-center bg-gray-800 absolute bottom-0 w-full opacity-90">
            <div className="flex justify-center items-center">
              <div className="w-[75px] h-[30px]"></div>
              <span className="text-2xl mr-4 text-white">Fallacy: Appeal to Authority</span>
              <img
                src="/SteelmanConversations/Rhetological-Fallacies-10-Authority.png"
                alt="Rhetological-Fallacies-10-Authority.png"
                width={75}
                height={75}
              />
            </div>
            <div className="flex justify-center pt-2 pb-4">
              <span>Claiming something is true because an 'expert', whether qualified or not, says it is.</span>
              <a href="https://informationisbeautiful.net/visualizations/rhetological-fallacies/" 
                 target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center">
                Learn more 
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <VerticalLine />

        <TextSection
          title="Guiding the Quality"
          points={[
            "Identify the fallacies",
            "Ask to steel-man the other side",
            "Search for areas of agreement",
          ]}
        />
        <VerticalLine />

        <TextSection
          title="Audience Engagement"
          points={[
            "Flag the fallacies",
            "Challenge with questions",
            "Vote on conversation quality",
          ]}
        />

        <VerticalLine />

        <TextSection
          title="Evidence Revealed"
          points={[
            "Present the sources",
            "Provide to the viewers",
            "Discuss the caveats",
          ]}
        />

        <VerticalLine />

        <TextSection
          title="Seek not to win, but to deepen understanding"
        />
      </div>
    </div>
  )
}

const TextSection = ({ title, points }: { title: string, points?: string[] }) => {
  return (
    <div className="steel-text pb-2">
      <p className="mt-6 text-4xl">
        {title}
      </p>
      {points && points.map((point, index) => (
        <p key={index} className="mt-6 text-2xl">
          {point}
        </p>
      ))}
    </div>
  )
}

const VerticalLine = () => {
  return (
    <div className="w-px h-100 bg-gray-300 mx-auto my-8"></div>
  )
}

export default App
