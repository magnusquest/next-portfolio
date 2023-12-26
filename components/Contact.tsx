export default function Contact() {
  return (
    <div className="pb-10">
      <div className="flex justify-between items-center">
        <h1>Contact</h1>
      </div>
      <hr />
      <div id="contact" className="flex justify-evenly pt-5">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
