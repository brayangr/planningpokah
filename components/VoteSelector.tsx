import Card from "./Card";

export default function VoteSelector() {
  const handleClick = (value: String) => {
    console.log("click", value)
  }

  return(
    <div>
      <div className="columns-5">
        <Card onClick={handleClick} value={"1"}/>
        <Card onClick={handleClick} value={"2"}/>
        <Card onClick={handleClick} value={"3"}/>
        <Card onClick={handleClick} value={"4"}/>
        <Card onClick={handleClick} value={"5"}/>
      </div>
    </div>
  )
}