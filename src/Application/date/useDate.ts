const useDate = () => {
  const shortDateFormat = (ISOdate: string) => {
    return new Intl.DateTimeFormat("es-ES", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(new Date(ISOdate));
  };

  return { shortDateFormat };
};

export default useDate;
