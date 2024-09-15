'use client';

import { useState } from 'react';
import { PlusSquare } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <div
        className='p-14 py-24  sm:gap-10 border flex items-center justify-center 
      bg-gray-200 rounded-lg sm:h-[280px] lg:h-[320px] hover:scale-105 transition-all
      hover:shadow-md hover:bg-gray-500 hover:text-slate-100 hover:cursor-pointer'
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <p>Add title for your new resume</p>
            <DialogDescription>
              <Input
                className='my-2'
                placeholder='Ex. Fullstack Resume'
              />
            </DialogDescription>
            <div className='flex justify-end gap-4'>
              <Button
                variant='outline'
                onClick={() => {
                  setOpenDialog(false);
                }}
              >
                Cancel
              </Button>
              <Button>Create</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
