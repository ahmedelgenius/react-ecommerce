const BrandCard = ({ img }) => {
  return (
    <div className="bg-gray-200 w-48 h-48 rounded-full flex justify-center items-center">
      <img src={img} className="h-20" alt="" />
    </div>
  );
};

export default BrandCard;
