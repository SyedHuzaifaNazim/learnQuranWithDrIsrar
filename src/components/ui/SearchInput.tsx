interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="max-w-xl mx-auto mb-10">
      <input
        type="text"
        className="block w-full px-4 py-3 bg-secondary/50 dark:bg-white/5 backdrop-blur-sm border border-border rounded-lg focus:ring-2 focus:ring-islamic-gold/30 focus:border-islamic-gold/30 focus:outline-none transition-all font-arabic"
        placeholder="Search by Surah number or name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
