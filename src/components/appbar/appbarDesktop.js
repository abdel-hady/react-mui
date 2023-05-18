import { ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import { Actions } from "./actions";
import { useUIContext } from "../../context/ui";
export const AppbarDesktop = ({ matches }) => {
  const {setShowSearchBox} =useUIContext();
  return (
    <AppbarContainer>
      <AppbarHeader>My Bags</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemIcon>
          <ListItemIcon>
            <SearchIcon  onClick={()=>setShowSearchBox(true)}/>
          </ListItemIcon>
        </ListItemIcon>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};
