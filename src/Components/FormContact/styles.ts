import styled from "styled-components";

import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const FormeContactContent = styled.form`
  width: 50%;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormContent = styled.div`
  border: 1px solid #999;
  padding: 0.5rem 5px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 5px;
  font-size: 1rem;
  outline: none;
  border: none;
  background: transparent;
  color: #eee;
`;

export const TextAreaContent = styled.textarea`
  resize: none;
  width: 100%;
  outline: none;

  padding: 5px;
  font-size: 1rem;
  color: #eee;
  background: transparent;
  border: 1px solid #999;
  border-radius: 0.5rem;
`;
export const Button = styled.button`
  padding: 0.8rem;
  width: 200px;
  border-radius: 0.5rem;
  border: none;
  background: #8257e6;
  color: #fff;
  cursor: pointer;
  font-size: 1.3rem;

  transition: 0.5s;

  &:hover {
    opacity: 0.83;
  }

  :disabled {
    background: gray;
  }
`;

export const UserIcon = styled(AiOutlineUser)`
  color: #999;
  font-size: 1.8rem;
`;
export const MailIcon = styled(AiOutlineMail)`
  color: #999;
  font-size: 1.8rem;
`;
export const WappIcon = styled(AiOutlineWhatsApp)`
  color: #999;
  font-size: 1.8rem;
`;
