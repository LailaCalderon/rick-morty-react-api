import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardCharacter = ({character}) => {

    let {image, name, status} = character

    return (
        <Card sx={{ width: 350 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {status}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
    )
}

export default CardCharacter