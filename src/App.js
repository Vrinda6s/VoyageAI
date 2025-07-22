import { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({
    city: '',
    startDate: '',
    endDate: '',
    people: 1,
    preferences: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8000/api/hello/');
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      alert(data.message); // should say "Hello from Django!"
      console.log('Form submitted:', form);
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to fetch from Django backend!');
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Plan Your Trip</h2>

        <div>
          <label className="block mb-1 font-medium" htmlFor="city">
            Destination City
          </label>
          <input
            id="city"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Paris"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="startDate">
              Start Date
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              value={form.startDate}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="endDate">
              End Date
            </label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              value={form.endDate}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="people">
            Number of People
          </label>
          <input
            id="people"
            name="people"
            type="number"
            min="1"
            value={form.people}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="preferences">
            Preferences
          </label>
          <select
            id="preferences"
            name="preferences"
            value={form.preferences}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select…</option>
            <option value="nature">Nature</option>
            <option value="history">Historical</option>
            <option value="spiritual">Spiritual</option>
            <option value="food">Food & Culture</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
        >
          Generate Itinerary
        </button>
      </form>
    </div>
  );
}
