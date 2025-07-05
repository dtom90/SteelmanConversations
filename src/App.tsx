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
        <Section
          title="Bringing high-quality conversations to humanity"
        />

        <Section
          title="Fallacy Flagging"
          points={[
            "Identify fallacies",
            "Present them on screen",
            "Point them out and bring discussion back on track",
          ]}
          image="DaveSmith-DouglasMurray-Lex.png"
          banner={
            <div>
              <div className="flex justify-center items-center">
                <div className="w-[75px] h-[30px]"></div>
                <span className="text-2xl mr-4">Fallacy: Appeal to Authority</span>
                <img
                  src="/SteelmanConversations/Rhetological-Fallacies-10-Authority.png"
                  alt="Rhetological-Fallacies-10-Authority.png"
                  width={75}
                  height={75}
                />
              </div>
              <div className="flex justify-center pt-2">
                <span>Claiming something is true because an 'expert', whether qualified or not, says it is.</span>
                <a href="https://informationisbeautiful.net/visualizations/rhetological-fallacies/" 
                  target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center">
                  Learn more 
                  <i className="fas fa-external-link-alt ml-1"></i>
                </a>
              </div>
            </div>
          }
        />

        <Section
          title="Establish the Claims"
          points={[
            "Present the claims on the screen",
            "Clarify positions on the claims",
          ]}
          image="BenShapiro-Desitiny-Lex.png"
          banner={
            <ClaimBanner 
              person1Name="Ben Shapiro"
              person2Name="Destiny"
              claimText="The world was more peaceful under Trump than under Biden"
              person1Agreement={Agreement.YES}
              person2Agreement={Agreement.UNKNOWN}
            />
          }
        />

        <Section
          title="Steel Man"
          points={[
            "Establish claims with disagreement",
            "Ask each side to steel-man the other side",
            "Ask each side if they are satisfied with the steel-man",
          ]}
          image="Tucker-Crux-LexTalking.png"
          banner={
            <ClaimBanner 
              person1Name="Tucker Carlson"
              person2Name="Ted Cruz"
              claimText="If Iran were to acquire a nuclear weapon, American lives would be at risk"
              person1Agreement={Agreement.NO}
              person2Agreement={Agreement.YES}
            />
          }
        />

        <Section
          title="Audience Participation"
          points={[
            "Ask questions",
            "Flag observed fallacies",
            "Vote on conversation quality",
          ]}
        />

        <Section
          title="Open-Source Evidence"
          points={[
            "Exchange sources beforehand",
            "Provide sources to the viewers",
            "Discuss the caveats of the sources",
          ]}
        />

        <Section
          title="Seek not to win, but to deepen understanding"
        />
      </div>
    </div>
  )
}

enum Agreement {
  YES = "yes",
  NO = "no",
  UNKNOWN = "unknown"
}

const ClaimBanner = ({ 
  person1Name, 
  person2Name, 
  claimText,
  person1Agreement,
  person2Agreement
}: {
  person1Name: string;
  person2Name: string;
  claimText: string;
  person1Agreement: Agreement;
  person2Agreement: Agreement;
}) => {
  const getIconAndColor = (agreement: Agreement) => {
    switch (agreement) {
      case Agreement.YES:
        return { icon: "fas fa-check", color: "bg-green-400" };
      case Agreement.NO:
        return { icon: "fas fa-times", color: "bg-red-400" };
      case Agreement.UNKNOWN:
        return { icon: "fas fa-question", color: "bg-gray-400" };
    }
  };

  const person1Icon = getIconAndColor(person1Agreement);
  const person2Icon = getIconAndColor(person2Agreement);

  return (
    <div className="flex text-2xl">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className={`${person1Icon.color} w-16 h-16 rounded-full flex items-center justify-center`}>
          <i className={`${person1Icon.icon} text-white text-4xl font-bold`}></i>
        </div>
        <span className="text-sm mt-2">{person1Name}</span>
      </div>
      <div className="flex-2">
        <div className="font-bold">Claim:</div>
        <div className="font-normal">{claimText}</div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className={`${person2Icon.color} w-16 h-16 rounded-full flex items-center justify-center`}>
          <i className={`${person2Icon.icon} text-white text-4xl font-bold`}></i>
        </div>
        <span className="text-sm mt-2">{person2Name}</span>
      </div>
    </div>
  )
}

const Section = ({ title, points, image, banner }: { title: string, points?: string[], image?: string, banner?: React.ReactNode }) => {
  return (<>
    <div className="steel-text pb-2">
      <p className="mt-6 text-4xl">
        {title}
      </p>
      {points && points.map((point, index) => (
        <p key={index} className="mt-6 text-2xl">
          {point}
        </p>
      ))}
      {image && <div className="relative">
        <img src={`/SteelmanConversations/${image}`} alt={title} />
        {banner && <div className="flex flex-col items-center absolute bottom-0 w-full bg-gray-800 text-white opacity-90 py-4">
          <div className="w-full">
            {banner}
          </div>
        </div>}
      </div>}
    </div>

    <VerticalLine />
    </>
  )
}

const VerticalLine = () => {
  return (
    <div className="w-px h-100 bg-gray-300 mx-auto my-8"></div>
  )
}

export default App
