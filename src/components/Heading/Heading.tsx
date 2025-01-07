const Heading = ({
    heading,
    className,
  }: {
    heading?: string;
    className?: string;
  }) => {
    return (
      <h2 className={`text-3xl font-medium text-primeColor pb-6 ${className}`}>{heading}</h2>
    );
  };
  
  export default Heading;