import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            width: "100%"
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        heading: {
            paddingLeft: "0.5em"
        }
    }),
);

export default useStyles