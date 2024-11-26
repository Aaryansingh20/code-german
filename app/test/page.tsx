export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Welcome to MyKorse</h2>
          <p className="text-lg">
            Experience modern e-learning with style and functionality.
          </p>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Interactive Courses</h3>
            <p>Engage with dynamic and immersive learning modules.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
            <p>Learn from industry professionals and educators.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Certifications</h3>
            <p>Earn credentials to showcase your achievements.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
