import { PageWrapper, Title, Paragraph, List, ListItem, StyledButton } from './HomePage.styled';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <PageWrapper className='background'>
      <div className='container'>
        <Title>Welcome to Our Camper Rental Company</Title>
        <Paragraph>Embark on unforgettable adventures with our luxurious campers available for rent. Whether you dream of exploring natural wonders afar or traveling to picturesque destinations in your region, we&#39;ll make your journey comfortable and memorable.</Paragraph>
        <Paragraph>Our campers are not just transportation; they are your personal home on wheels, offering:</Paragraph>
        <List>
          <ListItem>Comfort and convenience: Discover space and coziness in our modern campers equipped with all the essentials for a comfortable getaway.</ListItem>
          <ListItem>Freedom of movement: Travel wherever your imagination takes you and stop wherever you desire, maintaining the freedom of your schedule.</ListItem>
          <ListItem>Excellent quality and service: Our campers are always maintained in top condition, and our teams are happy to assist you with everything you need.</ListItem>
        </List>
        <Paragraph>Start your journey with us today and give yourself the opportunity to savor every moment of your adventure!</Paragraph>
        <Link to="/catalog">
        <StyledButton>Explore Catalog</StyledButton>
        </Link>
      </div>
    </PageWrapper>
  );
};

export default HomePage;


