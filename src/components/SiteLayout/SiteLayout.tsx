import Header from "../Header/Header";
import { useAuth } from "@/pages/api/AuthContext";
import { AuthContextValue } from "@/pages/api/AuthContextValue";

interface SiteLayoutProps {
    children: React.ReactNode; 
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
    const { currentUser }:  AuthContextValue = useAuth();

    return (
        <div>
            {currentUser ? <Header /> : null}
            <div>{children}</div>
        </div>
    );
}



export default SiteLayout;