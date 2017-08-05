export const DEFAULT_CONFIG = {
  calendarIcon: {
    textColor: 'white', // text color of the header and footer
    primaryColor: '#e85650', // used as background of the header and footer
    backgroundColor: '#fafafa'
  }
}

export const themedConfig = theme => {
  const config =
    !theme || !theme.calendarIcon
      ? {
        ...DEFAULT_CONFIG.calendarIcon
      }
      : {
        ...DEFAULT_CONFIG.calendarIcon,
        ...theme.calendarIcon
      }
  return config
}
