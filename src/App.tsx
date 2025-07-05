import Section from './components/Section';
import ClaimBanner, { Agreement } from './components/banners/ClaimBanner';
import FallacyBanner from './components/banners/FallacyBanner';
import SourceBanner from './components/banners/SourceBanner';
import VoteBanner from './components/banners/VoteBanner';
import Sources from './components/Sources';


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
            <FallacyBanner
              fallacyName="Appeal to Authority"
              description="Claiming something is true because an 'expert', whether qualified or not, says it is."
              imageSrc="/SteelmanConversations/Rhetological-Fallacies-10-Authority.png"
              learnMoreUrl="https://informationisbeautiful.net/visualizations/rhetological-fallacies/"
            />
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
          title="Open-Source Evidence"
          points={[
            "Exchange sources beforehand",
            "Provide sources to the viewers",
            "Discuss the caveats of the sources",
          ]}
          image="ScottHorton-MarkDubowitz-Lex.png"
          banner={
            <SourceBanner
              sourceTitle="IAEA: Verification and Monitoring in Iran"
              sourceUrl="https://www.iaea.org/newscenter/focus/iran"
            />
          }
          description={
            <Sources />
          }
        />

        <Section
          title="Audience Participation"
          points={[
            "Ask questions",
            "Flag observed fallacies",
            "Vote on who steel-manned the strongest",
          ]}
          image="BernieSanders-WesleyHunt-Lex.png"
          banner={
            <VoteBanner />
          }
        />

        <Section
          title="Seek not to win, but to deepen understanding"
          verticalLine={false}
        />
        <Section
          title="And to inspire curiosity"
          verticalLine={false}
          image="Tucker-Crux-ShakingHands.jpg"
        />
      </div>
    </div>
  )
}


export default App
