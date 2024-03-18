import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {FC} from "react";
import { Divider } from "@mui/material";
import {useNavigate} from "react-router-dom";



import css from './Draw.module.css';
import {IGenres} from "../../interface";


interface IProps {
    genre: IGenres;
}

const Draw: FC<IProps> = ({ genre }) => {

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };


    const titleGenre = 'GENRE';
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List className={css.Genre_title} >
                <ListItemText  primary={titleGenre} className={css.Title_draw} />
            </List>
            <Divider />
            <List className={css.Genre}>
                {genre.genres.map((text, index) => (
                    <ListItem key={text.id} disablePadding>
                        <ListItemButton >
                            <ListItemText primary={text.name} onClick={()=>navigate(`/genre/${text.id}`)}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)} ><span className={css.Genres}> Genres </span></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export { Draw };
