import styled from "styled-components";
import Hero from "../../components/ui/Hero/Hero";
import CardProduct from "../../components/ui/CardProduct/CardProduct";
import Pagination from "../../components/ui/Pagination/Pagination";
import { useState } from "react";
import { UseQueryResult, useQuery } from "react-query";
import { getProducts } from "../../service/products.service";
import { Product } from "../../interface";

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

type QueryResult = UseQueryResult<{ data: Product[]; total: number }, Error>;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const { data, isLoading, isPreviousData, isError, error }: QueryResult = useQuery(
    ["products", currentPage], 
    () => getProducts(currentPage)
  );
  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 0;


  return (
    <>
    <HomeContainer>
      <Hero />
    </HomeContainer>
    {isLoading ? (
      <LoadingMessage>Loading...</LoadingMessage>
    ) : isError ? (
      <p>Error: {error instanceof Error ? error.message : "Something went wrong"}</p>
    ) : (
      <>
        <ProductsGrid>
          {data?.data.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </ProductsGrid>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)} 
          />
        )}
        {isPreviousData && <p>Loading new page...</p>}
      </>
    )}
  </>
  );
};

export default Home;