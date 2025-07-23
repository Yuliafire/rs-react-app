// import SearchSection from '../../components/SearchSection/SearchSection';
import ResultsSection from '../../components/ResultsSection/ResultsSection';

export const HomePage = () => {
  return (
    <div className="home-page">
      <ResultsSection results={[]} loading={false} error={null} />
    </div>
  );
};
