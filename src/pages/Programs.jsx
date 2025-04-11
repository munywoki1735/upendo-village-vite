export default function Programs() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Our Programs</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left text-gray-700 text-lg">
        <div>
          <h3 className="font-semibold text-green-600 mb-2">Health & Wellness</h3>
          <p>We provide integrated medical care, HIV prevention, home visits, and psychosocial counseling.</p>
        </div>
        <div>
          <h3 className="font-semibold text-green-600 mb-2">Education Support</h3>
          <p>We support orphaned and vulnerable children through scholarships, mentorship, and school materials.</p>
        </div>
        <div>
          <h3 className="font-semibold text-green-600 mb-2">Livelihood & Nutrition</h3>
          <p>Our programs include smart farming, food security, poultry, and dairy farming for families and caregivers.</p>
        </div>
        <div>
          <h3 className="font-semibold text-green-600 mb-2">Women's Empowerment</h3>
          <p>We equip women with income-generating skills and community-based projects to build resilience and independence.</p>
        </div>
      </div>
    </div>
  );
}