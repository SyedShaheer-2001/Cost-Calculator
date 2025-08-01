'use client';

export default function AddCategoryForm({
  formData,
  handleChange,
  handleSubmit,
  successMessage 
}) {

  
  return (
    <div className="max-w-[550px] mx-auto mb-16 sm:mt-0 mt-16">
      <h2 className="text-[15px] sm:text-[20px]  mb-8">Add new category</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="category"
          placeholder="Required category*"
          required
          value={formData.category}
          onChange={handleChange}
          className="text-[15px] mb-6 border-b border-gray-300 bg-transparent py-2 px-1 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="name"
          placeholder="Your name*"
          required
          value={formData.name}
          onChange={handleChange}
          className="text-[15px] mb-6 border-b border-gray-300 bg-transparent py-2 px-1 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your business email for notification*"
          required
          value={formData.email}
          onChange={handleChange}
          className="text-[15px] mb-8 border-b border-gray-300 bg-transparent py-2 px-1 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />

         {/* ✅ Show message here */}
        {successMessage && (
          <div className="text-sm text-green-600 font-medium mb-4">
            {successMessage}
          </div>
        )}

        
        <div className="flex justify-end">
          <button
            type="submit"
            className="bgPink text-white rounded-full py-2 px-6 text-center text-md font-medium transition-colors cursor-pointer"
          >
            Send
          </button>
        </div>
        
      </form>
    </div>
  );
}
