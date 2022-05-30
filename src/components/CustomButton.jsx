import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Typography from "@mui/material/Typography";

function CustomButton({ data }) {
  const {handleExpandClick, expanded, description} = data;
  debugger;
  const commonStyles = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    width: "100%",
    // height: '5rem',
  };

  return (
    <>
      <Link
        onClick={handleExpandClick}
        underline="none"
        sx={{ cursor: "pointer" }}
      >
        <Box
          sx={{ ...commonStyles, borderBottom: 1, marginBottom: "10px" }}
          flexGrow={1}
        />
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // p: 1,
              // m: 1,
              bgcolor: "background.paper",
              //  borderRadius: 1,
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
              Product Info
            </Typography>

            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>

          <Collapse in={data.expanded} timeout="auto" unmountOnExit>
            {description.split(".").map((line) => (
              <Typography>{line}.</Typography>
            ))}
          </Collapse>
        </div>
        <Box
          sx={{ ...commonStyles, borderBottom: 1, marginTop: "10px" }}
          flexGrow={1}
        />
      </Link>
    </>
  );
}

export default CustomButton;
