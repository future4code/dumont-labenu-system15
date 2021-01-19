module.exports = {
    formatStringDate(data: string) {
      var dia  = data.split("/")[0];
      var mes  = data.split("/")[1];
      var ano  = data.split("/")[2];
      return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
      // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
    },
    date(timestamp: Date) {
      const date = new Date(timestamp)
      const year = date.getUTCFullYear();
      const month = `0${date.getUTCMonth() + 1}`.slice(-2);
      const day = `0${date.getUTCDate()}`.slice(-2);
      return {
        day,
        month,
        year,
        iso: `${year}-${month}-${day}`,
        birthDay: `${day}/${month}`,
        format: `${day}/${month}/${year}`,
      };
    }
  } 