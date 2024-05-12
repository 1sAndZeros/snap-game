import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin: var(--size-700) 0;

  .placeholder {
    height: 310px;
    width: 226px;
    border: 1px solid white;
    border-radius: 0.75rem;
  }

  .card {
    height: 310px;
  }

  @media only screen and (max-width: 600px) {
    gap: 1.5rem;

    .card {
      height: 250px;
    }

    .placeholder {
      height: 245px;
      width: 180px;
      border-radius: 0.425rem;
    }
  }

  @media only screen and (max-width: 450px) {
    gap: 1rem;

    .card {
      height: 200px;
    }

    .placeholder {
      height: 195px;
      width: 145px;
      border-radius: 0.325rem;
    }
  }
`;

export default Wrapper;
