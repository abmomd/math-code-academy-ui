interface Props {
  programme: any;
}

export default function ProgrammeCard({ programme }: Props) {
  return (
    <div className="border rounded-xl p-6 bg-gray-900 text-white relative">
      {programme.popular && (
        <span className="absolute top-3 right-3 bg-green-500 text-black px-3 py-1 rounded-full text-sm">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-bold mb-2">{programme.title}</h3>

      <p className="text-sm mb-2">
        {programme.sessions} Sessions • {programme.duration}
      </p>

      <ul className="text-sm mb-4 space-y-1">
        {programme.features.map((f: string, i: number) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <p className="text-lg font-semibold mb-4">₹{programme.price}</p>

      <button className="w-full bg-blue-600 py-2 rounded-lg">
        Book Free Class
      </button>
    </div>
  );
}
