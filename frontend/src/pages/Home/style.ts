import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        paddingTop: "2em",
        paddingBottom: "2em",
        paddingLeft: "2.5em",
        paddingRight: "2.5em",
        height: "100vh"
    },
    paginationContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    },
    searchContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh"
    },
    searchTermPrompt: {
        textAlign: "center",
        marginTop: "2em"
    },
    progress: {
        marginTop: "2em",
        marginBottom: "2em",
        textAlign: "center"
    }

});

export default useStyles

