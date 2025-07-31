import React, { useState } from 'react';
import { Search, Mic, Camera, Filter } from 'lucide-react';
import { Input } from './input';
import { Button } from './button';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const popularSearches = [
  'Fresh Vegetables', 'Meat & Poultry', 'Dairy Products', 'Beverages',
  'Household Items', 'Personal Care', 'Baby Products', 'Frozen Foods'
];

export const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search for products, brands and more...", 
  onSearch,
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = () => {
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`relative w-full max-w-2xl ${className}`}>
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <Search className="h-5 w-5" />
        </div>
        
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setTimeout(() => setIsExpanded(false), 200)}
          className="pl-12 pr-32 h-14 text-lg rounded-xl border-2 border-border focus:border-primary shadow-soft focus:shadow-medium transition-all duration-300"
        />
        
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary"
          >
            <Mic className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary"
          >
            <Camera className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary"
          >
            <Filter className="h-4 w-4" />
          </Button>
          
          <Button 
            onClick={handleSearch}
            className="btn-primary px-4"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Search Suggestions Dropdown */}
      {isExpanded && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-medium z-50 p-4">
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground">Popular Searches</h4>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setQuery(search);
                    onSearch?.(search);
                  }}
                  className="px-3 py-1.5 text-sm bg-muted hover:bg-accent rounded-lg transition-colors duration-200"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};