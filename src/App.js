import { Flex, Input, Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Card } from "./components/Card";
function SignUp({ toogleForm }) {
  return (
    <Flex w="400px" p="1rem" border="1px solid #c2c2c2" direction="column">
      <Text fontWeight="bold">Welcome to javiform</Text>
      <Heading mb="2rem">SignUp</Heading>
      <Input mb="1rem" placeholder="Nombre" />
      <Input mb="1rem" placeholder="Apellido" />
      <Input mb="1rem" placeholder="Email" />
      <Input mb="1rem" placeholder="Contraseña" />
      <Button colorScheme="blue" mt="20px">
        SignUp
      </Button>
      <Button colorScheme="blue" mt="1rem" variant="ghost" onClick={toogleForm}>
        Already have an account? SignUp
      </Button>
    </Flex>
  );
}

function SignIn({ toogleForm }) {
  return (
    <Flex w="400px" p="1rem" border="1px solid #c2c2c2" direction="column">
      <Text fontWeight="bold">Welcome to javiform</Text>
      <Heading mb="2rem">SignIn</Heading>
      <Input mb="1rem" placeholder="Email" />
      <Input mb="1rem" placeholder="Contraseña" />
      <Button colorScheme="blue" mt="20px">
        SignIn
      </Button>
      <Button colorScheme="blue" mt="1rem" variant="ghost" onClick={toogleForm}>
        First time here? SignIn
      </Button>
    </Flex>
  );
}
function App() {
  const [isSignup, setIsSignup] = useState(true);

  function toogleForm() {
    if (isSignup) {
      setIsSignup(false);
    } else {
      setIsSignup(true);
    }
  }

  return (
    <Flex justify="center" alignItems="center" h="100vh">
      {isSignup ? (
        <SignUp toogleForm={toogleForm} />
      ) : (
        <SignIn toogleForm={toogleForm} />
      )}

      {/**/}
      <Card />
    </Flex>
  );
}
export default App;
