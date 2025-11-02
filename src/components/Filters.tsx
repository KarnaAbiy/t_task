import React from 'react';

export type Filter = 'all' | 'active' | 'completed';

interface FiltersProps {
  currentFilter: Filter;
  setFilter: (filter: Filter) => void;
}

const Filters: React.FC<FiltersProps> = ({ currentFilter, setFilter }) => {
  return (
    <div className="filters">
      <button
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        Все
      </button>
      <button
        className={currentFilter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}
      >
        Активные
      </button>
      <button
        className={currentFilter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Выполненные
      </button>
    </div>
  );
};

export default Filters;