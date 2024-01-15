export default function Contact() {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  return (
    <div className="pb-10">
      <div className="flex justify-between items-center">
        <h1>Contact</h1>
      </div>
      <hr />
      <div id="contact" className="flex justify-center pt-5">
        <form className="w-full max-w-lg">
          <div className="flex flex-col -mx-3 mb-6">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Name
            </label>
            <input
              className="bg-gray-900 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-nona"
              id="grid-name"
              type="text"
              placeholder="Jane Doe"
            />
            <label
              className="block uppercase tracking-wide text-wh900 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="bg-gray-900 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
              id="grid-email"
              type="email"
              placeholder="jane.doe@example.com"
            />
            <label
              className="block uppercase tracking-wide text-wh900 text-xs font-bold mb-2"
              htmlFor="grid-message"
            >
              Message
            </label>
            <textarea
              className="bg-gray-900 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
              id="grid-message"
              placeholder="Enter your message here"
            />
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
