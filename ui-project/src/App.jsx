import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {
  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661583962498-252ca90495cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
      intro: '',
      tag: 'Satisfied'

    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661609200928-22408fbd85ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661630879153-4a3ff7cefb66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8',
      intro: '',
      tag: 'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
      

    </div>
  )
}

export default App