import PropTypes from 'prop-types'

export const Home = ({logo}) => {
    return (
      <main className="d-flex flex-column align-items-center container">
        <article className="d-flex flex-column justify-content-center align-items-center gap-2 w-75">
          <header className="head-text d-flex flex-column align-items-center">
            <h1 className="text-muted p-4">
              Bienvenidos a <span className="text-black">Happy Cake!</span>
            </h1>
            <p className='text-center text-dark'>
              El lugar de los pasteles felices
            </p>
            <img src={ logo } alt="logo de paste color rosa" style={{width:100}}/>
          </header>
        </article>
      </main>
    );
};


Home.propTypes = {
    logo: PropTypes.string,
};