import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@clerk/nextjs';

// GET: Fetch a user's page by path
export async function GET(req: NextRequest) {
  const { userId } = auth();
  const url = new URL(req.url);
  const path = url.searchParams.get('path');
  if (!userId || !path) return NextResponse.json({ error: 'Unauthorized or missing path' }, { status: 401 });
  const page = await prisma.page.findUnique({ where: { userId_path: { userId, path } } });
  return NextResponse.json(page);
}

// POST: Save/update a user's page
export async function POST(req: NextRequest) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { path, data } = await req.json();
  if (!path || !data) return NextResponse.json({ error: 'Missing path or data' }, { status: 400 });
  const page = await prisma.page.upsert({
    where: { userId_path: { userId, path } },
    update: { data },
    create: { userId, path, data },
  });
  return NextResponse.json(page);
}
