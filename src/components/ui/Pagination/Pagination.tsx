import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing.large || "16px"};
`;

const PaginationButton = styled.button`
  background: ${(props) => props.theme.colors.secondary || "#FFC107"};
  color: ${(props) => props.theme.colors.textPrimary || "#000000"};
  border: none;
  border-radius: ${(props) => props.theme.borders.radius.medium || "8px"};
  padding: ${(props) => props.theme.spacing.small || "8px 12px"};
  font-size: ${(props) => props.theme.typography.fontSizes.medium || "14px"};
  margin: 0 5px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:disabled {
    background: ${(props) => props.theme.colors.border || "#E0E0E0"};
    color: ${(props) => props.theme.colors.textPlaceholder || "#A0A0A0"};
    cursor: not-allowed;
  }

  &:hover:enabled {
    background: ${(props) => props.theme.colors.primary || "#0056b3"};
    color: ${(props) => props.theme.colors.textSecondary || "#FFFFFF"};
  }
`;

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
    if (!totalPages || totalPages < 1) return null;
  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PaginationButton>
      {[...Array(totalPages)].map((_, index) => (
        <PaginationButton
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </PaginationButton>
      ))}
      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;