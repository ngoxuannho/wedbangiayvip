import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, Col as ColBs } from "react-bootstrap";
import { accent } from "../../rootStyledComponents";
import Featured from "./FeaturedList";

const Title = styled.div`
  font-size: 1.15em;
  font-weight: 500;
  margin-bottom: 1em;
`;

const NavLink = styled(Link)`
  font-size: 0.97em;
  margin-bottom: 0.85em;
  opacity: 0.8;
  :hover {
    color: ${accent};
  }
`;

export const SubHeader = styled.div`
  position: absolute;
  font-family: "geometrix";
  padding: 16px 24px;
  width: 100%;
  left: 0;
  background-color: white;
  transform: translateX(0%) translateY(10%);
  max-height: 70vh;
  overflow: auto;
  padding: 1.5rem 1rem;
  top: 80%;
  opacity: 0;
  pointer-events: none;
  :hover {
    transform: translateX(0%) translateY(-0%);
    opacity: 1;
    pointer-events: all;
  }
`;
const Col = styled(ColBs)`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default ({ className } : {className: any}) => {
  return (
    <SubHeader className={className}>
      <Row>
        <Featured className="mb-3" />
        <Col lg={8} className="brand">
          <Title>Popular Brand</Title>
          <Row>
            <Col sm={2}>
              <ul>
                <li>
                  <NavLink to={"shop/adidas"}>Adidas</NavLink>
                </li>
                <li>
                  <NavLink to={"shop/nike"}>Nike</NavLink>
                </li>
                <li>
                  <NavLink to={"shop/converse"}>Converse</NavLink>
                </li>
              </ul>
            </Col>
            <Col sm={2} lg={4}>
              <ul>
                <li>
                  <NavLink to={"shop/drmartin"}>Dr.Martin</NavLink>
                </li>
                <li>
                  <NavLink to={"shop/tinhsau"}>Tinh Sau</NavLink>
                </li>
                <li>
                  <NavLink to={"shop/kobiet"}>Khong biet</NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </SubHeader>
  );
};