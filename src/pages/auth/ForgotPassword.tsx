import { useState, useRef } from 'react';
import { useAuth } from '../api/AuthContext';
import Link from 'next/link';
import { signInSignUpStyles } from '../../styles/AuthStyles';

export default function ForgotPassword() {
    const emailRef = useRef<HTMLInputElement>(null);
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [ message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if(emailRef.current){
            try {
                setMessage('')
                setError("")
                setLoading(true)
                await resetPassword(emailRef.current.value)
                setMessage('Check your inbox for further instructions')
            } catch {
                setError('Failed to reset password')
            }
            setLoading(false)
        }
    }

    return (
        <div style={signInSignUpStyles.container}>
        <div className="anotherDanger" style={signInSignUpStyles.title}>Password Reset</div>
        {error && <div>{error}</div>}
        {message && <div>{message}</div>}
        <form style={signInSignUpStyles.formContainer} onSubmit={handleSubmit}>
            <div style={signInSignUpStyles.linkContainer}>We will send you a link via email to change your password.  Please submit the email associated with your account.</div>
            <div style={signInSignUpStyles.formFieldContainer}>
                <label htmlFor="email" style={signInSignUpStyles.label}>Email</label>
                <input type="email" id="email" ref={emailRef} style={signInSignUpStyles.input} required />
            </div>
            <div style={signInSignUpStyles.buttonContainer}>
                <button disabled={loading} type="submit">
                Submit Email
                </button>
            </div>
        </form>
        <div style={signInSignUpStyles.linkContainer}>
            <Link className="anotherDanger" style={signInSignUpStyles.links} href="/SignIn">Sign In</Link>
        </div>
    </div>
    )
}