import Navbar from './components/Navbar'

export default function Home() {
  const countries = [
    'Pakistan',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Spain',
    'Italy',
    'Japan',
    'China',
    'Brazil',
    'Mexico',
    'India',
    'South Korea',
    'Russia',
    'Argentina',
    'South Africa',
    'Egypt',
    'Saudi Arabia',
    'United States',
    'Nigeria',
    'Indonesia',
    'Turkey',
    'Greece',
    'Sweden',
    'Norway',
    'Denmark',
    'Finland',
    'Netherlands',
    'Belgium',
    'Switzerland',
    'Austria',
    'Hungary',
    'Poland',
    'Czech Republic',
    'Chile',
    'Peru',
    'Colombia',
    'Canada',
    'New Zealand',
    'Thailand',
    'Malaysia',
    'Singapore',
    'Vietnam',
    'Philippines',
    'Iran',
    'Iraq',
    'Israel',
    'Jordan',
];


  return (
   <>
   <Navbar/>
          <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-3/4 lg:w-2/3 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create a New Listing</h2>
        <form className="mx-auto">
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block text-sm font-medium text-gray-600">
              Location
            </label>
            <select
              id="location"
              name="location"
              className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="" disabled>Select location</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter description"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-500 text-white py-3 w-[75%] px-6 rounded-lg hover:bg-purple-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>  
   </>
  )
}
