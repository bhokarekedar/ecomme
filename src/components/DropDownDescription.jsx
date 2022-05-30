import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CustomButton from "./CustomButton";

function DropDownDescription() {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedSec, setExpandedSec] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClickSec = () => {
    setExpandedSec(!expandedSec);
  };
  
  const description =`eat 1/2 cup. of the broth in a pot until simmering, add saffron an set aside for 10 minutes
  Heat 1/2 cup of the broth in a pot until simmering, add saffron an set aside for 10 minutes`;

  const descriptionSec =`eat 1/2 cup. of the broth in a pot until simmering, add saffron an set aside for 10 minutes
  Heat 1/2 cup of the broth in a pot until simmering, add saffron an set aside for 10 minutes`;
  
  return (
    <>
<CustomButton data={{handleExpandClick:handleExpandClick, expanded:expanded, description: description}}/>
<CustomButton data={{handleExpandClick:handleExpandClickSec, expanded:expandedSec, description:  descriptionSec}}/>

    </>
  );
}

export default DropDownDescription;
