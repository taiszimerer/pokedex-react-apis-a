import { useNavigate } from 'react-router-dom';
import { goToHomePage } from '../../routes/Coordinator'
import { HeaderContainer, Button, Return } from './styles';
import Logo from "../../icons/logopokemon.jpg"

function HeaderDetails() {

  const navigate = useNavigate();

  return (
    <HeaderContainer>

      <Return className='link' onClick={() => goToHomePage(navigate)}>
        Todos Pokémons
      </Return>

      <div className='div-image'>
        <img className="img" src={Logo} alt="image-logo" />
      </div>

      <Button className='button'>
        Excluir do Pokédex
      </Button>

    </HeaderContainer>
  );
}

export default HeaderDetails;