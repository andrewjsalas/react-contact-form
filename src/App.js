import { useRef } from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com'

function App() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.js('service_kp10w9s', 'template_dnlegx6', form.current, 'ctpiNQ5Qlt0E6k_G5')
      .then((result) => {
        console.log(result.text)
        alert('Sent!')
      }, (error) => {
        console.log(error.text)
        alert('Unable to send')
      })
  }

  return (
    <PageContainer>
      <PageSubHeader>Get In Touch</PageSubHeader>
      <PageHeader>Contact</PageHeader>

        <Form ref={form} onSubmit={sendEmail}>
          {/* Name */}
          <FormGroup>
            <Label htmlFor='name'>Name</Label>        
            <Input 
              type='text'
              name='user_name'
              required         
            />
          </FormGroup>  

          {/* Email */}
          <FormGroup>
            <Label htmlFor='email'>Email</Label>
            <Input 
              type='email'
              email='email'
              required
            />
          </FormGroup>

          {/* Message */}
          <FormGroup>    
            <Label htmlFor='text-area'>Message</Label>
            <TextArea
              type='text'
              message='message'
              required
            />
          </FormGroup>
          <Button type='submit' value='send'>Send</Button>
        </Form> 

        

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

const Form = styled.form`
  margin: 0 auto;

`

const FormGroup = styled.div`

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
