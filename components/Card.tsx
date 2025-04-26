'use client';

interface CardProps {
  onClick: (value: String) => void;
  value: String; 
}

export default function Card({ onClick, value }: CardProps ) {
  onClick(value);  
  return (
      <div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onClick={() => onClick(value)}>
          <h5 className="font-mono mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value}</h5>
        </div>
      </div>
    )
  }
  