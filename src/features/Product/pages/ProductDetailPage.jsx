import { makeStyles, Paper } from '@material-ui/core';
import { Container, Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useRouteMatch } from 'react-router';
import ProductInfo from '../components/ProductInfo';
import ProductThumbnail from '../components/ProductThumbnail';
import useFetchProductData from '../hooks/useFetchProductData';

const useStyles = makeStyles((theme) => ({
    root: {},
    left: {
        width: '400px',
        borderRight: `1px solid ${theme.palette.grey[300]}`,
        padding: theme.spacing(1),
    },
    right: {
        flex: '1 1 0',
        padding: theme.spacing(1),
    },
}));

function ProductDetailPage() {
    const classes = useStyles();
    const {
        params: { productId },
    } = useRouteMatch();

    const { product, loading } = useFetchProductData(productId);

    if (loading) {
        return (
            <Box className={classes.root}>
                <Container>
                    <Paper elevation={0}>
                        <Grid container>
                            <Grid item className={classes.left}>
                                <Skeleton variant="rectangular" height="400px"/>
                            </Grid>
                            <Grid item className={classes.right}>
                            <Skeleton variant="rectangular" height="400px"/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        );
    }

    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default ProductDetailPage;