import Link from 'next/link';
import { useRouter } from 'next/router';
import SiteLayout from './SiteLayout';

interface ActiveLinkProps {
    children: React.ReactNode;
    href: string;
    styles?: React.CSSProperties;
}

interface SiteNavProps {
    children: React.ReactNode;

}

const ActiveLink = ({ children , href, styles }: ActiveLinkProps) => {
    const router = useRouter()
    return (
        <div style={styles}>
             <Link href={href}>
                {children}
            </Link>
        </div>
    )
}

const SiteNav = ({ children }: SiteNavProps) => {
    return (
        <SiteLayout>
            <div>
                <ActiveLink href='/player/characters'>
                    Characters
                </ActiveLink>
            </div>
            <div>
                {children}
            </div>
            
        </SiteLayout>
    )
}

export default SiteNav;