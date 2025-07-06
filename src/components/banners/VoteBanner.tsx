import { useState } from "react";

export default function VoteBanner() {
  const [vote, setVote] = useState<"sanders" | "hunt" | null>(null);

  const handleVote = (vote: "sanders" | "hunt") => {
    setVote(vote);
  }

  return (
    <div>
      <div className="text-2xl">Who debated with the most integrity?</div>
      <div className="text-lg">Who steel-manned the strongest?</div>
      <div className="text-lg">Who had the fewest fallacies?</div>
      <div className="text-lg italic">(Regardless of which side you agree with)</div>

      <div className="flex text-xl">
        <div className="flex-1">
          <div>Senator Bernie Sanders</div>
          <button 
            className={`mt-4 py-3 px-6 rounded-lg text-base font-medium font-inherit cursor-pointer transition-colors duration-250 focus:outline-none ${vote === "sanders" ? "bg-green-500 hover:bg-green-600" : "bg-gray-900 hover:bg-gray-950"}`} 
            onClick={() => handleVote("sanders")}
          >
            <i className={`fas fa-thumbs-up ${vote === "sanders" ? "text-white" : ""}`}></i>
          </button>
        </div>
        <div className="flex-1"></div>
        <div className="flex-1">
          <div>Congressman Wesley Hunt</div>
          <button 
            className={`mt-4 py-3 px-6 rounded-lg text-base font-medium font-inherit cursor-pointer transition-colors duration-250 focus:outline-none ${vote === "hunt" ? "bg-green-500 hover:bg-green-600" : "bg-gray-900 hover:bg-gray-950"}`} 
            onClick={() => handleVote("hunt")}
          >
            <i className={`fas fa-thumbs-up ${vote === "hunt" ? "text-white" : ""}`}></i>
          </button>
        </div>
      </div>
    </div>
  )
}
