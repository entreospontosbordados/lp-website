export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Header Section
          </h1>
          <p className="text-sm text-gray-600">
            Esta é a seção do cabeçalho do site
          </p>
        </div>
      </div>
    </header>
  );
}