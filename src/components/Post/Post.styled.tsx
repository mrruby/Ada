import styled from "styled-components"

export const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 20%;
`

export const Image = styled.img`
  float: left;
  width: 100%;
  margin-bottom: 0;
  transition: all 0.5s ease 0s;
  &:hover {
    transform: scale(1.2);
  }
`

export const TagsText = styled.p`
  font-style: italic;
`

export const Container = styled.div<{ reverse: boolean }>`
  margin: 2rem 1rem;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 6rem;
  border-radius: 50%;
  ${(props) => props.reverse && "flex-direction: row-reverse;"};
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
    flex-direction: column-reverse;
    border-radius: 20%;
    padding: 2rem;
  }
`

export const Column = styled.div<{ reverse: boolean; isImage?: boolean }>`
  text-align: center;
  width: ${(props) => (props.isImage ? `40%` : `55%`)};

  ${(props) =>
    props.reverse
      ? `:last-child {
    margin-right: 5%;
  }`
      : `:first-child {
    margin-right: 5%;
  }};`}
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
    width: 100%;
  }
`

export const Title = styled.h2`
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
    margin-top: 2rem;
  }
`