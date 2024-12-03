import styled from "styled-components";
import Hero from "../../components/ui/Hero/Hero";
import { useEffect, useState } from "react";
import CardProduct from "../../components/ui/CardProduct/CardProduct";
import axios from "axios";
import Pagination from "../../components/ui/Pagination/Pagination";

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
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 8;

  const fetchProducts = (page: number) => {
    setIsLoading(true);
    axios
      .get(`http://localhost:4000/products?_page=${page}&_limit=${itemsPerPage}`)
      .then((response) => {
        setProducts(response.data);
        const totalCount = response.headers["x-total-count"];
        setTotalPages(Math.ceil(totalCount / itemsPerPage));
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() =>   setIsLoading(false));
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  console.log(products)
  return (
    <>
      <HomeContainer>
        <Hero />
      </HomeContainer>
      {isLoading && <LoadingMessage>Loading products...</LoadingMessage>}
      {!isLoading && products.length > 0 && (
        <>
      <ProductsGrid>
        {products.map((product: any) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </ProductsGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>)}
    </>

  );
};

export default Home;