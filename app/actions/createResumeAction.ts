'use server';

import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

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

  revalidatePath('/dashboard');

  return resume.resumeId;
}

export async function getResumeId() {
  const user = await currentUser();

  if (!user) {
    throw new Error('User not authenticated');
  }

  const { id: userId } = user;

  // Query the resume based on the clerkUserId
  const resume = await db.resume.findFirst({
    where: {
      userId: userId, // Assuming the userId is stored in the resume table
    },
    select: {
      resumeId: true, // Only select the resumeId (id)
    },
  });

  if (!resume) {
    throw new Error('Resume not found for this user');
  }

  // Return the resumeId
  return resume.resumeId;
}
