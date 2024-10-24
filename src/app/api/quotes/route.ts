import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Import the Prisma client

export async function POST(request: Request) {
  const { author, categories, quote } = await request.json();

  try {
    const newQuote = await prisma.quote.create({
      data: {
        author,
        categories,
        quote,
      },
    });

    return NextResponse.json(newQuote);
  } catch (error) {
    console.error('Error creating quote:', error);
    return NextResponse.json({ error: 'Failed to create quote' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const quotes = await prisma.quote.findMany();
    return NextResponse.json(quotes);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return NextResponse.json({ error: 'Failed to fetch quotes' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  try {
    await prisma.quote.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ message: 'Quote deleted successfully' });
  } catch (error) {
    console.error('Error deleting quote:', error);
    return NextResponse.json({ error: 'Failed to delete quote' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const { id, author, categories, quote } = await request.json();

  try {
    const updatedQuote = await prisma.quote.update({
      where: { id },
      data: {
        author,
        categories,
        quote,
      },
    });

    return NextResponse.json(updatedQuote);
  } catch (error) {
    console.error('Error updating quote:', error);
    return NextResponse.json({ error: 'Failed to update quote' }, { status: 500 });
  }
}
