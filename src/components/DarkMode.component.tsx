import Button from "react-bootstrap/Button";

interface DarkModeToggleProps {
    toggle : () => void,
    is_dark_mode : boolean
}


const DarkModeToggle : React.FC<DarkModeToggleProps> = ({toggle, is_dark_mode}) => {
    return(
      <>
        <Button onClick={toggle}>
            {is_dark_mode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Button>
      </>
    );
};

export default DarkModeToggle;

/*
     const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
*/