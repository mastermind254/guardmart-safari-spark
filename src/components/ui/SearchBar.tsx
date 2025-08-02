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
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = () => {
    if (query.trim() && onSearch) {
      onSearch(query.trim());
      setIsExpanded(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    // Simulate search results with pop-out animation
    if (value.length > 0) {
      const filtered = popularSearches.filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectResult = (result: string) => {
    setQuery(result);
    onSearch?.(result);
    setIsExpanded(false);
  };

  return (
    <div className={`relative w-full max-w-2xl ${className}`}>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary">
          <Search className="h-5 w-5" />
        </div>
        
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setTimeout(() => setIsExpanded(false), 200)}
          className="pl-12 pr-32 h-14 text-lg rounded-xl border-2 border-border focus:border-primary shadow-soft focus:shadow-medium transition-all duration-300 hover:shadow-lg focus:scale-[1.02] bg-background/80 backdrop-blur-sm"
        />
        
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
          >
            <Mic className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
          >
            <Camera className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
          >
            <Filter className="h-4 w-4" />
          </Button>
          
          <Button 
            onClick={handleSearch}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Enhanced Search Suggestions Dropdown with Pop-out Effect */}
      {isExpanded && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card/95 backdrop-blur-md border border-border rounded-xl shadow-xl z-50 overflow-hidden animate-scale-in">
          {/* Search Results */}
          {query.length > 0 && searchResults.length > 0 && (
            <div className="p-4 border-b border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Search Results</h4>
              <div className="space-y-1">
                {searchResults.slice(0, 5).map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectResult(result)}
                    className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-accent rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-sm flex items-center gap-2 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Search className="h-4 w-4 text-primary" />
                    <span className="flex-1">{result}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Popular Searches with Staggered Animation */}
          <div className="p-4">
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Popular Searches</h4>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectResult(search)}
                  className="px-3 py-1.5 text-sm bg-muted hover:bg-accent rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-sm animate-fade-in"
                  style={{ animationDelay: `${index * 30}ms` }}
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