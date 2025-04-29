'use client';

import VoteSelector from "@/components/VoteSelector";

export default function Home() {
  const votingScale = ["1","2","3","4","5","6","7"]

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <VoteSelector votingScale={votingScale}/>
    </div>
  );
}
