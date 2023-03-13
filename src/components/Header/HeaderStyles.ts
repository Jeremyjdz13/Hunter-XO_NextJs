import { CSSProperties } from 'react';

interface HeaderStyles {
    container: CSSProperties;
    containerLeft: CSSProperties;
    containerCenter: CSSProperties;
    titleContainer: CSSProperties;
    title: CSSProperties;
    containerRight: CSSProperties;
    buttonContainer: CSSProperties;
    button: CSSProperties;
    [key: string]: CSSProperties | any;
}

export const headerStyles: HeaderStyles = {
    container: {
        display: "grid",
        gridTemplateColumns: '20% 30% 15% 35%',
        width: '100%',
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        border: "hsla(0, 100%, 0%, 0.9) solid 1px",
        padding: "0px",
        color: 'floralwhite',
    },
    containerLeft: {
        padding: '15px',
        textAlign: 'center',
        borderLeft: 'hsl(8, 13%, 35%) 1px solid'
    },
    containerCenter: {
        padding: '15px',
        textAlign: 'center',
        borderLeft: 'hsl(8, 13%, 35%) 1px solid'
    },
    containerRight: {
        textAlign: 'right',
        padding: '15px',
        borderLeft: 'hsl(8, 13%, 35%) 1px solid'

    },
    titleContainer: {
    },
    title: {
        fontSize: "2rem",
        padding: '5px 15px',
        color: 'hsl(0,100%,50%)',
        textShadow: '3px 3px hsl(0,100%, 10%)',
        textAlign: 'center',
    },
    buttonContainer: {

    },
    button: {
        marginBottom: "0.5rem",
        fontSize: "12px",
        fontWeight: 500,
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