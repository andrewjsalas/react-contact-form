import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: rgb(0,97,99);
  background: linear-gradient(319deg, rgba(0,97,99,1) 0%, rgba(188,0,255,1) 100%);
  background-size: cover;
  background-repeat: no-repeat;
  overflow: none;
  height: 100vh;
  color: white;
}
`