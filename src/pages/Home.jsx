import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Home() {
    return (
        <div>
            <AppBar position="static">
                
                <Toolbar>
                    <Typography variant="h6">Home Page</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}