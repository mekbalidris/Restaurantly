

export default function Food({ image, title, description, price }) {
  return (
    <div className="flex flex-row w-full pt-4 pb-4 pr-[1rem] bg-secondbg">
      <img 
        src={image} 
        alt={title} 
        className="h-24 w-24 object-cover mr-4" 
      />

      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>

      <div className="text-right">
        <span className="text-xl font-semibold text-yellow-400">${price}</span>
      </div>
    </div>
  );
}
