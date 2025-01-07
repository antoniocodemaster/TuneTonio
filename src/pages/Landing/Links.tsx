import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useCounter } from "./contexts/CounterContext";

const Links = () => {

    const { count, increment, decrement } = useCounter();

    return (
        <Box className="text-center my-auto">
            <Typography variant="h1" className="text-center text-white">
                Explore, Discover, and Enjoy!
            </Typography>
            <Link to="/music-explorer" className="btn-primary">
                Take me to Tune Tonio Music Explorer {count}
            </Link>
            <Button onClick={decrement}>- Decrement</Button>
            <Button onClick={increment}>+ Increment</Button>
        </Box>
    )
}

export default Links;