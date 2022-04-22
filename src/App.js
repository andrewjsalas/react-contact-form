import { useState } from "react";
import styled from "styled-components";

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <PageContainer>
      <PageSubHeader>Get In Touch</PageSubHeader>
      <PageHeader>Contact</PageHeader>

      <ContactCard>

        <InputFields>
          <Label htmlFor='name'>
            <Input 
              type='text'
              name='name' 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            Name
          </Label>        
          <Label htmlFor='email'>
            <Input 
              type='text'
              email='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            Email
          </Label>      
          <Label htmlFor='text-area'>
            <TextArea
              type='text'
              message='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            Message
          </Label>
        </InputFields>

        <Button>Send</Button>
      </ContactCard>

    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Mukta', sans-serif;
`

const PageHeader = styled.h1`
  text-align: center;
  margin: 0rem;
  font-size: 3rem;
`

const PageSubHeader = styled.h4`
  text-align: center;
  margin: 0;
  margin-top: 4rem;
`

const ContactCard = styled.div`
  margin: 0 auto;
`

const InputFields = styled.div`
  
`

const Label = styled.h3`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`

const Input = styled.input`
  display: flex;
  flex-direction: column;
`

const TextArea = styled.textarea`

`

const Button = styled.button`
  font-size: 1.5rem;

`

export default App;
