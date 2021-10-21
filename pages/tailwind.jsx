/* eslint-disable react/no-unescaped-entities */
export default function Demo() {
  return (
    <div className="container  max-w-screen-lg mx-auto py-8">

      <h1 className="font-bold text-3xl text-gray-500 mb-8">TailWind</h1>

        <div className="rounded-t-xl o bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
          <p className="text-sm text-indigo-600">
            Items don't grow when there's extra space
          </p>
          <div className="mt-2 flex space-x-4">
            <div className="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
              Short
            </div>
            <div className="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
              Medium length
            </div>
          </div>

          <p className="mt-8 text-sm text-indigo-600">
            Items shrink if possible when needed
          </p>
          <div className="mt-2 flex space-x-4">
            <div className="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
              Short
            </div>
            <div className="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
              Medium length
            </div>
            <div className="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ad
              labore ipsam, aut rem quo repellat esse tempore id, quidem
            </div>
          </div>
        </div>
      
      </div>

  );
}
