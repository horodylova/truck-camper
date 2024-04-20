import { Title, Paragraph  } from './FavoritesPage.styled';

const FavoritesPage = () => {
  return (
      <div className="background">
        <div className='container'>
          <Title>No Favorites Yet</Title>
          <Paragraph>It looks like you haven&apos;t added any favorites yet. Start exploring and add some items to your favorites list!</Paragraph>
        </div>

        </div>
  );
};

export default FavoritesPage;

// import { Container, Title, Paragraph, List, ListItem } from './FavoritesPage.styled';

// const FavoritesPage = ({ favoritesList }) => {
//   return (
//     <Container>
//       {favoritesList.length > 0 ? (
//         <div>
//           <Title>Your Favorites</Title>
//           <List>
//             {favoritesList.map((item, index) => (
//               <ListItem key={index}>{item}</ListItem>
//             ))}
//           </List>
//         </div>
//       ) : (
//         <div>
//           <Title>No Favorites Yet</Title>
//           <Paragraph>It looks like you haven&apos;t added any favorites yet. Start exploring and add some items to your favorites list!</Paragraph>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default FavoritesPage;

