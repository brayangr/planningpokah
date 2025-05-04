import { useState } from "react";
import Card from "./Card"

interface VoteSelectorProps {
  votes: Array<{ userName: String, vote: String}>;
  revealVotes: () => void;
}

export default function VotingTable({ votes, revealVotes }: VoteSelectorProps) {
  const [showValues, setShowValues] = useState<boolean>(false);

  const onClick = () => {
    revealVotes();
    setShowValues(true);
  }

  return(
    <div className="grid h-48 gtid-cols-1 place-content-center gap-4">
      <div className="grid h-48 grid-cols-3 place-content-center gap-4">
        {votes.map(vote => <Card key={vote.userName} onClick={() => {}} value={vote.vote} selected={vote.vote != ""} noHover={true} hidden={!showValues}/>)}
      </div>
      <button className="text-white font-medium text-2xl bg-blue-500 border-blue-500 border-2 hover:border-blue-300 rounded-lg text-sm py-2.5" onClick={() => onClick()}>Reveal votes</button>
    </div>
  )
}