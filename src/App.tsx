import { useGetArticles } from './services/api/generated/endpoints';

const App = () => {
  const { data, isLoading } = useGetArticles();
  console.log(data);
  return isLoading ? <div>Loading...</div> : <div>Bardh</div>;
};

export default App;
