import { books } from "@/data/books";

const Books: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        📚 Dr. Israr Ahmed’s Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                {book.title}
              </h2>
              <a
                href={book.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                📖 Read PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
