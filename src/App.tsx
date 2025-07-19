import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TagListProps {
  title: string;
  tags: string[];
  onTagClick?: (tag: string) => void;
}

function TagList({ title, tags, onTagClick }: TagListProps) {
  return (
    <section className="mt-8 px-6 max-w-5xl mx-auto" aria-labelledby={`${title}-tags`}>
      <h2 id={`${title}-tags`} className="text-white text-lg font-semibold mb-4">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
            onClick={() => onTagClick?.(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}

function HeroSearch({ onSearch }: { onSearch: (search: string) => void }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <section
      className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8"
      aria-label="Hero search section"
    >
      <img
        src="/task1/hero-bg.png"
        alt="Bookshelf background"
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Search for words, phrases and meanings
        </h1>
        <div className="flex items-center bg-black px-4 py-2 rounded-full w-full max-w-xl mt-6 shadow-lg">
          <Search className="text-gray-400 mr-3" aria-hidden />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Type to search..."
            aria-label="Search input"
            className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
          />
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white ml-4"
            onClick={handleSearch}
            aria-label="Submit search"
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center gap-2">
        <img src="/task1/logo.png" alt="Wortionary Logo" className="w-10 h-10" />
        <div className="text-white font-semibold text-lg">Wortionary</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400 text-sm" aria-hidden />
          <Input
            type="text"
            placeholder="Search"
            aria-label="Header search"
            className="pl-9 bg-gray-800 text-white border-none focus:ring-0 rounded-full"
          />
        </div>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatar.jpg" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default function App() {
  const [tags] = useState([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  const handleSearch = (value: string) => {
    console.log("Search input:", value);
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <HeroSearch onSearch={handleSearch} />
      <TagList title="Trending" tags={tags} onTagClick={(tag) => console.log("Tag clicked:", tag)} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}
