import HeaderSection from '../../components/HeaderSection';
import ListSection from '../../components/ListSection';
import SearchSection from '../../components/SearchSection';

function Main() {
  const [isLoading, setIsLoading] = useState(false);

  const handleIsLoading = _isLoading => {
    setIsLoading(_isLoading);
  };

  return (
    <StyledRoot>
      <HeaderSection />
      <SearchSection handleIsLoading={handleIsLoading} />
      <ListSection isLoading={isLoading} />
    </StyledRoot>
  );
}

export default Main;
