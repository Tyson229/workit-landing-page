interface SecondaryButtonProp {
  title: string;
}

const SecondaryButton = ({ title }: SecondaryButtonProp) => {
  return (
    <button className="border-b-eucalyptus hover:text-eucalyptus border-b-2 font-sans text-base font-bold tracking-tight text-white transition-colors duration-100 ease-in">
      {title}
    </button>
  );
};

export default SecondaryButton;
