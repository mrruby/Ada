import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Column = styled.div`
  display: flex;
  align-items: start;
`

export const SmallParagraph = styled.p`
  font-size: 0.6rem;
`

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.quinary};
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
`

export const TextArea = styled.textarea`
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.quinary};
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
`

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
  transition: 0.5s ease-out;
`

export const SubmitButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.quinary};
  border: none;
  padding: 1rem 2rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.5s ease-out;
  box-shadow: inset 0 0 0 0 ${({ theme }) => theme.colors.darkPink};

  &:hover {
    box-shadow: inset 300px 0 0 0 ${({ theme }) => theme.colors.darkPink};
  }
`
