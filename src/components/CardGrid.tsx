import React, { useEffect, useState } from 'react';
import Card from './Card';
import Navbar from './Navbar';

interface Quote {
  id: number;
  author: string;
  quote: string;
  categories: string;
}

const CardGrid: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('/api/quotes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error('Failed to fetch quotes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  const handleDelete = async (id: number) => {
    const response = await fetch('/api/quotes', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      setQuotes(quotes.filter((quote) => quote.id !== id));
    } else {
      console.error('Failed to delete quote');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col items-center justify-center">


        <Navbar linkHref="/" activeLink={true}></Navbar>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full max-w-7xl box-border p-4">
          {quotes.map((quote) => (
            <Card
              key={quote.id}
              id={quote.id}
              author={quote.author}
              content={quote.quote}
              tags={quote.categories}
              onDelete={() => handleDelete(quote.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
