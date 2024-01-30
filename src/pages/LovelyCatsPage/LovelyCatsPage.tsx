import { observer } from 'mobx-react-lite';
import { Grid, Paper, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import mobXStore from '../../store/CatStore';

const LovelyCatsPage = observer(() => {
    const likedCats = mobXStore.cats.filter(cat => cat.liked);

    const handleLikeToggle = (catId: string) => {
        mobXStore.toggleLike(catId);
    };

    return (
        <Grid container spacing={2} style={{ padding: 16 }}>
            {likedCats.map((cat, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper elevation={3} style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', width: '255px', height: '255px', position: 'relative' }}>
                        <img src={cat.url} alt={`Liked Kitten ${index}`} style={{ width: '255px', height: '255px' }} />
                        <IconButton
                            onClick={() => handleLikeToggle(cat.id)}
                            style={{ position: 'absolute', bottom: 8, right: 8, color: 'red' }}
                        >
                            {cat.liked ? <Favorite /> : <FavoriteBorder />}
                        </IconButton>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
});

export default LovelyCatsPage;