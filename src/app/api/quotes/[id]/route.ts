import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const quote = await prisma.quote.findUnique({
      where: { id: Number(id) },
    });

    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }

    return NextResponse.json(quote);
  } catch (error) {
    console.error('Error fetching quote:', error);
    return NextResponse.json({ error: 'Failed to fetch quote' }, { status: 500 });
  }
}

