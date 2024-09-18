// import { createContext } from 'react';

// export const ResumeInfoContext = createContext(null);

import { createContext, Dispatch, SetStateAction } from 'react';
import { ResumeInfo } from '@/lib/types';

// Define the context type
export type ResumeInfoContextType = {
  resumeInfo: ResumeInfo | null | undefined;
  setResumeInfo: Dispatch<SetStateAction<ResumeInfo | null | undefined>>;
};

// Provide a default value (null initially)
export const ResumeInfoContext = createContext<ResumeInfoContextType | null>(
  null
);
