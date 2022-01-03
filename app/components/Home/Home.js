import { useContext } from 'react';
import { LangContext } from '../Main';
import gaming from './img/gaming.gif'

//import '../../css/styles.css';

const Home = () => {

    const contextValue = useContext(LangContext);

    return (
        <div className="container">
            <div className="contained-text">
                <h2>{contextValue.dictionary.home_title}</h2>
                <h4>{contextValue.dictionary.home_subtitle}</h4>
                <img src={gaming} alt="Gaming" width="600" height="300"/>
            </div>
        </div>
    )
}

export default Home
