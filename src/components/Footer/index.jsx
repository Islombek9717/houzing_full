import { Container, Content, Icon } from "./style";

export const Why = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Email /> Seoul, Gwangjin-gu, Neungdong-ro, 209 세종대학교
        </Content.Item>
        <Content.Item>
          {" "}
          <Icon.Phone /> 01024941167
        </Content.Item>
        <Content.Item>
          <Icon.Email /> sultonovislom9717@gmail.com
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Wide Renge Of Properties</Content.Title>

        <Content.Item> Uzbekistan</Content.Item>
        <Content.Item> South Korea</Content.Item>
        <Content.Item> USA</Content.Item>
        <Content.Item>NEPAL </Content.Item>
      </Content>
      <Content>
        <Content.Title>Financing Made Easy</Content.Title>

        <Content.Item>Frontend </Content.Item>
        <Content.Item>Backend </Content.Item>
        <Content.Item>Mobile </Content.Item>
        <Content.Item>Flutter </Content.Item>
        <Content.Item>Android </Content.Item>
      </Content>
      <Content>
        <Content.Title>See Neighborhoods</Content.Title>

        <Content.Item>t.me/pang_isso</Content.Item>
        <Content.Item>t.me/pang_isso</Content.Item>
        <Content.Item>instagram.com/pang_isso</Content.Item>
        <Content.Item>instagram.com/pang_isso</Content.Item>
      </Content>
    </Container>
  );
};

export default Why;
