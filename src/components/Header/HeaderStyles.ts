import { CSSProperties } from 'react';

interface HeaderStyles {
    container: CSSProperties;
    containerLeft: CSSProperties;
    titleContainer: CSSProperties;
    title: CSSProperties;
    containerRight: CSSProperties;
    [key: string]: CSSProperties | any;
}

export const headerStyles: HeaderStyles = {
    container: {
        display: "grid",
        gridTemplateColumns: '30% 40% 30%',
        width: '100%',
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        border: "hsla(0, 100%, 0%, 0.9) solid 1px",
        padding: "0px",
        color: 'floralwhite',
    },
    containerLeft: {
        border: 'red solid 1px',
        padding: '15px'
    },
    titleContainer: {
        border: 'red solid 1px'
    },
    title: {
        fontSize: "2.5rem",
        padding: '5px',
        color: 'hsl(0,100%,50%)',
        textShadow: '3px 3px hsl(0,100%, 10%)',
        textAlign: 'center'
    },
    containerRight: {
        border: 'red solid 1px',
        textAlign: 'right',
        padding: '15px'
    },
    '@media (max-width: 679px)': {
        container: {

        },
        containerLeft: {
    
        },
        titleContainer: {
    
        },
        title: {
    
        },
        containerRight: {
    
        },
    }

}
    
//   @media (max-width: 679px) {
//     .header-title {
//       font-size: 30px;
//       width: 200px;
//     }
//     .header-left,
//     .header-right {
//       width: 75px;
//       height: 100px;
//     }
//     .header-container {
//       height: 100px;
//       background-color: transparent;
//     }
//   }