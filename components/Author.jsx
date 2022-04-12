import React from 'react'
import Image from 'next/image'
const Author = ({author}) => {
  return (
    <div className='text-center p-12 mt-20 mb-8 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image
          unoptimized
          src={author.photo.url}
          alt={author.name}
          width="100px"
          height="100px"
          className='align-middle rounded-full'
        />
      </div>
      <h3 className='text-white mt-4 mb-4 text-xl font-bold'>
        {author.name}
      </h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  )
}

export default Author