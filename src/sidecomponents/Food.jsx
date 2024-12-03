

export default function Food({ image, title, description, price }) {
  return (
    <div className="flex flex-row w-full lg:w-full xl:w-[calc(50%-1rem)] p-4 items-center bg-secondbg">
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
        <span className="text-xl font-bold text-yellow-400">${price}</span>
      </div>
    </div>
  );
}
