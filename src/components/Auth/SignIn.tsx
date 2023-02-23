import { useState, useRef } from 'react';
import { useAuth } from '../../pages/api/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signInSignUpStyles } from './SignInSignUpStyles';

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      try {
        setError('');
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        router.push('/');
      } catch {
        setError('Failed to log in');
      }

      setLoading(false);
    }
  }

  return (
    <div style={signInSignUpStyles.container}>
        <div style={signInSignUpStyles.title}>Sign In</div>
        {error && <div>{error}</div>}
        <form style={signInSignUpStyles.formContainer} onSubmit={handleSubmit}>
            <div style={signInSignUpStyles.formFieldContainer}>
                <label htmlFor="email" style={signInSignUpStyles.label}>Email</label>
                <input type="email" id="email" ref={emailRef} style={signInSignUpStyles.input} required />
            </div>
            <div style={signInSignUpStyles.formFieldContainer}>
                <label htmlFor="password" style={signInSignUpStyles.label}>Password</label>
                <input type="password" id="password" ref={passwordRef} style={signInSignUpStyles.input} required />
            </div>
            <div style={signInSignUpStyles.buttonContainer}>
                <button disabled={loading} type="submit">
                Sign In
                </button>
            </div>
          
        </form>
        <div style={signInSignUpStyles.linkContainer}>
            <Link href="/ForgotPassword">Forgot Password?</Link>
        </div>
        <div style={signInSignUpStyles.linkContainer}>
            Need an account? <Link href="../Auth/SignUp">Sign Up</Link>
        </div>
    </div>
  );
}
