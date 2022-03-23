import { createStyles, makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            marginTop: theme.spacing(1),
            width: "100%"
        },
    }),
);
export default useStyles