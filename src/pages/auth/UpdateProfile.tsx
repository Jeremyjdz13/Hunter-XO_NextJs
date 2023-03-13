import { useRef, useState } from 'react'
import { useAuth } from '../api/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signInSignUpStyles } from '../../styles/AuthStyles';

export default function UpdateProfile() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);
    const displayNameRef = useRef<HTMLInputElement>(null);
    const { currentUser, updateEmail, updatePassword, updateDisplayName} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError("")
        if (emailRef.current?.value !== currentUser?.email){
            promises.push(updateEmail(emailRef.current?.value ?? ''))
        }

        if (passwordRef.current?.value){
            promises.push(updatePassword(passwordRef.current?.value))
        }

        if (displayNameRef.current?.value !== currentUser?.displayName){
            promises.push(updateDisplayName(displayNameRef.current?.value ?? ''))
        }

        Promise.all(promises).then(()=> {
            router.push('/profile')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
           setLoading(false)
        })
    }

    return (
        <>
            <div style={signInSignUpStyles.container}>
                
                    <div className="anotherDanger" style={signInSignUpStyles.title}>Update Profile</div>
                    {error && <div>{error}</div>}
                    <form style={signInSignUpStyles.formContainer} onSubmit={handleSubmit} >
                        <div style={signInSignUpStyles.formFieldContainer}>
                            <label>Email</label>
                            <input type="text" ref={emailRef} required
                            defaultValue={currentUser?.email ?? ''} />
                        </div>
                        <div style={signInSignUpStyles.formFieldContainer}>
                            <label>Password</label>
                            <input type="text" ref={passwordRef} 
                             placeholder="Leave blank to keep same password"/>
                        </div>
                        <div style={signInSignUpStyles.formFieldContainer}>
                            <label>Password Confirmation</label>
                            <input type="text" ref={passwordConfirmRef} 
                            placeholder="Leave blank to keep same password" />
                        </div>
                        <div style={signInSignUpStyles.formFieldContainer}>
                            <label>Display Name</label>
                            <input type="text" ref={displayNameRef} 
                            defaultValue={currentUser?.displayName ?? ''} />
                        </div>
                        <div style={signInSignUpStyles.buttonContainer}>
                            <button disabled={loading} className="w-100" type="submit">
                                Update
                            </button>
                        </div>
                    </form>
                <div style={signInSignUpStyles.linkContainer}>
                    <Link className="anotherDanger" style={signInSignUpStyles.links} href="/Profile">Cancel</Link>              
                </div> 
            </div>  
        </>
    )
}
