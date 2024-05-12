import styled from "styled-components";

const Wrapper = styled.div`
  font-size: var(--fs-lg);
  padding: var(--size-400) var(--size-700);
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  border-bottom: 2px solid white;
  margin-bottom: var(--size-400);

  h2 {
    font-size: var(--fs-xl);
    display: flex;
    align-items: center;
    gap: var(--size-400);
  }

  .logo {
    width: 3rem;
    background-color: white;
    height: 3rem;
    border-radius: 100vmax;
  }

  .circles {
    display: flex;
    gap: var(--size-200);
    align-items: center;
    div {
      width: var(--size-700);
      height: var(--size-700);
      border-radius: 100vmax;
      background-color: #cc3232;
      box-shadow: 2px 2px 10px 0 rgba(255, 255, 255, 0.25);
    }
    :nth-child(2) {
      background-color: #e7b416;
    }
    :nth-child(3) {
      background-color: #2dc937;
    }
  }
`;

export default Wrapper;
