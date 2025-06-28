import React from 'react';

interface TypeFilterProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const TypeFilter: React.FC<TypeFilterProps> = ({ value, onChange, options }) => (
  <div className="filter-container">
    <h2>Game Type</h2>
    <select value={value} onChange={(e) => onChange(e.target.value)} className="filter-select">
      <option value="">All</option>
      {options.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  </div>
);

export default TypeFilter;
