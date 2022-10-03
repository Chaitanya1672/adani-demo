import styles from './search.module.css'
import { FaSearchPlus } from 'react-icons/fa';

const Search = () => {
  return (

    <div className={styles.seacrhBar}>
      <input type='text' className={styles.searchInp} placeholder='Search' />
      <button className={styles.button}>Submit</button>
    </div>
  )


};
export default Search;