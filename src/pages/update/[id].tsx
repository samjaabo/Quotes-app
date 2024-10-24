import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import QuoteUpdateForm from '../../components/QuoteUpdateForm';

interface Quote {
  id: number;
  author: string;
  categories: string;
  quote: string;
}

const UpdateQuotePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuote = async () => {
      if (!id || Array.isArray(id)) return;
      const response = await fetch(`/api/quotes/${id}`);
      if (response.ok) {
        const data: Quote = await response.json();
        setQuote(data);
      }
      setLoading(false);
    };

    fetchQuote();
  }, [id]);

  const handleUpdate = async (quoteId: number, updatedData: { author: string; categories: string; quote: string }) => {
    const response = await fetch(`/api/quotes`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: quoteId, ...updatedData }),
    });

    if (response.ok) {
      router.push('/explore/');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!quote) {
    return <div>No quote found.</div>;
  }

  return (
    <div className="w-screen h-screen">
      <QuoteUpdateForm
        initialAuthor={quote.author}
        initialCategories={quote.categories}
        initialQuote={quote.quote}
        quoteId={quote.id}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default UpdateQuotePage;
