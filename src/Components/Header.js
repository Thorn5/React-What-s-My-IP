import { BottomNavigation, BottomNavigationAction, CardHeader } from "@mui/material";
import Search from "./Search";

const Header = () => {
  return (
    <BottomNavigation
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        margin: '0 auto',
        maxWidth: '800px',
        borderBottom: '3px solid #ddd',
        marginBottom: '1rem',
        // add top margin
        marginTop: '1rem',
      }}>
      <CardHeader title="Here is your IP Info" />
      <Search />
    </BottomNavigation>
  );
}

export default Header;