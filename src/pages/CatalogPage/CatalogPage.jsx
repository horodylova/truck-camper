import { CatalogWrapper } from './CatalogPage.styled';
import LeftCatalogColumn from '../../components/LeftCatalogColumn/LeftCatalogColumn';
import RightCatalogColumn from '../../components/RightCatalogColumn/RightCatalogColumn';

const CatalogPage = () => {
  return (
    <CatalogWrapper className="container">
      <LeftCatalogColumn />
      <RightCatalogColumn />
    </CatalogWrapper>
  );
};

export default CatalogPage;
