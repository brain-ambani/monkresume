'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';

import { Button } from '@/components/ui/button';
import PersonalDetail from './forms/PersonalDetail';

export const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  return (
    <div>
      <div className='flex items-center justify-between'>
        <Button
          variant='outline'
          size='sm'
          className='flex gap-2 text-violet-500'
        >
          <LayoutGrid /> Theme
        </Button>

        <div className='flex gap-2'>
          {activeFormIndex > 1 && (
            <Button
              size='sm'
              className='bg-violet-500'
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            className='flex gap-2 bg-violet-500'
            size='sm'
            disabled={!enableNext}
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Personal Details */}
      {activeFormIndex == 1 ? (
        <PersonalDetail enableNext={(v: boolean) => setEnableNext(v)} />
      ) : null}
      {/* Summary */}
      {/* Experience */}
      {/* Education*/}
      {/* Skills */}
    </div>
  );
};
