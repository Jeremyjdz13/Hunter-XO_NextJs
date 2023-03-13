import React, { useState } from 'react';
import { dropdownMenuStyles } from './DropdownStyles';

interface Props {
  menuItems: { text: string; onClick: () => void }[];
  playerName?: string;
}

const DropdownMenu: React.FC<Props> = ({ menuItems, playerName = ''}) => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    function handleClick() {
        setIsContentVisible((prevState) => !prevState);
    }
    function handleMouseEnter() {
        setIsContentVisible(true);
      }
    
      function handleMouseLeave() {
        setIsContentVisible(false);
      }
    return (
        <div style={dropdownMenuStyles.dropdown}>
        <button style={dropdownMenuStyles.dropbtn}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        >
            {playerName}
        </button>
        <div style={{
          ...dropdownMenuStyles.dropdownContent,
          display: isContentVisible ? 'block' : 'none',
        }}
        onMouseLeave={handleMouseLeave}
        >
        {menuItems.map((menuItem) => (
            <a
            key={menuItem.text}
            style={dropdownMenuStyles.dropdownContentLink}
            onClick={menuItem.onClick}
            onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = 'hsla(0, 100%, 0%, 0.3)')
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'transparent')
            }
            >
            {menuItem.text}
            </a>
        ))}
        </div>
    </div>
    );
};

export default DropdownMenu;
