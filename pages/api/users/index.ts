import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { getSession } from '@auth0/nextjs-auth0';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req, res);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    try {
      const user = await prisma.user.findUnique({
        where: { auth0Id: session.user.sub }
      });
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch user' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
