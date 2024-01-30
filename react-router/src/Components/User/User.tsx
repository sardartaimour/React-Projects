import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center">
      User: <span className="text-orange-600">{userId}</span>{" "}
    </div>
  );
}
