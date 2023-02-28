
import { useState, useRef } from 'react';
import { useAuth } from './api/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signInSignUpStyles } from '../styles/SignInSignUpStyles';
import PasswordStrengthBar from 'react-password-strength-bar';
import zxcvbn from 'zxcvbn'

export default function SignUp() {
  const displayNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const router = useRouter();

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const password = event.target.value;
    const strength = zxcvbn(password).score;
    setPasswordStrength(strength);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (passwordRef.current && passwordRef.current instanceof HTMLInputElement && passwordRef.current.value.length < 8) {
      return setError('Password must be at least 8 characters long');
    }    
    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
        return setError('Passwords do not match')
    }
    if (emailRef.current && passwordRef.current && displayNameRef.current){
      try {
        setError('')
        setLoading(true)
        await signUp(emailRef.current.value, passwordRef.current.value, displayNameRef.current.value);
        router.push('/Profile');
      } catch {
        setError('Failed to create an account')
      }

    setLoading(false)
    }
  } 
  
  return (
    <div style={signInSignUpStyles.container}>
        <div className="anotherDanger" style={signInSignUpStyles.title}>Sign Up</div>
        {error && <div style={signInSignUpStyles.links}>{error}</div>}
        <form style={signInSignUpStyles.formContainer} onSubmit={handleSubmit}>
            <div style={signInSignUpStyles.formFieldContainer}>
                <label htmlFor="displayName" style={signInSignUpStyles.label}>Display Name</label>
                <input type="displayName" id="displayName" ref={displayNameRef} style={signInSignUpStyles.input} required />
            </div>
            <div style={signInSignUpStyles.formFieldContainer}>
                <label htmlFor="email" style={signInSignUpStyles.label}>Email</label>
                <input type="email" id="email" ref={emailRef} style={signInSignUpStyles.input} required />
            </div>
            <div style={signInSignUpStyles.formFieldContainer}>
                <label htmlFor="password" style={signInSignUpStyles.label}>Password</label>
                <input type="password" id="password" ref={passwordRef} style={signInSignUpStyles.input} onChange={handlePasswordChange} required />
                <PasswordStrengthBar style={signInSignUpStyles.links} password={passwordRef.current?.value} />
            </div>
            <div style={signInSignUpStyles.formFieldContainer}>
                <label htmlFor="passwordConfirm" style={signInSignUpStyles.label}>Confirm Password</label>
                <input type="passwordConfirm" id="passwordConfirm" ref={passwordConfirmRef} style={signInSignUpStyles.input} required />
            </div>
            <div style={signInSignUpStyles.buttonContainer}>
                <button disabled={loading} type="submit">
                Create Account
                </button>
            </div>
          
        </form>
        <div style={signInSignUpStyles.linkContainer}>
            Already have an account? <Link className="anotherDanger" style={signInSignUpStyles.links} href="/SignIn">Sign In</Link>
        </div>
    </div>
  )
}