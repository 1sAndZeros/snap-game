import Wrapper from "@/styles/Header";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => (
  <Wrapper>
    <h2 role="heading">
      {title}
      <img className="logo" src="/logo.svg" />
    </h2>
    <div className="circles">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </Wrapper>
);

export default Header;
