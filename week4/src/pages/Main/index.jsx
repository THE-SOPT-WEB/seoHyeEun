import HeaderSection from '../../components/HeaderSection';
import ListSection from '../../components/ListSection';
import SearchSection from '../../components/SearchSection';

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [resultLists, setResultLists] = useState([]);

  const handleIsLoading = _isLoading => {
    setIsLoading(_isLoading);
  };

  const handleResultLists = newResultList => {
    setResultLists(newResultList);
  };

  return (
    <StyledRoot>
      <HeaderSection />
      <SearchSection handleResultLists={handleResultLists} handleIsLoading={handleIsLoading} />
      <ListSection resultLists={resultLists} isLoading={isLoading} />
    </StyledRoot>
  );
}

export default Main;
