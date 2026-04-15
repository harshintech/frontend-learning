import Link from 'next/link';
import React from 'react'

const Services = () => {
  return (
    <div>
      Hello I am Service Page
      <ul>
        <li>
            <Link href="/services/web-dev">Go To Web Dev</Link>
        </li>
      </ul>
    </div>
  )
}

export default Services;
