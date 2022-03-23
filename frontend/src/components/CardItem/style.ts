import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatarContainer: {
            display: "flex",
            gap: "2em",
            alignItems: "center",
            marginBottom: "1em",
            width: "100%"
        },
        large: {
            width: `3em!important`,
            height: `3em!important`,
        },
        listItem: {
            display: "flex",
            flexDirection: "column"
        },
        listBody: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1em"

        },
        paginationContainer: {
            width: "100%",
            display: "flex",
            justifyContent: "center"
        },
        maxLines: {
            display: "block",
            textOverflow: "ellipsis",
            wordWrap: "break-word",
            overflow: "hidden",
            maxHeight: " 3.6em",
            lineHeight: "1.8em",
        },
        subtitle: {
            display: "flex",
            justifyContent: "flex-start",
            gap: "3em",
            width: "100%"
        }
    }),
);
export default useStyles