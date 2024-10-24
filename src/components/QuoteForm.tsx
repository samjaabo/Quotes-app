import React, { useState } from 'react';
import Navbar from './Navbar';

const QuoteForm: React.FC = () => {
  const [author, setAuthor] = useState('');
  const [categories, setCategories] = useState('');
  const [quote, setQuote] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ author, categories, quote }),
    });

    if (response.ok) {
      setAuthor('');
      setCategories('');
      setQuote('');
    }
  };

  return (
    <section className="bg-gray-900 w-full h-full flex flex-col items-center justify-center">
      <Navbar linkHref="/" activeLink={false} />
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto w-full max-w-screen-sm">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="pb-6 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  text-5xl tracking-tight font-extrabold text-transparent">
              Share and Inspire
            </h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label htmlFor="author" className="block mb-2 text-sm font-mono font-medium text-gray-100">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="py-3 px-4 block w-full bg-gray-900 border-2 border-gray-200 text-gray-100 focus:border-blue-300 text-md font-mono rounded-lg outline-none"
                  placeholder="Author full name"
                  required
                />
              </div>
              <div className="mb-8">
                <label htmlFor="categories" className="block mb-2 text-sm font-mono font-medium text-gray-100">Tags</label>
                <input
                  type="text"
                  id="categories"
                  name="categories"
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
                  className="py-3 px-4 block w-full bg-gray-900 border-2 border-gray-200 text-gray-100 focus:border-blue-300 text-md font-mono rounded-lg outline-none"
                  placeholder="Add tags for your quotes (e.g., inspiration, wisdom)"
                />
              </div>
              <div>
                <label htmlFor="quote" className="block mb-2 text-sm font-mono font-medium text-gray-100">Quote</label>
                <div className="mt-1">
                  <textarea
                    id="quote"
                    name="quote"
                    rows={3}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    className="py-3 px-4 block w-full bg-gray-900 border-2 border-gray-200 text-gray-100 focus:border-blue-300 text-md font-mono rounded-lg outline-none"
                    placeholder="Leave your quote here..."
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mt-11 grid">
                <button
                  type="submit"
                  className="bg-gray-50 border-2 block w-full rounded-lg px-12 py-3 text-md font-bold font-mono text-gray-900 hover:bg-gray-200 hover:border-gray-200 active:ring active:ring-gray-200 outline-none"
                >
                  Share
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
