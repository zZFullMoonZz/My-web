import { Button, Center } from '@mantine/core'
import React from 'react'

function page() {
  return (
    <Center>
      <div>!! Start Page  you can input go to localhost:3000/homePage pls!!
        <br />
        <Button
          fullWidth
          mt={'lg'}
          component='a'
          href='/homePage'
        >Click</Button>
      </div>
    </Center>
  )
}

export default page