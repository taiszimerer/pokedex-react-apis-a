import { useNavigate } from 'react-router-dom';
import { goToPokedexPage } from '../../routes/Coordinator'
import { HeaderContainer, Button } from './styles';
import Logo from "../../icons/logopokemon.jpg"

function HeaderHome() {

  const navigate = useNavigate();

  return (
    <HeaderContainer>

      <div className='div-image'>
        <img className="img" src={Logo} alt="image-logo" />
      </div>

      <Button className='button' onClick={() => goToPokedexPage(navigate)}>
        Pokedex
      </Button>

    </HeaderContainer>
  );
}

export default HeaderHome;