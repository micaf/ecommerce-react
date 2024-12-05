import styled from "styled-components";
import Hero from "../../components/ui/Hero/Hero";
import CardProduct from "../../components/ui/CardProduct/CardProduct";
import Pagination from "../../components/ui/Pagination/Pagination";
import { useState } from "react";
import { useProduct } from "../../context/ProductContext"; // Import the ProductsContext hook

const HomeContainer = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${(props) => props.theme.spacing.large};
  padding: ${(props) => props.theme.spacing.medium};
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.typography.fontSizes.large || "18px"};
  color: ${(props) => props.theme.colors.textSecondary || "#6D6D6D"};
  margin-top: ${(props) => props.theme.spacing.large || "32px"};
`;

const Home = () => {
  const { products, isLoading, error } = useProduct(); // Consume the ProductsContext
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Get the products for the current page
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <HomeContainer>
        <Hero />
      </HomeContainer>
      {isLoading && <LoadingMessage>Loading products...</LoadingMessage>}
      {error && <LoadingMessage>Error: {error}</LoadingMessage>}
      {!isLoading && paginatedProducts.length > 0 && (
        <>
          <ProductsGrid>
            {paginatedProducts.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </ProductsGrid>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
      {!isLoading && products.length === 0 && !error && (
        <LoadingMessage>No products available.</LoadingMessage>
      )}
    </>
  );
};

export default Home;