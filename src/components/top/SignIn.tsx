import styles from '../../styles/Home.module.css'
import CustomButton from '../common/CustomButton';
import { 
    Box,
    Container,
    Center,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Table,
    Thead,
    Tbody,
    Heading
 } from "@chakra-ui/react"

const SignIn = () => {
    return (
        <Center bg='teal.300' w='100vw' h='100vh'>
            <Container >
                <Heading as='h1' size='4xl' isTruncated color='white'>Fast Tasks</Heading>
                <Table bg='white' rounded='base'>
                    <Thead p='4' bg='gray.100'>
                        ログインフォーム
                    </Thead>
                    <Tbody p='10'>
                        <FormControl>
                            <Input placeholder='ユーザー名' my='4'/>
                            <Input id='email' type='email'  placeholder='メールアドレス'/>
                        </FormControl>
                        <a href="/create">アカウント新規作成</a>
                        <CustomButton
                        >
                            送信
                        </CustomButton>
                    </Tbody>
                </Table>
            </Container>
        </Center>
    );
};

export default SignIn;