const MAX_TICKET_NUMBER = 5;

export const ReserveCountOptionElements: React.FC = () => {
  return (
    <>
      <option value="" disabled>
        - お取り置き枚数 -
      </option>
      {[...Array(MAX_TICKET_NUMBER)].map((_, index) => {
        const value = index + 1;
        return (
          <option key={value} value={`${value}枚`}>
            {`${value}枚`}
          </option>
        );
      })}
    </>
  );
};
