export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 md:p-12">
      <h1 className="flex items-center justify-center text-4xl font-bold mb-6">About Us</h1>
      <div className="flex items-center justify-center space-y-4 text-lg text-gray-700">
        <p>
          A resource library made for students thriving to find the right resources to study.
        </p>
      </div>
      <div className="flex items-center justify-center text-2xl font-poppins mt-6">
          <ul className="list-disc list-inside ml-4">
            <a href="https://www.github.com/bijanr/cs-archive" target="_blank"> Github</a>
          </ul>
        </div>
    </div>
  );
}