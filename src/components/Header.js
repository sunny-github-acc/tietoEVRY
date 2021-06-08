import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      backgroundColor: "#e4ebf8",
      minHeight: "10vh",
      alignItems: "center",
      justifyContent: "space-between",
      fontWeight: "1000",
    },
    logo: {
      maxHeight: "7vh",
      padding: 12,
      paddingBottom: 0,
    },
    p: {
      margin: 0,
    },
  })
);

const Header = () => {
  const styles = useStyles();

  return (
    <header className={`${styles.root} App-header`}>
      <div style={{ width: 0 }}>
        <img
          className={styles.logo}
          src="https://www.tietoevry.com/tietoevry-favicons/apple-touch-icon.png"
          alt=""
        />
      </div>
      <p className={styles.p}>Travel packer</p>
      <p> </p>
    </header>
  );
};

export default Header;
