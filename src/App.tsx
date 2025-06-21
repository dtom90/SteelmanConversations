function App() {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-screen-lg mx-auto">

      <h1 className="my-40 steel-text">
        <div className="text-7xl">Steel Man</div>
        <div className="text-5xl">Conversations</div>
      </h1>

      <img
        src="/SteelmanConversations/Tucker-Crux-Lex.png"
        alt="Tucker Carlson, Lex Fridman, and Ted Cruz"
      />

      <div className="mt-60 mb-120">
        <TextSection
          title="Bringing high-quality conversations to the world"
        />

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
    <div className="steel-text">
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
