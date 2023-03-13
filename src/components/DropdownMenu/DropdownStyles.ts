import { CSSProperties } from "react";

interface DropdownMenuStyles {
    dropbtn: CSSProperties;
    dropdown: CSSProperties;
    dropdownContent: CSSProperties;
    dropdownContentLink: CSSProperties;
}

export const dropdownMenuStyles: DropdownMenuStyles = {
    dropdown: {
        position: 'relative',
        display: 'inline-block',
      },
      dropbtn: {
        backgroundColor: 'hsla(0, 100%, 0%, 0.3)',
        color: 'hsl(0,100%,50%)',
        padding: '10px',
        fontSize: '20px',
        border: 'none',
        borderRadius: '4px'
      },
      dropdownContent: {
        display: 'none',
        position: 'absolute',
        backgroundColor: 'floralWhite',
        minWidth: '100px',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        zIndex: 1,
      },
      dropdownContentLink: {
        color: 'black',
        padding: '12px 16px',
        textDecoration: 'none',
        display: 'block',
      },
    
}