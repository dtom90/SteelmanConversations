
enum Agreement {
  YES = "yes",
  NO = "no",
  UNKNOWN = "unknown"
}

interface ClaimBannerProps {
  person1Name: string;
  person2Name: string;
  claimText: string;
  person1Agreement: Agreement;
  person2Agreement: Agreement;
}

const ClaimBanner = ({ 
  person1Name, 
  person2Name, 
  claimText,
  person1Agreement,
  person2Agreement
}: ClaimBannerProps) => {
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

export default ClaimBanner;
export { Agreement };
