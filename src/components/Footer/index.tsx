import React from "react";
import * as Styled from "./styles";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <Styled.FooterContainer>
      <Styled.Content>
        <Styled.Columns>
          <Styled.Column>
            <h4>About</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </Styled.Column>

          <Styled.Column>
            <h4>Info</h4>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </Styled.Column>

          <Styled.SocialColumn>
            <h4>Follow us</h4>
            <Styled.SocialIcons>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </Styled.SocialIcons>
          </Styled.SocialColumn>
        </Styled.Columns>
      </Styled.Content>
      
      <Styled.BottomBar>
        <p>&copy; {new Date().getFullYear()} The Task App - All rights reserved.</p>
      </Styled.BottomBar>
    </Styled.FooterContainer>
  );
};
