import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const NameCard = ({ namecard }) => {
    console.log(namecard)
    return (
        <div >
            {namecard ? (
                <Card style={{ margin: '20px' }} >
                    <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                        image='https://studio.uxpincdn.com/studio/wp-content/uploads/2020/12/The-Best-React-Design-Patterns-You-Should-Know-About.png'
                        title={namecard.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Name of the item : {namecard.name}
                        </Typography>
                        <Typography component="p" style={{display:"inline-box",color:"#FF5733"}}>
                            Id of the Item : {namecard.id}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default NameCard