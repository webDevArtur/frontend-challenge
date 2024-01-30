import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Grid, Paper, CircularProgress, IconButton, Button } from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import mobXStore from '../../store/CatStore';

const AllCatsPage = observer(() => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        mobXStore.fetchCats(page);
    }, [page]);

    const handleLikeToggle = (catId: string) => {
        mobXStore.toggleLike(catId);
    };

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    return (
        <div>
            <Grid container spacing={2} style={{ padding: 16 }}>
                {mobXStore.cats.map((cat, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Paper elevation={3} style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', width: '225px', height: '225px', position: 'relative' }}>
                            <img src={cat.url} alt={`Kitten ${index}`} style={{ width: '225px', height: '225px' }} />
                            <IconButton
                                onClick={() => handleLikeToggle(cat.id)}
                                style={{ position: 'absolute', bottom: 8, right: 8, color: cat.liked ? 'red' : 'gray' }}
                            >
                                {cat.liked ? <Favorite /> : <FavoriteBorder />}
                            </IconButton>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
                {mobXStore.loading && <CircularProgress />}
                {!mobXStore.loading && mobXStore.hasMore && (
                    <Button variant="contained" color="primary" onClick={handleLoadMore}>
                        Load More
                    </Button>
                )}
            </div>
        </div>
    );
});

export default AllCatsPage;
