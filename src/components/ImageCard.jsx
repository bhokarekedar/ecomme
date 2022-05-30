import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';


export default function ImageCard({ data }) {
    // console.log("props", props);
    return (
        // <Box sx={{ width: "100%" }}>
        // <Card
      
        // >
        //     <CardActionArea>
        //         <CardMedia
        //             component="img"
        //           //  height="250"
        //          //   minWidth="800"
        //          width="100%"
        //             image={data.imageUrl}
        //             alt={data.description}
        //         />
        //         <CardContent>
        //             <Typography gutterBottom variant="h5" component="div">
        //                 {data.header}
        //             </Typography>
        //             <Typography variant="body2" color="text.secondary">
        //                 {data.description}
        //             </Typography>
        //         </CardContent>
        //     </CardActionArea>
        // </Card>
        // </Box>
      
                  <Paper elevation={6} sx={{ width: "100%",  height:"50px"}}>
                  <Box sx={{ width: "100%"}}>
                  gg
                  </Box>
                  </Paper>
      
    );
}