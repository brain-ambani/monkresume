'use server';

import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

export async function savePersonalDetails(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    return 'User not logged';
  }

  const { id: userId } = user;

  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const jobTitle = formData.get('jobTitle') as string;
  const address = formData.get('address') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;

  const resume = await db.resume.create({
    data: {
      firstName,
      lastName,
      jobTitle,
      address,
      phone,
      email,
      userId,
    },
  });

  revalidatePath('/dashboard');

  return resume.resumeId;
}
