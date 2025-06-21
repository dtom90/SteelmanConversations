function App() {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-screen-lg mx-auto">

      <h1 className="mt-20 steel-text">
        <div className="text-7xl">Steel Man</div>
        <div className="text-5xl">Conversations</div>
      </h1>

      <img
        src="/SteelmanConversations/Tucker-Crux-Lex.png"
        alt="Tucker Carlson, Lex Fridman, and Ted Cruz"
        className="mt-10"
      />

      <div className="steel-text my-60">
        <p className="text-3xl">
          Bringing high-quality conversations to the world
        </p>

        <VerticalLine />

        <p className="mt-6 text-3xl">
          Guiding the Quality
        </p>
        <p className="mt-6 text-xl">
          Identify the fallacies
        </p>
        <p className="mt-6 text-xl">
          Ask to steel-man the other side
        </p>
        <p className="mt-6 text-xl">
          Search for areas of agreement
        </p>

        <VerticalLine />

        <p className="mt-6 text-3xl">
          Audience Engagement
        </p>
        <p className="mt-6 text-xl">
          Flag the fallacies
        </p>
        <p className="mt-6 text-xl">
          Challenge with questions
        </p>
        <p className="mt-6 text-xl">
          Vote on conversation quality
        </p>

        <VerticalLine />

        <p className="mt-6 text-3xl">
          Evidence Revealed
        </p>
        <p className="mt-6 text-xl">
          Present the sources
        </p>
        <p className="mt-6 text-xl">
          Provide to the viewers
        </p>
        <p className="mt-6 text-xl">
          Discuss the caveats
        </p>

        <VerticalLine />

        <p className="mt-6 mb-60 text-3xl">
          Seek not to win, but to deepen understanding
        </p>
      </div>
    </div>
  )
}

const VerticalLine = () => {
  return (
    <div className="w-px h-50 bg-gray-300 mx-auto my-8"></div>
  )
}

export default App
