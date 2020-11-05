import React from 'react';
import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormText,
    FormWrap,
    Icon
} from './SignInStyles';


const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>
                        ViBank
                    </Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password'/>
                            <FormButton type='submit'>Continue</FormButton>
                            <FormText>Forgot password ?</FormText>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;