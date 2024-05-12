import styled from "styled-components";

const Message = styled.p`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

Message.defaultProps = {
  role: "paragraph",
};

export default Message;
