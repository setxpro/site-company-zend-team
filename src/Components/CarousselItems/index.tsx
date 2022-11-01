interface Props {
  item: {
    id: number;
    link: string;
    legend: string;
    getImage: string;
  };
}

const CarousselItems = ({ item }: Props) => {
  return (
    <div className="content">
      <img src={item.getImage} alt="avatar" />
      <a href={item.link} className="legend" target="_blank" rel="noreferrer">
        {item.legend}
      </a>
    </div>
  );
};

export default CarousselItems;
