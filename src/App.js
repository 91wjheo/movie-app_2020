import React from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {

    state = {
        isLoading: true,
        movies: []
    };

    // setState()를 호출할 때 마다, 새로운 state 와함께 render()함수가 호출된다.
    // 따라서 화면에는 변경된 state 값이 동적으로 보여지게 된다.
    constructor(props) {
        super(props);
    }

    async getMovies() {
        // api 에서 movie 리스트 가져옴.
        const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
        // api에서 가져온 movie 리스트로 state 데이터를 갱신함.
        this.setState({movies, isLoading: false});

        console.log("getMovies() : ", movies);
    }

    componentDidMount() {
        this.getMovies();
    }

    // React는 react component class의 render 메소드를 자동으로 호출한다.
    render() {
        const {isLoading, movies} = this.state; //  이렇게 하면 this.state안에 있는 key isLoading, movies에 해당하는 value가 각각 const변수에 할당된다.
        return (
            <section className="container">
                {isLoading
                    ? (<div className="loader">
                        <span className="loader__text">
                            is Loading...
                        </span>
                      </div>)
                    : (
                        <div className="movies">
                            {movies.map(movie => {
                            return (<Movie key={movie.id}
                                           id={movie.id}
                                           title={movie.title}
                                           year={movie.year}
                                           summary={movie.summary}
                                           poster={movie.medium_cover_image}
                                           rating={movie.rating}
                                           genres={movie.genres.splice(0,3)}
                                    />)})}
                        </div>

                      )
                }
            </section>
        )
    }

    componentDidUpdate() {
    }

}


// function App() {
//   return (
//       <div>
//           {foodILike.map(food => (<Food key ={food.id} fav={food.name} img={food.img} rating={food.rating} />))}
//       </div>
//   )
// }


export default App;
