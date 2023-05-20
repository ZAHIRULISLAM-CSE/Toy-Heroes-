import React from 'react';

const ToyComparison = () => {
  return (
    <section className="bg-gray-100 mt-20 py-8">
      <div className="w-[85%] mx-auto px-4">
        <h2 className="text-3xl text-center mb-16 font-bold">Best Sold Toy Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-200 border-b border-gray-300 text-left">Toy</th>
                <th className="py-4 px-6 bg-gray-200 border-b border-gray-300 text-left">Category</th>
                <th className="py-4 px-6 bg-gray-200 border-b border-gray-300 text-left">Price</th>
                <th className="py-4 px-6 bg-gray-200 border-b border-gray-300 text-left">Features</th>
                <th className="py-4 px-6 bg-gray-200 border-b border-gray-300 text-left">Rating</th>
                <th className="py-4 px-6 bg-gray-200 border-b border-gray-300 text-left">Image</th>
              </tr>
            </thead>
            <tbody>
              {/* Individual toy rows */}
              <tr className='text-lg text-gray-700 font-semibold'>
                <td className="py-4 px-6 border-b border-gray-300">1.Spider-Man Marvel Legends Series</td>
                <td className="py-4 px-6 border-b border-gray-300">Avengers</td>
                <td className="py-4 px-6 border-b border-gray-300">$120</td>
                <td className="py-4 px-6 border-b border-gray-300">
                  <ul className="list-disc pl-6">
                    <li>Realistic Spiderman Design</li>
                    <li>Articulated Joints</li>
                    <li>Web Accessories</li>
                  </ul>
                </td>
                <td className="py-4 px-6 border-b border-gray-300">4.5/5</td>
                <td className="py-4 px-6 border-b border-gray-300">
                  <img src="https://m.media-amazon.com/images/I/71nmQ5cc5JL._AC_UL320_.jpg" alt="Toy 1" className="w-20 h-20" />
                </td>
              </tr>
              <tr className='text-lg text-gray-700 font-semibold'>
                <td className="py-4 px-6 border-b border-gray-300">2.Return of The Jedi 6-Inch Action Figures</td>
                <td className="py-4 px-6 border-b border-gray-300">Star Wars</td>
                <td className="py-4 px-6 border-b border-gray-300">$160</td>
                <td className="py-4 px-6 border-b border-gray-300">
                  <ul className="list-disc pl-6">
                    <li>Highly Detailed Sculpting</li>
                    <li>Articulated Points of Articulation</li>
                    <li>Movie-Inspired Accessories</li>
                  </ul>
                </td>
                <td className="py-4 px-6 border-b border-gray-300">4.2/5</td>
                <td className="py-4 px-6 border-b border-gray-300">
                  <img src="https://m.media-amazon.com/images/I/71FdcmU7TFL._AC_UL320_.jpg" alt="Toy 2" className="w-20 h-20" />
                </td>
              </tr>
              <tr className='text-lg text-gray-700 font-semibold'>
                <td className="py-4 px-6 border-b border-gray-300">3.Transformers Toys Legacy Evolution Miner Megatron</td>
                <td className="py-4 px-6 border-b border-gray-300">Transformers</td>
                <td className="py-4 px-6 border-b border-gray-300">$200</td>
                <td className="py-4 px-6 border-b border-gray-300">
                  <ul className="list-disc pl-6">
                    <li>Dual Figures</li>
                    <li>Transforming Abilities</li>
                    <li>Exclusive Amazon Release</li>
                  </ul>
                </td>
                <td className="py-4 px-6 border-b border-gray-300">4.2/5</td>
                <td className="py-4 px-6 border-b border-gray-300">
                  <img src="https://m.media-amazon.com/images/I/71WLtFofSFL._AC_UL320_.jpg" alt="Toy 2" className="w-20 h-20" />
                </td>
              </tr>
              <tr className='text-lg text-gray-700 font-semibold'>
                <td className="py-4 px-6 border-b border-gray-300">4.Avengers Iron Man Action Figure, 12-Inch Toy</td>
                <td className="py-4 px-6 border-b border-gray-300">Avengers</td>
                <td className="py-4 px-6 border-b border-gray-300">$140</td>
                <td className="py-4 px-6 border-b border-gray-300">
                  <ul className="list-disc pl-6">
                    <li>Authentic Design</li>
                    <li>Multiple Points of Articulation</li>
                    <li>Light-Up Features and Sound Effects</li>
                  </ul>
                </td>
                <td className="py-4 px-6 border-b border-gray-300">4.7/5</td>
                <td className="py-4 px-6 border-b border-gray-300">
                  <img src="https://m.media-amazon.com/images/I/71NoTHfs59L._AC_UL320_.jpg" alt="Toy 2" className="w-20 h-20" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ToyComparison;
