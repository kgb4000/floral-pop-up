import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

import { useState } from 'react'

const Contact = () => {

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null
    }
  })

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg
        }
      })
      setInputs({
        name: '',
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg
        }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setStatus(prevStatus => ({
      ...prevStatus,
      submitting: true
    }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <>
      <Head>
        <title>The Flower Moments</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css" />
      </Head>
      <div className='container'>
        <Header />
        <main className='content'>
          <div className='contact-container'>
            <h1 className='title'>Contact us</h1>
            <h3 className='title'>Call: <a href="tel:240-665-7890">(240) 665-3350</a></h3>
            <h3 className='title'>Email: monica@monicabrowneflowers.com</h3>
          
            <h2 className='center title'>Send us a message</h2>
            <form onSubmit={handleOnSubmit}>
              <input 
                id='name'
                value={inputs.name}
                onChange={handleOnChange}
                required
                type='text' 
                placeholder='Name' 
              />
              <input 
                id='email'
                value={inputs.email}
                onChange={handleOnChange}
                required
                type='email' 
                placeholder='Email' 
              />
              <textarea 
                id='message'
                value={inputs.message}
                onChange={handleOnChange}
                placeholder='Message'
                required
                >
              </textarea>
              <button type="submit" disabled={status.submitting}>
                {!status.submitting
                  ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                  : 'Submitting...'}
              </button>
            </form>
            {status.info.error && (
              <div>Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">{status.info.msg}</div>
            )}
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  )
}

export default Contact