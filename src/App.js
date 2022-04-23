import { useState,useRef } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser'
import CreateGlobalStyle from "./createGlobalStyle";

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const form = useRef()

  // Send message to email via emailjs
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_kp10w9s', 'template_dnlegx6', form.current, 'ctpiNQ5Qlt0E6k_G5')
      .then((result) => {
        console.log(result.text)
        alert('Sent!')
      }, (error) => {
        console.log(error.text)
        alert('Unable to send')
      })

    // Clear form after submit
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <PageContainer>
    <CreateGlobalStyle />

        <Form ref={form} onSubmit={sendEmail}>
          <PageSubHeader>Get In Touch</PageSubHeader>
          <PageHeader>Contact</PageHeader>
          {/* Name */}
          <FormGroup>
            {/* <Label htmlFor='name'>Name</Label>         */}
            <Input 
              type='text'
              name='user_name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required       
              placeholder='Name'  
            />
          </FormGroup>  

          {/* Email */}
          <FormGroup>
            {/* <Label htmlFor='email'>Email</Label> */}
            <Input 
              type='email'
              email='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Email'
            />
          </FormGroup>

          {/* Message */}
          <FormGroup>    
            {/* <Label htmlFor='text-area'>Message</Label> */}
            <TextArea
              type='text'
              message='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder='Message'
            />
          </FormGroup>

          <Button 
            type='submit' 
            value='send'
            >Send
          </Button>
        </Form>      

    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: lightgray;
  padding: 4rem;
  font-family: 'Montserrat', sans-serif;
`

const PageHeader = styled.h1`
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 3rem;
  color: #ea1d6f; 
`

const PageSubHeader = styled.h4`
  text-align: center;
  margin: 1rem 5rem;
  color: lightgray;
  font-size: 1.3rem;
  font-weight: 300;
  font-style: italic;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem;
  background-color: #3e3e3e;
  border-radius: 10px;
  box-shadow: 5px 10px 48px #1c1c1c;
`

const FormGroup = styled.div`
  margin: 2rem 0;
`

const Label = styled.h3`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  margin: 0.2rem 0;
`

const Input = styled.input`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem 0;
  border: none;
  border-bottom: 2px solid #666;
  font-size: 1rem;
  background: none;
  text-transform: uppercase;
  color: white;

  &::placeholder {
    color: #666;
  }

  &:focus {
    border: none;
    outline-width: 0;
    border-bottom: 2px solid white;
    letter-spacing: 0;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem 0;
  margin-top: 1rem;
  border: none;
  border-bottom: 2px solid #666;
  background: none;
  font-size: 1.3rem;
  text-transform: uppercase;
  color: white;

  &::placeholder {
    color: #666;
  }

  &:focus {
    border: none;
    outline-width: none;
    border-bottom-color: 2px solid white;
    letter-spacing: 0;
  }
`

const Button = styled.button`
  font-size: 1.3rem;
  margin-top: -1rem;
  background: none;
  border: none;
  color: #ea1d6f;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: 600;

  &:hover {
    opacity: 70%;
  }
`

export default App;
