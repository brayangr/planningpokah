'use client';

import { useState } from "react";
import VoteSelector from "@/components/VoteSelector";
import VotingTable from "@/components/VotingTable";

const votingScale = ["1","2","3","4","5","6","7"]

const userName = "test1";

const votes = new Map([
  ["test1", { "userName": "test1", "vote": "" }],
  ["test2", { "userName": "test2", "vote": "1" }],
  ["test3", { "userName": "test3", "vote": "1" }],
  ["test4", { "userName": "test4", "vote": "1" }],
  ["test5", { "userName": "test5", "vote": "" }]
])

export default function Home() {
  const [vote, setVote] = useState<Object>(votes.get(userName) ?? {})
  const revealVotes = () => {
    console.log("show votes for all")
  }

  const voteSelection = (value: String) => {
    votes.get(userName).vote = value;
    setVote({ ...vote, "vote": value })
  }

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <VotingTable votes={[...votes.values()]} revealVotes={revealVotes}/>
      <VoteSelector votingScale={votingScale} voteSelection={voteSelection}/>
    </div>
  );
}
