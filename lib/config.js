export const DEFAULT_CONFIG = {
  calendarIcon: {
    textColor: 'white', // text color of the header and footer
    primaryColor: '#e85650', // used as background of the header and footer
    backgroundColor: '#fafafa',
    dateOptions: {
      header: { weekday: 'long' },
      footer: { month: 'long' },
      value: { day: '2-digit' },
      locale: []
    }
  }
}

export const themedConfig = ({ theme }) => {
  const config =
    !theme || !theme.calendarIcon
      ? {
        ...DEFAULT_CONFIG.calendarIcon
      }
      : {
        ...DEFAULT_CONFIG.calendarIcon,
        ...theme.calendarIcon
      }
  console.log(config)
  return config
}
