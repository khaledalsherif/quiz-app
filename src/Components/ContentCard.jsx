function ContentCard({ header, text }) {
  return (
    <div className="bg-amber-200 rounded-2xl p-4">
      <h4 className="text-gray-800 font-bold ">{header}</h4>
      <p className="text-gray-700 p-2">{text}</p>
    </div>
  );
}

export default ContentCard;
