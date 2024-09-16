'use server';

import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';

export async function createResume(title: string) {
  const user = await currentUser();

  if (!user) {
    return 'User not logged';
  }

  const { id: userId } = user;

  if (!title) {
    throw new Error('Title is required');
  }

  const resume = await db.resume.create({
    data: {
      title,
      userId,
    },
  });

  return resume.resumeId;
}
