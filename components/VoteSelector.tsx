import { useState } from "react";
import Card from "./Card";

interface VoteSelectorProps {
  votingScale: Array<String>;
}

export default function VoteSelector({ votingScale }: VoteSelectorProps) {
  const [selectedValue, setSelectedValue] = useState<String>("");

  const handleClick = (value: String) => {
    setSelectedValue(value)
  }

  return(
    <div>
      <div className="flex gap-4">
        {votingScale.map(value => <Card key={value} onClick={handleClick} value={value} selected={value == selectedValue}/>)}
      </div>
    </div>
  )
}