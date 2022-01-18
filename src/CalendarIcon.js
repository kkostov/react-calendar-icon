import React from 'react';
import styled from '@emotion/styled';
import themedConfig from './config.js';


const IconDiv = styled('div')(props => ({
  fontSize: '0.7em',
  backgroundColor: themedConfig(props.theme).backgroundColor,
  height: '8em',
  width: '8em',
  borderRadius: '0.7em',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const HeaderDiv = styled('div')(props => ({
  color: themedConfig(props.theme).textColor,
  backgroundColor: themedConfig(props.theme).primaryColor,
  width: '100%',
  textAlign: 'center',
  fontSize: '1.2em',
  lineHeight: '1.4em',
}));

const ValueDiv = styled('div')({
  letterSpacing: '-0.05em',
  fontSize: '2.6rem',
  marginRight: '0.15em',
  marginTop: '0.1em',
});

const FooterDiv = styled('div')(props => ({
  color: themedConfig(props.theme).textColor,
  backgroundColor: themedConfig(props.theme).primaryColor,
  width: '100%',
  textAlign: 'center',
  fontSize: '1.2em',
  lineHeight: '1.4em',
}));


const defaultOptions = {
  header: { weekday: 'long' },
  footer: { month: 'long' },
  value: { day: '2-digit' },
  locale: []
};

function formatDate(date, locale, formatOptions) {
  return date.toLocaleDateString(locale, formatOptions)
}

export default function CalendarIcon({ date, options = defaultOptions }) {
  return (
    <IconDiv>
      <HeaderDiv>
        {formatDate(date, options.locale, options.header)}
      </HeaderDiv>
      <ValueDiv>
        {formatDate(date, options.locale, options.value)}
      </ValueDiv>
      <FooterDiv>
        {formatDate(date, options.locale, options.footer)}
      </FooterDiv>
    </IconDiv>
  );
}

export { CalendarIcon }
