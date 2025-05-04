import { useState } from "react";
import Card from "./Card";

interface VoteSelectorProps {
  voteSelection: (value: String) => void;
  votingScale: Array<String>;
}

export default function VoteSelector({ voteSelection, votingScale }: VoteSelectorProps) {
  const [selectedValue, setSelectedValue] = useState<String>("");

  const handleClick = (value: String) => {
    setSelectedValue(value);
    voteSelection(value);
  }

  return(
    <div className="flex gap-4">
      {votingScale.map(value => <Card key={value} onClick={handleClick} value={value} selected={value == selectedValue}/>)}
    </div>
  )
}