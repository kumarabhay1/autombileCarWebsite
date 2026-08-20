"use client";

interface FilterChipsProps {
  categories: string[];
  activeCategory: string | null;
  onSelect: (category: string | null) => void;
}

export function FilterChips({ categories, activeCategory, onSelect }: FilterChipsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
      <button
        onClick={() => onSelect(null)}
        className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          activeCategory === null
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
            : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-border"
        }`}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
              : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-border"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
