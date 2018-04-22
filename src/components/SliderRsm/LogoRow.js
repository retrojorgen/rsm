import React, { Component } from 'react';
import styled from 'styled-components';
import neoTokyoLogo from '../../images/neo-tokyo-white.png';
import elkjopLogo from '../../images/elkjop_logo_white.png';
import cosmosLogo from '../../images/cosmos-logo.png';
import bkLogo from '../../images/bk-logo.png';
import xboxLogo from '../../images/xbox-logo.png';
import retroserviceLogo from '../../images/retroservice-logo.png';
import allegroLogo from '../../images/allegro-logo.png';
import playstationLogo from '../../images/playstation-logo.png';
import nerdeportalenLogo from '../../images/nerdeportalen-logo.png';
import legoLogo from '../../images/lego-logo.png';
import capcomLogo from '../../images/capcom-logo.png';

const SponsorRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    z-index: 3;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const SponsorItem = styled.a`
    display: inline-block;
    &:hover {
        img {
            opacity: 1;
        }
    }
    img {
        max-height: 30px;
        width: auto;
        margin: 4px 10px 0 10px;
        opacity: 1;
        @media (min-device-width: 1100px) {
            margin: 0 20px 0 20px;
            max-height: 48px;
            opacity: 1;
        }
    }
    @media (max-device-width: 1100px) {
        img {
            
        }
    }
`;

const Sponsors = styled.div `

`;




export default () => (
  <Sponsors>
      <SponsorRow>
          <SponsorItem href="http://www.elkjop.no" target="new_window"><img src={elkjopLogo} alt={elkjopLogo}/></SponsorItem>
          <SponsorItem href="http://www.neotokyo.no" target="new_window"><img src={neoTokyoLogo} alt={neoTokyoLogo}/></SponsorItem>
          <SponsorItem href="http://www.bk.no" target="new_window"><img src={bkLogo} alt={bkLogo}/></SponsorItem>
          <SponsorItem href="http://www.cosmosit.no" target="new_window"><img src={cosmosLogo} alt={cosmosLogo}/></SponsorItem>
          <SponsorItem href="http://www.nerdeportalen.no" target="new_window"><img src={nerdeportalenLogo} alt={nerdeportalenLogo}/></SponsorItem>
          <SponsorItem href="http://www.lego.no" target="new_window"><img src={legoLogo} alt={legoLogo}/></SponsorItem>
          <SponsorItem href="http://www.allegro.no" target="new_window"><img src={allegroLogo} alt={allegroLogo}/></SponsorItem>
          <SponsorItem href="http://www.xbox.no" target="new_window"><img src={xboxLogo} alt={xboxLogo}/></SponsorItem>
          <SponsorItem href="http://www.retroservice.no" target="new_window"><img src={retroserviceLogo} alt={retroserviceLogo}/></SponsorItem>
          <SponsorItem href="http://www.capcom.com" target="new_window"><img src={capcomLogo} alt={capcomLogo}/></SponsorItem>
          <SponsorItem href="http://www.playstation.no" target="new_window"><img src={playstationLogo} alt={playstationLogo}/></SponsorItem>
      </SponsorRow>
  </Sponsors>
)