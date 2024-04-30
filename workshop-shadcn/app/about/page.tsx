import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import React from 'react'
function page() {
  return (
    <main className='flex min-h-screen flex-col items-center '>
    <div>About Section</div>
    <Button  variant={'destructive'}>Hello </Button>
    <Calendar/>
    </main>
  )
}

export default page