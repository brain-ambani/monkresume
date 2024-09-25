'use server';

import { db } from '@/lib/db';

export async function updatePersonalDetails(
  resumeId: string,
  personalDetails: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    address: string;
    phone: string;
    email: string;
  }
) {
  try {
    const updatedResume = await db.resume.update({
      where: { resumeId: resumeId },
      data: {
        firstName: personalDetails.firstName,
        lastName: personalDetails.lastName,
        jobTitle: personalDetails.jobTitle,
        address: personalDetails.address,
        phone: personalDetails.phone,
        email: personalDetails.email,
      },
    });

    return updatedResume;
  } catch (error) {
    console.error('Failed to update resume:', error);
    throw new Error('Failed to update resume');
  }
}
