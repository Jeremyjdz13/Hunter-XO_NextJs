import { CSSProperties } from "react";

interface SignInSignUpStyles {
    container: CSSProperties;
    title: CSSProperties;
    formContainer: CSSProperties;
    formFieldContainer: CSSProperties;
    buttonContainer: CSSProperties;
    label: CSSProperties;
    input: CSSProperties;
    button: CSSProperties;
    linkContainer: CSSProperties;
    links: CSSProperties;
    [key: string]: CSSProperties | any;
}

export const signInSignUpStyles: SignInSignUpStyles = {
    container: {
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        border: 'black solid 1px',
        borderRadius: "4px",
        color: 'floralwhite',
        padding: '15px',
        margin: 'auto',
        width: '350px'

    },
    title: {
        fontSize: '32px',
        padding: '15px',
        color: 'hsl(0,100%,50%)',
        textShadow: '3px 3px hsl(0,100%, 10%)',
        textAlign: 'center'
    },
    formContainer: {
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        border: 'black solid 1px',
        padding: '5px',
    },
    formFieldContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        padding: '5px',
        margin: '10px'
    },
    label: {
        marginBottom: "0.5rem",
        fontSize: "1rem",
        fontWeight: 500,
    },
    input: {
        width: "100%",
        height: '10px',
        padding: "5px",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    buttonContainer:{
        margin: '15px'
    },
    button: {
        marginBottom: "0.5rem",
        fontSize: "1rem",
        fontWeight: 500,
    },
    linkContainer: {
        margin: '15px'
    },
    links: {
        color: 'hsl(0,100%,50%)',
        textShadow: '3px 3px hsl(0,100%, 10%)',
    }
}