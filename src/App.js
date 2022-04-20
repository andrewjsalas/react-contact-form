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

`

const PageHeader = styled.h1`

`

const PageSubHeader = styled.h4`

`

const ContactCard = styled.div`

`

const InputFields = styled.div`

`

const Label = styled.h3`

`

const Input = styled.input`

`

const TextArea = styled.textarea`

`

const Button = styled.button`
`

export default App;
