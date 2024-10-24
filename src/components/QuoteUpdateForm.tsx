import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

interface QuoteUpdateFormProps {
  initialAuthor: string;
  initialCategories: string;
  initialQuote: string;
  quoteId: number;
  onUpdate: (id: number, data: { author: string; categories: string; quote: string }) => void;
}

const QuoteUpdateForm: React.FC<QuoteUpdateFormProps> = ({ initialAuthor, initialCategories, initialQuote, quoteId, onUpdate }) => {
  const [author, setAuthor] = useState(initialAuthor);
  const [categories, setCategories] = useState(initialCategories);
  const [quote, setQuote] = useState(initialQuote);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(quoteId, { author, categories, quote });
  };

  useEffect(() => {
    setAuthor(initialAuthor);
    setCategories(initialCategories);
    setQuote(initialQuote);
  }, [initialAuthor, initialCategories, initialQuote]);

  return (
    <section className="bg-gray-900 w-full h-full flex flex-col items-center justify-center">
      <Navbar linkHref="/explore" activeLink={false} />
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto w-full max-w-screen-sm">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="pb-6 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text tracking-tight text-3xl font-extrabold text-transparent sm:text-5xl">
              Make This Quote Shine!
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="author" className="block mb-2 text-sm font-mono font-medium text-gray-100">Author</label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="py-3 px-4 block w-full bg-gray-900 border-2 border-gray-200 text-gray-100 focus:border-blue-300 text-md font-mono rounded-lg outline-none"
                placeholder="Author full name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="categories" className="block mb-2 text-sm font-mono font-medium text-gray-100">Tags</label>
              <input
                type="text"
                id="categories"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
                className="py-3 px-4 block w-full bg-gray-900 border-2 border-gray-200 text-gray-100 focus:border-blue-300 text-md font-mono rounded-lg outline-none"
                placeholder="Add tags for your quote"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quote" className="block mb-2 text-sm font-mono font-medium text-gray-100">Quote</label>
              <textarea
                id="quote"
                rows={3}
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="py-3 px-4 block w-full bg-gray-900 border-2 border-gray-200 text-gray-100 focus:border-blue-300 text-md font-mono rounded-lg outline-none"
                placeholder="Leave your updated quote here..."
                required
              />
            </div>
            <div className="mt-6 grid">
              <button
                type="submit"
                className="bg-gray-50 border-2 block w-full rounded-lg px-12 py-3 text-md font-bold font-mono text-gray-900 hover:bg-gray-200 hover:border-gray-200 active:ring active:ring-gray-200 outline-none"
              >
                Update Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteUpdateForm;
