'use client';

interface CardProps {
  onClick: (value: String) => void;
  value: String;
  selected: boolean;
  hidden?: boolean
  noHover?: boolean;
}

export default function Card({ onClick, value , selected, hidden, noHover}: CardProps ) {
  const cardClasses = (selected: boolean, noHover?: boolean) => {
    const base = "block max-w-sm p-6 border-2 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-[92px] w-[68px]";
    if(noHover) {
      return `${base} ${selected ? "bg-red-300 border-red-300" : "bg-gray-200 border-gray-200"}`
    }
    return `${base} ${selected ? "bg-red-200 border-red-300 hover:bg-red-300" : "bg-white border-gray-200 hover:bg-gray-100"}`
  }

  return (
      <div>
        <div className={cardClasses(selected, noHover)} onClick={() => onClick(value)}>
          <h5 className="font-mono mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{hidden ? "" : value}</h5>
        </div>
      </div>
    )
  }
