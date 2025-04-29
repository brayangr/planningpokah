'use client';

interface CardProps {
  onClick: (value: String) => void;
  value: String;
  selected: boolean;
}

export default function Card({ onClick, value , selected}: CardProps ) {
  const cardClasses = (selected: boolean) => {
    const base = "block max-w-sm p-6 border-2 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700";
    return `${base} ${selected ? "bg-red-200 border-red-300 hover:bg-red-300" : "bg-white border-gray-200 hover:bg-gray-100"}`
  }

  return (
      <div>
        <div className={cardClasses(selected)} onClick={() => onClick(value)}>
          <h5 className="font-mono mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value}</h5>
        </div>
      </div>
    )
  }
