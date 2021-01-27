import React, { useState, useEffect } from "react";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";

const MovieDetailsPage = (props) => {
  const { id } = props.match.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);
  // const [movie] = useMovie(id);
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;

// import React, { useState, useEffect } from "react";
// import MovieHeader from "../components/headerMovie/";
// import MovieDetails from "../components/movieDetails/";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//   },
//   gridList: {
//     width: 450,
//     height: "100vh",
//   },
// }));

// const MoviePage = (props) => {
//   const classes = useStyles();
//   const { id } = props.match.params;

//   useEffect(() => {
//     getMovieImages(id).then((images) => {
//       setImages(images);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <>
//       {movie ? (
//         <>
//           <MovieHeader movie={movie} />
//           <Grid container spacing={5} style={{ padding: "15px" }}>
//             <Grid item xs={3}>
//               <div className={classes.root}>
//                 <GridList
//                   cellHeight={500}
//                   className={classes.gridList}
//                   cols={1}
//                 >
//                   {images.map((image) => (
//                     <GridListTile
//                       key={image.file_path}
//                       className={classes.gridListTile}
//                       cols={1}
//                     >
//                       <img
//                         src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
//                         alt={image.poster_path}
//                       />
//                     </GridListTile>
//                   ))}
//                 </GridList>
//               </div>
//             </Grid>
//             <Grid item xs={9}>
//               <MovieDetails movie={movie} />
//             </Grid>
//           </Grid>
//         </>
//       ) : (
//         <h2>Waiting for API data</h2>
//       )}
//     </>
//   );
// };

// export default MoviePage;
