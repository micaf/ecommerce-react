import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

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
  animation: ${fadeIn} 0.3s ease-in-out; // Apply animation on render
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

  const getVisiblePages = () => {
    const maxVisible = 3;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <PaginationContainer>
      <PaginationButton onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        {"<<"}
      </PaginationButton>

      <PaginationButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        {"<"}
      </PaginationButton>

      {visiblePages.map((page) => (
        <PaginationButton
          key={page}
          onClick={() => onPageChange(page)}
          disabled={currentPage === page}
        >
          {page}
        </PaginationButton>
      ))}

      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </PaginationButton>

      <PaginationButton onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
        {">>"}
      </PaginationButton>
    </PaginationContainer>
  );
};
export default Pagination;
