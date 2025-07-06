const SourceList = ({ speaker, sources }: { speaker: string; sources?: Array<{ url: string; title: string; source: string }> }) => {
  return (
    <div className="flex-1">
      <h2 className="text-xl">{speaker}'s Sources</h2>
      {sources && (
        <ol className="list-decimal ml-10">
          {sources.map((source, index) => (
            <li key={index} className="text-left">
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                <span>{source.title} </span>
                <span className="whitespace-nowrap"> - {source.source}<i className="fas fa-external-link-alt ml-1"></i></span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

const Sources = () => {
  return (
    <div className="flex">
      <SourceList 
        speaker="Scott Horton" 
        sources={antiInterventionSources}
      />
      <SourceList speaker="Mark Dubowitz"
        sources={proInterventionSources}
      />
    </div>
  )
}

export default Sources;

const antiInterventionSources = [
  {
    url: "https://www.iaea.org/newscenter/focus/iran",
    title: "Verification and Monitoring in Iran",
    source: "IAEA"
  },
  {
    url: "https://www.foreignaffairs.com/articles/iran/2012-06-15/why-iran-should-get-bomb",
    title: "Why Iran Should Get the Bomb",
    source: "Foreign Affairs"
  },
  {
    url: "https://www.e-ir.info/2013/10/04/irans-rational-response-for-nuclear-capability/",
    title: "Iran's Rational Response For Nuclear Capability",
    source: "E-International Relations"
  },
  {
    url: "https://www.csis.org/analysis/why-striking-iranian-nuclear-facilities-bad-idea",
    title: "Why Striking Iranian Nuclear Facilities Is a Bad Idea",
    source: "Center for Strategic and International Studies (CSIS)"
  },
  {
    url: "https://www.rusi.org/explore-our-research/publications/commentary/implications-strikes-irans-nuclear-sites-iaea-credibility",
    title: "Implications of Strikes on Iran's Nuclear Sites for IAEA Credibility",
    source: "Royal United Services Institute (RUSI)"
  },
  {
    url: "https://en.wikipedia.org/wiki/Views_on_the_nuclear_program_of_Iran",
    title: "Views on the nuclear program of Iran",
    source: "Wikipedia"
  }
];

const proInterventionSources = [
  {
    url: "https://www.fdd.org/analysis/2024/08/29/deterring-irans-dash-to-the-bomb/",
    title: "Deterring Iran's Dash to the Bomb",
    source: "Foundation for Defense of Democracies (FDD)"
  },
  {
    url: "https://www.washingtoninstitute.org/policy-analysis/policy-steps-prevent-nuclear-iran",
    title: "Policy Steps to Prevent a Nuclear Iran",
    source: "The Washington Institute for Near East Policy"
  },
  {
    url: "https://apnews.com/article/iran-nuclear-facilities-us-strikes-b79fc83a904076f6fffb383e9269a908",
    title: "CIA chief told lawmakers Iran nuclear program set back years with strikes on metal conversion site",
    source: "Associated Press"
  },
  {
    url: "https://www.lgraham.senate.gov/public/index.cfm/op-eds-columns?ID=084CFEE8-802A-23AD-4F3D-7DAA642732E7",
    title: "Iran Can't Be Allowed Nuclear Capability",
    source: "Senator Lindsey Graham"
  },
  {
    url: "http://armscontrolcenter.org/wp-content/uploads/2015/07/The-real-facts-on-the-Iran-nuclear-deal-7-23.pdf",
    title: "The Real Facts on the Iran Nuclear Deal",
    source: "Center for Arms Control and Non-Proliferation (PDF)"
  }
];
