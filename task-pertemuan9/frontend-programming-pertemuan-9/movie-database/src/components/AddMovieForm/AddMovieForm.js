import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

// Menangkap props
function AddMovieForm(props) {
  // Destructing props: state movies
  const { movies, setMovies } = props;

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    link: "",
    genre: "",
  });

  /**
   * TODO
   * - PROBLEM: 1 ERROR 1 STATE.
   * - TODO: REFACTOR SEMUA ERROR JADI 1 STATE.
   */
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isLinkError, setIsLinkError] = useState(false);
  const [isGenreError, setIsGenreError] = useState(false);

  function handleChange(e) {
    // Destructing name dan value.
    const { name, value } = e.target;

    /**
     * Mengupdate state berupa object:
     * - Menggunakan spread operator:
     * - Update property berdasarkan apapun nilai name.
     */
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (title === "") {
      setIsTitleError(true);
      return false;
    } else if (date === "") {
      setIsDateError(true);
      setIsTitleError(false);
      return false;
    } else if (link === "") {
      setIsLinkError(true);
      setIsDateError(false);
      return false;
    } else {
      setIsTitleError(false);
      setIsDateError(false);
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      link: link,
      genre: genre,
    };

    // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
    setMovies([...movies, movie]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && addMovie();
  }

  const { title, date, link, genre } = formData;

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isDateError true maka render error
               */}
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="poster" className={styles.form__label}>
                Link
              </label>
              <input
                onChange={handleChange}
                id="link"
                className={styles.form__input}
                name="link"
                type="text"
                value={link}
              />
              {isLinkError && <Alert>Link Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Genre
              </label>
              <select
                id="type"
                className={styles.form__select}
                name="genre"
                value={genre}
                onChange={handleChange}
              >
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horor">Horor</option>
              </select>
            </div>
            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
